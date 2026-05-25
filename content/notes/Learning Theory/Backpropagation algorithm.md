We are given $T$ test points $X^{(1)}, \dots, X^{(T)} \in \mathbb{R}^n$, together with measurements $f(X^{(t)}) \in \mathbb{R}$, where $f$ is some unknown function.

Our goal is to approximate $f$ at the given test points by a function $f_w$ computed by a feed-forward neural network. The approximation is obtained by minimizing the sum of squared errors over the test points.

Without loss of generality, we assume that:
- there are $n$ input neurons,
- and two hidden layers, each containing $n$ neurons.

Let $n_k^{(1)}$ denote the $k$-th neuron in the first hidden layer.

Let $w_{jk}^{(1)}$ be the weight connecting neuron $k$ in layer 1 with neuron $j$ in layer 2.

As activation function, we take for all neurons
$\varphi(t) = \frac{1}{1 + e^{-t}}$

Recall that the derivative of $\varphi(t)$ can be expressed in terms of $\varphi$ itself.

The problem variables are the weights $w = (w_0, w_1, \dots, w_n) \in \mathbb{R}^{2n^2+n}$.

We disregard biases.

In this way, the output of $N_w$ always belongs to $(0,1)$. If the measurements take different values, one first has to perform the well-known normalization steps.

Let $y_k^{(i)}$ denote the output signal of neuron $n_k^{(i)}$. Then neuron $n_j^{(i+1)}$ receives as input

$v_j^{(i+1)} = \sum_{k=1}^{n} w_{jk}^{(i)} \, y_k^{(i)}$,

and its output is given by

$y_j^{(i+1)} = \varphi(v_j^{(i+1)})$.

The objective function is 

$E(W) = \frac{1}{2} \sum_{t=1}^{T} \big(N_w(X(t)) - f(X(t))\big)^2$ (sum of squared errors)

Goal: find an unconstrained minimizer $w^* \in \mathbb{R}^{2n^2+n}$ of $E(W)$ such that $E(w^*) \leq E(w)$ for all $w$.

The objective function is a:
> **high-dimensional, smooth, non-convex empirical risk functional defined over a nonlinear parameterization of a feedforward neural network**

In general, we cannot expect numerical optimization methods such as steepest (gradient) descent to converge to a global minimum of the objective. Gradient descent is a local method: it follows the negative gradient toward stationary points, but in non-convex landscapes there is no general guarantee of reaching the global minimum.

Remark :
- New test points can be added without changing the structure of the model, since the objective is defined as a sum over samples.
- The structure of the network $N_w$ determines the structure of the objective function $E(w)$ and therefore has a fundamental impact on how well different target functions $f$ can be approximated. This is a central topic in approximation theory.
- For the application of steepest descent methods, the activation function $\varphi$ must be differentiable, since gradient-based optimization requires the existence of $\nabla E(w)$, which is computed via the chain rule through $\varphi$.

### Backpropagation (high-level view)

Choose an initial parameter vector $w_0$.

Step $k$

Assume $w_k$ is already computed. Then compute $w_{k+1}$ via:

$$  
w_{k+1} = w_k - \eta \nabla E(w_k), \quad \eta > 0  
$$

where:

- $\eta$ is the **learning rate**
    
- $\nabla E(w_k)$ is the gradient of the loss at $w_k$
    
### Backpropagation (high-level view)

Choose an initial parameter vector $w_0$.

In Step $k$

Assume $w_k$ is already computed. Then compute $w_{k+1}$ via:
$$  
w_{k+1} = w_k - \eta \nabla E(w_k), \quad \eta > 0  
$$
where:
- $\eta$ is the **learning rate**
- $\nabla E(w_k)$ is the gradient of the loss at $w_k$

- $-\nabla E(w_k)$ is the **steepest descent direction** of $E$ at $w_k$
- The update moves parameters in the direction of maximal local decrease of the objective

Backpropagation is the procedure used to compute $\nabla E(w_k)$ efficiently using the chain rule through the network, while the update above is the actual optimization step (gradient descent).

The main point of backpropagation is that the computation of $\nabla_w E(w)$ aligns extremely well with the layered structure of the neural network. This structural compatibility allows the gradient to be computed efficiently by reusing intermediate quantities computed during the forward pass.
To see this, one must carry out a sequence of explicit (and somewhat tedious) derivative computations, applying the chain rule systematically through the layers of the network.

Backpropagation is efficient because the chain rule factorization matches the computational graph of the network.
- The network is a **compositional map**
    $X→layer1→layer2→..→output$
- gradients propagate naturally **in reverse order of this composition**
So instead of recomputing derivatives repeatedly, backprop:
- stores intermediate activations
- reuses them during gradient computation

---
First rule 

The earlier a weight appears in the network, the more indirect and complex its influence on the objective function (E(w)). This is because its effect propagates through multiple subsequent layers via repeated nonlinear transformations.

For this reason, backpropagation proceeds from the output layer backward toward the input layer.

We therefore start by computing partial derivatives with respect to the weights in the last layer, i.e.  
$$  
\frac{\partial E}{\partial w_{jk}^{(L-1)}}  
$$

and then propagate these derivatives backward through the network using the chain rule.

Influence of weights $(w_{1k}^{(2)})$

The weights $(w_{1k}^{(2)})$, for $(1 \le k \le n)$, influence neuron $(n_1^{(3)})$ through the second hidden layer.

The loss function is:

$$  
E(w) = \frac{1}{2} \sum_{t=1}^{T} \big(f(X(t)) - y_1^{(3)}(t)\big)^2  
$$

where the output neuron is given by:

$$  
y_1^{(3)}(t)

\varphi\left(\sum_{k=1}^{n} w_{1k}^{(2)}, y_k^{(2)}(t)\right)  
$$

Substituting this into the objective gives:

$$  
E(w)

\frac{1}{2} \sum_{t=1}^{T}  
\left(  
f(X(t)) -  
\varphi\left(\sum_{k=1}^{n} w_{1k}^{(2)}, y_k^{(2)}(t)\right)  
\right)^2  
$$

Thus from those weight the steepest descent update is 
wij 2= wij2+ n*sum t=1 to T e1 3 (t). y1 3(t) . (1-y)1 3(t). yj 2(t)
where  e1 3 (t). y1 3(t) . (1-y)1 3(t) is S1 3(t) is local grafient 


note the update is easlity computable from the 
- erro of the ouput
- the ouput itslef y1 3(t) itself
- the output signal yj 2 t in layer 2