**The Data:** We are given $T$ test points $X^{(1)}, \dots, X^{(T)} \in \mathbb{R}^n$, together with measurements $f(X^{(t)}) \in \mathbb{R}$, where $f$ is some unknown function.

**The Objective:** Our goal is to approximate $f$ at the given test points by a function $f_w$ computed by a feed-forward neural network. 

**The Cost Function:** Approximation is achieved by minimizing the **Sum of Squared Errors (SSE)** across all $T$ test points. (Unlike LMS, which minimized instantaneous error, this is a batch approach).

Without loss of generality, we assume that:
- there are $n$ input neurons,
- and two hidden layers, each containing $n$ neurons.

Let $n_k^{(1)}$ denote the $k$-th neuron in the first hidden layer.

Let $w_{jk}^{(1)}$ be the weight connecting neuron $k$ in layer 1 with neuron $j$ in layer 2.

As activation function, we take for all neurons
$\varphi(t) = \frac{1}{1 + e^{-t}}$

The derivative of $\varphi(t)$ can be expressed in terms of $\varphi$ itself. $$\varphi'(t) = \varphi(t) \cdot (1 - \varphi(t))$$

The flow of error signals backward through a Feed-Forward Neural Network.

![[Pasted image 20260619004732.png]]
- **$e(t)$:** The raw instantaneous error (Target $-$ Output) at timestep $t$.
    
- **$y_k^{(L)}$:** The actual numerical output of neuron $k$ in layer $L$ during the forward pass.
    
- **$y_k^{(L)}(1 - y_k^{(L)})$:** The derivative of the Sigmoid activation function
    
- **$\delta_k^{(L)}$ (Local Gradient):** The exact amount of "error responsibility" assigned to neuron $k$ in layer $L$.

The Sum of Squared Errors : $\mathcal{E} = \frac{1}{2}(Target - Output)^2$

The Blame is the derivative of the Total Error with respect to a specific neuron's raw input ($v$): $\delta = \frac{\partial \mathcal{E}}{\partial v}$

The blame ($\delta$) for the final output neuron is :

****$\delta_1^{(3)}$ = (The Raw Error) $\times$ (The Sigmoid Derivative)**

$$\delta = (Target - Output) \times [y(1 - y)]$$

- **Single Connection (Layer 2):** If a hidden neuron $j$ connects to only one output neuron, its local gradient is the subsequent $\delta$ multiplied by the connecting weight, passed through its own derivative:
    $$\delta_j^{(2)} = \left( \delta_1^{(3)} \cdot w_{1j}^{(2)} \right) \cdot \left[ y_j^{(2)}(1 - y_j^{(2)}) \right]$$
	The error blame for Neuron $j$ in Layer 2 is = (The delta from Neuron 1 in the NEXT layer) * (The weight connecting them) * (The derivative of the sigmoid in Neuron $j$).

- **Multiple Connections (The Summation at Layer 1):** If a hidden neuron $k$ connects to multiple neurons in the next layer, we must sum the backward-flowing error signals from _all_ connected neurons (denoted by the $\Sigma$ node in the diagram).
    
    $$\delta_k^{(1)} = \left( \sum_{i} \delta_i^{(2)} \cdot w_{ik}^{(1)} \right) \cdot \left[ y_k^{(1)}(1 - y_k^{(1)}) \right]$$

---

The problem variables are the weights $w = (w_0, w_1, \dots, w_n) \in \mathbb{R}^{2n^2+n}$.

We disregard biases.

Because the network utilizes the Sigmoid activation function $\varphi(t) = \frac{1}{1 + e^{-t}}$, the final output of the network $N_w$ is strictly bounded: **$N_w \in (0, 1)$**.
- If the true target measurements of the dataset fall outside the $(0, 1)$ range, the network cannot mathematically reach them. Therefore, a necessary preprocessing step is to **normalize the dataset** so all target values fall within the reachable bounds of the activation function.

Let $y_k^{(i)}$ denote the output signal of neuron $n_k^{(i)}$. Then neuron $n_j^{(i+1)}$ receives as input

$v_j^{(i+1)} = \sum_{k=1}^{n} w_{jk}^{(i)} \, y_k^{(i)}$,

and its output is given by

$y_j^{(i+1)} = \varphi(v_j^{(i+1)})$.

The objective function is 

$E(W) = \frac{1}{2} \sum_{t=1}^{T} \big(N_w(X(t)) - f(X(t))\big)^2$ (sum of squared errors)

The ultimate optimal weight vector $w^*$ lives in the dimension $\mathbb{R}^{2n^2+n}$.
- Input layer ($n$) to Hidden 1 ($n$) = $n \times n = n^2$ weights.
- Hidden 1 ($n$) to Hidden 2 ($n$) = $n \times n = n^2$ weights.
- Hidden 2 ($n$) to Output ($1$) = $n \times 1 = n$ weights.
- For a network with $n$ inputs, two hidden layers of $n$ neurons, and $1$ output, the total number of optimized parameters (ignoring biases) is **$2n^2 + n$**

