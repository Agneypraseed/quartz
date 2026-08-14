**CPython**
Python is a programming language defined by rules. CPython is software that implements those rules and runs Python programs. CPython is primarily written in **C**, with some Python code included in the project.

CPython is the standard and most widely used implementation of Python. Other Python implementations exists such as **PyPy** which uses a JIT compiler.

CPython contains both the bytecode compiler and the bytecode interpreter.

---
An **interpreter** executes a program using another program called an interpreter or runtime, rather than first producing a standalone native executable.  In effect, the interpreter is a layer of logic between your code and the computer hardware on your machine

```
python program.py
```

Here, the `python` program is the Python interpreter/runtime. (Use python.exe to execute the code inside program.py)

When a Python program runs, the standard Python implementation, **CPython**, normally performs two main steps:

1. Python source code is **compiled into bytecode**.
2. The **Python Virtual Machine (PVM)** executes that bytecode.

The execution process is approximately:

```
Python source code (.py)
        ↓
CPython compiler
        ↓
Python bytecode
        ↓
Python Virtual Machine
        ↓
Program output
```

The compiler translates Python source code into Python bytecode. The interpreter reads those bytecode instructions one by one and performs them.

Python Virtual Machine : It reads Python bytecode and performs the corresponding operations.
The Python Virtual Machine is part of the Python interpreter. 

|                | Compiled to         | Execution                |
| -------------- | ------------------- | ------------------------ |
| C++            | Native machine code | CPU directly             |
| Java           | Java bytecode       | JVM                      |
| Python/CPython | Python bytecode     | Python VM inside CPython |
Python starts executing statements at the top level of the file, from top to bottom. C++ requires a formally defined entry function. Python treats the module’s top-level code as its entry point.

---
### Bytecode
A lower-level, platform-independent set of instructions generated from Python source code.
Bytecode is **not machine code**. The CPU cannot execute it directly.

Compilation is simply a translation step, and bytecode is a lower-level, platform-independent representation of your source code.

**Bytecode is also usually stored as binary numbers**, but it is not the native instruction language of the physical CPU.
It is the instruction language of a **virtual machine**.

```
print("Hello")
      ↓
Python bytecode such as LOAD_NAME, LOAD_CONST, CALL
```

For Java:
```
Java source
    ↓ javac
Java bytecode
    ↓ JVM
Execution
```

In Java bytecode is stored in `.class` files.

If the Python program has write access on your machine, it will save the bytecode of your programs in files that end with a _.pyc_ extension (_.pyc_ means _.py_ source, compiled). 

Python saves its bytecode files in a subdirectory named ___pycache___ located in the directory where your source files reside, and in files whose names identify the Python version that created them (e.g., _script0.cpython-312.pyc_ for 3.12). The ___pycache___ subdirectory avoids clutter, and the naming convention for bytecode files prevents different Python versions installed on the same computer from overwriting each other’s saved bytecode.

Bytecode is an _import_ optimization. Bytecode is saved in _.pyc_ files only for files that are _imported_, not for the top-level files of a program that are only run as scripts

If you run **one Python file directly**, like:

```
python hello.py
```

then `hello.py` is the **topmost file**  and Python usually **does** **not** create:

```
hello.pyc
```

for that main file.

For imported modules, CPython may also save cached bytecode as a `.pyc` file, usually inside a `__pycache__` directory. 

Example : 

project/
├── main.py
├── test.py
└── __pycache__/
    └── test.cpython-313.pyc


`test.py`

```
def greet():
    print("Hello")
```

`main.py`

```
import test

test.greet()
```

When you run:

```
python main.py
```

CPython may create:

```
__pycache__/test.cpython-313.pyc
```

The next time `test` is imported, CPython can reuse this cached bytecode when it is still valid instead of recompiling the source.

 Both source code changes and differing Python versions will trigger a new bytecode file automatically.
 
---
You can inspect the bytecode with standard module called `dis` (disassembler)

`dis` : A module from the Python Standard Library that displays Python bytecode instructions.

dis.dis() **prints the Python bytecode instructions** created from Python code. They are instructions for CPython’s virtual machine, not direct CPU machine instructions.

```
import dis

def greet():
    print("Hello")

dis.dis(greet)

--- 
Output : 

3 0 RESUME 0

4 2 LOAD_GLOBAL 1 (NULL + print)

12 LOAD_CONST 1 ('Hello')

14 CALL 1

22 POP_TOP

24 RETURN_CONST 0 (None)
```

