A number assigned to each possible outcome of something random. 
_Ex:_
X = number of heads in 200 coin flips
X=148 is an event, true or false
P(X=148) is a probability, a number between 0 and 1.

---
Probability mass function (PMF)
A function that assigns a probability to each possible value of a discrete random variable, the chance of each value. 

Defined by:

$$  
p_X(x) = P(X = x)  
$$

It must satisfy two properties:
1. Non-negativity: $p_X(x) \geq 0$ for every $x$.
2. Normalization: $\sum_x p_X(x) = 1$.

![[Pasted image 20261028145853.png]]

---
**Expectation** (also called the **Mean**), is the balance point of the PMF, defined as:

$$
E[X] = \sum_{X=x} x P(X=x)
$$

For a fair 6-sided die, each outcome has an equal probability of $\frac{1}{6}$.

$$
E[X] = 1\left(\frac{1}{6}\right) + 2\left(\frac{1}{6}\right) + 3\left(\frac{1}{6}\right) + 4\left(\frac{1}{6}\right) + 5\left(\frac{1}{6}\right) + 6\left(\frac{1}{6}\right)
$$

$$
E[X] = \frac{21}{6} = \boxed{3.5}
$$
![[Pasted image 20261028150552.png]]

![[Pasted image 20261028151459.png]]

---
Types of Random Variables (Distribution)

#### Bernoulli Random Variable
A random variable with two possible values (0 or 1).

$$
P(X=1)=p
$$
$$
P(X=0)=1-p
$$

**$X$ is a Bernoulli random variable:**

$$
X \sim \operatorname{Ber}(p)
$$
Expectation

$$
E[X]=1(p)+0(1-p)=p
$$
Examples
- Coin flip
- Random binary digit (bit)

#### Binomial Random Variable

Represents $n$ independent trials of a Bernoulli random variable.

