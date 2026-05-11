
Python Virtual Machine (PVM) : 
When you write code in a high-level programming language (like C++, Python), a compiler must translate that human-readable text into the raw binary instructions that a processor understands.
The compiler translates your code into an **Intermediate Representation (IR)**.
Unlike C++, which takes its IR and compiles it all the way down to the raw binary machine code that your physical hardware CPU understands, Python stops at bytecode. Instead of sending the bytecode to the hardware CPU, Python sends it to the **Python Virtual Machine (PVM)**. The PVM acts as a software-based CPU that reads and interprets that bytecode step-by-step on the fly.

Why _Python works in ML at scale_ ?
Python itself performs very limited runtime optimization and executes code through the CPython virtual machine. It does not perform aggressive ahead-of-time compilation or automatic vectorization. However, Python dominates machine learning because it serves as a high-level interface to highly optimized native libraries such as NumPy, PyTorch, and TensorFlow. These libraries offload computationally intensive operations to optimized C/C++ implementations and GPU kernels, allowing developers to write simple Python code while leveraging highly efficient backend execution.

ML Compilers & Execution Models
- **Imperative (Eager) Execution:** Imperative (or eager) execution is a computation model where operations are **executed immediately as they are written**, step by step. Exactly like in standard Python and is used by default in **PyTorch**. 
	- This is PyTorch's default and makes debugging intuitive: you can inspect tensors at any point, use normal Python control flow, and errors surface instantly where they occur.
- **Graph Execution** : Graph execution builds a **static computation graph first**, and only then executes it as a whole.
	 Conceptual model:
		`Input → [MatMul] → [ReLU] → [Softmax] → Output`	
	- The graph is a data structure, not running code. This lets the compiler see the _whole picture_ before executing anything, which unlocks powerful optimizations — fusing operations, eliminating redundant memory copies, scheduling work across devices efficiently.
	- TensorFlow 1.x used this heavily (PyTorch rebelled against TF1 by letting you write code that executed eagerly. It felt exactly like standard Python)
	- Still used in optimized modes like:
	    - TensorFlow graph mode
	    - PyTorch `torch.compile()` / JIT (partial graph capture)
- ![[Pasted image 20260508173656.png]]

Modern frameworks (PyTorch 2.0+, JAX, TensorFlow 2.x) gives you _both_:
- You write eager, Pythonic code
- The framework traces your code under the hood and compiles it into an optimized static graph at runtime

PyTorch 2.0 introduced a compiled mode:  `torch.compile()`
```python
import torch
model = torch.compile(model)
```

Under the hood, `torch.compile()` uses a stack of components — **TorchDynamo** captures the computation graph by tracing Python bytecode, **AOTAutograd** generates optimized backward pass graphs ahead of time, and **Inductor** (the default backend) lowers everything to optimized CUDA or CPU kernels.

#### Why Graph Compilation Matters
A compiler with a full graph can do things an eager runtime simply cannot:
- **Operator fusion** — merge a MatMul + bias + ReLU into a single kernel (A **kernel** is a program that runs on the GPU), avoiding intermediate memory writes. 
	- Without a compiler optimizing things, each operation runs independently:
		MatMul runs → **writes result to GPU memory**
		Bias add reads that result → does its thing → **writes result to GPU memory**
		ReLU reads that result → does its thing → **writes result to GPU memory**
		That's 3 round trips to memory. And on a GPU, **memory bandwidth is often the bottleneck**, not raw compute. The GPU is sitting there fast, but it keeps waiting for data to travel back and forth.
	- **With fusion:**
		The compiler looks at all three operations and says: _"these always run together, I can just combine them into one kernel."_
		Instead of 3 separate kernels doing 3 separate memory round trips, you get:
		One kernel that does MatMul → bias → ReLU entirely **inside the GPU's fast local registers**, and only writes the final result to memory once.
- **Memory planning** — reuse buffers intelligently across the graph
- **Hardware-specific lowering** — generate code tuned to specific GPU architectures (e.g., using Tensor Cores)
- **Constant folding / dead code elimination** — standard compiler optimizations applied to the compute graph

