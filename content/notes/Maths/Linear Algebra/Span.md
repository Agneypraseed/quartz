[Notes from Linear Algebra Done Right | Chapter 2]


### Finite-dimensional Vector Spaces

For $\mathbb R^3$:

$$  
\mathbb R^3

\operatorname{span}{(1,0,0),(0,1,0),(0,0,1)}  
$$

So:

$$  
\dim(\mathbb R^3)=3.  
$$

There are infinitely many vectors in $\mathbb R^3$, but only **3 basis vectors are needed**.

### Infinite-dimensional

For $\mathbb R[x]$, the space of all polynomials:
$$  
\mathbb R[x]

\operatorname{span}{1,x,x^2,x^3,\ldots}.  
$$

You cannot generate **every polynomial** using only finitely many of these.

$$  
\boxed{\dim(\mathbb R[x])=\infty}  
$$

---
Linear combination

A **linear combination** of a list of vectors $v_1,\dots,v_m$ is any vector formed by multiplying each vector by a scalar and adding the results.

$$  
\boxed{  
a_1v_1+\cdots+a_mv_m  
}  
$$

where

$$  
a_1,\dots,a_m\in\mathbb F.  
$$

---
## Span

The **span** of a list of vectors is the set of **all possible linear combinations** of those vectors.
$$  
\boxed{  
\operatorname{span}(v_1,\dots,v_m)
=
{a_1v_1+\cdots+a_mv_m:a_1,\dots,a_m\in\mathbb F}  
}  
$$

**Span = everything that you can reach using these vectors.**


$$  
\boxed{\operatorname{span}(\text{empty list})={0}}  
$$

because the only "empty" linear combination is $0$.

> **The span of any list of vectors is the smallest subspace containing those vectors.**

$$  
\boxed{  
\operatorname{span}(v_1,\dots,v_m)
=
\text{smallest subspace containing }v_1,\dots,v_m  
}  
$$

---
Finite-dimensional vector space

Formally, $V$ is finite-dimensional if there exists a finite list

$$  
v_1,\dots,v_m  
$$

such that

$$  
\operatorname{span}(v_1,\dots,v_m)=V.  
$$
Example: $\mathbb F^n$

The standard coordinate vectors

$$  
(1,0,\dots,0),\dots,(0,\dots,0,1)  
$$

span $\mathbb F^n$.

Therefore:

$$  
\boxed{\mathbb F^n\text{ is finite-dimensional}}  
$$

---
## $\mathcal P(\mathbb F)$

$\mathcal P(\mathbb F)$ is the vector space of all polynomial functions

$$  
p:\mathbb F\to\mathbb F  
$$

of the form

$$  
p(z)=a_0+a_1z+\cdots+a_mz^m.  
$$

where

$$  
a_0,\dots,a_m\in\mathbb F.  
$$

With the usual addition and scalar multiplication, $\mathcal P(\mathbb F)$ is a vector space.

Degree : For a nonzero polynomial,
$$  
p(z)=a_0+a_1z+\cdots+a_mz^m  
$$
with

$$  
a_m\neq0,  
$$

the degree is

$$  
\boxed{\deg p=m}.  
$$

The zero polynomial is assigned:

$$  
\boxed{\deg 0=-\infty}.  
$$
---

$\mathcal P_m(\mathbb F)$ : For a nonnegative integer $m$:
 $$  
\boxed{  
\mathcal P_m(\mathbb F)
=
{p\in\mathcal P(\mathbb F):\deg p\leq m}  
}  
$$

These are all polynomials of degree at most $m$.

For example:

$$  
\mathcal P_2(\mathbb F)
=
{a+bz+cz^2:a,b,c\in\mathbb F}.  
$$
Examples: 3, 2+7z,  $1−4z+8z^2$, 0 But **not** $z^3+1$

$$  
\boxed{  
\mathcal P_m(\mathbb F)
=
\operatorname{span}(1,z,z^2,\dots,z^m)  
}  
$$


Therefore $\mathcal P_m(\mathbb F)$ is finite-dimensional.

---

$\mathcal P(\mathbb F)$ is infinite-dimensional

Take **any finite list** of polynomials:

$$  
p_1,\dots,p_k.  
$$

Because there are only finitely many polynomials, there is some largest degree:

$$  
m=\max(\deg p_1,\dots,\deg p_k).  
$$

Any linear combination

$$  
a_1p_1+\cdots+a_kp_k  
$$

has degree at most $m$.

Therefore:

$$  
z^{m+1}  
$$

cannot be in their span.

So this particular finite list does **not** span $\mathcal P(\mathbb F)$.

And because **every list is finite**, no finite list can span $\mathcal P(\mathbb F)$.

Therefore:

$$  
\boxed{\mathcal P(\mathbb F)\text{ is infinite-dimensional}}  
$$
No finite list of polynomials can span P(F).​

---

