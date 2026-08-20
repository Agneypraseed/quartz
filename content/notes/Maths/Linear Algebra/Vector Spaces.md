
[Notes from Linear Algebra Done Right | Chapter 1]

𝐅 stands for either 𝐑 or 𝐂.
$$  
\mathbb{F} = \mathbb{R} \text{ or } \mathbb{C}  
$$

- $\mathbb{R}$ → real numbers
- $\mathbb{C}$ → complex numbers
---
### Scalars

A **scalar** is a single number.

An element of $\mathbb{F}$ is called a **scalar**.

In
$$  
x=(2,-3,5)\in\mathbb{R}^3  
$$

then $2,-3,5$ are the **three scalar coordinates** of $x$.

---
_Lists_ : A list of length 𝑛 is an ordered collection of 𝑛 elements. Two lists are equal if and only if they have the same length and the same elements in the same order. 

Every list has a **finite, nonnegative integer length**.

A list of length $n$ can be written as:

$$
(z_1,\dots,z_n)
$$

Another name for a list of length $n$ is an **$n$-tuple**.

>**Lists care about order and repetition, sets do not.** 

For example:

$$
(3,5)\neq(5,3)
$$

because the order is different.

Also:

$$
(4,4)\neq(4,4,4)
$$

We already know:

$$
\mathbb{R}^2=\{(x,y):x,y\in\mathbb{R}\}
$$

and

$$
\mathbb{R}^3=\{(x,y,z):x,y,z\in\mathbb{R}\}
$$

To generalize this to any dimension, we need the idea of a list.

# $\mathbb{F}^n$

> $\mathbb{F}^n$ is the set of all **lists of length $n$ whose elements are scalars from $\mathbb{F}$**.

$$
\boxed{
\mathbb{F}^n
=
\text{all lists of length }n\text{ whose elements are in }\mathbb{F}
}
$$
 $$  
\boxed{  
\mathbb{F}^n

{(x_1,\dots,x_n):x_k\in\mathbb{F}\text{ for }k=1,\dots,n}  
}  
$$

So if:

$$
x\in\mathbb{R}^5
$$

then $x$ is simply a **list of 5 real-number scalars**:

$$
x=(x_1,x_2,x_3,x_4,x_5)
$$
---
## Vectors

$$  
x = (x_1, x_2, \dots, x_n) \in \mathbb{F}^n  
$$

means that $x$ is an ordered list of $n$ scalars.

Example:

$$  
x = (2,-1,5) \in \mathbb{R}^3  
$$

where:

$$  
x_1=2,\qquad x_2=-1,\qquad x_3=5  
$$

$$  
\boxed{\mathbb{R}^n = \text{all vectors with } n \text{ real components}}  
$$

---
Vector Addition

Vectors are added component-wise:

$$  
(x_1,\dots,x_n)+(y_1,\dots,y_n)
=
(x_1+y_1,\dots,x_n+y_n)  
$$

The vectors must belong to the same $\mathbb{F}^n$.

So:

$$  
(1,2,3)+(4,5)  
$$

is not defined.

---
Scalar Multiplication

For a scalar $\lambda \in \mathbb{F}$:

$$  
\lambda(x_1,\dots,x_n)
=
(\lambda x_1,\dots,\lambda x_n)  
$$
Scalar zero

$$  
0\in\mathbb{F}  
$$

Zero vector

$$  
0=(0,\dots,0)\in\mathbb{F}^n  
$$

This is the **zero vector** in $\mathbb{F}^n$.

It has $n$ coordinates, all equal to the scalar $0$.


For example:

$$  
x+0=x  
$$

Here the $0$ must be the **zero vector**, because adding a vector and a scalar is not defined.

Additive Inverse

For:

$$  
x=(x_1,\dots,x_n)  
$$

we define:

$$  
-x=(-x_1,\dots,-x_n)  
$$

such that:

$$  
x+(-x)=0  
$$
---
A field is a set containing at least two distinct elements called 0 and 1, along with operations of addition and multiplication while satisfying all properties commutativity, associativity, identities, inverses, and distributivity.

𝐑 and 𝐂 are fields

---
## Vector Space

FORMALLY 
A vector space $V$ over the field $\mathbb{R}$ is a set of vectors together with two operations:
- **Vector addition** : $$+: V \times V \to V$$   Add two vectors to get another vector.
- **Scalar multiplication** $$\cdot : \mathbb{R} \times V \to V$$    Multiply a vector by a real number (scalar).
---
An **addition on $V$** is an operation that takes any two vectors $u,v\in V$ and produces another vector in $V$:

