
# Gradient

The **gradient** of a scalar function is a vector containing its first-order partial derivatives.

For a function $f(x,y)$:

$$
\nabla f(x,y)
=
\begin{bmatrix}
\frac{\partial f}{\partial x} \\
\frac{\partial f}{\partial y}
\end{bmatrix}
$$

## Meaning

At a given point:

- $\nabla f$ points in the direction of **steepest increase**
- $-\nabla f$ points in the direction of **steepest decrease**
- $\|\nabla f\|$ tells us how quickly the function changes in that direction

This is why **gradient descent** updates parameters in the direction of the negative gradient:

$$
\mathbf{x}_{new}
=
\mathbf{x}_{old}
-
\eta \nabla f(\mathbf{x}_{old})
$$

where $\eta$ is the learning rate.

---

## Example

Given:

$$
f(x,y)=xy+e^x-2x^3y^2+9y
$$

Calculate the two partial derivatives:

$$
\frac{\partial f}{\partial x}
=
y+e^x-6x^2y^2
$$

$$
\frac{\partial f}{\partial y}
=
x-4x^3y+9
$$

Therefore:

$$
\boxed{
\nabla f(x,y)
=
\begin{bmatrix}
y+e^x-6x^2y^2 \\
x-4x^3y+9
\end{bmatrix}
}
$$

## Remember

> The gradient gives the direction and rate of the greatest local increase.

> To minimize a function, move in the opposite direction: $-\nabla f$.


---

# Hessian Matrix

The **Hessian matrix** contains all second-order partial derivatives of a scalar function.

For a function $f(x,y)$:

$$
H_f(x,y)
=
\begin{bmatrix}
\frac{\partial^2 f}{\partial x^2}
&
\frac{\partial^2 f}{\partial x \partial y}
\\
\frac{\partial^2 f}{\partial y \partial x}
&
\frac{\partial^2 f}{\partial y^2}
\end{bmatrix}
$$

## Meaning

The gradient tells us the local slope.

The Hessian tells us **how the slope is changing**, so it describes the local curvature of the function.

It helps determine whether a point is locally:

- Curving upward
- Curving downward
- Saddle-shaped
- Relatively flat

---

## Example

Given:

$$
f(x,y)=xy+e^x-2x^3y^2+9y
$$

The gradient is:

$$
\nabla f(x,y)
=
\begin{bmatrix}
y+e^x-6x^2y^2
\\
x-4x^3y+9
\end{bmatrix}
$$

Now differentiate each gradient component again.

### Second derivative with respect to $x$

$$
\frac{\partial^2 f}{\partial x^2}
=
e^x-12xy^2
$$

### Mixed partial derivatives

$$
\frac{\partial^2 f}{\partial y \partial x}
=
1-12x^2y
$$

$$
\frac{\partial^2 f}{\partial x \partial y}
=
1-12x^2y
$$

The mixed partial derivatives are equal:

$$
\frac{\partial^2 f}{\partial x \partial y}
=
\frac{\partial^2 f}{\partial y \partial x}
$$

This is known as **Clairaut’s theorem**, assuming the derivatives are continuous.

### Second derivative with respect to $y$

$$
\frac{\partial^2 f}{\partial y^2}
=
-4x^3
$$

Therefore, the Hessian is:

$$
\boxed{
H_f(x,y)
=
\begin{bmatrix}
e^x-12xy^2
&
1-12x^2y
\\
1-12x^2y
&
-4x^3
\end{bmatrix}
}
$$

## Remember

> The gradient gives the direction of steepest change.

> The Hessian describes the curvature and how the gradient changes.

> For smooth functions, the Hessian is usually symmetric.

---------

# Why Derivatives Matter

Derivatives provide **local information** about a function near a chosen point.

## First Derivative

The first derivative tells us:

- The slope and direction of change
- How sensitive the output is to small input changes
- Whether the function is locally increasing or decreasing

In multiple dimensions, this information is captured by the **gradient**.

---

## Second Derivative

The second derivative tells us:

- The curvature of the function
- Whether the slope itself is increasing or decreasing
- Whether the local shape resembles a bowl, ridge, or saddle

In multiple dimensions, this information is captured by the **Hessian matrix**.

---

## Why This Is Useful in Machine Learning

Machine-learning objective functions are often highly nonlinear and difficult to analyze directly.

Instead, derivatives let us construct a simpler **local approximation** around the current point:

- First-order information approximates the function using its slope
- Second-order information improves the approximation by including curvature

This is the main idea behind the **Taylor series**.

> Derivatives allow us to replace a complicated function with a simpler local model that is easier to optimize.

----

