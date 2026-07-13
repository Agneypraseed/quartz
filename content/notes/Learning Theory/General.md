
Hoeffding's Inequality 

The central challenge in learning theory is that we can **measure only the training (empirical) error**, while we ultimately care about the **true (out-of-sample) error**. Hoeffding's inequality provides the mathematical guarantee that these two quantities are close with high probability.

>Pointwise Error

For a fixed hypothesis $h$, define the error on a single example as:

$$e(h(x),f(x)) =
\begin{cases}
1, & h(x)\neq f(x) \\
0, & h(x)=f(x)
\end{cases}$$

where:
- $f(x)$ is the true target function.
- $h(x)$ is the learned hypothesis.

Since $x$ is drawn randomly from the unknown distribution $\mathcal{D}$,

$e(h(x),f(x))$

is a **Bernoulli random variable**, taking only two values:
- $1$ → misclassification
- $0$ → correct classification

>True (Out-of-Sample) Error

The **true error** is the expected value of the pointwise error:

$E(h)=\mathbb{E}[e(h(x),f(x))]$

Since the error is Bernoulli,

$E(h)=1\cdot P(h(x)\neq f(x))+0\cdot P(h(x)=f(x))$

$\boxed{E(h)=P(h(x)\neq f(x))}$

**Interpretation:** The true error is simply the probability that the hypothesis misclassifies a randomly drawn example from the data distribution.

>_Empirical (Training) Error_

Suppose we observe an i.i.d. training set:

$x_1,x_2,\ldots,x_N \sim \mathcal{D}$

Define the error for each sample:

$X_i=e(h(x_i),f(x_i))$

Each $X_i$ is a Bernoulli random variable:

$X_i\in\{0,1\}$

The empirical error is the sample mean:

$\boxed{\hat{E}(h)=\frac{1}{N}\sum_{i=1}^{N}X_i}$

- $\hat{E}(h)$ is a **random variable**.
- $E(h)$ is a **fixed quantity** (for a fixed hypothesis and distribution).
 
Hoeffding's inequality states:

$$\boxed{
P\left(\left|\hat{E}(h)-E(h)\right|>\epsilon\right)
\le
2e^{-2N\epsilon^2}
}$$

where:
- $N$ = number of training examples
- $\epsilon$ = allowable estimation error

Hoeffding bounds the probability that the empirical error differs from the true error by more than $\epsilon$

Equivalently,

$$\boxed{
P\left(\left|\hat{E}(h)-E(h)\right|<\epsilon\right)
\ge
1-2e^{-2N\epsilon^2}
}$$
Thus, with high probability,

$E(h)\in[\hat{E}(h)-\epsilon,\;\hat{E}(h)+\epsilon]$

Although $E(h)$ is unknown, Hoeffding guarantees it is close to the observable quantity $\hat{E}(h)$.
The **true error** E(h) is likely to be somewhere inside a small interval around the **training error** $\hat{E}(h)$.

---
Maximum Likelihood Estimation (MLE) and Loss Functions

We assume a model:

$y=f(x,\theta)$

where:

- $f$ = model structure
- $\theta$ = parameters that need to be learned

Example:

$y=wx+b$

Here:

$\theta=(w,b)$

The learning problem is:

> Find the parameters $\theta$ that best explain the observed data.

Instead of assuming the model gives the exact output, we assume the model gives a probability distribution.

The model predicts:

$P(y|x,\theta)$

Probability vs Likelihood

- Probability Viewpoint 

	Parameters are fixed, data changes:
	
	$P(data|\theta)$
	If I know the parameters, how likely is this data?
	Example: A coin has $P(head)=0.7$ then the Probability of $H,H,T,H$ is $0.7 \times 0.7 \times 0.3 \times 0.7$

- Likelihood viewpoint
	
	Data is fixed, parameters change:
	
	$L(\theta|data)$
	
	Which parameter value makes my observed data most likely?
	Likelihood treats the parameters as the unknown quantity we want to estimate.


Maximum Likelihood Estimation (MLE)

MLE chooses the parameters that maximize the likelihood of observing the training data.

$\theta^*=\arg\max_\theta L(\theta)$

> Select the parameter values that make the observed data most probable.

Given training data:

$D=\{(x_1,y_1),(x_2,y_2),...,(x_N,y_N)\}$

The model predicts:

$P(y_i|x_i,\theta)$

The likelihood of the complete dataset is:

$L(\theta)=\prod_{i=1}^{N}P(y_i|x_i,\theta)$

MLE finds:

$\theta^*=\arg\max_\theta \prod_{i=1}^{N}P(y_i|x_i,\theta)$

