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
### Python Data Model

