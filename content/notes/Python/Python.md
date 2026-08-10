**CPython**
Python is a programming language defined by rules. CPython is software that implements those rules and runs Python programs. CPython is primarily written in **C**, with some Python code included in the project.

CPython is the standard and most widely used implementation of Python. Other Python implementations exists such as **PyPy** which uses a JIT compiler.

CPython contains both the bytecode compiler and the bytecode interpreter.

---
An **interpreter** executes a program using another program called an interpreter or runtime, rather than first producing a standalone native executable.

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
### Python Data Model

