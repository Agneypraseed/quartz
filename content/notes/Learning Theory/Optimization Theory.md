Given a differentiable objective function:

$$f: \mathbb{R}^n \to \mathbb{R}$$

The target is to locate an optimal vector $x$ within a designated feasible set $M \subseteq \mathbb{R}^n$:

$$\min_{x \in \mathbb{R}^n} f(x) \quad \text{subject to } x \in M$$

The boundaries of the feasible set $M$ are algebraically constructed via finite sets of equality and inequality constraints:
$$M := \left\{ x \in \mathbb{R}^n \;\middle|\; [cite_start]\begin{aligned} h_i(x) &= 0 && \text{for } i \in I \\ g_j(x) &\ge 0 && \text{for } j \in J \end{aligned} \right\}$$
- $I$ and $J$ represent discrete, finite index sets.
- The constraint mappings $h_i, g_j: \mathbb{R}^n \to \mathbb{R}$ are assumed to be sufficiently smooth and continuously differentiable.

An optimization problem is classified as **unconstrained** if the feasible set encompasses the entire unrestricted vector space:

$$\text{If } M = \mathbb{R}^n \implies \min_{x \in \mathbb{R}^n} f(x)$$

Under unconstrained conditions, solutions are analyzed using localized neighborhood behaviors rather than boundary intersections.

Unconstrained Local Optima (LOCAL MINIMA)
- A point $x \in \mathbb{R}^n$ represents a strict **local minimum** of a function if it yields the lowest scalar evaluation within an isolated domain.
- An element $x \in \mathbb{R}^n$ is a local minimum of $f: \mathbb{R}^n \to \mathbb{R}$ if and only if there exists a localized open neighborhood, parameterized as an $\epsilon$-ball ($B_\epsilon$):
$$B_\epsilon(x) := \{ y \in \mathbb{R}^n \mid \|x - y\| [cite_start]< \epsilon \} \quad \text{for } \epsilon > 0$$
	Such that the following optimality condition holds strictly for all surrounding coordinates:
$$\forall y \in B_\epsilon(x), \quad f(x) \le f(y)$$

To mathematically verify that an unconstrained point is a local minimum, look at how the function behaves if you take a tiny step in _any_ direction away from that point ($B_\epsilon$). This neighborhood analysis relies on two conditions :

1. **The First Derivative Condition (Gradient):** The slope at that exact coordinate must flatten out completely:    $$\nabla f(x) = 0$$
	- The gradient vector ($\nabla f(x)$ or $Df(x)$) collects all the _first_ partial derivatives, telling the steepness and direction of the slope. 
	- x is a **critical point** and it may correspond to a local maximum, a local minimum, or a saddle/inflection point.

When optimizing in multiple dimensions (like a neural network with many weights), looking at a single slope value is not enough to understand the surrounding terrain.

2. **The Second Derivative Condition (Hessian Matrix):** To confirm it is a local minimum, you analyze the curvature in a neighborhood of the point. 
	- The **Hessian Matrix** ($D^2 f(x)$) has all the _second_ partial derivatives. This matrix must be **positive definite**. This means that no matter which direction you look inside your localized neighborhood ball, the ground curves upward away from x.
	- In an $n$-dimensional space, the Hessian is a square $n \times n$ symmetric matrix :

$$D^2 f(x) = \begin{pmatrix} \frac{\partial^2 f}{\partial x_1^2} & \frac{\partial^2 f}{\partial x_1 \partial x_2} & \cdots & \frac{\partial^2 f}{\partial x_1 \partial x_n} \\ \frac{\partial^2 f}{\partial x_2 \partial x_1} & \frac{\partial^2 f}{\partial x_2^2} & \cdots & \frac{\partial^2 f}{\partial x_2 \partial x_n} \\ \vdots & \vdots & \ddots & \vdots \\ \frac{\partial^2 f}{\partial x_n \partial x_1} & \frac{\partial^2 f}{\partial x_n \partial x_2} & \cdots & \frac{\partial^2 f}{\partial x_n^2} \end{pmatrix}$$
	- **The Diagonal Terms ($\frac{\partial^2 f}{\partial x_i^2}$):** Measure how the slope is curving if you walk strictly parallel to one of the main coordinate axes.
	- **The Cross Terms ($\frac{\partial^2 f}{\partial x_i \partial x_j}$):** Measure how the slope changes in one direction as you move in a different direction (the twist or rotation of the terrain).

The **Sufficient Second Order Conditions** for a local minimum:
> Let $x^* \in \mathbb{R}^n$ be twice differentiable with $Df(x^*) = 0$ and let $D^2f(x^*)$ be **positive definite**. Then $x^*$ is a local minimum of $f$.

