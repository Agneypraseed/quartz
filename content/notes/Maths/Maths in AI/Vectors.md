The unit vector of $a$ is:

$$
\hat{a} = \frac{a}{\|a\|}
$$

---

The angle $\theta$ between two vectors $a$ and $b$ is found using the **dot product formula**:

$$
a \cdot b = \|a\| \, \|b\| \, \cos \theta.
$$

$$
\cos \theta = \frac{a \cdot b}{\|a\| \, \|b\|} 
\quad \Rightarrow \quad
\theta = \arccos \left( \frac{a \cdot b}{\|a\| \, \|b\|} \right).
$$


---

The projection of vector $a$ onto vector $b$ (denoted $\text{proj}_b(a)$) is given by:

$$
\text{proj}_b(a) = (a \cdot \hat{b}) \, \hat{b}
$$

$a \cdot \hat{b}$ is just a **scalar** (the component of $a$ along the direction of $b$).

Multiplying back by $\hat{b}$ makes it a **vector** in the direction of $b$.


$$
\text{proj}_b(a) = \frac{a \cdot b}{\|b\|^2} \, b.
$$

---
### Cross Product

### 1. Cross Product of Two Vectors: $\mathbf{a} \times \mathbf{b}$

The cross product is a vector operation that produces a vector perpendicular to both input vectors. This operation is **only defined for 3D vectors**.

The magnitude of the cross product is given by:

$$\|\mathbf{a} \times \mathbf{b}\| = \|\mathbf{a}\| \|\mathbf{b}\| \sin\theta$$

where $\theta$ is the angle between vectors $\mathbf{a}$ and $\mathbf{b}$.

The direction is determined by the **right-hand rule**: curl your fingers from $\mathbf{a}$ to $\mathbf{b}$, and your thumb points in the direction of $\mathbf{a} \times \mathbf{b}$.

#### Component Form Computation

If $\mathbf{a} = (a_1, a_2, a_3)$ and $\mathbf{b} = (b_1, b_2, b_3)$, then:

$$
\mathbf{a} \times \mathbf{b} = \begin{vmatrix}
\mathbf{i} & \mathbf{j} & \mathbf{k} \\
a_1 & a_2 & a_3 \\
b_1 & b_2 & b_3
\end{vmatrix}
$$

Expanding the determinant:

$$\mathbf{a} \times \mathbf{b} = (a_2b_3 - a_3b_2, \, a_3b_1 - a_1b_3, \, a_1b_2 - a_2b_1)$$

### Cross Product of Three Vectors: $\mathbf{a} \times (\mathbf{b} \times \mathbf{c})$

This operation is called the **vector triple product**.

### Important Properties

- **Non-associative**: $\mathbf{a} \times (\mathbf{b} \times \mathbf{c}) \neq (\mathbf{a} \times \mathbf{b}) \times \mathbf{c}$
- The result lies in the plane of $\mathbf{b}$ and $\mathbf{c}$, not perpendicular like a simple cross product

### BAC-CAB Rule

The vector triple product can be computed using the formula:

$$\mathbf{a} \times (\mathbf{b} \times \mathbf{c}) = (\mathbf{a} \cdot \mathbf{c})\mathbf{b} - (\mathbf{a} \cdot \mathbf{b})\mathbf{c}$$

This formula is commonly remembered as the "BAC-CAB rule" based on the arrangement of vectors in the final expression.

---
#### Area of Parallelogram Spanned by $\mathbf{a}$ and $\mathbf{b}$

$$\text{Area} = \|\mathbf{a} \times \mathbf{b}\| $$

- Equivalent dot-product form (no cross product needed):
$$
\|\mathbf{a}\times\mathbf{b}\| \;=\; \sqrt{\|\mathbf{a}\|^2\|\mathbf{b}\|^2 - (\mathbf{a}\cdot\mathbf{b})^2}.
$$

- Scalar triple product :
$$
\mathbf{a}\cdot(\mathbf{b}\times\mathbf{c}) \;=\;
\det\!\begin{bmatrix}
a_1 & b_1 & c_1\\
a_2 & b_2 & c_2\\
a_3 & b_3 & c_3
\end{bmatrix}.
$$

- The sign indicates the orientation of the vectors. A positive result signifies a right-handed system, while a negative result indicates a left-handed one.