Goal: find an unconstrained minimizer $w^* \in \mathbb{R}^{2n^2+n}$ of $E(W)$ such that $E(w^*) \leq E(w)$ for all $w$, to find the unconstrained minimizer $w^*$ that minimizes the total Sum of Squared Errors across all $T$ test points.

The objective function is a:
> **high-dimensional, smooth, non-convex empirical risk functional defined over a nonlinear parameterization of a feedforward neural network**

Remark :
- New test points can be added without changing the structure of the model, since the objective is defined as a sum over samples.
- The structure of the network $N_w$ determines the structure of the objective function $E(w)$ and therefore has a fundamental impact on how well different target functions $f$ can be approximated. This is a central topic in approximation theory.
- In general, we cannot expect numerical optimization methods such as steepest (gradient) descent to converge to a global minimum of the objective. Gradient descent is a local method: it follows the negative gradient toward stationary points, but in non-convex landscapes there is no general guarantee of reaching the global minimum.
- For the application of steepest descent methods, the activation function $\varphi$ must be differentiable, since gradient-based optimization requires the existence of $\nabla E(w)$, which is computed via the chain rule through $\varphi$. If the math has a sharp corner (like a step function), the derivative is undefined, the chain rule breaks, and Backpropagation completely fails.

----
### Backpropagation (high-level view)

Choose an initial parameter vector $w_0$.

In Step $k$

Assume $w_k$ is already computed. Then compute $w_{k+1}$ via:
$$  
w_{k+1} = w_k - \eta \nabla E(w_k), \quad \eta > 0  
$$
where:
- $\eta$ is the **learning rate**
- $\nabla E(w_k)$ is the gradient of the loss at $w_k$,  the **steepest descent direction** of $E$ at $w_k$
- The update moves parameters in the direction of maximal local decrease of the objective

Backpropagation is the procedure used to compute $\nabla E(w_k)$ efficiently using the chain rule through the network, while the update above is the actual optimization step (gradient descent).

**The main breakthrough of backpropagation algo is that the computation of $\nabla_w E(w)$ aligns extremely well with the layered structure of the neural network.**
- This structural compatibility allows the gradient to be computed efficiently by reusing intermediate quantities computed during the forward pass.

To see this, one must carry out a sequence of explicit (and somewhat tedious) derivative computations, applying the chain rule systematically through the layers of the network.

Backpropagation is efficient because the chain rule factorization matches the computational graph of the network.
- The network is a **compositional map**
    $X→layer1→layer2→..→output$
- gradients propagate naturally **in reverse order of this composition**
So instead of recomputing derivatives repeatedly, backprop:
- stores intermediate activations
- reuses them during gradient computation

1. **Layer 3 (The Output):** Looks at the final error, calculates its own derivative, and gets a "blame score" ($\delta$). It hands that number to the wires pointing backward.
2. **Layer 2 (Hidden):** Layer 2 _doesn't even look at the final error_. It just catches the $\delta$ number from Layer 3, multiplies it by its own derivative, and hands the new number backward.
3. **Layer 1 (Input):** Catches the number from Layer 2, multiplies it by its own derivative, and uses it to update its weights.

---
The earlier a weight appears in the network, the more indirect and complex its influence on the objective function (E(w)). This is because its effect propagates through multiple subsequent layers via repeated nonlinear transformations.

For this reason, backpropagation proceeds from the output layer backward toward the input layer.

We therefore start by computing partial derivatives with respect to the weights in the last layer, i.e.  
$$  
\frac{\partial E}{\partial w_{jk}^{(L-1)}}  
$$

and then propagate these derivatives backward through the network using the chain rule.


The loss function is:

$$  
E(w) = \frac{1}{2} \sum_{t=1}^{T} \big(f(X(t)) - y_1^{(3)}(t)\big)^2  
$$

where the output neuron is given by:

$$  
y_1^{(3)}(t) = \varphi\left(\sum_{k=1}^{n} w_{1k}^{(2)}. y_k^{(2)}(t)\right)  
$$

Substituting this into the objective gives:

$$  
E(w) = 
\frac{1}{2} \sum_{t=1}^{T}  
\left(  
f(X(t)) -  
\varphi\left(\sum_{k=1}^{n} w_{1k}^{(2)} . y_k^{(2)}(t)\right)  
\right)^2  
$$

$y_k^{(2)}$ (the outputs of the previous layer) have already been calculated during the forward pass, they are treated as **constants** that are independent of the current weight $w_{1k}^{(2)}$ being optimized.

The partial derivative of $\mathcal{E}$ with respect to a single, specific weight $w_{1j}^{(2)}$


$$\frac{\partial \mathcal{E}}{\partial w_{1k}^{(2)}} = \sum_{t=1}^T \left( \underbrace{\frac{\partial \mathcal{E}}{\partial y_1^{(3)}}}_{\text{Part 1}} \times \underbrace{\frac{\partial y_1^{(3)}}{\partial v_1^{(3)}}}_{\text{Part 2}} \times \underbrace{\frac{\partial v_1^{(3)}}{\partial w_{1k}^{(2)}}}_{\text{Part 3}} \right)$$
$$\mathcal{E} = \frac{1}{2} \Big( f(x) - y_1^{(3)} \Big)^2$$