For a symmetric matrix $A$ (Hessian $D^2 f(x^*)$) to be **positive definite**, it must satisfy for every non-zero vector $x \in \mathbb{R}^n$:
$$x^T A x > 0 \quad (\text{or } v^T [D^2 f(x^*)] v > 0)$$
- **$v$:** A vector representing a step in _any_ random direction you choose to walk inside your localized neighborhood ball.
- **$[D^2 f(x^*)] v$:** Multiplies your step direction by the curvature matrix, figuring out how the slopes alter along that specific path.
- $x^* \in \mathbb{R}^n$ is a specific, fixed coordinate in your parameter space where you are currently standing. It is the exact point you are testing to see if it is a local minimum.
- The $x$ in $x^T A x > 0$ is a variable vector representing a **step in any arbitrary direction** away from your anchor point $x^*$.

The resulting output ($v^T [D^2 f(x^*)] v$) is a single scalar number that represents the **directional second derivative**.

- If this value is **strictly greater than zero ($> 0$)** for _every single possible vector $v$_, it means that no matter which compass heading you choose to step toward, the slope immediately starts tilting upward
Caveat : If you find a local minimum, its Hessian matrix does _not_ have to be strictly positive definite. 
- **If $D^2f(x^*) > 0 \implies$** It is guaranteed to be a local minimum (Sufficient).
- **If it is a local minimum $\implies$** $D^2f(x^*)$ can be $> 0$ OR it can be exactly $= 0$ (like $f(x) = x^4$).

Because derivatives only look at an infinitely small neighborhood ($B_\epsilon$), passing these tests only proves you are at the bottom of _a_ valley. It does not tell you if there is a much deeper valley somewhere else on the map. To guarantee a global optimum we must look at the **convexity condition**.

Constrained Optimization
The optimal points lie on the boundaries of the feasible set, not at a local stationary point where the derivative vanishes.

In constrained optimization, the optimal point does not occur at an interior stationary point where $\nabla f = 0$. Instead, it lies _on the constraint_ $h(x) = 0$.

At the optimal point $(x^*, y^*)$, the constraint curve and the level curve of the objective function $f$ are tangent to each other. Because they are tangent, their gradient vectors $\nabla f$ and $\nabla h$ must be **parallel** at that point (parallel meaning they lie along the same line, but may point in the same or opposite directions).

This parallelism condition is written as: $$\nabla f(x^*) = \lambda , \nabla h(x^*)$$ where $\lambda \in \mathbb{R}$ is a scalar constant called the **Lagrange multiplier**. It can be positive or negative depending on whether the gradients point in the same or opposite directions.

**The Lagrangian Function**

To find the optimal point systematically, we construct the **Lagrangian**: $$\mathcal{L}(x, \lambda) = f(x) - \lambda  h(x)$$
This reformulates the original **constrained problem into an unconstrained one** — we simply look for points where $\nabla \mathcal{L} = 0$. 
This gives a system of equations: $$\frac{\partial \mathcal{L}}{\partial x} = 0 \quad \Rightarrow \quad \nabla f(x) = \lambda  \nabla h(x)$$ $$\frac{\partial \mathcal{L}}{\partial \lambda} = 0 \quad \Rightarrow \quad h(x) = 0$$

Lagrange with One Equality Constraint 
**Theorem:** Let $f, h: \mathbb{R}^n \to \mathbb{R}$ be continuously differentiable functions. Let $\bar{x}$ be a local optimum of $f$ under the constraint $h(x) = 0$. If $Dh(\bar{x}) \neq \mathbf{0}$, then there exists a Lagrange parameter $\lambda \in \mathbb{R}$ such that:
$$Df(\bar{x}) = \lambda \cdot Dh(\bar{x})$$

If $Dh(\bar{x})$ became zero, the boundary line would disappear into a flat plain, making it impossible to align vectors. This requirement is called a **Constraint Qualification**.

The geometric intuition behind finding an optimum for functions in two variables ($f, h: \mathbb{R}^2 \to \mathbb{R}$).
Contour lines (level curves) for the objective function $f$ at various values (e.g., $f=-5$, $f=1.5$, f=2$, $f=3$). Overlaid on this is a thicker curve representing the constraint set where $h(x, y) = 0$.

![[Pasted image 20260603193507.png]]


- **Transverse Intersections (Not Optimal):** The notes point to a location where the constraint curve $h=0$ simply crosses through the level curves of $f$ (like $f=3$ and $f=2$). At these intersections, the text explains: _"This will not be a local optimum of $f$ under constraints $h(x,y)=0$, bcz we can move along $\{(x,y) \mid h(x,y)=0\}$ and decrease/increase $f$."_ If the curves cross transversally, you can simply slide along the $h=0$ path to reach a lower or higher contour line of $f$.

![[Pasted image 20260603193530.png]]

