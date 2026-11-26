
The data type of a variable storing a vector is sometimes important.

```python

s = 2
a = [3,4,5] # list
b = np.array(a) # np array
print(a*s) #  overloaded 
print(b*s) # element-wise multiplication

>> [ 3, 4, 5, 3, 4, 5 ]
>> [ 6 8 10 ]
```

Orientation in [[notes/Python/Numpy|NumPy]] is given by brackets: the outermost brackets group all of the numbers together into one object. Then, each additional set of brackets indicates a row

```python
asList  = [1,2,3]
asArray = np.array([1,2,3]) # 1D array
rowVec  = np.array([ [1,2,3] ]) # row
colVec  = np.array([ [1],[2],[3] ]) # column

# Shape 
asList: (3,)
asArray: (3,)
rowVec: (1, 3)
colVec: (3, 1)
```

---

Dimensionality : The number of numbers in the vector
Orientation : Whether the vector is in column or row orientation 

$$
\mathbf{a} =
\begin{bmatrix}
1\\
2\\
3
\end{bmatrix}
\quad (3 \times 1)
$$

$$
\mathbf{b} =
\begin{bmatrix}
4 & 5 & 6
\end{bmatrix}
\quad (1 \times 3)
$$

---

Two vectors can be added together only if they have the same dimensionality and the same orientation.

To add two vectors geometrically, place the vectors such that the tail of one vector is at the head of the other vector.

![[Pasted image 20261108172119.png|311]]

To Subtract vectors geometrically line up the two vectors such that their tails are at the same coordinate. The difference vector is the line that goes from the head of the “negative” vector to the head of the “positive” vector.

![[Pasted image 20261108172209.png|316]]

---

A _scalar_ is a number on its own, not embedded in a vector or matrix.
Adding a scalar to a vector is not formally defined in linear algebra, they are two separate kinds of mathematical objects and cannot be combined. 

Scalar multiplication changes the vector's magnitude by $|c|$.

Even when a negative scalar flips the vector, Scalars do not change the direction of the vector. The “rotated” vector still points along the same infinite line and thus the negative scalar does not change the direction. This line is called a one-dimensional subspace.

---
NumPy broadcasting
*Broadcasting is a NumPy feature, not a standard mathematical rule for vector addition.*

```python 
v = np.array([[1,2,3]]).T # col vector
w = np.array([[10,20]])   # row vector

v + w # addition with broadcasting
```

$$
\begin{aligned}
[1 \quad 1] + [10 \quad 20] \\
[2 \quad 2] + [10 \quad 20] \\
[3 \quad 3] + [10 \quad 20]
\end{aligned}
$$

```python


>> array([[11, 21],
          [12, 22],
          [13, 23]])

```


---
Vector Magnitude (Norm)

The magnitude (or Euclidean norm) of a vector is its length, measured from tail to head.

Computed using the standard Euclidean distance formula

$$  
|\mathbf{v}| = \sqrt{\sum_{i=1}^{n} v_i^2}  
$$

- **Dimensionality:** Number of elements in a vector.
- **Magnitude (norm):** Geometric length of a vector.

$\mathbf{v} = [3,4]$

- `len(v)` = 2
- `np.linalg.norm(v)` = 5

Creating a unit vector

$$  
\hat{\mathbf{v}} = \frac{1}{|\mathbf{v}|}\mathbf{v}  
$$

---
Vector Dot Product

The dot product is a single number (scalar) that provides information about the relationship between two vectors.

$$  
\mathbf{a}^T\mathbf{b} = \sum_{i=1}^{n} a_i b_i  
$$

- Both vectors must have the **same dimensionality**.
- Common notations: $\mathbf{a}^T\mathbf{b}$, $\mathbf{a}\cdot\mathbf{b}$, $\langle\mathbf{a},\mathbf{b}\rangle$



