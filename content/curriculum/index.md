---
title: Curriculum
---

# Machine Learning Curriculum

**Curriculum pages:** [Curated Bookmarks](/curriculum/bookmarks) · [Personal](/curriculum/personal)

> [!important] The rule for prerequisites
> Use mathematics **just in time**. When a concept blocks the current module, revise only that concept, apply it, and continue. Repeated contact is part of learning—not evidence that you are behind.

## How to use this curriculum

Each phase has three layers:

1. **Learn** — understand the central ideas and vocabulary.
2. **Implement** — reproduce a small method without hiding everything behind a library.
3. **Explain** — write a short note about what worked, what failed, and why.

Work through Phases 0–2 in order. After that, choose one research branch and one engineering branch. Treat the remaining subjects as a reference map rather than a single enormous checklist.

---

## 30-Day Book and Paper Sprint

**Goal:** build a coherent first picture of learning theory, linear algebra, and the architectural lineage of modern AI in one intensive month.

This is a **selected-reading plan**, not a promise to finish three textbooks and thirty papers cover to cover. Budget roughly **12–15 focused hours per week**. If time is limited, complete the items marked **Core** and move the rest to the long-term curriculum.

### The book stack

| Role                  | Book                                                                                                                                                                                                                       | How to use it this month                                                                                                            |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| Primary spine         | [_Learning From Data: A Short Course_](https://amlbook.com/) — Yaser S. Abu-Mostafa, Malik Magdon-Ismail, and Hsuan-Tien Lin                                                                                               | Read Chapters 1–5 in order; this supplies the story connecting learning, generalization, linear models, overfitting, and validation |
| Theory companion      | [_Understanding Machine Learning: From Theory to Algorithms_](https://www.cs.huji.ac.il/~shais/UnderstandingMachineLearning/understanding-machine-learning-theory-algorithms.pdf) — Shai Shalev-Shwartz and Shai Ben-David | Read selected chapters that formalize the same ideas through PAC learning, VC dimension, convexity, regularization, and SGD         |
| Mathematics companion | [_Linear Algebra Done Right_](https://linear.axler.net/LADR4e.pdf) — Sheldon Axler                                                                                                                                         | Study selected sections and exercises; prioritize vector spaces, linear maps, inner products, eigenvalues, and SVD                  |

### Weekly rhythm

- **Monday–Thursday:** 60 minutes on the primary book, 45 minutes on the companion chapter, and 30 minutes on exercises or derivations
- **Friday:** read one paper and produce a one-page paper card
- **Saturday:** implement or derive the week's central idea; then review weak points
- **Sunday:** catch up or rest—do not begin new material

### Week 1 — What is learning?

**Core reading**

- [ ] _Learning From Data_, Chapter 1 — the learning problem, feasibility, error, and noise
- [ ] _Understanding Machine Learning_, Chapters 2–3 — the statistical learning framework and PAC model
- [ ] _Linear Algebra Done Right_, Sections 1A–1C and 2A–2C — fields, vector spaces, span, independence, bases, and dimension
- [ ] Paper: [_ImageNet Classification with Deep Convolutional Neural Networks_](https://proceedings.neurips.cc/paper/2012/hash/c399862d3b9d6b76c8436e924a68c45b-Abstract.html)

**Output**

- [ ] Write one learning problem as domain, data distribution, hypothesis class, loss, and success criterion
- [ ] Solve at least six Axler exercises and explain span, independence, basis, and dimension without notes
- [ ] Create the first paper card using the template below

### Week 2 — Why does learning generalize?

**Core reading**

- [ ] _Learning From Data_, Chapter 2 — VC dimension, generalization bounds, bias, and variance
- [ ] _Understanding Machine Learning_, Chapters 4–6 — uniform convergence, the bias–complexity tradeoff, and VC dimension
- [ ] _Linear Algebra Done Right_, Sections 3A–3D — linear maps, null spaces, ranges, matrices, and invertibility
- [ ] Paper: [_Deep Residual Learning for Image Recognition_](https://arxiv.org/abs/1512.03385)

**Stretch**

- [ ] _Understanding Machine Learning_, Chapter 7 — structural risk minimization and minimum description length
- [ ] Paper: _Keeping Neural Networks Simple by Minimizing the Description Length of the Weights_ from the [Top 30 reading list](https://aman.ai/primers/ai/top-30-papers/)

**Output**

- [ ] Derive one finite-class generalization bound and explain what changes as the hypothesis class grows
- [ ] Draw the relationship between injectivity, null space, surjectivity, and range
- [ ] Compare plain depth with residual connections in a short architecture note

### Week 3 — Models and optimization

**Core reading**

- [ ] _Learning From Data_, Chapter 3 — classification, linear and logistic regression, gradient descent, and nonlinear transforms
- [ ] _Understanding Machine Learning_, Chapters 9, 12, and 14 — linear predictors, convex learning, and stochastic gradient descent
- [ ] _Linear Algebra Done Right_, Sections 5A and 6A–6C — eigenvalues, inner products, orthogonality, minimization, and pseudoinverses
- [ ] Paper: [_Neural Machine Translation by Jointly Learning to Align and Translate_](https://arxiv.org/abs/1409.0473)
- [ ] Paper: [_Attention Is All You Need_](https://arxiv.org/abs/1706.03762)

**Stretch**

- [ ] _Understanding Machine Learning_, Chapter 15 — support vector machines

**Output**

- [ ] Implement linear and logistic regression without a model-fitting library
- [ ] Derive the gradient of logistic loss and connect least squares to orthogonal projection
- [ ] Explain, with matrix shapes, how Bahdanau attention leads toward scaled dot-product attention

### Week 4 — Overfitting, selection, and scale

**Core reading**

- [ ] _Learning From Data_, Chapters 4–5 — overfitting, regularization, validation, Occam's razor, sampling bias, and data snooping
- [ ] _Understanding Machine Learning_, Chapters 11 and 13 — model selection, validation, regularization, and stability
- [ ] _Linear Algebra Done Right_, Sections 7B and 7E — the spectral theorem and singular value decomposition
- [ ] Paper: [_Scaling Laws for Neural Language Models_](https://arxiv.org/abs/2001.08361)

**Stretch**

- [ ] Paper: [_GPipe: Easy Scaling with Micro-Batch Pipeline Parallelism_](https://arxiv.org/abs/1811.06965)
- [ ] _Understanding Machine Learning_, Chapter 20 — scan the neural-networks chapter and list which assumptions no longer match modern deep learning practice

**Output**

- [ ] Run an overfitting experiment that varies data size, model capacity, and regularization strength
- [ ] Use SVD for a low-rank approximation and plot reconstruction error against retained rank
- [ ] Write a two-page synthesis: **generalization, representation, optimization, and scale**

### Paper-reading method

Use [Ilya Sutskever's Top 30 reading list](https://aman.ai/primers/ai/top-30-papers/) as the source queue. Do not treat the summaries as substitutes for the original papers.

For the first pass, read in this order:

1. Abstract and conclusion
2. Introduction and figures
3. Method and central equations
4. Experiments and ablations
5. Related work only after you understand the paper's claim

Create a **paper card** with:

- **Problem:** What limitation existed before this work?
- **Claim:** What is the paper's central claim in one sentence?
- **Mechanism:** What changed mathematically or architecturally?
- **Evidence:** Which experiment most strongly supports the claim?
- **Assumption:** What must be true for the result to matter?
- **Weakness:** What is untested, expensive, or no longer convincing?
- **Connection:** Which book concept makes the paper easier to understand?
- **Reproduction:** What is the smallest result you could reproduce?

### End-of-month completion standard

- [ ] Finish all five chapters of _Learning From Data_
- [ ] Complete the selected theory and linear-algebra sections marked **Core**
- [ ] Solve at least 25 book exercises across the month
- [ ] Produce at least five paper cards
- [ ] Implement linear regression, logistic regression, and one SVD experiment
- [ ] Explain PAC learning, VC dimension, regularization, SGD, attention, residual learning, and scaling without relying on memorized definitions
- [ ] Choose the next Phase 1 topic from the gaps revealed by the final synthesis

---

## Phase 0 — Working Foundations

**Purpose:** become comfortable enough with code, data, and mathematical notation to learn by building.

### Programming and algorithms

- [ ] Write clear Python and use NumPy, pandas, Matplotlib, and notebooks
- [ ] Understand arrays, hash tables, trees, graphs, sorting, and searching
- [ ] Analyze runtime and memory with Big-O notation
- [ ] Use Git, environments, tests, and reproducible project structure
- [ ] Implement one data-processing pipeline from raw input to a checked dataset

### Linear algebra and calculus

- [ ] Vectors, matrices, matrix multiplication, norms, and projections
- [ ] Eigenvalues, eigendecomposition, and singular value decomposition
- [ ] Partial derivatives, gradients, Jacobians, and Hessians
- [ ] Multivariable chain rule and Taylor approximation
- [ ] Implement linear regression and gradient descent with NumPy

### Probability and statistics

- [ ] Random variables, common distributions, expectation, and variance
- [ ] Conditional probability, Bayes' rule, independence, and correlation
- [ ] Sampling, estimation, confidence intervals, and hypothesis tests
- [ ] Law of large numbers and central limit theorem
- [ ] Markov, Chebyshev, Hoeffding, and Chernoff bounds at intuition level

**Resources already selected**

- [ ] _Introduction to Statistics and Data Analysis_ — Christian Heumann, Michael Schomaker, Shalabh
- [ ] _All of Statistics: A Concise Course in Statistical Inference_ — Springer Texts in Statistics
- [ ] [Intro to Inferential Statistics](https://www.udacity.com/course/intro-to-inferential-statistics--ud201)
- [ ] [Descriptive Statistics](https://www.udacity.com/course/descriptive-statistics--cd12638)
- [ ] [Foundations of Data Science](https://www.cs.cornell.edu/jeh/book.pdf) — use the probability and concentration material as needed
- [ ] https://seeing-theory.brown.edu/

### Completion evidence

- [ ] A NumPy notebook implementing linear regression, gradient descent, and uncertainty estimates
- [ ] A short note explaining how conditioning, learning rate, and sample size affected the result

---

## Phase 1 — Core Machine Learning

**Purpose:** learn the statistical and computational ideas shared by most ML systems.

### Supervised and unsupervised learning

- [ ] Linear and logistic regression
- [ ] Decision trees, ensembles, nearest neighbors, and support vector machines
- [ ] Clustering, principal component analysis, and matrix factorization
- [ ] Loss functions, regularization, bias–variance tradeoff, and data leakage
- [ ] Train/validation/test splits, cross-validation, calibration, and error analysis

### Optimization

- [ ] Convex sets and functions; why a local optimum can be global
- [ ] Gradient descent, stochastic gradient descent, momentum, and Adam
- [ ] Linear programs, duality, and the meaning of a dual certificate
- [ ] Constraints, Lagrangians, and KKT conditions
- [ ] Numerical stability, conditioning, and floating-point limitations

**Resources**

- [ ] [Convex Optimization — Boyd and Vandenberghe](https://web.stanford.edu/~boyd/cvxbook/) — begin with Chapters 1–3; return to duality when needed
- [ ] [Algorithms — Jeff Erickson](https://jeffe.cs.illinois.edu/teaching/algorithms/) — use the complexity, NP-hardness, and approximation chapters when they become relevant

### Learning theory

- [ ] Empirical risk minimization and Bayes-optimal prediction
- [ ] PAC learning, VC dimension, and sample complexity
- [ ] Uniform convergence and algorithmic stability
- [ ] Rademacher complexity and generalization bounds
- [ ] Statistical decision theory and minimax estimation

### Completion evidence

- [ ] Compare at least three model families on one real dataset
- [ ] Include a baseline, ablation, error analysis, and reproducible evaluation
- [ ] Explain whether the main limitation came from data, optimization, capacity, or evaluation

---

## Phase 2 — Deep Learning Fundamentals

**Purpose:** understand the components from which modern foundation models are built.

### Neural-network mechanics

- [ ] Perceptrons, multilayer networks, activations, and loss functions
- [ ] Backpropagation and reverse-mode automatic differentiation
- [ ] Initialization, normalization, regularization, and optimization
- [ ] Convolutional networks and residual connections
- [ ] Recurrent networks, LSTMs, GRUs, and vanishing gradients
- [ ] Attention, multi-head attention, positional encoding, and transformers

### Representation and generative learning

- [ ] Transfer learning and the pretrain–fine-tune paradigm
- [ ] Self-supervised, contrastive, and representation learning
- [ ] Autoencoders and variational autoencoders
- [ ] Generative adversarial networks
- [ ] Normalizing flows
- [ ] Score matching and diffusion models

### Completion evidence

- [ ] Implement backpropagation for a small network without autograd
- [ ] Train one vision or language model using a modern framework
- [ ] Reproduce a small result from a paper and document deviations from the original

---

## Phase 3 — Choose a Research Branch

Choose **one primary branch**. Add a second only after completing a substantial project in the first.

### A. Language, foundation models, and agents

- [ ] Tokenization and autoregressive language modeling
- [ ] BERT/GPT objectives, instruction tuning, and preference optimization
- [ ] Scaling laws, emergent behavior, and model failure modes
- [ ] Retrieval, tool use, memory, and agentic workflows
- [ ] Multimodal and vision-language models
- [ ] Mechanistic interpretability, sparse autoencoders, and evaluation
- [ ] Alignment: reward misspecification, scalable oversight, and Goodhart's law

**Build:** an evaluated tool-using or retrieval-augmented system with traces, failure categories, and an ablation.

### B. Computer vision and geometric learning

- [ ] Convolutional architectures and vision transformers
- [ ] Detection, segmentation, and representation learning
- [ ] Contrastive image–text learning and multimodal grounding
- [ ] Graph neural networks and message passing
- [ ] Equivariance, invariance, and geometric deep learning
- [ ] Manifold learning and differential geometry
- [ ] Neural ODEs, physics-informed models, and scientific ML

**Build:** a vision or geometric-learning system tested against distribution shift, not only a random validation split.

### C. Reinforcement learning and decision making

- [ ] Markov decision processes and Bellman equations
- [ ] Dynamic programming, Q-learning, and SARSA
- [ ] Policy gradients and variance reduction
- [ ] Actor–critic methods, PPO, and trust regions
- [ ] Model-based RL, planning, world models, and MCTS
- [ ] Multi-agent RL and emergent communication
- [ ] Continual learning, meta-learning, and few-shot adaptation

**Build:** an RL agent with learning curves across multiple seeds and a discussion of reward design and sample efficiency.

### D. Probabilistic modeling and causality

- [ ] Graphical models, d-separation, and factor graphs
- [ ] Bayesian inference and hierarchical models
- [ ] Variational inference and the ELBO
- [ ] Importance sampling, MCMC, and convergence diagnostics
- [ ] Markov chains, mixing, and message passing
- [ ] Potential outcomes and observational study design
- [ ] Structural causal models, interventions, and do-calculus
- [ ] Causal representation learning

**Build:** a probabilistic or causal analysis that states its assumptions, checks diagnostics, and distinguishes prediction from intervention.

### E. Theory, optimization, and privacy

- [ ] Online learning, regret, bandits, UCB, Thompson sampling, and EXP3
- [ ] Kernel methods and reproducing-kernel Hilbert spaces
- [ ] Sparse methods and compressed sensing
- [ ] Spectral methods and random matrix theory
- [ ] Approximation theory and neural-network expressivity
- [ ] Differential privacy and composition
- [ ] Dynamical systems, stability, and optimal control
- [ ] Computational hardness of learning and inference

**Build:** a theorem-led study that pairs a derivation or proof with an experiment illustrating where its assumptions matter.

### F. Algorithmic game theory and mechanism design

- [ ] Strategic-form, zero-sum, Bayesian, and extensive-form games
- [ ] Mixed strategies, best responses, Nash and correlated equilibria
- [ ] Minimax, linear-program duality, and equilibrium existence
- [ ] No-regret learning and Multiplicative Weights
- [ ] Complexity of equilibrium computation, total search, and PPAD
- [ ] Congestion and potential games; price of anarchy
- [ ] Counterfactual regret minimization and Monte-Carlo CFR
- [ ] Auctions, truthful mechanisms, VCG, and computational constraints
- [ ] Multi-agent learning and exposure-game equilibria

**Build:** implement one equilibrium or regret-minimization algorithm, test it on several games, and explain both its guarantee and its failure modes.

---

## Algorithmic Game Theory — Just-in-Time Math Toolkit

Do **not** study this entire table in advance. Use it as a lookup when a game-theory topic becomes blocked.

| When you encounter…                                    | Revise only…                                                             | Target depth                                            |
| ------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------- |
| Algorithm runtime or equilibrium hardness              | Big-O, reductions, P/NP, NP-hardness, approximation ratios, total search | Explain the classification and its consequence          |
| Zero-sum games, minimax, correlated equilibria, or VCG | Linear programs, primal/dual form, and strong duality                    | See why primal and dual optima meet                     |
| Regret minimization or potential games                 | Convex sets/functions, gradients, and step sizes                         | Understand why convexity makes optimization tractable   |
| Regret bounds or Monte-Carlo CFR                       | Expectation, variance, Markov, Chebyshev, Hoeffding/Chernoff             | Recognize why a random average concentrates             |
| Payoff matrices or exposure games                      | Matrix products and matrix factorization                                 | Understand how the representation changes the algorithm |
| Nash existence or PPAD                                 | Brouwer's fixed-point theorem                                            | Picture and statement only; skip the proof initially    |

After each revision, record: **what blocked you, what you revised, and where you used it immediately**.

---

## Phase 4 — Computing and Engineering for ML

Study this alongside a research branch. Start with the common production path, then go lower-level only when scale or performance creates a real need.

### Common engineering path

- [ ] Data formats, loaders, preprocessing, validation, and feature pipelines
- [ ] Experiment tracking, configuration, reproducibility, and hyperparameter search
- [ ] Model versioning, registries, deployment, and rollback
- [ ] Inference batching, caching, observability, and load testing
- [ ] A/B tests, canary deployments, drift monitoring, and incident response
- [ ] Edge deployment, distillation, pruning, and quantization
- [ ] Compute efficiency, cost measurement, and Green AI

### Scaling and systems path

- [ ] GPU execution, memory hierarchy, and CUDA kernels
- [ ] Mixed precision, activation checkpointing, and memory-efficient attention
- [ ] Data, tensor, pipeline, and optimizer-state parallelism
- [ ] Collective communication, NCCL, RDMA, and network topology
- [ ] Automatic differentiation systems and ML compilers
- [ ] Profiling with a roofline-style performance model
- [ ] Fault tolerance and distributed checkpointing
- [ ] TPU and other accelerator architectures

### Completion evidence

- [ ] Deploy a model behind an API with tests and monitoring
- [ ] Measure latency, throughput, memory, cost, and model quality
- [ ] Identify one bottleneck with a profiler and verify the improvement after changing it

---

## Phase 5 — Advanced Mathematical Reference

These subjects deepen specific research directions. They are **not universal prerequisites**.

- [ ] Measure theory and Lebesgue integration — rigorous probability and theoretical ML
- [ ] Information theory — representation, compression, generalization, and communication
- [ ] Numerical linear algebra — large models, scientific ML, and stable solvers
- [ ] Functional analysis and RKHS theory — kernels and nonparametric learning
- [ ] Random matrix theory — high-dimensional statistics and spectral methods
- [ ] Differential geometry — manifolds, information geometry, and equivariant learning
- [ ] Tensor decomposition — latent-factor, multimodal, and scientific models
- [ ] Dynamical systems and control — optimization dynamics, robotics, and continuous-time models

---

## Progress checkpoints

Use these checkpoints to decide whether to advance. Time spent is not the test; retained capability is.

| Checkpoint     | You are ready when you can…                                                                   |
| -------------- | --------------------------------------------------------------------------------------------- |
| Foundations    | derive a gradient, reason about matrix shapes, and quantify uncertainty in a small experiment |
| Core ML        | choose a baseline, prevent leakage, evaluate correctly, and explain the dominant error source |
| Deep learning  | trace backpropagation, diagnose training behavior, and reproduce a small published result     |
| Specialization | read current papers in one branch and build a credible extension or critical replication      |
| Engineering    | deploy, measure, monitor, and improve a model under an explicit system constraint             |

## Learning log template

For every substantial module or project, capture:

- **Question:** What am I trying to understand or build?
- **Prediction:** What do I expect, and why?
- **Evidence:** What did the experiment, derivation, or source show?
- **Failure:** What did not work?
- **Just-in-time revision:** Which prerequisite did I revisit?
- **Next step:** What is the smallest useful follow-up?