#### Volume of Parallelepiped Spanned by $\mathbf{a}$, $\mathbf{b}$, $\mathbf{c}$

$$\text{Volume} = |\mathbf{a} \cdot (\mathbf{b} \times \mathbf{c})|$$

This is the **absolute value** of the **scalar triple product**.

-  If the scalar triple product of three non-zero vectors is zero, the vectors are coplanar

#### Equivalent Determinant Form

$$\text{Volume} = \left|\det\begin{bmatrix} a_1 & b_1 & c_1 \\ a_2 & b_2 & c_2 \\ a_3 & b_3 & c_3 \end{bmatrix}\right|$$

where the columns (or rows) are the vectors.

- The scalar triple product is cyclic: $\mathbf{a} \cdot (\mathbf{b} \times \mathbf{c}) = \mathbf{b} \cdot (\mathbf{c} \times \mathbf{a}) = \mathbf{c} \cdot (\mathbf{a} \times \mathbf{b})$

---
### Gram Matrix

Given vectors $v_1,\dots,v_k \in \mathbb{R}^n$, the Gram matrix $G \in \mathbb{R}^{k\times k}$ is
$$
G = \begin{bmatrix}
v_1\!\cdot\!v_1 & v_1\!\cdot\!v_2 & \cdots & v_1\!\cdot\!v_k\\
v_2\!\cdot\!v_1 & v_2\!\cdot\!v_2 & \cdots & v_2\!\cdot\!v_k\\
\vdots & \vdots & \ddots & \vdots\\
v_k\!\cdot\!v_1 & v_k\!\cdot\!v_2 & \cdots & v_k\!\cdot\!v_k
\end{bmatrix}.
$$
Matrix form: if $V=[\,v_1\ \cdots\ v_k\,]\in\mathbb{R}^{n\times k}$, then
$$
G = V^\top V.
$$

The squared $k$‑dimensional volume of the parallelepiped spanned by $v_1,\dots,v_k$ is
$$
\operatorname{Vol}_k^2(v_1,\dots,v_k) = \det(G).
$$
Equivalently,
$$
\operatorname{Vol}_k(v_1,\dots,v_k) = \sqrt{\det(G)}.
$$

#### Properties

1. **Symmetric**: $G^{\top} = G$ (since $\mathbf{v}_i \cdot \mathbf{v}_j = \mathbf{v}_j \cdot \mathbf{v}_i$)
2. **Positive semidefinite**: All eigenvalues are non-negative
3. **Rank**: $\text{rank}(G) = \text{rank}(V)$ = dimension of span of the vectors

$$\det(G) = \text{(k-dimensional volume)}^2$$

of the parallelepiped spanned by $\mathbf{v}_1, \ldots, \mathbf{v}_k$.

The Gram determinant formula works in **any dimension** and for **any number of vectors**, making it a powerful generalization of cross product-based volume formulas.

If $V = [\mathbf{v}_1 \mid \mathbf{v}_2 \mid \cdots \mid \mathbf{v}_k]$ is the $n \times k$ matrix with your vectors as columns, then the Gram matrix is:

$$G = V^{\top}V$$

So $G$ is $k \times k$.

$$\det(G) = \det(V^{\top}V)$$

- When $V$ is **square**: $\det(V^{\top}V) = (\det V)^2$
- When $V$ is **rectangular** ($n \times k$ with $n \geq k$): $\det(V^{\top}V)$ is still the square of the product of the singular values of $V$

Therefore:

$$\det(G) = (\text{volume}_k)^2$$

#### In 2D
For vectors $\mathbf{a}, \mathbf{b}$:

$$\det(G) = (\mathbf{a} \cdot \mathbf{a})(\mathbf{b} \cdot \mathbf{b}) - (\mathbf{a} \cdot \mathbf{b})^2$$

This simplifies to:
$$= \|\mathbf{a}\|^2 \|\mathbf{b}\|^2 - (\mathbf{a} \cdot \mathbf{b})^2 = \|\mathbf{a}\|^2 \|\mathbf{b}\|^2 (1 - \cos^2\theta)$$

$$= (\|\mathbf{a}\|\|\mathbf{b}\|\sin\theta)^2 = \text{(area)}^2$$