---
The Python Virtual Machine (PVM)

The PVM is just a big code loop that iterates through your bytecode instructions, one by one, to carry out their operations.

The PVM is the runtime engine in Python. It’s always present as part of the Python system, is the component that truly runs your scripts, and is really just the last step of the “Python interpreter.”

---

There is usually no build or “make” step in Python work: code runs immediately after it is written. 
There are exceptions to these rules (e.g., app builds for smartphones can take some time, and full compilers do exist

With Python you usually do this:

```
python test.py
```

You do **not** manually run a separate build step like:

```
gcc test.c -o test
```

But Python **still compiles internally**. There **is a compiler stage**, but that compiler produces **Python bytecode**, not native CPU machine code.

The flow is roughly:

```
Python source code (.py)
        ↓
parse source code
        ↓
compile to Python bytecode
        ↓
PVM executes bytecode
```

So when you run:

```
python test.py
```

Python is doing both:

```
compile + execute
```

for you automatically. 


Example : 
```python
for i in range(1000000):
    x = i + 1
```

Python does **not** re-read and re-parse the characters: 

```
"x = i + 1"
```

one million times. It first compiles that statement into bytecode, and then the PVM executes those bytecode instructions repeatedly.
That is why Python often feels like a purely interpreted language.

Some Python code may not run as fast as C or C++ code, the PVM loop, not the CPU chip, still must interpret the bytecode, and bytecode instructions require more work than CPU instructions. On the other hand, unlike in classic interpreters, there is still an internal compile step, Python does not need to reanalyze and reparse each source statement’s text repeatedly. 

The net effect is that pure Python code runs at speeds somewhere between those of a traditional compiled language and a traditional interpreted language.

---
>High-level means the language gives you abstractions far above CPU instructions and memory management.

Python is high-level because it hides many low-level machine details.

For example:
```
numbers = [10, 20, 30]
person = {"name": "Alice", "age": 25}
```
Python automatically manages:
- memory allocation
- object sizes
- dynamic arrays 
- type information

Python does not have a separate, ahead-of-execution phase like C/C++. All we really have in Python is runtime—there is no initial compile-time phase at all, and everything happens as the program is running. This even includes operations such as the creation of functions and classes and the linkage of modules. Such events often occur before execution in more static languages, but happen during execution in Python

---
Why Does Python Use Bytecode?

Every program must ultimately run as machine code on the host device’s CPU, but program code is just text written per a language’s rules. Traditional languages like C bridge this gap by constraining code to accommodate the CPU’s expectations and translating the code’s text to machine code ahead of time. This makes programs fast, but translation takes time, and the resulting languages are cumbersome to use.

Python lets you write simple things like:

```
x = [1, 2, 3]
x.append(4)
```

That single `append` operation may involve:

- looking up the object referenced by `x`
- checking its type
- finding the `append` method
- allocating or resizing memory
- updating internal list metadata
- handling reference counts
- checking for errors

So there is no simple:

```
one Python statement → one CPU instruction
```

mapping.

Python is much farther from hardware than a language like C.

Python instead defines an easy-to-use language that’s too far removed from machine code for a direct translation and uses the PVM intermediary to run your program’s bytecode on the CPU. This is a classic speed-versus-usability trade-off.

For example, conceptually:

```
Python bytecode says:
ADD two objects
        ↓
CPython interpreter receives that instruction
        ↓
figures out what kinds of objects they are
        ↓
performs the appropriate addition
        ↓
CPU executes all the low-level machine instructions needed
```

That extra machinery is one reason pure Python can be slower than C.

It is not simply:

```
Python → interpreted → slow
C      → compiled    → fast
```

Many of the alternative implementations do compile some Python code to machine code, and Python is quick enough for many roles even with its PVM model.

Examples include:
- **PyPy** — uses JIT compilation for portions of Python code
- **Numba** — can JIT-compile suitable numerical Python functions
- **Cython** — can translate Python-like code into C and then native machine code

And many common Python libraries already perform their heavy work in compiled native code.

For example:

```
import numpy as np

a = np.array(...)
b = np.array(...)

c = a @ b
```

Your Python code starts the operation, but the large matrix multiplication may actually run inside highly optimized compiled C/C++/Fortran libraries.



---
CPython itself is portable

**CPython** is written mainly in C. Its source code can be compiled for many operating systems and CPU architectures.

So different platforms have their own native CPython executable:

```
Windows x86-64 → python.exe compiled for Windows/x86-64
Linux x86-64   → python compiled for Linux/x86-64
macOS ARM      → python compiled for macOS/ARM
```

Your Python source can then remain the same:

```
print("Hello")
```

The platform-specific CPython implementation handles the differences underneath.

A C++ executable compiled for Windows/x86-64 generally cannot run directly on macOS/ARMBut the same Python source can often run on both:

```
program.py
   ├── Windows CPython
   ├── Linux CPython
   └── macOS CPython
```

---
Python is _dynamically typed_, not statically typed like languages that are normally compiled.  Python’s execution speed may not always be as fast as that of fully compiled and lower-level languages such as C and C++.

Python compile (i.e., translate) source code statements to an intermediate format known as _bytecode_ and then interpret the bytecode. Bytecode provides portability, as it is a platform-independent format. However, because Python is not commonly compiled all the way down to binary _machine code_ (e.g., instructions for an Intel or ARM chip in your PC or phone), some programs will run more slowly in Python than in a fully compiled language like C.

Python does more work during execution

Consider:

```
result = a + b
```

In Python, when this line runs, CPython may need to determine: 
So Python cannot always translate `a + b` into one fixed CPU addition instruction.

```
a = 10
b = 20
result = a + b       # integer addition

a = "Hello "
b = "world"
result = a + b       # string concatenation
```

The same `+` syntax can perform different operations depending on the objects present at runtime.

C knows the types during compilation

In C:

```
int a = 10;
int b = 20;
int result = a + b;
```

The compiler already knows:

```
a → int
b → int
result → int
```

It can generate a small sequence of native CPU instructions directly.

Conceptually:

```
load a
add b
store result
```

At runtime, it normally does not need to ask: “Is this an integer, string, list, or custom object?”

That decision was made during compilation.

Python is often fast enough because expensive operations such as file I/O, networking, GUI rendering, numerical computation, and built-in collection operations are frequently implemented in compiled native code. However, Python code does not automatically run at C speed; tight loops and object-heavy logic written directly in Python still incur Python runtime overhead. 

Python already includes modules for interacting with the operating system and common data formats, so you often do not need third-party packages. Python’s standard library comes with Portable Operating System Interface (_POSIX)_ bindings and support for all the usual OS tools, including environment variables, files, sockets, pipes, processes, threads, regular-expression pattern matching, command-line arguments, standard-stream interfaces, shell-command launchers, filename expansion, ZIP file utilities, and XML, JSON, and CSV parsers.

Python exposes many operating-system capabilities through modules such as:

```
import os
import pathlib
import subprocess
```

On Windows, Python provides similar functionality using Windows APIs where possible, so much of the same code remains portable.

---
Python can replace C++ or Fortran at the **application level**, even though native compiled code may still perform the numerical core.

Python often does not replace all of that compiled code internally. Instead, Python provides a convenient interface to it.

For example:

```
Python/NumPy API
      ↓
BLAS/LAPACK routines
      ↓
Compiled C or Fortran
```

BLAS and LAPACK are established libraries for operations such as:

- matrix multiplication;
- solving linear systems;
- eigenvalues;
- matrix decompositions.

So when you write:

```
result = a @ b
```

the underlying work may be performed by a highly optimized native mathematical library.

---
Python supports **multiple programming styles**:
- Procedural programming
- Object-oriented programming
- Functional programming : Python supports functional ideas, but it is not a purely functional language.

In Python, almost everything is an object:

```
x = 10
name = "Alice"
numbers = [1, 2, 3]
```

These are objects of different classes:

```
print(type(x))        # <class 'int'>
print(type(name))     # <class 'str'>
print(type(numbers))  # <class 'list'>
```

Even functions are objects:

```
def greet():
    print("Hello")

print(type(greet))    # <class 'function'>
```



---
Command line

`python3` is normally the Python 3 interpreter command on Linux/macOS.

`python` is commonly used on Windows, and it runs whichever Python executable is resolved for that command.

`py` is the Windows Python Launcher. Its job is to locate and launch an installed Python version.

Examples:

```bash
python test.py
python3 test.py
py test.py
py -3.12 test.py

#This shows all `python.exe` files Windows can find through command resolution/PATH.
where python

# To see the exact interpreter that actually started
python -c "import sys; print(sys.executable)"

```


