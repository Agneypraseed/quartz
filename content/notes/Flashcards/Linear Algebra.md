
_Lists_ : A list of length 𝑛 is an ordered collection of 𝑛 elements. Two lists are equal if and only if they have the same length and the same elements in the same order. 

Vector Spaces : A vector space is a set 𝑉 along with an addition on 𝑉 and a scalar multiplication on 𝑉 such that the following properties hold. Elements of a vector space are called vectors or points.





The projection of point $x$ onto direction $w$.
									$w^T x$ 
- **$x$** = The vector being analyzed (column vector)
- **$w$** = The direction or weight vector (column vector)
- **$w^T$** = A row vector acting on $x$

Even though the dot product is numerically symmetric: $w^T x = x^T w$
Writing it as $w^T x$ keeps semantic roles consistent across fields :
In Machine Learning & Statistics
- **$x$** = The data / input (the object being observed)
- **$w$** = The parameter / direction / filter / weight 
In Geometry
- **$x$** = The vector being decomposed
- **$w$** = The reference direction

---
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

Normal Form ($H_1$): 
			`A normal form describes a geometric object using a vector that is **perpendicular to it.`

A hyperplane in $\mathbb{R}^n$ can be defined in **normal form** as:

$H = \{ x \in \mathbb{R}^n \;:\; \omega^T x = \alpha \}$ (Set definition)

- $x \in \mathbb{R}^n$ → point in n-dimensional space  
- $\omega \in \mathbb{R}^n$ → normal vector (weight vector)  
- $\alpha \in \mathbb{R}$ → offset (bias term)

Linear Equation Form 
A hyperplane is the set of all points $\mathbf{x} \in \mathbb{R}^n$ satisfying a single linear equation:

$$a_1 x_1 + a_2 x_2 + \cdots + a_n x_n = b$$

or in vector form:

$$\mathbf{w} \cdot \mathbf{x} = b$$

where:

- $\mathbf{w} = (a_1, a_2, \ldots, a_n) \neq \mathbf{0}$ is the **normal vector**
- $b \in \mathbb{R}$ is a scalar constant
- $\mathbf{x} \in \mathbb{R}^n$ is any point on the hyperplane

The set:

$\omega^T x = \alpha$

describes all points whose projection onto $\omega$ is constant.
- all points in $H$ share the same dot product with $\omega$
- they lie on a flat $(n-1)$-dimensional surface
- $\omega$ determines orientation
- $\alpha$ determines shift (offset from origin)
- changing $\omega$ rotates the hyperplane
- changing $\alpha$ translates it

If $\alpha = 0$, then:

$\omega^T x = 0$

This hyperplane passes through the origin.

>A hyperplane in $\mathbb{R}^n$ is defined by $\omega^T x = \alpha$, where $\omega$ is the normal vector perpendicular to the $(n-1)$-dimensional surface.

| Space          | Hyperplane                       |
| -------------- | -------------------------------- |
| $\mathbb{R}^2$ | Line                             |
| $\mathbb{R}^3$ | Plane                            |
| $\mathbb{R}^n$ | $(n-1)$-dimensional flat surface |

Dividing space into two half-spaces : 

A hyperplane splits $\mathbb{R}^n$ into exactly two **half-spaces**:

$$H^+ = {\mathbf{x} \mid \mathbf{w} \cdot \mathbf{x} > b}$$ $$H^- = {\mathbf{x} \mid \mathbf{w} \cdot \mathbf{x} < b}$$

> "half-space" means two separated regions — it does **not** imply equal volume or measure.


**Point-Directional Form ($H_2$):** Instead of a perpendicular line, you define the boundary by picking a starting point $y_0$ that sits on the boundary, and then spanning out in $n-1$ different directions using linearly independent vectors $y_1, ..., y_{n-1}$.
	 Independent direction vectors are linearly independent vectors lying inside the hyperplane that span all possible directions within it.
-  $x = y_0 + \sum_{i=1}^{n-1} \lambda_i y_i$ means that any point $x$ on this boundary can be reached by starting at $y_0$ and moving along those direction vectors by some scaling factors $\lambda_i$.

Moving from $H_1$ to $H_2$
The primary goal of a linear classifier like a perceptron is to look at a new data point $x$ and decide which side of the boundary it falls on.

- **Using $H_1$ (Normal Form):** You only have to calculate a single dot product: $w^T x$. If the result is positive, it belongs to one class; if negative, the other. This is incredibly fast for a computer to process.
- **Using $H_2$ (Point-Directional Form):** To figure out which side of the boundary a point is on, you would have to solve a complex system of linear equations to find all the $\lambda_i$ scaling factors for every single data point. That would be computational.


---
### Convex Set
A set $C \subseteq \mathbb{R}^n$ is **convex** if for any two points in the set, the entire line segment connecting them also lies in the set.

Formally, $C$ is convex if:

$$\forall, \mathbf{x}, \mathbf{y} \in C, \quad \forall, \lambda \in [0, 1]: \quad \lambda \mathbf{x} + (1 - \lambda)\mathbf{y} \in C$$

The expression $\lambda \mathbf{x} + (1 - \lambda)\mathbf{y}$ is called a **convex combination** of $\mathbf{x}$ and $\mathbf{y}$. As $\lambda$ varies from $0$ to $1$, it traces the straight line segment from $\mathbf{y}$ to $\mathbf{x}$. The formula $\lambda x + (1-\lambda)y$  is just the algebraic way to write "a straight line segment between $x$ and $y$

Intuition

> A set is convex if you can "see" every point from every other point without leaving the set — no dents, holes, or concavities.

The function $f$ is convex if and only if the line segment connecting any two points on its graph lies above or on the graph itself. 
A function is convex if it is shaped like a right-side-up bowl : if you pick two points on the curve and draw a straight line (a secant line) between them, the actual curve of the function must sag **below** (or equal to) that straight line.

Jensen's Inequality base :  
Let $f: M \to \mathbb{R}$ where the domain $M$ is a convex set, For any $x, y \in M$ and any $\lambda \in [0, 1]$:

$$f(\lambda x + (1-\lambda)y) \le \lambda f(x) + (1-\lambda)f(y)$$

![[Pasted image 20260607195546.png]]

Non convex : 
![[Pasted image 20260607184341.png]]


![[Pasted image 20260514223256.png]]




---
>Linear functions are both convex and concave

**Linearity** ⇒ Both Convex and Concave  
  
Consider the affine function:  
  
$f(x) = c^T x + b$  
  
A function is convex if for all $x, y$ and $\theta \in [0,1]$:  
  
$f(\theta x + (1-\theta)y) \le \theta f(x) + (1-\theta)f(y)$  
 
LHS : $f(\theta x + (1-\theta)y)$   $= c^T(\theta x + (1-\theta)y) + b$   $=  \theta c^T x + (1-\theta)c^T y + b$  
    
RHS : $\theta f(x) + (1-\theta)f(y)$   $= \theta (c^T x + b) + (1-\theta)(c^T y + b)$ $= \theta c^T x + (1-\theta)c^T y + \theta b + (1-\theta)b$  $= \theta c^T x + (1-\theta)c^T y + b$  
  
$f(\theta x + (1-\theta)y) = \theta f(x) + (1-\theta)f(y)$  
  
The function is:  
  
- convex  
- concave

linear/affine functions commute with convex combinations, so they induce zero curvature and generate convex (and concave) structure simultaneously.

----
### Half-spaces

A **half-space** is one side of a hyperplane in an n-dimensional space.

Formally, a (closed) half-space is:

$H = {x \in \mathbb{R}^n \mid a^\top x \le b}$

where:
- $a \in \mathbb{R}^n$, $a \ne 0$
- $b \in \mathbb{R}$

The hyperplane boundary is:

$a^\top x = b$

- it has a **flat boundary (hyperplane)**
- it does not curve inward or outward
- it splits space into exactly two parts

There is also the open half-space:

${x \mid a^\top x < b}$

> Half-spaces are always **convex sets**.

A half-space is defined as:

$$H^+ = {\mathbf{x} \in \mathbb{R}^n \mid \mathbf{w} \cdot \mathbf{x} \geq b}$$ ($H^+$ = Positive class region)

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

Any **convex polyhedron** = intersection of finitely many half-spaces

---

A hyperplane $\mathbf{w} \cdot \mathbf{x} = b$ can be written as:

$${\mathbf{x} \mid \mathbf{w} \cdot \mathbf{x} \geq b} \cap {\mathbf{x} \mid \mathbf{w} \cdot \mathbf{x} \leq b}$$

Since both half-spaces are convex, and the **intersection of convex sets is always convex**, a hyperplane is also convex.

> The intersection of any collection of convex sets is convex.

 Any region defined by a finite number of linear inequalities (a **polyhedron**) is convex, since it is an intersection of half-spaces.

> Any convex set can be written as the intersection of (possibly infinitely many) half-spaces.

A fundamental structural result in convex geometry states:

$C = \bigcap_{\alpha \in A} \{ x : a_\alpha^T x \le b_\alpha \}$

Each constraint: $a_\alpha^T x \le b_\alpha$ defines a **half-space**, i.e. one side of a hyperplane.

(a) Polyhedron (finite case)

If $A$ is finite:

$C = \{ x : Ax \le b \}$

This is a polyhedron. A convex polyhedron is mathematically defined as the intersection of a finite number of half-spaces.

(b) Euclidean ball (infinite case)

A ball: $\|x\|_2 \le r$  intersection of all tangent half-spaces.

> Convex sets are exactly those regions that can be described entirely by linear inequalities.


---
Convex Hull
The convex hull is the smallest convex shape that encloses all points.
		![[Pasted image 20260523180103.png]]

---