#### In 3D
  $$
  \det(G)=\bigl(v_1\cdot(v_2\times v_3)\bigr)^2
  =\bigl(\text{parallelepiped volume}\bigr)^2.
  $$

---

### General Line

Any line in 2D can be written as:

$$Ax + By + C = 0$$

### Normal Vector

The **normal vector** is simply:

$$\mathbf{n} = \langle A, B \rangle$$

because the coefficients $A, B$ are exactly the components perpendicular to the line.

Take any two distinct points on the line, $P_1=(x_1,y_1)$ and $P_2=(x_2,y_2)$, so
$$
Ax_1 + By_1 + C = 0, \qquad Ax_2 + By_2 + C = 0.
$$
The vector along the line from $P_1$ to $P_2$ is
$$
\mathbf{v} = \langle x_2 - x_1,\ y_2 - y_1\rangle.
$$
Compute the dot product with $\mathbf{n}=\langle A,B\rangle$:
$$
\mathbf{n}\cdot\mathbf{v} = A(x_2-x_1) + B(y_2-y_1).
$$
Subtracting the two line equations gives
$$
\big(Ax_2 + By_2 + C\big) - \big(Ax_1 + By_1 + C\big) = 0
\;\;\Longrightarrow\;\;
A(x_2-x_1) + B(y_2-y_1) = 0.
$$
Thus $\mathbf{n}\cdot\mathbf{v}=0$ for every direction vector $\mathbf{v}$ along the line, so $\mathbf{n}$ is perpendicular to the line.

#### The Gradient Explanation

This connects to a profound principle:

$$\nabla f = \langle A, B \rangle \text{ is } \perp \text{ to level curves of } f(x,y) = Ax + By + C$$

**Broader principle**: This generalizes beautifully to:
- 3D: The normal to plane $Ax + By + Cz + D = 0$ is $\langle A, B, C \rangle$
- n-D: The normal to hyperplane $\sum a_i x_i + c = 0$ is $\langle a_1, a_2, \ldots, a_n \rangle$

### Direction Vector

A **direction vector** is any vector perpendicular to $\mathbf{n}$. One easy choice:

$$\mathbf{d} = \langle -B, A \rangle$$

### Slope of a Line
For a line in slope–intercept form
$$
y = m x + c,
$$
the slope is $m = \tan\theta$, where $\theta$ is the angle the line makes with the $x$-axis.

Rewrite as:
$$-mx + y - c = 0$$

So $A = m$, $B = -1$.

- **Normal**: $\mathbf{n} = $ $\langle -m, 1 \rangle$
- **Direction**: $\mathbf{d} = \langle 1, m \rangle$ 

#### Angle Between Two Lines
For lines with slopes $m_1$ and $m_2$, the angle $\phi$ between them satisfies
$$
\tan \phi = \left|\frac{m_1 - m_2}{1 + m_1 m_2}\right|.
$$
If the lines are perpendicular, then $\phi = 90^\circ$, so $\tan \phi$ is undefined. This occurs exactly when the denominator is zero:
$$
1 + m_1 m_2 = 0 \quad \Longrightarrow \quad m_1 m_2 = -1.
$$

- Vertical line $x = a$ has undefined slope; a perpendicular line is horizontal $y = b$ (slope $0$).

---
### Planes 

The general form of a plane in 3D is:

$$Ax + By + Cz + D = 0$$

- Distance from point $(x_0, y_0, z_0)$ to plane:
  $$d = \frac{|Ax_0 + By_0 + Cz_0 + D|}{\sqrt{A^2 + B^2 + C^2}}$$

The vector

$$\mathbf{n} = \langle A, B, C \rangle$$

is **perpendicular to the plane**.

A **direction vector** is any vector **lying in the plane**.

Direction vectors lie in the plane and are therefore orthogonal to the normal:
$$
\mathbf{u}\cdot\mathbf{n}=0,\quad \mathbf{v}\cdot\mathbf{n}=0.
$$
Equivalently, solve the homogeneous equation
$$
Ax + By + Cz = 0
$$
to obtain two independent solutions; these give two independent direction vectors $\mathbf{u},\mathbf{v}$.

#### Point–normal and parametric forms
- Point–normal form (given a point $P_0=(x_0,y_0,z_0)$ on the plane):
  $$
  \mathbf{n}\cdot\big(\langle x,y,z\rangle - \langle x_0,y_0,z_0\rangle\big)=0.
  $$
