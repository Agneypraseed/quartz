
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

**The Final Output:**
The network produces its final prediction by calculating the weighted linear combination of all $m$ feature maps:

$$\text{Output} = \sum_{i=1}^m w_i \cdot \varphi_i(x)$$

While the Gaussian $\exp$ function is the standard, other mathematical distance functions can be used for the feature mapping, such as:

- **Multiquadratics:** $f(t) = \sqrt{t^2 + c^2}$, where $c > 0$ is constant.
- **Inverse Multiquadratics:** $f(t) = \frac{1}{\sqrt{t^2 + c^2}}$ 
_(Where $t$ represents the distance $\|x - c\|$)_