- **Tangential Intersections (The Optimum):** The diagram highlights a specific point $(x^*, y^*)$ where the level curve $f=1.5$ merely touches the constraint curve $h=0$ without crossing it. At this point, the gradient vectors $\nabla h(x^*, y^*)$ and $\nabla f(x^*, y^*)$ are drawn pointing in parallel/anti-parallel directions.

![[Pasted image 20260603193554.png]]


---
To solve a constrained problem via Lagrange multipliers, we match our equations to our unknowns:
* **Vector Alignment:** $Df(\bar{x}) = \lambda Dh(\bar{x})$ yields $n$ equations.
* **Constraint Boundary:** $h(\bar{x}) = 0$ yields $1$ additional equation.
* **Total:** $n+1$ equations for $n+1$ unknowns (the vector coordinates $\bar{x}$ and the scalar $\lambda$).

Steepest Descent
When analytical solutions are impossible, we use a step-by-step algorithm to approximate local optima:

1. **Initialize:** Choose an arbitrary starting point $x_0 \in \mathbb{R}^n$.
2. **Direction Selection:** At your current position $x_k$, calculate a downward search direction vector $g_k$ such that the function decreases:
   $$\text{Direction: } g_k \in \mathbb{R}^n$$
3. **Position Update (The Step):** Compute your next location using the update rule:
   $$x_{k+1} = x_k + t_k \cdot g_k$$
   *Where $t_k > 0$ is the step length (Learning Rate).*
4. **Termination:** Halting criteria triggers when the gradient norm approaches zero ($\|\nabla f(x_k)\| \approx 0$).

#### The absolute best direction is the negative gradient ($-\nabla f(x)$).
- Given a smooth, differentiable function $f: \mathbb{R}^n \to \mathbb{R}$.
- At a position $x \in \mathbb{R}^n$ where the ground is **not** flat: $Df(x) \neq \mathbf{0}$.
- Pick an arbitrary direction vector $g \in \mathbb{R}^n$$$ \sqrt{g^T g} = \|g\| = 1$$
- The directional derivative of $f$ in $x$ into direction $g$ is $Df(x) \cdot g$
- To find the steepest descent, we want to find the direction $g^*$ that makes this directional derivative as small (as deeply negative) as possible
- The first-order **Taylor expansion** approximation:
$$f(x+g) = f(x) + DF(x) \cdot g + O(\|g\|^2)$$
We have a constrained optimization problem where the step direction $g$ is the variable we want to solve for. 
$$\min_{g} \quad DF(x) \cdot g \quad \text{subject to} \quad g^T g - 1 = 0 $$
**The Objective Function:** $DF(x) \cdot g$  (Goal is to **minimize** this function)
**The Constraint ($h(g) = 0$):** $g^T g - 1 = 0 \implies \|g\|^2 = 1$

$$\text{Gradient of Objective w.r.t. } g \implies DF(x)$$

$$\text{Gradient of Constraint } h(g) \text{ w.r.t. } g \implies \nabla_g (g^T g - 1) = 2g$$

Plugging these into the Lagrange formula ($Df = \lambda Dh$):

$$DF(x) = \lambda \cdot (2g^*)$$
$$DF(x) = \lambda \cdot g^*$$

This equation tells us that the optimal step direction $g^*$ must point along the exact same line as our gradient vector $DF(x)$.
Because our constraint forces the length of $g^*$ to be exactly $1$ ($\|g^*\| = 1$)

$$\|DF(x)\| = |\lambda| \cdot \underbrace{\|g^*\|}_{1} \implies |\lambda| = \|DF(x)\|$$
						$\lambda = \pm \|DF(x)\|$

From our original equation
$$DF(x) = \pm \|DF(x)\| \cdot g^*$$
We get
1. The Uphill Direction : $g^* = \frac{DF(x)}{\|DF(x)\|}$
2. The Downhill Direction : $g^* = -\frac{DF(x)}{\|DF(x)\|}$

To find out which one minimizes our objective function, we plug both options back into our directional derivative $DF(x) \cdot g$:
- If we plug in Option 1, we get a positive number (steepest ascent).
- If we plug in Option 2, we get a negative number: $- \frac{DF(x) \cdot DF(x)}{\|DF(x)\|} = -\|DF(x)\|$ (steepest descent).

- $$g^* = - \frac{Df(x)}{\|Df(x)\|}$$
- The raw gradient vector $Df(x)$ naturally points straight **uphill** (steepest ascent). A negative sign  flips the arrow completely around so it points straight **downhill** (steepest descent).


---
>Steepest descent is an important iteration procedure which is for example used in the Backpropagation algorithm.

As you cannot analytically calculate the perfect weights for a neural network all at once. Instead, you map out a massive error landscape called a **Loss Function**, $L(w)$.

