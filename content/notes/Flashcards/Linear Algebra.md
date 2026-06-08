
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


----
### **Page 1: Historical Timeline and Core Topics**

The first page outlines the historical progression of neural networks and learning theory, alongside the main topics covered in the notes.

- **1943**: McCulloch and Pitts introduced threshold circuits.
    
- **1949**: Hebb introduced concepts related to reinforcement learning.
    
- **1958**: Rosenblatt developed the perceptron for classification.
    
- **1969**: Minsky and Papert highlighted the limits of previous approaches.
    
- **1971**: Vapnik and Chervonenkis explored generalization from empirical data.
    
- **1977**: Kohonen introduced self-organizing networks.
    
- **1982**: Hopfield developed dynamical systems (recurrent networks).
    
- **1984**: Valiant introduced the PAC Learning Model.
    
- **1986**: Rumelhart et al. developed the Backpropagation algorithm.
    
- **1988**: Broomhead and Lowe worked on Radial Basis Function networks.
    
- **1992**: Vapnik and others introduced Support Vector Machines.
    
- **1995**: Maass et al. worked on Spiking Neurons.
    
- **2010**: LeCun focused on Deep Learning.
    
- **Core Topics**: The notes cover Feed Forward Networks, Perceptron algorithms, Backpropagation, Deep Learning, Radial Basis Function networks, Support Vector Machines, optimization, and complexity.
    

### **Page 2: Neural Network Foundations**

This section defines the basic structure of a neural network.

- Neural networks are built upon basic processing units called neurons.
    
- A single neuron receives inputs, applies weighted connections, and computes a net sum.
    
- The fundamental computation is represented as $(\sum_{i=1}^{n}N_{i}X_{i})+b$.
    
- The bias ($b$) can optionally be represented as an additional input vector $X_{0}=1$ with a weight of $W_{0}$.
    
- An activation function is then applied to this computed value, and the result is sent to subsequent neurons.
    
- The computation generally proceeds in a clocked or discrete step-by-step manner.
    

### **Page 3: Typical Activation Functions**

The notes detail several common mathematical functions used to activate neurons.

- **Threshold Activation**: Defined as $\phi(t):=\begin{cases}0&t<0\\ 1&t>1\end{cases}$. This is computationally challenging for continuous systems because it is not everywhere continuous.
    
- **Piecewise Linear Activation**: Transitions linearly between fixed boundaries.
    
- **ReLU (Rectified Linear Unit)**: Defined as $RelU(t):=\begin{cases}0&t<0\\ t&t>0&max\{0,t\}\end{cases}$.
    
- **Sigmoidal Function**: A continuous, infinitely differentiable logistic activation, generalized as $\varphi_{a}(t)=\frac{1}{1+e^{-at}}\varphi$.
    

### **Pages 4 & 5: Network Structure and Learning Tasks**

These pages explain how individual neurons are organized into networks to solve problems.

- **Feed Forward Networks**: These are modeled as acyclic, directed graphs where vertices are neurons and edges carry weights.
    
- Information flows in one direction; a neuron's output has no influence on itself later.
    
- The network is divided into an input layer, hidden layers, and an output layer, where subsequent layers are typically fully connected.
    
- **Learning as Optimization**: A network computes a family of functions based on its structure. Solving a learning task involves finding the optimal weights and biases from empirical data.
    
- **The Three Phases of Learning**:
    
    1. Choosing the network structure (layers, neurons, activations).
        
    2. Optimizing parameters (weights and biases) according to an objective function.
        
    3. Evaluating the solution's generalization on new data.
        

### **Page 6: Recurrent Networks vs. Feed Forward**

A brief comparison is made between network paradigms.

- **Feed Forward Limits**: Structural choices require answering questions about approximation theory (is the network powerful enough?) and algorithmic complexity.
    
- **Recurrent Neural Networks (RNNs)**: Unlike feedforward nets, RNNs are not acyclic. Output signals can decouple and act as inputs at the same time $t$, creating a dynamic system.
    
- Examples of such networks include Hopfield nets and Boltzmann machines.
    

### **Pages 7, 8 & 9: The Perceptron and Linear Separability**

These pages focus on the math behind the perceptron algorithm and hyperplanes.

