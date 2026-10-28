Chapter 2 [https://mml-book.github.io/book/mml-book.pdf]

### Systems of Linear Equations

A **system of linear equations** consists of $m$ simultaneous linear equations in $n$ unknowns.

General Form

$$
\begin{aligned}
a_{11}x_1 + a_{12}x_2 + \cdots + a_{1n}x_n &= b_1 \\
a_{21}x_1 + a_{22}x_2 + \cdots + a_{2n}x_n &= b_2 \\
&\vdots \\
a_{m1}x_1 + a_{m2}x_2 + \cdots + a_{mn}x_n &= b_m
\end{aligned}
$$

Where:
- $a_{ij}\in\mathbb{R}$ are the coefficients.
- $x_j$ are the unknown variables.
- $b_i\in\mathbb{R}$ are the constants.
- $m$ is the number of equations and $n$ is the number of unknowns.

In matrix notation, the system is written as:

$$  
\boxed{Ax=b}  
$$

with $A\in\mathbb{R}^{m\times n}$, $x\in\mathbb{R}^n$, and $b\in\mathbb{R}^m$.

A **solution** is a vector $x\in\mathbb{R}^n$ that satisfies every equation simultaneously.

$$  
S={x\in\mathbb{R}^n\mid Ax=b}  
$$

A system of linear equations over $\mathbb{R}$ has exactly one of three possible outcomes:
1. **No solution (inconsistent):** No vector satisfies all equations.
2. **Unique solution:** Exactly one vector satisfies all equations.
3. **Infinitely many solutions:** The system is consistent but contains free variables.

>A consistent linear system cannot have exactly two or any other finite number greater than one of distinct solutions.

Geometrically, it means finding the common intersection of the corresponding lines, planes, or hyperplanes.
 
Each nontrivial linear equation represents a geometric constraint:
- **In $\mathbb{R}^2$:** A line.

| Geometric configuration         | Solution                  |
| ------------------------------- | ------------------------- |
| Two nonparallel lines intersect | Unique solution           |
| Two distinct parallel lines     | No solution               |
| Two coincident lines            | Infinitely many solutions |

## Matrices

#### Matrix Inverse
For a square matrix $A\in\mathbb{R}^{n\times n}$, the **inverse** $A^{-1}$ is uniquely defined, when it exists, by:

$$  
\boxed{AA^{-1}=A^{-1}A=I_n}  
$$

- **Invertible (nonsingular):** The inverse exists.
- **Singular:** The inverse does not exist.


Consider a square matrix $A\in\mathbb{R}^{2\times2}$:

$$
A :=
\begin{bmatrix}
a_{11} & a_{12} \\
a_{21} & a_{22}
\end{bmatrix}
$$

Define an auxiliary matrix $A'$ (interchanging the diagonal elements and negating the off-diagonal elements)

$$
A' :=
\begin{bmatrix}
a_{22} & -a_{12} \\
-a_{21} & a_{11}
\end{bmatrix}
$$

$$
AA' =
\begin{bmatrix}
a_{11} & a_{12} \\
a_{21} & a_{22}
\end{bmatrix}
\begin{bmatrix}
a_{22} & -a_{12} \\
-a_{21} & a_{11}
\end{bmatrix}
$$

$$
AA' =
\begin{bmatrix}
a_{11}a_{22}-a_{12}a_{21} & 0 \\
0 & a_{11}a_{22}-a_{12}a_{21}
\end{bmatrix}
$$


$$
\boxed{AA'=(a_{11}a_{22}-a_{12}a_{21})I}
$$
$$
\Delta=a_{11}a_{22}-a_{12}a_{21}
$$
$$
AA'=\Delta I
$$

If $\Delta\neq0$

$$
A\left(\frac{1}{\Delta}A'\right)=I
$$

$$
\boxed{
A^{-1}=
\frac{1}{a_{11}a_{22}-a_{12}a_{21}}
\begin{bmatrix}
a_{22} & -a_{12} \\
-a_{21} & a_{11}
\end{bmatrix}
}
$$

The inverse exists if and only if

$$
\boxed{a_{11}a_{22}-a_{12}a_{21}\neq0}
$$

>$a_{11}a_{22}-a_{12}a_{21}$ is the **determinant** of $A$:

$$
\det(A)=a_{11}a_{22}-a_{12}a_{21}
$$

Multiplying $A$ by the auxiliary matrix $A'$ produces a scalar multiple of the identity matrix:

$$
AA'=\det(A)I
$$

Matrix multiplication is **generally noncommutative**, even when both matrices are square and have identical dimensions.

$$
AB \neq BA
$$

**Example:**

$$
A=\begin{bmatrix}
1 & 2 \\
3 & 4
\end{bmatrix},
\qquad
B=\begin{bmatrix}
2 & 0 \\
1 & 3
\end{bmatrix}
$$

$$
AB=\begin{bmatrix}
4 & 6 \\
10 & 12
\end{bmatrix}
\neq
BA=\begin{bmatrix}
2 & 4 \\
10 & 14
\end{bmatrix}
$$

An inverse is a special case where both orders give the identity matrix.

---
#### Matrix Transpose

For $A\in\mathbb{R}^{m\times n}$, the **transpose** $A^\top\in\mathbb{R}^{n\times m}$ is defined by:

$$  
\boxed{(A^\top)_{ij}=A_{ji}}  
$$

---
#### Properties 

$$
(AB)^{-1}=B^{-1}A^{-1}
$$

In general:

$$
(A+B)^{-1}\neq A^{-1}+B^{-1}
$$
$$
\begin{aligned}
(AB)^\top &= B^\top A^\top \\
(A+B)^\top &= A^\top+B^\top \\
(A^{-1})^\top &= (A^\top)^{-1}
\end{aligned}
$$

Both inversion and transposition reverse the order of matrix multiplication.
#### Symmetric Matrices

A square matrix $A\in\mathbb{R}^{n\times n}$ is **symmetric** if:

$$
\boxed{A=A^\top}
$$
- The sum of symmetric matrices is symmetric.
- The product of symmetric matrices is not necessarily symmetric.
- The inverse of an invertible symmetric matrix is symmetric.

---
A system of $m$ linear equations with $n$ unknowns can be represented compactly as:

$$
\boxed{Ax=b}
$$

where:

- $A\in\mathbb{R}^{m\times n}$ is the **coefficient matrix**.
- $x\in\mathbb{R}^n$ is the vector of unknowns.
- $b\in\mathbb{R}^m$ is the right-hand-side vector.

### Elementary Transformations

**Elementary transformations** are operations that simplify a system of linear equations while preserving its solution set.

#### Elementary Row Operations

For a system $Ax=b$, the three permitted operations are:

1. **Row interchange:** Swap two rows.   $$
   R_i \leftrightarrow R_j
   $$
2. **Row scaling:** Multiply a row by a nonzero scalar $\lambda$. $$
   R_i \leftarrow \lambda R_i,\qquad \lambda\neq0
   $$
3. **Row replacement:** Add a multiple of one row to another.$$
   R_i \leftarrow R_i+\lambda R_j,\qquad i\neq j
   $$
All operations must be applied to the entire equation, including its right-hand side.
#### Augmented Matrix

The system $Ax=b$ can be represented by its **augmented matrix**:

$$
[A\mid b]
$$

The vertical line separates the coefficient matrix $A$ from the right-hand side $b$.

Elementary row operations transform this matrix into a simpler, equivalent system.

#### Row-Echelon Form (REF)

A matrix is in **row-echelon form** if:

1. All zero rows appear at the bottom.
2. The first nonzero entry of each nonzero row, called its **pivot**, lies strictly to the right of the pivot in the preceding row.

This produces a staircase structure, with zeros below every pivot.

Variables corresponding to **pivot** columns are **basic variables**. The remaining variables are **free variables**.

#### Reduced Row-Echelon Form (RREF)
A matrix is in **reduced row-echelon form** if:
1. It satisfies all REF conditions.
2. Every pivot equals $1$.
3. Every pivot is the only nonzero entry in its column.

RREF allows basic variables to be expressed directly in terms of free variables.

#### Gaussian Elimination

Gaussian elimination is an algorithm that performs elementary transformations to bring a system of linear equations into reduced row-echelon form

1. Select a nonzero pivot, swapping rows if necessary.
2. Eliminate entries below the pivot.
3. Continue through the remaining columns to obtain REF.
4. Use back-substitution to solve the system.

Continuing the elimination above each pivot and normalizing pivots produces RREF (Gauss–Jordan elimination).

Example 

$$
\left[
\begin{array}{ccccc|c}
-2 & 4 & -2 & -1 & 4 & -3 \\
4 & -8 & 3 & -3 & 1 & 2 \\
1 & -2 & 1 & -1 & 1 & 0 \\
1 & -2 & 0 & -3 & 4 & a
\end{array}
\right]
$$

Applying elementary row operations gives the row-echelon form:

$$
\left[
\begin{array}{ccccc|c}
1 & -2 & 1 & -1 & 1 & 0 \\
0 & 0 & 1 & -1 & 3 & -2 \\
0 & 0 & 0 & 1 & -2 & 1 \\
0 & 0 & 0 & 0 & 0 & a+1
\end{array}
\right]
$$

Here the system is consistent **if and only if**:

$$
\boxed{a=-1}
$$

The pivot variables are $x_1,x_3,x_4$, while $x_2,x_5$ are free variables.


From REF, the system becomes:

$$
\begin{aligned}
x_1-2x_2+x_3-x_4+x_5 &= 0 \\
x_3-x_4+3x_5 &= -2 \\
x_4-2x_5 &= 1
\end{aligned}
$$

The free variables are $x_2$ and $x_5$

$$
x_2=0,\qquad x_5=0
$$

$$
x_4=1
$$
$$
x_3-1+3(0)=-2 \implies x_3=-1
$$
$$
x_1-2(0)-1-1+0=0 \implies x_1=2
$$

Therefore, a **particular solution** is:

$$
x_p=
\begin{bmatrix}
2\\
0\\
-1\\
1\\
0
\end{bmatrix}
$$
For $a=-1$, the general solution is:

$$
x=
\begin{bmatrix}
2\\
0\\
-1\\
1\\
0
\end{bmatrix}
+
\lambda_1
\begin{bmatrix}
2\\
1\\
0\\
0\\
0
\end{bmatrix}
+
\lambda_2
\begin{bmatrix}
2\\
0\\
-1\\
2\\
1
\end{bmatrix}
$$

where $\lambda_1,\lambda_2\in\mathbb{R}$.

---
- Elementary row operations preserve the solution set.
- REF simplifies solving through back-substitution.
- RREF makes pivot and free variables easier to identify.
---
The Minus-1 Trick

The **Minus-1 Trick** is a method for finding a basis of the null space $\ker(A)$, i.e., all solutions to the homogeneous system:

$$
Ax=0
$$

1. Reduce $A$ to RREF and remove zero rows.
2. Identify the pivot and free columns.
3. Extend the matrix to an $n\times n$ matrix by inserting rows with $-1$ in the diagonal positions corresponding to free variables, and zeros elsewhere.
4. The columns containing $-1$ on the diagonal are basis vectors of $\ker(A)$.

Consider the matrix:

$$
A=
\begin{bmatrix}
1 & 3 & 0 & 0 & 3 \\
0 & 0 & 1 & 0 & 9 \\
0 & 0 & 0 & 1 & -4
\end{bmatrix}
$$

The **pivot columns** are $1,3,4$, and the **free columns** are $2,5$.

Extend $A$ to a $5\times5$ matrix by inserting rows containing $-1$ at the missing diagonal positions:

$$
\tilde{A}=
\begin{bmatrix}
1 & 3 & 0 & 0 & 3 \\
0 & -1 & 0 & 0 & 0 \\
0 & 0 & 1 & 0 & 9 \\
0 & 0 & 0 & 1 & -4 \\
0 & 0 & 0 & 0 & -1
\end{bmatrix}
$$

The second and fifth columns contain $-1$ on the diagonal. Reading these columns gives the null-space basis vectors:

$$
v_1=
\begin{bmatrix}
3\\
-1\\
0\\
0\\
0
\end{bmatrix},
\qquad
v_2=
\begin{bmatrix}
3\\
0\\
9\\
-4\\
-1
\end{bmatrix}
$$

**Why ?**

The second column of the original matrix satisfies:

$$
a_2=3a_1
$$
$$
3a_1-a_2=0
$$
This is exactly the linear combination represented by $v_1$
$$
Av_1=
\underbrace{
\begin{bmatrix}
|&|&|&|&|\\
a_1&a_2&a_3&a_4&a_5\\
|&|&|&|&|
\end{bmatrix}
}_{A}
\underbrace{
\begin{bmatrix}
3\\
-1\\
0\\
0\\
0
\end{bmatrix}
}_{v_1}
=3a_1-a_2
$$
 so $Av_1=0$.

---
#### General Solution

For a consistent system $Ax=b$, every solution is:

$$
\boxed{x=x_p+x_h}
$$

where $Ax_p=b$ is a **particular solution** and $Ax_h=0$ is a **homogeneous solution** ($x_h\in\ker(A)$).

Since $Av=0$ for any $v\in\ker(A)$:

$$
A(x_p+\lambda v)=Ax_p+\lambda Av=b
$$
>Adding any vector from the null space to a particular solution produces another valid solution.

---
#### Computing a Matrix Inverse Using Row Reduction

For an invertible square matrix $A$, augment it with the identity matrix and apply Gauss–Jordan elimination:

$$
\boxed{[A\mid I_n]\longrightarrow[I_n\mid A^{-1}]}
$$

If the left side cannot be reduced to $I_n$, the matrix is singular and has no inverse.

---
### Algorithms for Solving a System of Linear Equations

The linear system:

$$
Ax=b
$$

Different solution methods are appropriate depending on the dimensions, rank, and computational size of $A$.

#### 1. Inverse-Based Solution

If $A\in\mathbb{R}^{n\times n}$ is square and invertible, the unique solution is:

$$
\boxed{x=A^{-1}b}
$$

However, not every matrix is square or invertible.

#### 2. Moore–Penrose Pseudoinverse

For $A\in\mathbb{R}^{m\times n}$ with **linearly independent columns**, $A^\top A$ is invertible.

Multiplying $Ax=b$ by $A^\top$ gives:

$$
A^\top Ax=A^\top b
$$

Therefore:

$$
\boxed{x=(A^\top A)^{-1}A^\top b}
$$

In this case, the Moore–Penrose pseudoinverse is:

$$
\boxed{A^+=(A^\top A)^{-1}A^\top}
$$

Hence:

$$
x=A^+b
$$

- If the system is consistent, this gives its unique solution.
- If it is inconsistent, this gives the unique **least-squares solution**.
- The formula requires full column rank; the general pseudoinverse also exists for rank-deficient matrices.

**Numerical consideration:** Explicitly computing inverses or pseudoinverses is generally discouraged because of computational cost and numerical precision.

#### 3. Gaussian Elimination

Gaussian elimination solves linear systems through elementary row operations.

For a dense $n\times n$ system, its computational complexity scales approximately as:

$$
\boxed{O(n^3)}
$$

It is practical for many systems but can become expensive for extremely large matrices.

#### 4. Iterative Methods

Instead of solving the system directly, iterative methods construct a sequence of approximations:

$$
\boxed{x^{(k+1)}=Cx^{(k)}+d}
$$

where:

- $x^{(k)}$ is the approximation at iteration $k$.
- $C$ is an iteration matrix.
- $d$ is a constant vector.

The objective is convergence toward the exact solution $x^*$:

$$
\lim_{k\to\infty}x^{(k)}=x^*
$$

Convergence depends on the chosen method and properties of the system.

**Methods mentioned in MML:**

- **Stationary methods:** Richardson, Jacobi, Gauss–Seidel, successive over-relaxation (SOR).
- **Krylov subspace methods:** Conjugate gradients, GMRES, biconjugate gradients.

#### Key Insight

- **Direct methods:** Compute a solution through a finite sequence of algebraic operations.
- **Iterative methods:** Refine approximations toward a solution.
- **Pseudoinverse:** Provides a generalized approach when a conventional inverse cannot be used.

**Reference:** MML, Section 2.3.4, pp. 34–35, Equations (2.59)–(2.60).