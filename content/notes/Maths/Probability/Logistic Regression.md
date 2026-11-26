
> "All models are wrong, but some are useful." — George E. P. Box
- **Prediction ≠ Explanation**. A model can predict an outcome without explaining the true mechanism that produces it.

Logistic regression is a [[notes/Maths/Probability/Probabilistic model|probabilistic model]] that predicts the probability of a binary outcome.

$$  
P(y=1\mid x)=\sigma(w^Tx+b)  
$$

Sigmoid Function

$$  
\sigma(z)=\frac{1}{1+e^{-z}}  
$$

![[Pasted image 20261120135535.png|315]]![[Pasted image 20261120135915.png|327]]

![[Pasted image 20261120135439.png|440]]


- The model assumes that the log-odds of the outcome are a linear function of the input features.
- This does **not** mean the real biological process follows that equation, but the model can produce useful probability estimates and predictions.

Example : 
For a movie-based prediction model, there is **one parameter $\theta_i$ for each movie**, plus a bias $\theta_0$.
$$  
P(\text{yes}\mid x)=\sigma(\theta_0+\theta_1x_1+\cdots+\theta_mx_m)  
$$

- $x = [1,0,1,0,1]$ : one viewer's movie-watching history (feature vector).
- $\theta_0$ — Bias (intercept)
- $\theta_i$ — Learned weight associated with movie $i$.
- $x_i$ — Input feature corresponding to movie $i$.
- $m$ — Total number of movies (features).

$$  
P(\text{yes}\mid x)=\sigma(\theta^Tx+\theta_0)  
$$

**Total number of trainable parameters:** $m+1$

![[Pasted image 20261120182958.png]]

[[notes/Maths/Probability/Maximum Likelihood Estimation|Maximum Log-Likelihood Estimation (MLE)]]

We want to find the parameters $\theta$ (weights and bias) that give the **highest log-likelihood** of our observed data

For each viewer $i$, logistic regression predicts:

$$  
p_i = P(y_i=1\mid x_i)=\sigma(\theta^Tx_i+\theta_0)  
$$

Assuming viewers' outcomes are conditionally independent, the **log-likelihood** for all n viewers is:

$$  
\log L(\theta)=\sum_{i=1}^{n}\left[y_i\log(p_i)+(1-y_i)\log(1-p_i)\right]  
$$

- If $y_i=1$, the contribution is $\log(p_i)$.
- If $y_i=0$, the contribution is $\log(1-p_i)$.

We don't want the model to maximize the probability of YES. We want it to maximize the probability of the **actual observed labels**.

**Objective:**

$$  
\theta^*=\arg\max_{\theta}\log L(\theta)  
$$

We choose the parameters that assign the highest likelihood to the outcomes we actually observed.

Example
**Likelihood** measures how well the model's predicted probabilities agree with the actual observed outcomes.

For each viewer, logistic regression predicts $p=P(\text{yes}\mid x)$.

- If the actual label is **yes** ($y=1$), use $p$.
- If the actual label is **no** ($y=0$), use $1-p$.

|Viewer|Actual Label|Predicted $p$|$P(\text{actual label})$|
|---|---|---|---|
|1|Yes|0.75|0.75|
|2|No|0.06|0.94|
|3|Yes|0.94|0.94|
|4|No|0.14|0.86|

$$  
L(\theta)=0.75\times0.94\times0.94\times0.86  
$$

$$  
L(\theta)\approx0.57  
$$

$$  
\log L(\theta)=\log(0.75)+\log(0.94)+\log(0.94)+\log(0.86)  
$$

$$  
\log L(\theta)\approx-0.562  
$$

For all n viewers:

$$  
\log L(\theta)=\sum_{i=1}^{n}\left[y_i\log(p_i)+(1-y_i)\log(1-p_i)\right]  
$$

[[notes/Maths/Probability/Gradient Ascent|Gradient ascent]] moves the weights and bias in the direction that increases the log-likelihood, helping logistic regression find parameters that best fit the observed training data.

$$  
\theta_j^{\text{new}}=\theta_j+\alpha\frac{\partial \text{score}}{\partial\theta_j}  
$$
- $\theta_j$ — Current model parameter (weight or bias).
- $\alpha$ — Learning rate (step size).
- $\text{score}$ — Log-likelihood of the observed data.

$$  
\theta^{\text{new}}=\theta+\alpha\nabla_\theta\log L(\theta)  
$$

During training, **gradient ascent updates the model parameters to maximize the average log-likelihood**.

1. Initialize the weights $\theta$ and bias $\theta_0$.
2. Calculate the log-likelihood using the training data.
3. Compute the gradients and update the parameters using gradient ascent.
4. Repeat until the log-likelihood stops improving significantly.

**Average Log-Likelihood:**

$$  
\frac{1}{N}\sum_{i=1}^{N}\left[y_i\log(p_i)+(1-y_i)\log(1-p_i)\right]  
$$
Makes scores more comparable across datasets containing different numbers of viewers


![[Pasted image 20261120204705.png]]

---
#### Binary Cross-Entropy (BCE) Loss

It measures how well the predicted probabilities match the actual binary labels.

$$  
\text{BCE}=-\frac{1}{N}\sum_{i=1}^{N}\left[y_i\log(p_i)+(1-y_i)\log(1-p_i)\right]  
$$
- If $y_i=1$, the loss is $-\log(p_i)$.
- If $y_i=0$, the loss is $-\log(1-p_i)$.

The model receives a **small loss when it assigns high probability to the correct label** and a large loss when it confidently predicts incorrectly.

BCE is the **negative average log-likelihood**.

$$  
\text{BCE}=-\frac{1}{N}\log L(\theta)  
$$

Therefore:

- **Gradient ascent:** Maximize log-likelihood.
- **Gradient descent:** Minimize BCE.

**Gradient descent update:**

$$  
\theta_j^{\text{new}}=\theta_j-\alpha\frac{\partial\text{BCE}}{\partial\theta_j}  
$$

Logistic regression is trained by minimizing BCE (or equivalently maximizing log-likelihood)

---
