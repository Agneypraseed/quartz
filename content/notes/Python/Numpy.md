Pure Python is convenient but relatively slow for large numerical loops.

Example:

```
values = [1, 2, 3, 4]

result = []
for value in values:
    result.append(value * 2)
```

Every iteration is handled by the Python runtime.

NumPy changes this model:

```
import numpy as np

values = np.array([1, 2, 3, 4])
result = values * 2
```

The multiplication still appears as one Python statement, but the actual loop is usually performed by compiled native code.

```
Python instruction
      ↓
NumPy native implementation
      ↓
Optimized C/Fortran routines
      ↓
CPU
```

That gives you:

- Python’s simpler syntax;
- performance closer to compiled numerical code;
- access to optimized mathematical libraries.

NumPy provides a high-performance multidimensional array called `ndarray`.

```
import numpy as np

matrix = np.array([
    [1, 2],
    [3, 4]
])

print(matrix.shape)   # (2, 2)
print(matrix.mean())  # 2.5
```

A NumPy array differs from a normal Python list.

```
values = [1, 2, 3]
```

A list stores references to Python objects. It may even contain mixed types:

```
values = [1, "hello", 3.5]
```


```
values = np.array([1, 2, 3], dtype=np.int64)
```

A NumPy array generally stores:

- one fixed data type;
- values in compact contiguous memory;
- metadata such as shape and data type.

```
Python list:
[address of object][address of object][address of object]

NumPy array:
[1][2][3]
```

Vectorization

NumPy lets you apply operations to an entire array:

```
result = values * 2
```

instead of manually looping:

```
result = []

for value in values:
    result.append(value * 2)
```