- $X$ is the number of **successes** (1's) in $n$ trials.

**$X$ is a Binomial random variable:**

$$
X \sim \operatorname{Bin}(n,p)
$$

Expectation

$$
E[X] = np
$$

Examples
- Number of heads in $n$ coin flips.
- Number of 1's in a randomly generated string of $n$ bits.

#### Poisson Random Variable

Approximates a **Binomial distribution** when $n$ is large and $p$ is small.

- $X$ takes on values $0, 1, 2, 3, \ldots$

**$X$ is a Poisson random variable:**

$$
X \sim \operatorname{Poi}(\lambda)
$$

Expectation

$$
E[X] = \lambda
$$
When we approximate a Binomial distribution with a Poisson distribution, we choose:
$$
\boxed{\lambda=np} 
$$

Generally Good Approximation When
- $n > 20$ and $p < 0.05$
- $n > 100$ and $p < 0.1$

Examples
- Number of component failures in a large data center.
- Number of bits corrupted in message transmission.

---
Poisson Distribution
The **Poisson distribution** models the number of events occurring within a fixed interval of **time** or **space**.

The PMF is:

$$
P(X=k)=\frac{e^{-\lambda}\lambda^k}{k!}
$$
Can use Poisson distribution for
1. Temporal Modelling (Number of events per fixed interval of time)

**Definition:** Counting the number of events occurring within a fixed interval of time.

Example: Counting Flashes in Radioactive Decay. Researchers counted the flashes produced by radioactive decay in each **7.5-second window**.

The Poisson model
1. Divide the 7.5-second window into many extremely small time intervals (slices).
2. Each slice has a very small probability $p$ of containing a flash.
3. The number of slices $n$ is very large.
4. Count the total number of flashes occurring during the entire 7.5-second window.

- $n$ is large.
- $p$ is small.

The total number of flashes can be approximated by a Poisson random variable.
$$
X\sim\operatorname{Poi}(\lambda)
$$
$$
\lambda=\text{Average number of flashes per 7.5 seconds}
$$

If the average rate of flashes per second is $r$, then:

$$
\lambda=7.5r
$$

![[Pasted image 20261101110122.png]]



2. Spatial Modelling (Number of events per fixed amount of space)

**Definition:** Counting the number of events occurring within a fixed amount of space.

Example
Suppose we are:
- Making many cookies with lots of chocolate chips.
- Dividing the batter into equally sized portions.
- Distributing the chocolate chips randomly.

We want to count the number of chocolate chips in one particular cookie.

The Poisson model
1. Each chocolate chip has a small probability of ending up in our chosen cookie.
2. There are many chocolate chips.
3. Each chip can be treated as a Bernoulli trial.

The probability that a particular chip ends up in a specific cookie is:

$$
p=\frac{1}{\text{Number of cookies}}
$$

$$
n=\text{Total number of chocolate chips}
$$

The number of chocolate chips in a particular cookie follows a Binomial distribution:

$$
X\sim\operatorname{Bin}(n,p)
$$

When $n$ is large and $p$ is small, we can approximate it using a Poisson distribution:

$$
X\approx\operatorname{Poi}(\lambda)
$$

Where:

$$
\lambda=np
$$

$$
\lambda=\frac{\text{Total chocolate chips}}{\text{Number of cookies}}
$$

If there are 1,000 chocolate chips and 100 cookies:

$$
\lambda=\frac{1000}{100}=10
$$

The expected number of chocolate chips per cookie is 10.

> A Poisson model is appropriate when events occur independently at an approximately constant average rate or density.


---
## Variance

Intuitively, variance measures the **spread**, how far values wander from the mean.
- Often use **standard deviation** to refer to the "spread".

---
All three are discrete random variables, but their possible values differ

Bernoulli
- $X = 0$ or $X = 1$
- Only two possible outcomes.

Binomial
- $X = 0, 1, 2, \ldots, n$
- Values range from 0 to $n$.

Poisson
- $X = 0, 1, 2, \ldots$
- Non-negative integers with no upper limit.

---
### Continuous Random Variables

![[Pasted image 20261101141947.png]]

For continuous random variables, the probability of any exact value is zero.

- $P(X = a) = 0$
- We calculate probabilities over ranges:
$$  
P(a \leq X \leq b)  
$$

PDF
- Probability Density Functions (PDFs) are shapes showing how likely different possible outcomes are.
- Continuous RVs use a Probability Density Function (PDF).
- Probability is the area under the PDF curve between $a$ and $b$.

---
### Uniform(0,1) Random Variable
A Uniform distribution has a flat probability density, meaning equal-length intervals are equally likely.
- The probability density is 1, but that doesn't mean every outcome has a probability of 1.

![[Pasted image 20261101152009.png]]

- $X$ takes values between $0$ and $1$.
- Probability depends on the length of the interval.

For $0 \leq a \leq b \leq 1$:
$$  
P(a \leq X \leq b) = b-a  
$$
- $P(0 \leq X \leq 1) = 1$
- $P(0.9 \leq X \leq 1) = 0.1$
- $P(0.5 \leq X \leq 0.50001) = 0.00001$

_Example_: A bus arrives at a random time between 0 and 10 minutes, with every moment equally likely.


---
### Exponential Random Variable

- Poisson: _X_ = “how many events in this time window?”
- Exponential: _X_ = “how long until the next event?”

Exponential is going to give you time outcomes, Models time
![[Pasted image 20261101152307.png]]


The exponential random variable is written as:
$$  
X \sim \mathrm(\lambda)  
$$

- It uses the same parameter $\lambda$ as the Poisson distribution.
- $X$ can take values from $0$ to $\infty$.
- Smaller values are more likely than larger values.
- As $X$ increases, the probability density decreases.

The graph starts high near $x=0$ and decreases as $x$ increases.

Exponential distributions model waiting times, where short waits are common and long waits are rare.

![[Pasted image 20261101154458.png]] 

#### Cumulative Distribution Function (CDF)

A Cumulative Distribution Function (CDF) is a shortcut for calculating the probability (area) under a PDF up to a given value.

$$  
F(x) = P(X \leq x)  
$$

- The CDF gives the probability that $X$ is less than or equal to $x$.
- It measures the area under the PDF from the beginning up to $x$.

![[Pasted image 20261101160408.png]]


- PDF: Shows probability density.
- CDF: Gives cumulative probability up to $x$.
- The CDF makes it easy to calculate probabilities without manually finding the area under the PDF.

_Exponential Distribution Example 
Let $X$ be the years until the next big (magnitude 8+) earthquake.

$$  
X \sim \mathrm(1.2)  
$$
![[Pasted image 20261101160804.png]]


The probability that the next big earthquake happens within 1 year.

We get this by plugging $1$ into the CDF

$$  
P(X \leq 1) \approx 0.699  
$$

---
### Normal Random Variable

A continuous random variable with a bell-shaped curve
$$  
X \sim \mathrm(\mu,\sigma^2)  
$$
Two parameters 
- $\mu$ (mu) = Mean (average).
- $\sigma^2$ = Variance.


- Values closer to the mean ($\mu$) have higher probability density. 
- $X$ can take any value from $-\infty$ to $+\infty$.


![[Pasted image 20261101162059.png]]
![[Pasted image 20261101161827.png]]

---