- Parametric form (using two independent direction vectors $\mathbf{u},\mathbf{v}$):
  $$
  \mathbf{r}(s,t)=\mathbf{p}_0 + s\,\mathbf{u} + t\,\mathbf{v},\qquad s,t\in\mathbb{R},
  $$
  where $\mathbf{p}_0$ is any point on the plane.

- Projection of a point onto the plane

  With signed distance $d=\dfrac{Ax_0+By_0+Cz_0+D}{\sqrt{A^2+B^2+C^2}}$ and unit normal $\hat{\mathbf{n}}$,
  $$
  \mathrm{proj}_{\text{plane}}(x_0,y_0,z_0)
  = \langle x_0,y_0,z_0\rangle - d\,\hat{\mathbf{n}}.  
  $$

---
### Parametric Form Method for Line as Intersection of Two Planes (Point–direction form)

A line in 3D can be described **parametrically**:

$$\mathbf{r}(t) = \mathbf{P} + t\mathbf{d}$$

where:
- $\mathbf{P}$ is a point on the line
- $\mathbf{d}$ is a direction vector
- $t$ is a parameter

#### Example: 

Given the system:

$$
\begin{cases}
2x + 3y - 4z = -1 \\
x - 2y + z = 3
\end{cases}
$$

Pick one variable to be free. Common trick: let $z = t$.

Substituting $z = t$ into the equations:

$$2x + 3y - 4t = -1$$
$$x - 2y + t = 3$$

$$x = \frac{5}{7}t + 1, \quad y = \frac{6}{7}t - 1, \quad z = t$$

Write in Vector (Parametric) Form

$$\mathbf{r}(t) = (1, -1, 0) + t\left(\frac{5}{7}, \frac{6}{7}, 1\right)$$

$$\mathbf{r}(t) = (1, -1, 0) + s(5, 6, 7)$$

- **Point**: $(1, -1, 0)$ is obtained by setting $t = 0$
- **Direction vector**: $(5, 6, 7)$ comes from the coefficients of $t$
- Any point on the line = base point + scalar multiple of direction vector

#### Alternative: Direction Vector by Cross Product

The direction vector can also be found directly:
$$\mathbf{d} = \mathbf{n}_1 \times \mathbf{n}_2$$

where $\mathbf{n}_1 = \langle 2, 3, -4 \rangle$ and $\mathbf{n}_2 = \langle 1, -2, 1 \rangle$ are the normal vectors to the two planes.

---
### Skew Lines

Two or more lines are **coplanar** if there exists a **single plane** that contains all of them.

Skew lines : non-coplanar

1. **Intersecting lines**: Always coplanar (the intersection point and direction vectors define a unique plane)
2. **Parallel lines**: Always coplanar (they define a unique plane containing both)
3. **Skew lines**: NOT coplanar (neither parallel nor intersecting)

Three vectors are coplanar if their scalar triple product is zero. 

#### Example 
Given two lines $D_1$ and $D_2$ in 3D (each defined by intersection of two planes):

For lines defined as intersections of planes:
- $D_1$: intersection of planes $\Pi_1$ and $\Pi_2$
- $D_2$: intersection of planes $\Pi_3$ and $\Pi_4$

Direction vectors can be found by:
- $\mathbf{d}_1 = \mathbf{n}_1 \times \mathbf{n}_2$ (cross product of normal vectors to $\Pi_1$ and $\Pi_2$)
- $\mathbf{d}_2 = \mathbf{n}_3 \times \mathbf{n}_4$ (cross product of normal vectors to $\Pi_3$ and $\Pi_4$)

1. **Find a point on each line**
   - $P_1$ on line $D_1$
   - $P_2$ on line $D_2$

2. **Get direction vectors**
   - $\mathbf{d}_1$ for line $D_1$
   - $\mathbf{d}_2$ for line $D_2$

3. **Form connecting vector**
   - $\mathbf{w} = \overrightarrow{P_1P_2}$ (vector from $P_1$ to $P_2$)

4. **Apply scalar triple product test**
   - Compute: $\mathbf{w} \cdot (\mathbf{d}_1 \times \mathbf{d}_2)$
   