$$
u+v\in V
$$

So:

$$
V\times V\rightarrow V
$$

---
Scalar Multiplication

A **scalar multiplication on $V$** takes a scalar $\lambda\in\mathbb{F}$ and a vector $v\in V$ and produces another vector in $V$:

$$
\lambda v\in V
$$

So:

$$
\mathbb{F}\times V\rightarrow V
$$

---

A **vector space** is a set $V$ where we can:
1. add two vectors
2. multiply a vector by a scalar
and these operations obey a specific set of rules called the **vector space axioms** 

These are the **vector-space axioms**.

| Property | Rule |
|---|---|
| Commutativity | $u+v=v+u$ |
| Associativity | $(u+v)+w=u+(v+w)$ |
| Scalar associativity | $(ab)v=a(bv)$ |
| Additive identity | $v+0=v$ |
| Additive inverse | $v+(-v)=0$ |
| Multiplicative identity | $1v=v$ |
| Distributivity | $a(u+v)=au+av$ |
| Distributivity | $(a+b)v=av+bv$ |

---
Examples of Vector Spaces

The simplest possible vector space is:

$$
\boxed{\{0\}}
$$

It contains exactly one vector: the zero vector.

It still satisfies all the vector-space axioms.

---
$\mathbb{F}^{\infty}$ — Infinite Sequences

$\mathbb{F}^{\infty}$ is the set of **all infinite sequences of elements of $\mathbb{F}$**:

$$  
\mathbb{F}^{\infty}

{(x_1,x_2,\dots):x_k\in\mathbb{F}\text{ for }k=1,2,\dots}  
$$

---
$\mathbb{F}^S$ — Functions as Vectors

If $S$ is a set, then:

$$  
\boxed{\mathbb{F}^S={\text{all functions }f:S\rightarrow\mathbb{F}}}  
$$

So $\mathbb{F}^S$ is the set of **all $\mathbb{F}$-valued functions defined on $S$**. It lets linear algebra work with **functions**, not just numerical lists. 


The functions themselves are the **vectors**.

Example: $\mathbb{R}^{[0,1]}$

$$  
f(x)=x^2  
$$
$$  
g(x)=\sin(x)  
$$

$$  
(f+g)(x)=x^2+\sin(x)  
$$

The elements of the vector space $\mathbb{R}^{[0,1]}$ are **real-valued functions on $[0,1]$**, not lists.


---

In $\mathbb{F}^n$:

$$  
(x_1,\dots,x_n)  
$$

is a vector.

But in $\mathbb{F}^S$, a **function** is a vector.

For example:

$$  
f(x)=x^2  
$$

can be a vector.
$$  
\mathbb{F}^S  
$$

as:

> **all possible ways of assigning a scalar from $\mathbb{F}$ to every element of $S$.**

Then:

- $S={1,\dots,n}$ → $\mathbb{F}^n$
- $S={1,2,\dots}$ → $\mathbb{F}^{\infty}$
- $S=[0,1]$ → functions on $[0,1]$


In general, a vector space is an **abstract structure** whose elements might be lists, functions, matrices, polynomials, or other mathematical objects.

---

Elements of a vector space are called vectors or points.

A vector does **not** have to look like $(x_1,x_2,x_3)$. Depending on the vector space, a vector could be:

- **A column of numbers:** $$\begin{pmatrix} 1 \\ 2 \\ 3 \end{pmatrix}$$
- **A matrix:** $$\begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}$$
- **A polynomial:** $$1 + 2x + 3x^2$$
- **A function:**$$f(x) = \sin x$$
---
Uniqueness of the additive identity

- A vector space has **exactly one** zero vector.

Uniqueness of the additive inverse

- Every vector has **exactly one** additive inverse.

Multiplying any vector by the scalar zero gives the zero vector.

---
# Subspaces

A **subspace** is a subset of a vector space that is **itself a vector space**, using the **same**:

- zero vector 
- addition
- scalar multiplication

as the original vector space.

If:

$$  
U\subseteq V  
$$

then $U$ is a subspace of $V$ if $U$ is itself a vector space under the operations inherited from $V$.

A subset $U\subseteq V$ is a subspace **iff** these three conditions hold:

- Contains the zero vector

$$  
\boxed{0\in U}  
$$

- Closed under addition

For every $u,w\in U$:

$$  
\boxed{u+w\in U}  
$$

- Closed under scalar multiplication

For every $a\in\mathbb{F}$ and $u\in U$:

$$  
\boxed{au\in U}  
$$

If all three are true:

$$  
\boxed{U\text{ is a subspace of }V}  
$$

---

Sums of Subspaces

The **union** of two subspaces is generally **not** a subspace.

Instead, linear algebra uses the **sum of subspaces**.

If $V_1,\dots,V_m$ are subspaces of $V$, their sum is:

$$  
\boxed{  
V_1+\cdots+V_m
=
{v_1+\cdots+v_m:v_1\in V_1,\dots,v_m\in V_m}  
}  
$$

Example in $\mathbb{F}^3$

Let:

$$  
U={(x,0,0):x\in\mathbb{F}}  
$$

and:

$$  
W={(0,y,0):y\in\mathbb{F}}  
$$

Then:

$$  
(x,0,0)+(0,y,0)=(x,y,0)  
$$

Therefore:

$$  
\boxed{  
U+W
=
{(x,y,0):x,y\in\mathbb{F}}  
}  
$$

So combining the two subspaces gives the entire **$xy$-plane** inside $\mathbb{F}^3$.

Example in $\mathbb{F}^4$


$$  
U={(x,x,y,y):x,y\in\mathbb{F}}  
$$

$$  
W={(x,x,x,y):x,y\in\mathbb{F}}  
$$

$$  
u=(a,a,b,b)\in U  
$$

$$  
w=(c,c,c,d)\in W  
$$

$$  
u+w
=
(a+c,a+c,b+c,b+d)  
$$

$$  
U+W  
\subseteq  
{(x,x,y,z):x,y,z\in\mathbb{F}}  
$$

To show equality, every vector of the form $(x,x,y,z)$ must be expressible as $u+w$.

Indeed:

$$  
(x,x,y,z)
=
(x,x,y,y)+(0,0,0,z-y)  
$$

where:

$$  
(x,x,y,y)\in U  
$$
$$  
(0,0,0,z-y)\in W  
$$
 $$  
\boxed{  
U+W
=
{(x,x,y,z):x,y,z\in\mathbb{F}}  
}  
$$

---
The sum of subspaces is itself a subspace:

$$  
\boxed{  
V_1+\cdots+V_m  
\text{ is a subspace of }V  
}  
$$
 $$  
\boxed{  
V_1+\cdots+V_m
=
\text{smallest subspace containing }V_1,\dots,V_m  
}  
$$
---
Direct Sums

Suppose $V_1,\dots,V_m$ are subspaces of $V$.

Every vector in their sum can be written as

$$  
v=v_1+\cdots+v_m,  
\qquad v_k\in V_k.  
$$

                    v = (3,5,7)
                         ↓
             ┌───────────┼───────────┐
             ↓           ↓           ↓
       v₁ = (3,0,0) v₂ = (0,5,0) v₃ = (0,0,7)
             V₁          V₂          V₃
          x-axis       y-axis       z-axis

$$  
\boxed{  
V_1+\cdots+V_m  
\text{ is a direct sum}  
}  
$$

if every vector in $V_1+\cdots+V_m$ has **exactly one representation**

$$  
v=v_1+\cdots+v_m,  
\qquad v_k\in V_k.  
$$

We write:

$$  
\boxed{V_1\oplus\cdots\oplus V_m}  
$$

The $\oplus$ means: **the sum is direct / representations are unique**.


---
Example: direct sum in $\mathbb F^3$

$$  
U={(x,y,0):x,y\in\mathbb F}  
$$
$$  
W={(0,0,z):z\in\mathbb F}.  
$$

Every vector $(x,y,z)$ can be written as

$$  
(x,y,z)
=
(x,y,0)+(0,0,z).  
$$
$$  
\mathbb F^3=U+W.  
$$

This representation is **unique**.

Therefore:

$$  
\boxed{\mathbb F^3=U\oplus W}  
$$
---
How to test a direct sum

A sum is direct **iff the zero vector has only the trivial representation**.

$$  
\boxed{  
V_1+\cdots+V_m  
\text{ is direct}  
\iff  
v_1+\cdots+v_m=0  
\Rightarrow  
v_1=\cdots=v_m=0  
}  
$$

where $v_k\in V_k$.

---
Direct sum of two subspaces

For **two** subspaces there is an especially useful test:

$$  
\boxed{  
U+W\text{ is direct}  
\iff  
U\cap W={0}  
}  
$$

> [!Note]  
> **Pairwise trivial intersections are sufficient for a direct sum of two subspaces, but NOT sufficient when there are three or more subspaces.**

---
