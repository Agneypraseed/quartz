Hidden Layers in Neural Networks (Geometric View)

A **hidden layer** does not produce a single value.  It produces a vector of values : one per neuron.

A hidden layer can be written as:

$H(x) = (h_1(x), h_2(x), \dots, h_m(x))$

So instead of mapping:

$x \rightarrow \mathbb{R}$ it maps: $x \rightarrow \mathbb{R}^m$

Each neuron is a separate function:

$h_i(x) = \sigma(w_i^T x + b_i)$

So:
- each neuron has its own weights $w_i$
- each neuron defines its own hyperplane
- each neuron detects a different pattern

Example in 2D input space

Let $x = (x_1, x_2)$ and a hidden layer with 3 neurons.

Neuron 1

$h_1(x) = \sigma(x_1 + x_2 - 1)$

Detects:
- whether the point lies above the line $x_1 + x_2 = 1$

Neuron 2

$h_2(x) = \sigma(x_1 - x_2)$

Detects:
- which side of the line $x_1 = x_2$ the point lies on

Neuron 3

$h_3(x) = \sigma(-x_1 + 2x_2)$

Detects:
- another linear boundary in input space

The layer output is:

$H(x) = (h_1(x), h_2(x), h_3(x))$

So instead of the original input $(x_1, x_2)$ we now have a transformed representation $(h_1, h_2, h_3)$

The network replaces the original coordinates:

$(x_1, x_2)$

with new coordinates:

$(h_1, h_2, h_3)$

where each coordinate means:

- “how strongly feature detector 1 activates”
- “how strongly feature detector 2 activates”
- “how strongly feature detector 3 activates”

A single neuron:
- produces one linear decision boundary
- can only separate space with one hyperplane

A layer of neurons:
- produces many hyperplanes
- creates a rich partition of space
- builds complex nonlinear representations

Each layer feeds into the next:

- Layer 1: simple patterns (edges, lines)
- Layer 2: combinations of patterns (curves, corners)
- Layer 3: higher-level structures (objects)

Example:
- neuron detects “edge”
- neuron detects “curve”
- neuron detects “eye-like shape”

Next layer combines them:
- “eye + nose + mouth → face”

Hidden layers produce feature vectors:

$x \rightarrow \mathbb{R}^d \rightarrow \mathbb{R}^m \rightarrow \dots$

Final layer compresses features into prediction:

- classification: $\mathbb{R}^{10}$ (digit probabilities)
- binary classification: $\mathbb{R}^{1}$

Example :
- Image classifier:$$\mathbb{R}^{784}\to\mathbb{R}^{128}\to\mathbb{R}^{64}\to\mathbb{R}^{10}$$
- Binary Classification: 
$$\mathbb{R}^{64}\to\mathbb{R}^{1}$$


> Hidden layers learn new coordinate systems where each axis corresponds to a learned feature detector defined by a hyperplane in the previous space.

A hidden layer maps inputs into a new feature space where each coordinate represents the activation of a different learned hyperplane-based detector, enabling progressively more abstract representations.

A neural network progressively partitions space into regions and learns increasingly useful coordinate systems (representations) in which the target problem becomes simpler. 
> Neural networks act as adaptive coordinate systems that partition input space into polyhedral regions and assign each region a simple linear (or smooth) model.

![[notes/Learning Theory/images/Pasted image 20260524165247.png]]

---
Most standard feedforward neural networks are **acyclic** directed graphs:

- Information flows in one direction only:  
    input → hidden layers → output
- There are no feedback loops.
- Examples:
    - Multilayer Perceptrons (MLPs)
    - Convolutional Neural Networks (CNNs)
    - Transformers (during a single forward pass)

These are typically represented as a **Directed Acyclic Graph (DAG)**.