1. **The Forward Pass:** The network makes a prediction, and you calculate the total error ($f(x)$ in your notes represents this loss value).
2. **The Backward Pass (Backpropagation):** The algorithm uses the chain rule to compute the exact partial derivatives of that error with respect to every single weight in the model. This compiles the giant gradient vector, $DF(w)$.
3. **The Step (Steepest Descent):** We then flips that gradient vector around to find the direction of steepest descent ($g^* = -DF(w)$) and shifts the weights of the network a tiny fraction in that direction to minimize the error.


---
Optimization Under Inequality Constraints : **Karush-Kuhn-Tucker (KKT) Conditions**

When optimizing an objective function $f(x)$ subject to inequality constraints $g_j(x) \ge 0$, the feasible region is defined by a set of inequalities. 
To characterize the local optima within this region, the classical Lagrange multiplier approach is generalized into the Karush-Kuhn-Tucker (KKT) conditions.

Simple Analogy : 
When a constraint is an _equality_ ($h(x)=0$), you are forced to walk exactly on top of a thin fence. When a constraint is an _inequality_ ($g_j(x) \ge 0$), you are dealing with an entire **allowable region** (a yard). You can walk anywhere inside the yard ($g_j(x) > 0$), or you can walk right up against the perimeter fence ($g_j(x) = 0$).

At any candidate local minimum $\bar{x}$, the constraint set $J$ is partitioned based on the evaluation of $g_j(\bar{x})$:

- **Active Constraints ($J_0$):** Defined as $J_0(\bar{x}) = \{ j \in J \mid g_j(\bar{x}) = 0 \}$. The candidate point lies exactly on the boundary of these constraints.
- **Inactive Constraints:** Constraints where $g_j(\bar{x}) > 0$. The candidate point lies strictly in the interior of the feasible region with respect to these boundaries.

- **Regularity Condition (LICQ):** We assume the Linear Independence Constraint Qualification holds; specifically, the gradients of all active constraints, $\{ Dg_j(\bar{x}) \mid j \in J_0(\bar{x}) \}$, are linearly independent.
	- The **Linear Independence Constraint Qualification (LICQ)** is a regularity condition in nonlinear optimization. At a feasible point x∗ for a problem with equality constraints h(x)=0 and inequality constraints g(x)≤0, **LICQ holds if the set of gradients of all equality constraints and of all active inequality constraints is linearly independent**.
	- When LICQ holds at a local minimizer, KKT multipliers exist and are unique.

The **Stationarity Condition** : At a local minimum $\bar{x}$, the gradient of the objective function must be equal to a linear combination of the gradients of the **active** constraints:

$$Df(\bar{x}) = \sum_{j \in J_0(\bar{x})} \mu_j \cdot Dg_j(\bar{x})$$
- **$Df(\bar{x})$:** The gradient vector of your objective function. It points in the direction of steepest ascent.
- **$Dg_j(\bar{x})$:** The gradient vectors of your active constraints (the boundaries you are physically touching).
- **$\mu_j$:** The scaling weights (Lagrange multipliers) for those active constraints
- **Non-Negativity of Multipliers:** Unlike equality constraints, the KKT multipliers for inequalities must be non-negative ($\mu_j \ge 0$). This ensures that the gradient of the objective function is opposed exclusively by vectors pointing _inward_ toward the feasible region, preventing further descent.

To unify the stationarity condition across the entire constraint set $J$ (without explicitly partitioning $J_0$), we introduce the **Complementary Slackness** condition:

$$\mu_j \cdot g_j(\bar{x}) = 0, \quad \forall j \in J$$

- If a constraint is **inactive** ($g_j(\bar{x}) > 0$, If there is Slack), its corresponding Lagrange multiplier must be strictly zero ($\mu_j = 0$), eliminating its gradient from the stationarity equation.
- If a constraint is **active** ($g_j(\bar{x}) = 0$), its corresponding Lagrange multiplier may be positive ($\mu_j \ge 0$).

Identifying exactly which constraints belong to the active set $J_0$ beforehand is computationally difficult for a computer.

By enforcing Complementary Slackness ($\mu_j g_j = 0$), we don't have to partition the constraints into "active" and "inactive" sets. We can rewrite the earlier stationarity condition to sum over **every single constraint in the entire system** (the set $J$):

$$Df(\bar{x}) = \sum_{j \in J} \mu_j \cdot Dg_j(\bar{x})$$

An active inequality constraint is simply a temporary equality constraint that only works in one direction.

If your algorithm's objective function gradient is trying to drag you into the wall, the wall pushes back (μ>0). But if your algorithm decides to turn around and walk back into the grass, the wall instantly stops affecting you, the constraint becomes inactive, and its multiplier drops to zero (μ=0).