
Introduction

The Manifold Hypothesis
Even though a dataset may contain thousands of features, the underlying data-generating process may have only a small number of intrinsic degrees of freedom.
Consequently, the high-dimensional observations may lie on or near a low-dimensional manifold embedded in the high-dimensional ambient space.
The objective of dimensionality reduction is to discover a lower-dimensional representation that preserves the important underlying structure of the data.

**Principal Component Analysis (PCA)**
PCA is a linear dimensionality reduction technique that finds new directions in the data along which the variation is greatest. By projecting the data onto a smaller number of these directions, we can obtain a more compact representation.

For example, a dataset containing 100 tissue samples and 10,000 genes would have **100 rows and 10,000 columns**. Working with 10,000 features is difficult to visualize, and some genes may exhibit similar expression patterns. PCA helps by transforming the original features into a smaller set of new features called **principal components**.

Principal components tries to re-express the data as a sum of uncorrelated components.


Geometric Intuition Behind PCA : 



Given
- Input dataset with $N \in \mathbb{N}$ points:
$$  
    x^{(1)}, \ldots, x^{(N)} \in \mathbb{R}^M  
$$
- **No prior knowledge** about data needed (e.g., cluster labels)
- **$N$ observations of $M$ random variables**.

Objectives of PCA
- **Structure identification** in the data.
- Extraction of meaningful **features**.
- **Data reduction** to the most expressive information.


- PCA is a good tool for **data reduction** and **feature extraction**.
- Can be interpreted as **linear transformation** of input data to a feature space.

Computing PCA

1. Data Centering : Centering the Data at the Origin

- **Step 1: Compute the mean value**

$$  
\overline{X} = \frac{1}{N}\sum_{i=1}^{N}x^{(i)}  
$$

- **Step 2: Center the data**

$$  
y^{(i)} = x^{(i)} - \overline{X}, \quad i = 1,\ldots,N  
$$


- This shifts the entire dataset so that its mean is at the origin $(0,0)$.
- The relative distances and directions between data points remain unchanged.
- The centered dataset has zero mean.

2. Computing the Covariance Matrix

For $N$ centered data points $y^{(i)} \in \mathbb{R}^M$, the **covariance matrix** is:

$$  
C = \frac{1}{N}\sum_{i=1}^{N}y^{(i)}y^{(i)T}  
$$

*The unbiased sample covariance estimator instead uses $\frac{1}{N-1}$*

Where:

- $C \in \mathbb{R}^{M \times M}$ = Covariance matrix.
- $N$ = Number of observations.
- $M$ = Number of features.
- $y^{(i)}$ = Centered data vector.
- $y^{(i)}y^{(i)T}$ = **Dyadic (outer) product**.

Dyadic Product
Multiplying a column vector by its transpose produces a matrix:

$$
y^{(i)}y^{(i)T} =
\begin{pmatrix}
y_1^{(i)} \\
y_2^{(i)} \\
\vdots \\
y_M^{(i)}
\end{pmatrix}
\begin{pmatrix}
y_1^{(i)} & y_2^{(i)} & \cdots & y_M^{(i)}
\end{pmatrix}
$$

- Result: An $M \times M$ matrix.
- Each entry is the product of two feature values.

Individual Covariance Matrix Entries

For features $k$ and $l$:

$$  
C_{k,l} = \frac{1}{N}\sum_{i=1}^{N}y_k^{(i)}y_l^{(i)}  
$$

Since the data is **centered**, its mean is zero:

$$  
\overline{Y}_k = \overline{Y}_l = 0  
$$

$$  
C_{k,l} = \frac{1}{N}\sum_{i=1}^{N}(y_k^{(i)}-0)(y_l^{(i)}-0)  
$$

Equivalently:

$$  
C_{k,l} = \frac{1}{N}\sum_{i=1}^{N}(y_k^{(i)}-\overline{Y}_k)(y_l^{(i)}-\overline{Y}_l)  
$$

$$  
C_{k,l} = \operatorname{Cov}(y_k,y_l)  
$$


Properties of the Covariance Matrix

- Represents important **statistical information** about the data.
- Describes variance and linear relationships between features.
- **Real:** All entries are real numbers.
- **Square:** $C \in \mathbb{R}^{M \times M}$.
- **Symmetric:**

$$  
C^T = C  
$$

- **Positive semi-definite:**

$$  
v^TCv \geq 0 \quad \forall v \in \mathbb{R}^M  
$$

- All [[notes/Maths/Maths in AI/EigenValues|eigenvalues]] are non-negative.

3. Diagonalisation of C

Aim of PCA: Transform centered data from $M$ dimensions into $k$ dimensions:

$$  
y^{(i)} \in \mathbb{R}^M \rightarrow z^{(i)} \in \mathbb{R}^k  
$$

- Use **orthogonal vectors** as new coordinate axes.
- Align these vectors with the **directions of highest variance**.
- Ensure the transformed features are **uncorrelated**.

$$  
\operatorname{Cov}(z_j,z_l)=0 \quad \text{for } j\neq l  
$$

- Achieve this through **diagonalisation of the covariance matrix $C$**.

(Finite-dimensional) Spectral Theorem

