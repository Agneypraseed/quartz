
A **classical RBF network** is almost always described as having:
- **Input Layer:** Receives the input vector $x \in \mathbb{R}^n$.
- **Feature Layer:** A non-linear feature map that calculates the activation based on the distance from the input to defined "center" points.
- **Output Layer:** Computes a simple, weighted linear sum of the feature layer's outputs.

To compute the function of an RBF network, we define $m$ "center points" in the input space: $c_i \in \mathbb{R}^n$ (where $1 \leq i \leq m$).

**The Feature Map (Hidden Layer):**

For each center $c_i$, the neuron computes a component $\varphi_i : \mathbb{R}^n \to \mathbb{R}$ using a Gaussian function:

$$\varphi_i(x) = \exp\left( - \frac{\|x - c_i\|_2^2}{\sigma_i^2} \right)$$

- **$c_i$**: The center of the receptive field.
- **$\|x - c_i\|_2^2$**: The squared Euclidean distance between the input data and the center.
- **$\sigma_i^2$**: Controls the width (variance) of the receptive field.

- If the input $x$ is exactly equal to the center $c_i$, the distance is $0$. The math becomes $\exp(0) = \mathbf{1}$. The neuron outputs its maximum value.
- As $x$ moves further away from $c_i$, the negative exponent grows larger. $\exp(-\text{large number})$ approaches $\mathbf{0}$.

**The Final Output:**
The network produces its final prediction by calculating the weighted linear combination of all $m$ feature maps:

$$\text{Output} = \sum_{i=1}^m w_i \cdot \varphi_i(x)$$

---

While the Gaussian $\exp$ function is the standard, other mathematical distance functions can be used for the feature mapping, such as:

- **Multiquadratics:** $f(t) = \sqrt{t^2 + c^2}$, where $c > 0$ is constant.
- **Inverse Multiquadratics:** $f(t) = \frac{1}{\sqrt{t^2 + c^2}}$ 
_(Where $t$ represents the distance $\|x - c\|$)_

---
 When the number of RBF centers ($m$) is kept strictly smaller than the number of data points ($T$) ( $m \ll T$ ) exact interpolation is impossible. The network must instead find the optimal weights $w$ that minimize the overall prediction error.
    
- **The Objective Function $E(w)$:**
    We define the standard Sum of Squared Errors objective function
    $$E(w) = \frac{1}{2} \sum_{t=1}^T \left[ \underbrace{\sum_{i=1}^m w_i \exp \left( - \frac{\|x(t) - c_i\|_2^2}{\sigma^2} \right)}_{\text{RBF Network Output}} - \underbrace{y(t)}_{\text{Target}} \right]^2$$

- The hidden layer of an RBF network is non-linear, but the output layer is purely a linear sum, finding these weights is actually much, much easier than Backpropagation

---
Before we even touch the weights or the objective function, we just look at the raw input data. We use a grouping algorithm (like **K-Means Clustering**) to find natural "clusters" or hotspots in the data, and we drop a center ($c$) in the middle of each cluster.

Assuming we have already chosen our $m$ center points ($c_1 \dots c_m$), the task of finding the perfect weights for interpolation can be written as a single matrix multiplication problem.

Let:

- $Y$: A column vector $(T \times 1)$ containing all the true target measurements $y(1) \dots y(T)$.
- $w$: A column vector $(m \times 1)$ containing the unknown weights $w_1 \dots w_m$ that we need to solve for.
- $M$: The Design Matrix (or Activation Matrix) of size $\mathbb{R}^{T \times m}$.

The interpolation problem requires us to find a weight vector $w$ such that:

$$\begin{pmatrix} y_{(1)} \\ y_{(2)} \\ \vdots \\ y_{(T)} \end{pmatrix} = M \cdot \begin{pmatrix} w_1 \\ \vdots \\ w_m \end{pmatrix}$$

The matrix $M$ stores the activation value of _every_ hidden neuron for _every_ data point in the training set.

$$M = \begin{pmatrix} \varphi_1(x(1)) & \varphi_2(x(1)) & \dots & \varphi_m(x(1)) \\ \varphi_1(x(2)) & \varphi_2(x(2)) & \dots & \varphi_m(x(2)) \\ \vdots & \vdots & \ddots & \vdots \\ \varphi_1(x(T)) & \varphi_2(x(T)) & \dots & \varphi_m(x(T)) \end{pmatrix}$$

- **Rows (Data Points):** Each row represents a single test point $x(t)$ from the dataset. 
- **Columns (Hidden Neurons):** Each column represents one specific hidden RBF neuron (defined by its center $c_i$).

Calculating the optimal weight vector $w$ depends entirely on the ratio of training data points ($T$) to chosen RBF centers ($m$).

Case 1: T<m (Under-determined)
- The system has fewer equations than unknowns.
- There are infinitely many exact solutions.

Case 2: $T = m$ (Square System / Strict Interpolation)

- The number of data points exactly matches the number of centers.
	 As long as all chosen centers $c_i$ are distinct, matrix $M$ is guaranteed to be non-singular (invertible).
- $$w = M^{-1} \cdot Y$$
Case 3: $T > m$ (Over-determined / Approximation)
- The system has more data points than centers.
- Matrix $M$ is rectangular ($T \times m$) and therefore has no standard inverse. Exact interpolation is impossible.
- We must find the weights that minimize the Sum of Squared Errors. We solve this using the **Moore-Penrose Pseudo-Inverse** ($M^+$):
  $$w = (M^T M)^{-1} M^T \cdot Y$$  

The scalar summation form of the error function is:

