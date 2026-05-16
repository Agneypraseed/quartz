### Subspace

A **subspace** of a vector space $V$ is a subset $S \subseteq V$ that is itself a vector space under the same operations. It must satisfy three conditions:

1. **Contains the origin:** $\mathbf{0} \in S$
2. **Closed under addition:** if $\mathbf{u}, \mathbf{v} \in S$, then $\mathbf{u} + \mathbf{v} \in S$
3. **Closed under scalar multiplication:** if $\mathbf{v} \in S$ and $c \in \mathbb{R}$, then $c\mathbf{v} \in S$

Examples

- In $\mathbb{R}^3$: any line or plane **through the origin** is a subspace
- In $\mathbb{R}^3$: a plane **not through the origin** is _not_ a subspace 

> A subspace always passes through the origin. If it doesn't, it is called an **affine subspace**.

An **affine subspace** is a shifted (translated) version of a subspace. It has the form:

$$S + \mathbf{v}_0 = {\mathbf{s} + \mathbf{v}_0 \mid \mathbf{s} \in S}$$

where $S$ is a subspace and $\mathbf{v}_0$ is a fixed offset vector.

---
## Hyperplane

A **hyperplane** is a flat geometric object of dimension $n - 1$ inside an $n$-dimensional space. It is the most natural way to "cut" a space into two parts with a single boundary.

Formally, a hyperplane is the set of all points $\mathbf{x} \in \mathbb{R}^n$ satisfying a single linear equation:

$$a_1 x_1 + a_2 x_2 + \cdots + a_n x_n = b$$

or in vector form:

$$\mathbf{w} \cdot \mathbf{x} = b$$

where:

- $\mathbf{w} = (a_1, a_2, \ldots, a_n) \neq \mathbf{0}$ is the **normal vector**
- $b \in \mathbb{R}$ is a scalar constant
- $\mathbf{x} \in \mathbb{R}^n$ is any point on the hyperplane

| Ambient space  | Hyperplane is a...               |
| -------------- | -------------------------------- |
| $\mathbb{R}^2$ | Line                             |
| $\mathbb{R}^3$ | Plane                            |
| $\mathbb{R}^n$ | $(n-1)$-dimensional flat surface |

Geometric Interpretation

The vector $\mathbf{w}$ is **perpendicular (normal) to the hyperplane**. Every point $\mathbf{x}$ on the hyperplane has the same dot product with $\mathbf{w}$:

$$\mathbf{w} \cdot \mathbf{x} = b = \text{constant}$$

This is what defines the hyperplane geometrically: it is the **level set** of the linear function $f(\mathbf{x}) = \mathbf{w} \cdot \mathbf{x}$.

Dividing space into two half-spaces : 

A hyperplane splits $\mathbb{R}^n$ into exactly two **half-spaces**:

$$H^+ = {\mathbf{x} \mid \mathbf{w} \cdot \mathbf{x} > b}$$ $$H^- = {\mathbf{x} \mid \mathbf{w} \cdot \mathbf{x} < b}$$

> "half-space" means two separated regions — it does **not** imply equal volume or measure.

---
### Convex Set
A set $C \subseteq \mathbb{R}^n$ is **convex** if for any two points in the set, the entire line segment connecting them also lies in the set.

Formally, $C$ is convex if:

$$\forall, \mathbf{x}, \mathbf{y} \in C, \quad \forall, \lambda \in [0, 1]: \quad \lambda \mathbf{x} + (1 - \lambda)\mathbf{y} \in C$$

The expression $\lambda \mathbf{x} + (1 - \lambda)\mathbf{y}$ is called a **convex combination** of $\mathbf{x}$ and $\mathbf{y}$. As $\lambda$ varies from $0$ to $1$, it traces the straight line segment from $\mathbf{y}$ to $\mathbf{x}$.

Intuition

> A set is convex if you can "see" every point from every other point without leaving the set — no dents, holes, or concavities.

![[Pasted image 20260514223256.png]]

---
A Half-Space is Convex

A half-space is defined as:

$$H^+ = {\mathbf{x} \in \mathbb{R}^n \mid \mathbf{w} \cdot \mathbf{x} \geq b}$$

(The argument works identically for $H^- = {\mathbf{x} \mid \mathbf{w} \cdot \mathbf{x} \leq b}$.)

Proof

Take any two points $\mathbf{x}, \mathbf{y} \in H^+$. By definition:

$$\mathbf{w} \cdot \mathbf{x} \geq b \qquad \text{and} \qquad \mathbf{w} \cdot \mathbf{y} \geq b$$

Now take any convex combination $\mathbf{z} = \lambda \mathbf{x} + (1-\lambda)\mathbf{y}$ with $\lambda \in [0,1]$. We need to show $\mathbf{z} \in H^+$, i.e., $\mathbf{w} \cdot \mathbf{z} \geq b$.

$$\mathbf{w} \cdot \mathbf{z} = \mathbf{w} \cdot \bigl(\lambda \mathbf{x} + (1-\lambda)\mathbf{y}\bigr)$$
$$= \lambda (\mathbf{w} \cdot \mathbf{x}) + (1 - \lambda) (\mathbf{w} \cdot \mathbf{y})$$

Since $\mathbf{w} \cdot \mathbf{x} \geq b$ and $\mathbf{w} \cdot \mathbf{y} \geq b$, and $\lambda \geq 0$, $(1-\lambda) \geq 0$, $\lambda + (1-\lambda) = 1$:

$$\geq \lambda b + (1-\lambda) b = b$$

Therefore $\mathbf{w} \cdot \mathbf{z} \geq b$, so $\mathbf{z} \in H^+$. 

The proof works because the dot product $f(\mathbf{x}) = \mathbf{w} \cdot \mathbf{x}$ is a **linear function**, and linear functions preserve convex combinations:

$$f(\lambda \mathbf{x} + (1-\lambda)\mathbf{y}) = \lambda f(\mathbf{x}) + (1-\lambda) f(\mathbf{y})$$

A half-space is just the **sublevel (or superlevel) set of a linear function** and sublevel sets of linear (and more generally, convex) functions are always convex.
If two points satisfy a linear inequality, every convex combination also satisfies it

---

A hyperplane $\mathbf{w} \cdot \mathbf{x} = b$ can be written as:

$${\mathbf{x} \mid \mathbf{w} \cdot \mathbf{x} \geq b} \cap {\mathbf{x} \mid \mathbf{w} \cdot \mathbf{x} \leq b}$$

Since both half-spaces are convex, and the **intersection of convex sets is always convex**, a hyperplane is also convex.

> **General rule:** The intersection of any collection of convex sets is convex.

This is a powerful fact — it means any region defined by a finite number of linear inequalities (a **polyhedron**) is convex, since it is an intersection of half-spaces.