$$\frac{\partial \mathcal{E}}{\partial y_1^{(3)}} = \mathbf{-1 \cdot \Big( f(x) - y_1^{(3)} \Big)}$$

$$y_1^{(3)} = \varphi(v_1^{(3)})$$

$$\frac{\partial y_1^{(3)}}{\partial v_1^{(3)}} = \mathbf{y_1^{(3)} \cdot (1 - y_1^{(3)})}$$

$$v_1^{(3)} = w_{11}^{(2)}y_1^{(2)} + w_{12}^{(2)}y_2^{(2)} + \dots + w_{1k}^{(2)}y_k^{(2)} + \dots + w_{1n}^{(2)}y_n^{(2)}$$

We are only taking the derivative with respect to **one specific weight**: $w_{1k}^{(2)}$, this means every other weight in that long addition problem is treated as a constant.
$$\frac{\partial v_1^{(3)}}{\partial w_{1k}^{(2)}} = \mathbf{y_k^{(2)}}$$

$$\frac{\partial \mathcal{E}}{\partial w_{1k}^{(2)}} = \sum_{t=1}^T \underbrace{-1 \cdot \Big( f(x(t)) - y_1^{(3)}(t) \Big)}_{\text{Part 1}} \cdot \underbrace{y_1^{(3)}(t) \Big( 1 - y_1^{(3)}(t) \Big)}_{\text{Part 2}} \cdot \underbrace{y_k^{(2)}(t)}_{\text{Part 3}}$$


Substituting this gradient into the standard Steepest Descent formula ($w_{new} = w_{old} - \eta \nabla \mathcal{E}$)

We mathematically group the raw error and the sigmoid derivative into a single term called the **local gradient** or **$\delta$ (Delta)**:

$$\delta_1^{(3)}(t) = e_1^{(3)}(t) \cdot y_1^{(3)}(t) \cdot (1 - y_1^{(3)}(t))$$

$$w_{1j}^{(2), new} = w_{1j}^{(2)} - \eta \cdot \frac{\partial \mathcal{E}}{\partial w_{1j}^{(2)}}$$

$$w_{1j}^{(2), new} = w_{1j}^{(2)} - \eta \cdot \left[ \sum_{t=1}^T \mathbf{-1} \cdot \Big( f(x(t)) - y_1^{(3)}(t) \Big) \cdot y_1^{(3)}(t) \Big( 1 - y_1^{(3)}(t) \Big) \cdot y_j^{(2)}(t) \right]$$

$$w_{1j}^{(2), new} = w_{1j}^{(2)} \mathbf{+} \eta \sum_{t=1}^T \Big[ \big( f(x(t)) - y_1^{(3)}(t) \big) \cdot y_1^{(3)}(t) \big( 1 - y_1^{(3)}(t) \big) \cdot y_j^{(2)}(t) \Big]$$

$$w_{1j}^{(2), new} = w_{1j}^{(2)} + \eta \sum_{t=1}^T \Big( \delta_1^{(3)}(t) \cdot y_j^{(2)}(t) \Big)$$

Therefore updating a weight requires almost no new computation
-  The error of the output (already calculated).
-  The output of the Sigmoid itself (already calculated).
-  The signal coming from the previous layer (already calculated).

Calculating the gradient for the Hidden Layer ($w^{(1)}$) :
For a hidden layer, **there is no "Target."** The data set doesn't tell Neuron $j$ in Layer 2 what its output _should_ have been.

For Layer 2:
**$$\delta_j^{(2)} = \Big( \delta_1^{(3)} \cdot w_{1j}^{(2)} \Big) \cdot \Big[ y_j^{(2)}(1 - y_j^{(2)}) \Big]$$
$$w_{jk}^{(1), new} = w_{jk}^{(1)} + \eta \sum_{t=1}^T \Big( \delta_j^{(2)}(t) \cdot y_k^{(1)}(t) \Big)$$

For Layer 1 :
$$\delta_k^{(1)} = \left( \mathbf{\sum_{j=1}^n} \delta_j^{(2)} \cdot w_{jk}^{(1)} \right) \cdot \Big[ y_k^{(1)}(1 - y_k^{(1)}) \Big]$$
$$w_{ki}^{(0), new} = w_{ki}^{(0)} + \eta \sum_{t=1}^T \Big( \delta_k^{(1)}(t) \cdot x_i(t) \Big)$$
- **Layer 3:** Look at the target, calculate $\delta_1^{(3)}$. Update Layer 3's weights.
- **Layer 2:** Catch the $\delta$ from Layer 3. Calculate $\delta_j^{(2)}$. Update Layer 2's weights.
- **Layer 1:** Catch all the $\delta$'s from Layer 2. Calculate $\delta_k^{(1)}$. Update Layer 1's weights.