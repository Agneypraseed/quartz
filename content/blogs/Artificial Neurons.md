
The biological neuron :  A biological neuron receives incoming signals from other neurons through its dendrites. The cell body (soma) integrates and processes these signals. If the combined input reaches a certain threshold, the neuron generates an electrical impulse called an action potential, which travels along a long projection known as the axon. The signal then reaches the branching axon terminals, where it is transmitted to neighboring neurons through connections called synapses.

![[Pasted image 20261109121238.png]]

### McCulloch–Pitts (MCP) neuron

McCulloch and Pitts [(1943) “A Logical Calculus of the Ideas Immanent in Nervous Activity”] proposed a simple mathematical model of a biological neuron, inspired by how the brain could perform computations using logical operations (If X is true AND Y is true, then Z is true.)

McCulloch and Pitts turned this into a simple computational model, **an artificial neuron**. They showed how by using one such artificial neuron one could implement certain basic Boolean logical operations such as AND, OR, NOT which are the building blocks of digital computation.

The McCulloch-Pitts model represents a neuron as a binary unit that receives inputs and produces an output (0 or 1) based on whether a threshold is reached.

![[Pasted image 20261109122125.png]]
In the simple version of the McCulloch-Pitts model, x1 and x2 can be either 0 or 1

The neurode’s (“neuron” + “node”) output y is calculated by first summing the inputs and then checking to see if that sum is greater than or equal to some threshold, theta (θ). If so, y equals 1; if not, y equals 0.

$$
\text{sum} = x_1 + x_2
$$

$$
y = \begin{cases}
1 & \text{if } \text{sum} \geq \theta \\
0 & \text{otherwise}
\end{cases}
$$

The formal mathematical description of the simple neurode is :

For an arbitrary sequence of inputs, x1, x2, x3,…, xn.

g(x) : sums up the inputs
f(g(x)) : takes the summation and performs the thresholding

$$
g(x) = x_1 + x_2 + x_3 + \cdots + x_n = \sum_{i=1}^{n} x_i
$$

$$
f(z) = \begin{cases}
0, & z < \theta \\
1, & z \geq \theta
\end{cases}
$$

$$
y = f(g(x)) = \begin{cases}
0, & g(x) < \theta \\
1, & g(x) \geq \theta
\end{cases}
$$


We can design some of the basic Boolean logic gates.
  
- $\theta = 2$: Implements an **AND gate** for two binary inputs.  
- $\theta = 1$: Implements an **OR gate** for two binary inputs.  

Inhibition in MCP
  
To distinguish between **excitatory** and **inhibitory** inputs.  

- $g(x)$ = Sum of excitatory inputs.  
- $h$ = Inhibitory input (0 or 1).  
- $\theta$ = Threshold.  
$$  
y=  
\begin{cases}  
0 & \text{if } h=1 \\  
1 & \text{if } h=0 \text{ and } g(x)\geq\theta \\  
0 & \text{otherwise}  
\end{cases}  
$$   
$$  
\boxed{y=f(g(x),h)}  
$$

NOT gate with MCP
  
The **NOT gate** has one variable binary input $x$, which acts as an **inhibitory input**, and one constant excitatory input of $1$.  
  
Choose:    
$$  
g(x)=1, \qquad \theta=1  
$$
  
The MCP neuron fires only when the excitatory sum reaches the threshold and **no inhibitory input is active**.  
  
$$  
y=  
\begin{cases}  
0 & \text{if } x=1 \quad \text{(inhibition active)} \\  
1 & \text{if } x=0 \text{ and } g(x)\geq\theta \\  
0 & \text{otherwise}  
\end{cases}  
$$  
Since $g(x)=1$ and $\theta=1$:  
- $x=0$: Inhibition inactive, $g(x)=1\geq1\Rightarrow y=1$.  
- $x=1$: Inhibition active, neuron cannot fire $\Rightarrow y=0$.  

---
The McCulloch-Pitts (MCP) neuron is a unit of computation, and you can use combinations of it to create any type of Boolean logic. 
**But it could not learn**. 
- It could perform logical operations but its threshold $(\theta)$ had to be manually chosen.

---
### Perceptron

Frank Rosenblatt invented the [[notes/Learning Theory/Learning|perceptron]] in late 1950's as a brain inspired algorithm that could learn about patterns in data by looking at them.

Rosenblatt’s perceptron could learn its weights from data. The weights encoded some knowledge about patterns in the data

Perceptron will always find the pattern hidden in the data in a finite amount of time, it will converge upon a solution without fail **if the data is linearly separable.**