$$
\mathbf{w} \cdot (\mathbf{d}_1 \times \mathbf{d}_2) = \begin{cases}
0 & \text{Lines are coplanar} \\
\neq 0 & \text{Lines are skew}
\end{cases}
$$

---
### Distance Between Two Lines in 3D

Suppose we have two lines:

$$L_1: \quad \mathbf{r}_1(t) = \mathbf{P}_1 + t\mathbf{d}_1$$
$$L_2: \quad \mathbf{r}_2(s) = \mathbf{P}_2 + s\mathbf{d}_2$$

where:
- $\mathbf{P}_1, \mathbf{P}_2$ are points on the lines
- $\mathbf{d}_1, \mathbf{d}_2$ are direction vectors

### Case 1: Intersecting Lines
Distance = $0$

### Case 2: Parallel Lines
When $\mathbf{d}_1 \parallel \mathbf{d}_2$ (i.e., $\mathbf{d}_1 \times \mathbf{d}_2 = \mathbf{0}$):

$$\text{dist}(L_1, L_2) = \frac{\|(\mathbf{P}_2 - \mathbf{P}_1) \times \mathbf{d}_1\|}{\|\mathbf{d}_1\|}$$

### Case 3: Skew Lines
When lines are neither parallel nor intersecting

The shortest distance between two skew lines is the length of the segment that is **perpendicular to both lines**.

$$\text{dist}(L_1, L_2) = \frac{|(\mathbf{P}_2 - \mathbf{P}_1) \cdot (\mathbf{d}_1 \times \mathbf{d}_2)|}{\|\mathbf{d}_1 \times \mathbf{d}_2\|}$$

1. **$\mathbf{d}_1 \times \mathbf{d}_2$** is a vector perpendicular to both lines

2. **Scalar triple product** $(\mathbf{P}_2 - \mathbf{P}_1) \cdot (\mathbf{d}_1 \times \mathbf{d}_2)$ measures the volume of the parallelepiped spanned by:
   - $\mathbf{P}_2 - \mathbf{P}_1$ (vector between points)
   - $\mathbf{d}_1$ (direction of line 1)
   - $\mathbf{d}_2$ (direction of line 2)

3. **Distance = Volume / Base Area**:
   - Volume = $|(\mathbf{P}_2 - \mathbf{P}_1) \cdot (\mathbf{d}_1 \times \mathbf{d}_2)|$
   - Base Area = $\|\mathbf{d}_1 \times \mathbf{d}_2\|$
   - Height (distance) = Volume / Base Area

#### Geometric Interpretation
A vector perpendicular to both $\mathbf{d}_1$ and $\mathbf{d}_2$ is:

$$\mathbf{n} = \mathbf{d}_1 \times \mathbf{d}_2$$

Take the unit normal:

$$\hat{\mathbf{n}} = \frac{\mathbf{n}}{\|\mathbf{n}\|} = \frac{\mathbf{d}_1 \times \mathbf{d}_2}{\|\mathbf{d}_1 \times \mathbf{d}_2\|}$$

The connector vector between the lines is:

$$\mathbf{v} = \mathbf{P}_2 - \mathbf{P}_1$$

Project $\mathbf{v}$ onto $\hat{\mathbf{n}}$. The absolute value of this projection is the perpendicular distance:

$$\boxed{\text{dist}(L_1, L_2) = |\mathbf{v} \cdot \hat{\mathbf{n}}| = \frac{|(\mathbf{P}_2 - \mathbf{P}_1) \cdot (\mathbf{d}_1 \times \mathbf{d}_2)|}{\|\mathbf{d}_1 \times \mathbf{d}_2\|}}$$

---
## Basis of a Vector Space

A **basis** of a vector space (say $\mathbb{R}^n$) is a set of vectors that satisfies **two conditions**:

1. **Linearly independent** — no vector in the set can be written as a linear combination of the others
2. **Spanning** — every vector in the space can be written as a linear combination of those basis vectors

A basis is a minimal, nonredundant set of vectors that can build every vector in the space uniquely. It provides coordinates, encodes the dimension.


The standard basis in $\mathbb{R}^2$ is:

$$\mathbf{e}_1 = (1, 0), \quad \mathbf{e}_2 = (0, 1)$$

- It aligns with the **usual x- and y-axes** in the plane
- When we write a vector $(x,y)$ in $\mathbb{R}^2$, we really mean:

  $$\boxed{(x,y) = x(1,0) + y(0,1)}$$