Let $C \in \mathbb{R}^{M\times M}$ be a real, symmetric matrix.

Then there exists an orthogonal matrix $S$, such that:

$$
S^TCS =
\begin{pmatrix}
\lambda_1 & 0 & \cdots & 0 \\
0 & \lambda_2 & \cdots & 0 \\
\vdots & \vdots & \ddots & \vdots \\
0 & 0 & \cdots & \lambda_N
\end{pmatrix}
$$

- $\lambda_1,\ldots,\lambda_M \in \mathbb{R}$ are the **eigenvalues of $C$**.
- The columns of $S$ are **orthonormal eigenvectors of $C$**.


4. Solving the Eigenvalue Problem

We get the wanted **alternative data representation** by computing **eigenvalues** and respective **eigenvectors** of $C$.

Solve the eigenvalue problem:

$$  
\lambda v = Cv  
$$

A solution can be found by various methods:

- Roots of characteristic polynomial
- QR algorithm
- Jacobi eigenvalue algorithm
- Singular value decomposition 

We get
- $C$ positive semi-definite $\Rightarrow$ only non-negative eigenvalues.
- $\lambda_j$ = **data variance** along direction of eigenvector $v^j$.
- Eigenvectors form a new local coordinate system.

---
## Example

- Data is distributed within a hyperplane parallel to the plane $\operatorname{span}(e_1,e_2)$, data is a flat sheet of points inside 3D space.

	![[Pasted image 20261109003525.png]]
    → **No variance** in direction $e_3$ 

- Easy to recognize from eigenvalue $\lambda_3$, because $S^TCS$ leads to:

$$
D =
\begin{pmatrix}
\lambda_1 > 0 & 0 & 0 \\
0 & \lambda_2 > 0 & 0 \\
0 & 0 & \lambda_3 = 0
\end{pmatrix}
$$

- Selection of eigenvalues $\lambda_1,\lambda_2 > 0$ leads to **data reduction**.

---
Applying Principal Component Analysis

Define Transformation Matrix

$$  
T := (v^{(1)}, \ldots, v^{(k)}) \in \mathbb{R}^{M \times k}  
$$

For which $v^{(1)}, \ldots, v^{(k)}$ are the respective eigenvectors of the $1 \leq k \leq M$ **largest eigenvalues**.


- Transform the data:
$$  
z^{(i)} := T^T y^{(i)} = T^T(x^{(i)} - \overline{X}) \quad \text{for } i = 1,\ldots,N  
$$
- $z^{(i)} \in \mathbb{R}^k$ contains the most relevant information (**features**) of the input data.
- The components $z_j^{(i)}, \ j = 1,\ldots,k$ are called **principal components**.
- If $T$ is **quadratic** ($k = M$) $\Rightarrow$ PCA is simply a **rotation** in $\mathbb{R}^M$.

The principal components of the input data are typically used as features in **classification** or **clustering** tasks.

---
# Summary of PCA

For given input data $x^{(1)}, \ldots, x^{(N)} \in \mathbb{R}^M$, the PCA can be computed as:

1. Compute mean value of data:
    

$$  
\overline{X} = \sum_{i=1}^{N} x^{(i)}  
$$

2. Center data via:
    

$$  
y^{(i)} = x^{(i)} - \overline{X}  
$$

3. Compute covariance matrix:
    

$$  
C = \frac{1}{N}\sum_{i=1}^{N}y^{(i)}y^{(i)T}  
$$

4. Determine the $M$ eigenvalues and eigenvectors of $C$ numerically.
    
5. Select $1 \leq k \leq M$ respective eigenvectors $v^{(1)}, \ldots, v^{(k)}$ of the $k$ largest non-vanishing eigenvalues.
    
6. Assemble selected eigenvectors $v^{(1)}, \ldots, v^{(k)}$ columnwise to matrix:
    
$$  
T \in \mathbb{R}^{M \times k}  
$$

4. Compute principal components for each input point $x^{(i)} \in \mathbb{R}^M$ via:

$$  
T^T y^{(i)} = z^{(i)} \in \mathbb{R}^k  
$$


- PCA finds an orthonormal basis to maximize the variance of the projected data
- The basis vectors and eigenvalues can provide insight about principal axes of variation in your data

---
# Data Reconstruction

Reconstructing the input data from its principal components is (partially) possible via:

$$  
Tz^{(i)} = \tilde{y}^{(i)} \in \mathbb{R}^M, \quad \text{for } i=1,\ldots,N  
$$

It is clear that:

$$  
\tilde{y}^{(i)} = y^{(i)} \iff \lambda_j = 0 \quad \text{for } k < j \leq M  
$$

**Otherwise: Loss of information**

Problems with PCA
- Computational complexity mainly depends on dimension $M$ of data space.
- PCA is restricted to **linear features**.
- Computational complexity is $O(M^3) + O(NM^2)$.
    - $O(M^3)$ → Eigenproblem.
    - $O(NM^2)$ → Covariance matrix.
    - Numerically expensive for large $M$ (dimension of data space).
- Amount of principal components (and hence **possible features**) is bounded by $M$. 
	For 
$$ 
x \in \mathbb{R}^2 \Rightarrow \text{max two principal components}  
$$

---
