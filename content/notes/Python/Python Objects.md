In Python, data takes the form of _objects_. Functions, classes, and modules are objects too.

```python
import os

x = 10         
s = "hello"    
L = [1, 2]     

def add():
    pass  

print(type(os))
print(type(x))
print(type(s))
print(type(L))
print(type(add))
  
<class 'module'>
<class 'int'>
<class 'str'>
<class 'list'>
<class 'function'>
```

Objects
│
├── Core/built-in object types
│   ├── int
│   ├── float
│   ├── str
│   ├── list
│   ├── tuple
│   ├── dict
│   └── set
│
└── Other object types
    ├── re.Pattern
    ├── socket.socket
    ├── datetime.datetime
    ├── pathlib.Path
    └── your own classes


Python variables don't fundamentally have fixed types. **Objects have types; variables are names that refer to objects.**

```python
#Variables don't have permanent types. Objects do

x = "hello"
x = [1, 2, 3]

Python did not transform the string object into a list it made `x` refer to a different object.


```


Numbers
- Python numbers are **objects**: `int`, `float`, `complex`, `Decimal`, etc.
- `int` has **arbitrary precision**: size is mainly limited by memory.
- Python 3.11+ limits huge `int ↔ decimal string` conversions to about **4,300 digits** for DoS protection.
```python
	  # Python can create this integer
	  x = 10 ** 5000
	  
	  print(x) 
	  #printing requires converting the huge integer into a decimal string first.
	  #ValueError: Exceeds the limit (4300 digits) for integer string conversion
	  
	  # To inspect the limit
	  import sys 
	  print(sys.get_int_max_str_digits())
	  
	  # To raise the limit
	  sys.set_int_max_str_digits(10_000)
```

- `float` uses **binary floating-point**, so values like `0.1` may not be stored exactly.
- Use `Decimal("0.1")` when exact decimal arithmetic matters.

```python
	import decimal from Decimal
	print(Decimal("0.1") + Decimal("0.2")) # 0.3
	print(0.1 + 0.2) # 0.30000000000000004
```

- `_` inside numeric literals is only for readability: `1_000_000 == 1000000`.
- Python is **dynamically typed**: names can refer to objects of different types.
- Python is **strongly typed**: operations must be valid for the object type.
- Operators are **polymorphic**: `+` means addition for numbers, concatenation for strings/lists.

Every object in Python is classified as either immutable (unchangeable) or not

| Immutable | Mutable              |
| --------- | -------------------- |
| `int`     | `list`               |
| `float`   | `dict`               |
| `complex` | `set`                |
| `str`     | `bytearray`          |
| `tuple`   | most class instances |


Strings 
- Are immutable in Python
- 