- **Hyperplanes in $R^n$**: Can be defined using normal form $H_{1}:=[x\in R^{n}$ where $\omega^{\top}:x=\alpha$. The vector $w$ is normal to the hyperplane.
    
- **The Perceptron Algorithm**: Designed to determine if two finite sets of data ($C_1$ and $C_2$) are linearly separable by a hyperplane.
    
- The goal is to find weights $w$ and bias $b$ such that $w^T x \ge b$ for set $C_1$, and $w^T x < b$ for set $C_2$.
    
- To simplify, the data can be reformulated so the target becomes finding a vector $w$ where $wx > 0$ for all points in the set.
    
- **Margin**: The margin is defined as the minimum distance between the data points and the separating hyperplane.
    

### **Pages 10, 11 & 12: Perceptron Convergence Theorem**

A mathematical proof is provided to show that the perceptron algorithm will eventually stop if a solution exists.

- **Theorem**: If a set $T$ is linearly separable with a maximum margin $\epsilon^*$ and a compact size $M = \max ||x||$, the algorithm computes a separating hyperplane in at most $(\frac{M}{\epsilon^+})^2$ iterations.
    
- **Proof Logic**: By utilizing the Cauchy-Schwarz inequality, the proof tracks the increasing projection of the weight vector $w^{(t)}$ against the optimal vector $w^*$.
    
- It establishes the bounds $||w^{(t)}||^2 \le t \cdot M^2$ and ultimately shows that $t \le (\frac{M}{\epsilon^+})^2$, proving the iterations are finite.
    
- **Limitations**: This iteration count depends on parameters that are generally unknown, making the bound theoretically important but practically hard to measure. This limitation naturally leads into the Support Vector Machine (SVM) approach to intentionally find the optimal hyperplane.
    

### **Pages 13 & 14: Optimization Theory Basics**

The notes transition to the calculus and numerical methods needed to train networks.

- **Objective Functions**: Training is framed as minimizing an energy function (e.g., Mean Squared Error): $E(w):=\sum_{i=1}^{T}(f_{wi}(x_{i})-y_{i})^{2}$.
    
- **Optimization Framework**: Minimizing a function $f(x)$ subject to constraints $h(x)=0$ and $g(x) \le 0$ within a feasible set.
    
- **Unconstrained Optima**: A point $x^*$ is a local minimum if $f(x^*) \le f(y)$ for all points $y$ in a small surrounding neighborhood.
    
- **Necessary Conditions**: For a local optimum, the gradient must be zero: $Df(x^*) = 0$.
    
- **Sufficient Conditions**: The second derivative matrix $D^2f(x^*)$ must be positive definite.
    

### **Pages 15, 16 & 17: Constrained Optimization and Lagrange**

When variables have restrictions, standard derivatives aren't enough.

- **Geometric Intuition**: In constrained optimization, a local optimum occurs where the level curves of the objective function and the constraints intersect tangentially, not transversely.
    
- **Lagrange Theorem (Equality Constraints)**: If $x$ is a local optimum for $f$ under constraint $h(x)=0$, there exists a Lagrange multiplier $\lambda$ such that $Df(\overline{x}) = \lambda Dh(\overline{x})$.
    
- **Steepest Descent Algorithm**: A foundational numerical method used to find local optima by choosing an iteration point and moving in a search direction $g_k$ where the function locally decreases. The update rule is $X_{k+1} = X_k + t_k g_k$.
    

### **Pages 18 & 19: Steepest Descent and KKT Conditions**

The math behind finding the best direction to step in.

- **Directional Derivative**: The directional derivative $Df(x) \cdot g$ is minimized when stepping in the direction $g^* = -\frac{Df(x)}{||Df(x)||}$. This direction of steepest descent is crucial for algorithms like Backpropagation.
    
- **Inequality Constraints**: When optimizing with inequality constraints $g_j(x) \le 0$, the system uses generalized multipliers $\mu_j$.
    
- **Complementary Slackness**: A critical condition for these constraints is $\mu_j \cdot g_j(\overline{x}) = 0$, meaning either the multiplier is zero or the constraint is strictly active (equal to zero).
    

### **Page 20: Complexity and Convexity**

The final page addresses the structural properties of optimization problems.

- **Numerical Challenges**: Optimization problems often deal with real numbers and structural properties that can cause algorithms (like steepest descent) to get stuck in local optima.
    
- **Convexity**: A vital concept that makes finding solutions easier.
    
- A set $M$ is convex if, for any two points $x$ and $y$ within it, the line segment connecting them $\lambda \cdot x + (1-\lambda)y$ is also inside $M$.
    
- A function is convex if $F(\lambda x + (1-\lambda)y) \le \lambda f(x) + (1-\lambda)f(y)$.