Multiplying many probabilities creates very small numbers. Taking the logarithm converts multiplication into addition:

$\log L(\theta)=\sum_{i=1}^{N}\log P(y_i|x_i,\theta)$

Because logarithm is a monotonic function, Maximizing likelihood is equivalent to maximizing log-likelihood.

In Machine learning  we minimize the negative log-likelihood:

$Loss(\theta)=-\log L(\theta)$ (**Negative Log-Likelihood (NLL)**)

> Loss functions are negative log-likelihoods derived from assumed probability distributions.

---
**Loss functions are negative log-likelihoods under assumed data distributions.**

The choice of a loss function is not arbitrary. Different losses arise naturally from **maximum likelihood estimation (MLE)** under different assumptions about how the data is generated.

The general principle is:

Given model parameters $\theta$, MLE chooses:

$\hat{\theta}=\arg\max_\theta P(\text{data}|\theta)$

Because products of probabilities are difficult to optimize, we usually maximize the log-likelihood, or equivalently minimize the negative log-likelihood (NLL):

$\hat{\theta}=\arg\min_\theta -\log P(\text{data}|\theta)$

The resulting loss function depends on the assumed probability distribution.

Gaussian Noise $\Rightarrow$ Mean Squared Error (MSE)

Assume a regression model:

$y=h(x)+\varepsilon$

where the noise follows a Gaussian distribution:

$\varepsilon\sim\mathcal{N}(0,\sigma^2)$

Therefore:

$y|x\sim\mathcal{N}(h(x),\sigma^2)$

The likelihood is:

$$P(y|x)=
\frac{1}{\sqrt{2\pi\sigma^2}}
\exp
\left(
-\frac{(y-h(x))^2}{2\sigma^2}
\right)$$

Taking the negative logarithm:

$$-\log P(y|x)
=
\frac{(y-h(x))^2}{2\sigma^2}
+\text{constant}$$

The constant and variance term do not affect the optimum, so minimizing NLL is equivalent to minimizing:

$(y-h(x))^2$

Therefore:

$\boxed{\text{Gaussian noise}\Rightarrow\text{MSE loss}}$

Used in:
- Linear regression
- Neural network regression

Bernoulli Distribution $\Rightarrow$ Binary Cross-Entropy

For binary classification:

$y\in\{0,1\}$

The model predicts:

$p=P(y=1|x)$

The Bernoulli likelihood is:

$P(y|x)=p^y(1-p)^{1-y}$

Taking the negative log:

$$-\log P(y|x)
=
-\left[
y\log p+(1-y)\log(1-p)
\right]$$

This is exactly the binary cross-entropy loss:

$$\boxed{
L=
-\left[
y\log p+(1-y)\log(1-p)
\right]
}$$

Therefore:

$\boxed{\text{Bernoulli assumption}\Rightarrow\text{Binary Cross-Entropy}}$

Used in:
- Logistic regression
- Binary neural network classifiers

Categorical Distribution $\Rightarrow$ Multiclass Cross-Entropy

For multiple classes:

$y\in\{1,2,\dots,K\}$

The model predicts:

$p_k=P(y=k|x)$

The categorical likelihood produces:

$L=-\sum_{k=1}^{K}y_k\log p_k$

This is categorical cross-entropy.

Therefore:

$\boxed{\text{Categorical assumption}\Rightarrow\text{Softmax Cross-Entropy}}$

Used in:
- Image classification
- Language models
- Multiclass neural networks

PAC Learning $\Rightarrow$ 0–1 Loss

PAC learning focuses on generalization rather than directly optimizing probabilities.

The loss is:

$$e(h(x),f(x))=
\begin{cases}
1,&h(x)\neq f(x)\\
0,&h(x)=f(x)
\end{cases}$$

The true error is:

$E(h)=\mathbb{E}[e(h(x),f(x))]$

which is:

$\boxed{E(h)=P(h(x)\neq f(x))}$

This directly measures the probability of classification error.

The 0–1 loss is discontinuous:

- Correct prediction $\rightarrow$ loss $0$
- Incorrect prediction $\rightarrow$ loss $1$

Small changes in parameters usually do not change the loss.

Therefore:
- gradient is zero almost everywhere
- gradient is undefined at the decision boundary
Gradient descent cannot effectively optimize it.

| Learning Problem          | Probabilistic Assumption     | Loss From MLE        |
| ------------------------- | ---------------------------- | -------------------- |
| Regression                | Gaussian noise               | MSE                  |
| Binary classification     | Bernoulli distribution       | Binary Cross-Entropy |
| Multiclass classification | Categorical distribution     | Cross-Entropy        |
| PAC theory                | No noise assumption required | 0–1 loss             |