$$E(w) = \frac{1}{2} \sum_{t=1}^T \Big( (Mw)_t - y(t) \Big)^2$$

Using the dot product property of vectors ($v^T v = \sum v_i^2$) with error vector be $(y - Mw)$:

$$E(w) = \frac{1}{2} (y - Mw)^T (y - Mw)$$

$$E(w) = \frac{1}{2} \left( y^T y - 2y^T Mw + w^T M^T Mw \right)$$

- $y \in \mathbb{R}^{T \times 1}$: Column vector of true target values.
- $M \in \mathbb{R}^{T \times m}$: The RBF activation matrix.
- $w \in \mathbb{R}^{m \times 1}$: Column vector of the unknown weights.

**The Necessary Optimality Condition:**

$$\frac{\partial E}{\partial w}(w^*) = -M^T y + M^T M w^* = 0$$

$$M^T M w^* = M^T y$$

**Solving for** $w^*$**:** If the resulting square $m \times m$ matrix $(M^T M)$ is invertible

$$w^* = \underbrace{(M^T M)^{-1} M^T}_{\text{Pseudo-Inverse of } M} y$$

$(M^T M)^{-1} M^T$, is known as the **Moore-Penrose Pseudo-Inverse** (often denoted as $M^+$). It allows us to mathematically find the "line of best fit" for a rectangular matrix.

- **Singular Value Decomposition:** In general, if the matrix $M^T M$ is singular one can follow similar approaches to define a pseudo-inverse using the Singular Value Decomposition (SVD) of the matrix.
- **Regularization:** Another common way to regularize the problem (fix the singularity/instability) is to add a small mathematical penalty $\lambda$ to the diagonal of the matrix before inverting it:
$$w^* = (M^T M + \lambda I_d)^{-1} M^T y \quad \text{for } \lambda > 0$$
    _(Where_ $I_d$ _is the Identity Matrix. In machine learning, this trick is commonly known as Ridge Regression!)_


---
The RBF Learning Algorithm

Choose the Centers ($c_i$)
- The center points of the hidden neurons must be fixed before weight calculation begins.
- **Method:** This is usually done using various heuristics. A common, simple approach is to randomly select a subset of the actual test points $x(t)$ to serve as the centers. More advanced methods involve clustering algorithms like K-Means. 
	- **Orthogonal Least Squares (OLS) Reduction:** (Chen, Billings, Cowan 1989/1991). 
	 A forward-selection algorithm that builds the RBF hidden layer iteratively. It selects data points to serve as centers one by one, choosing the point that provides the maximum reduction in the residual error at each step.
	    **Gram-Schmidt Orthogonalization:** The OLS algorithm orthogonalizes the chosen feature vectors at each step. This guarantees that each newly added center captures unique variance in the data that previous centers failed to explain.
	    Like **Principal Component Analysis** OLS acts as a dimensionality reduction technique, identifying the most critical "components" (centers) that represent the underlying structure of the data.

Choose the Spread/Width ($\sigma_i$)
- Once the centers are placed, you must define the variance for each Gaussian receptive field.
- **Method:** This determines how strongly nearby points activate the neuron. Often, a single global $\sigma$ is chosen based on the average distance between the chosen centers.
- **The $d_{max}$ Heuristic:**

$$\sigma_i = \sigma = \frac{d_{max}}{\sqrt{m}}$$

	- $d_{max}$: The maximal Euclidean distance between any two chosen centers in the network.
	- $m$: The total number of chosen centers.


Solve for the Weights ($w^*$)
- With the hidden layer locked, the network must find the optimal linear weights connecting the hidden layer to the output.
- The optimal weights can be found using the Pseudo-Inverse equation (): $w^* = (M^T M)^{-1} M^T y$.
- Computing a matrix inverse is computationally prohibitive (scaling at $O(N^3)$ complexity).
- To avoid computing the inverse, we start with a randomized initial weight vector $w^{(0)}$ and use an iterative numerical optimization algorithm (such as Steepest Descent / Least Mean Squares) to approximate $w^*$.


Orthogonal Least Squares (OLS) algorithm
The goal of OLS is to compute an "energy function" (a measure of variance or information) for the network. By evaluating this function, we can determine exactly how much a specific test point contributes to reducing the overall error if it is selected to be a center.

**The Pruning Strategy:**
1. Start by defining the activation matrix $M$ as if _every single test point_ is a center (yielding a $T \times T$ square matrix).
2. Evaluate the energy contribution of each column.
3. Systematically remove the columns (centers) that contribute the least energy, reducing the dimension from $T$ down to $m$.

For any given choice of weight vector $w$, the network outputs a prediction vector $\hat{y} = Mw$. The difference between the true target values ($y$) and the network's prediction is the error vector ($e$).
$$y = M \cdot w + e$$
- **The Subspace:** The columns of the design matrix $M$ span a specific subspace in $\mathbb{R}^T$. This subspace represents all possible outputs the current RBF network can mathematically generate.
- **The Projection (**$\hat{y}$**):** The optimal network prediction $\hat{y}$ is exactly the **orthogonal projection** of the true target vector $y$ onto the column space of $M$.
- **The Error (**$e$**):** Because it is an orthogonal projection, the optimal error vector $e$ is perfectly perpendicular (orthogonal) to the column space of $M$.

Because $\hat{y}$ is a projection, we can use the Pythagorean theorem (or Gram-Schmidt orthogonalization) to cleanly separate the "energy" (variance) of $\hat{y}$ into individual chunks provided by each individual column of $M$. We then simply select the centers whose columns provide the largest chunks of energy.