- By default, all coordinates are taken **relative to $B_0$** unless stated otherwise


Any vector $(a, b)$ can be written as:

$$(a, b) = a\mathbf{e}_1 + b\mathbf{e}_2$$

So $\{\mathbf{e}_1, \mathbf{e}_2\}$ is a basis of $\mathbb{R}^2$.


Non-uniqueness of bases: for instance,
  $$
  b_1=(1,-1),\quad b_2=(-2,1)
  $$
  also form a basis because the $2\times2$ matrix $B=[\,b_1\ b_2\,]$ has nonzero determinant:
  $$
  \det B=\begin{vmatrix}1&-2\\-1&1\end{vmatrix}=1\cdot1-(-1)\cdot(-2)=1-2=-1\ne 0.
  $$

A basis doesn't have to be the standard one. For example:

$$B_1 = \{ (2,1), (-2,3) \}$$

This is still a valid basis of $\mathbb{R}^2$, but now the "axes" of your coordinate system are tilted and stretched.  

``A basis provides the “axes” of your coordinate system. Coordinates change with the basis, but the geometric vector does not.``

The number of vectors in a basis = the **dimension** of the space.

Given vectors $v_1,\dots,v_n\in\mathbb{R}^n$ and $V=[\,v_1\ \cdots\ v_n\,]$:
- Determinant test (square case): $\det(V)\ne 0 \ \Longleftrightarrow\ \{v_i\}$ is a basis.
- Rank test: $\operatorname{rank}(V)=n \ \Longleftrightarrow\ \{v_i\}$ is a basis.
- RREF test: If the RREF of $V$ is $I_n$, then $\{v_i\}$ is a basis.

Suppose you have a vector $\mathbf{v} \in \mathbb{R}^2$.

In the Standard Basis $B_0$

If $\mathbf{v} = (5,7)$, this means:

$$\mathbf{v} = 5(1,0) + 7(0,1)$$

In Another Basis $B_1 = \{b_1, b_2\}$

The same vector $\mathbf{v}$ can also be written as:

$$\mathbf{v} = \alpha b_1 + \beta b_2$$

where $(\alpha, \beta)$ are the **coordinates of $\mathbf{v}$ in basis $B_1$**.

- A vector's coordinates **depend on the basis chosen** — it may look different in $B_0$ and $B_1$, but it's the same vector in $\mathbb{R}^2$

### Change of Basis Matrix

- In the standard basis $B_0 = \{(1,0), (0,1)\}$, the vector $\mathbf{v} = (2,5)$ means $2 \cdot (1,0) + 5 \cdot (0,1)$
- In another basis, say $B_1 = \{(2,1), (-2,3)\}$, the same $\mathbf{v}$ has different coordinates : $(2,1)$

"changing basis" means: expressing the *same vector* in the language of a different basis.

Suppose $B = \{b_1, b_2\}$ is a basis of $\mathbb{R}^2$.

Form the **basis matrix**:

$$P_B = \begin{bmatrix} b_1 & b_2 \end{bmatrix}$$

### Key Relationships

- If $[\mathbf{v}]_B$ are the coordinates of $\mathbf{v}$ in basis $B$, then the actual vector in standard coordinates is:

  $$\boxed{\mathbf{v} = P_B [\mathbf{v}]_B}$$

- Conversely, to recover the coordinates in basis $B$:

  $$\boxed{[\mathbf{v}]_B = P_B^{-1} \mathbf{v}}$$

#### From One Basis to Another

Suppose we want to go **from coordinates in $B_1$ to coordinates in $B_2$**.

#### Derivation

We have:
$$[\mathbf{v}]_{B_2} = P_{B_2}^{-1} \mathbf{v}$$

and since $\mathbf{v} = P_{B_1}[\mathbf{v}]_{B_1}$:

$$[\mathbf{v}]_{B_2} = P_{B_2}^{-1} P_{B_1} [\mathbf{v}]_{B_1}$$

- The matrix
  $$
  M_{B_1\to B_2} \;=\; P_{B_2}^{-1}\,P_{B_1}
  $$

is the **change-of-basis matrix from $B_1$ to $B_2$**.

So once you compute $M$, you can convert any coordinates in $B_1$ directly into coordinates in $B_2$.

---


