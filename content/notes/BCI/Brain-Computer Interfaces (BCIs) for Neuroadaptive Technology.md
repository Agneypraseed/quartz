
BCI : An interface that derives information or commands from brain activity for interaction with a technical system, independently of muscular activity. 

- A new interface for HCI (Human computer interaction)

BCIs operate on a continuous, closed-loop feedback system:
1. **Recording**: Brain activity is recorded during HCI.
2. **Classification**: Features extracted from the brain recording are analyzed and classified to identify the user's current mental state. 
3. **Inference & Command**: Based on inferences made from changes in that mental state, a specific command is sent to the machine. 
4. **Perception & Feedback**: The user perceives the system's response (e.g., a change on the screen). This perception potentially initiates a new mental state change, starting the loop over again.

	![[Pasted image 20260731150814.png]]

Brain-Computer Interfaces can be divided into three categories based on how brain activity is modulated and utilized in Human-Machine Systems (HMS).

| Type of BCI | Mechanism of Action | Primary Use Case | Example |
| :--- | :--- | :--- | :--- |
| **Active** | Brain activity is **directly consciously controlled** by the user, independently of external events. | Direct control | Hex-O-Spell |
| **Reactive** | Brain activity arises in reaction to external stimulation, which is **indirectly modulated** by user focus. | Direct control | P300-Speller |
| **Passive** | Uses arbitrary brain activity **without the purpose of voluntary control** to gather implicit information. | Supporting systems, user-state detection | Detecting Mental Workload |
- **Active BCI (Generation):** You have to consciously _create_ a specific brainwave pattern. It takes deliberate effort, like strongly imagining clenching your fist, doing mental math, or visualizing a rotating object.
- **Reactive BCI (Attention):** You don't have to invent a thought; you just have to _pay attention_. Your brain naturally and automatically emits a specific electrical spike (like the P300 wave) when the specific thing you are staring at flashes. You are just aiming your focus, and the brain does the reacting automatically.
- Passive BCIs are fundamentally different because they do not require voluntary intent from the user. 
- They are the foundation of **Neuroadaptive systems**, designed to enrich Human-Computer Interaction (HCI) by seamlessly detecting user states in the background.

Passive BCIs can infer:
- intentions,
- mental workload,
- emotions,
- context-related responses,
- interpretations.
They allow a machine to adapt implicitly, potentially even without the user’s explicit awareness.

Traditional BCI systems often require:
1. **User training:** approximately 5–15 minutes.
2. **Machine training:** approximately 10–45 minutes using labelled data.
3. **Data from one specific person.**
4. **An individualised classifier.**
5. **A specific application.**
6. Bulky or inconvenient laboratory hardware.
This limits generalization and prevents genuine plug-and-play use.

A **universal classifier** should generalise across:
- large amounts of data,
- different people,
- different contexts,
- different applications,
- different sensor systems.
The desired properties are:
- plug-and-play operation,
- applicability across contexts,
- sensor-system agnosticism.

---

**Neuroadaptivity** is about shifting Human-Computer Interaction (HCI) from a passive relationship to a responsive one. Instead of waiting for you to click a button or type a command (explicit input), a neuroadaptive system uses **passive Brain-Computer Interfaces (pBCIs)** to read your cognitive and emotional state in real-time. 

**Neuroadaptive AI**
By monitoring your workload, attention, or engagement levels, the system can adjust its behavior to match your needs on the fly. When you scale this up to include long-term user modeling (understanding how you personally perceive and value the world) you move into **Neuroadaptive AI**.This represents a leap in the "alignment problem," as the AI isn't just guessing what humans want in the abstract; it is dynamically aligning itself with your specific, subjective reality to become a co-adaptive and ethically grounded partner.

Neuroadaptive reinforcement learning
A normal reinforcement-learning agent learns from a reward:

```
Action → outcome → reward → policy update
```

In **neuroadaptive reinforcement learning**, the human observes an outcome, and the brain response is decoded to help construct the reward.

```
AI action
→ human observes outcome
→ brain response
→ pBCI inference
→ brain-based reward
→ AI learns
```

The brain response may contain multiple dimensions:

- level of surprise,
- degree of error,
- current workload,
- other cognitive dimensions.


### Implicit cursor control experiment
The system:
1. moves or “jumps” the cursor,
2. records the user’s brain response,
3. estimates whether the movement was perceived as good or bad,
4. builds a model of directional preferences,
5. uses that model as a brain-based reward function,
6. learns to control the cursor implicitly.
The purpose is to generate a model of the human’s perspective rather than asking for explicit feedback after every movement.

The cursor experiment produced these reported findings:
- different responses to jumps interpreted as good and bad,
- a linear relationship between deviation angle and response amplitude,
- ICA localisation around the medial prefrontal cortex,
- a relationship with predictive coding,
- the possibility of modelling higher-order cognition,
- the possibility of assessing the brain’s reward function.

#### Predictive coding
The brain forms predictions about expected events.
```
Expected result
vs.
actual result
→ prediction error
```
A larger unexpected deviation can produce a stronger neural response.

---
Generating a BCI 
- User trained BCI
	- The o/p of the the machine defines the i/p to the BCI. It expects a specific command to be sent for executing the related action.
	- The user needs to train how to generate the pre defined brain activity at the sensor. Once user learned to control their brain activity precisely a stable communication through the BCI is possible. 

- ML based BCI
	- Diff i/p commands are generated by the user and the BCI learns to detect the difference between them.

Measuring brain activity
Some approaches include fMRI, fNIRS, MEG, EEG
		MEG : not used much, needed to be cooled
Classic neuroscience for interpreting brain activity : Isolating process, avg over population as brains are highly variable among a population. 

With BCIs there is no isolation, no averages so there is more noise.
The goal is more to predict than explain as in classic neuroscience. 

Applications of BCI
- Passive BCIs
	- Mental State Assessment : 
		- Workload monitoring at the office
- Closed loop : system adapts
- Open loop : User gets a feedback but system does not adapt.

Motor Imagery Control (Active BCI)
- C3, C4 used from EEG
- Classification done with LDA

---
Lecture 2 : Foundations of HCI

Human-Machine System
A Human–Machine System is defined as cooperation between the human user and technological element toward a task. Their capabilities complement each other. HMS is broader because machine can include mechanical systems, A machine need not necessarily be a digital computer.

 A computer can execute accurate and powerful actions if properly instructed. Holistic understanding and handling unforeseen events belong to the user.

Closed-Loop Human-Computer Interaction
- Closed-loop HCI is **not one-directional**.
- Human output can become computer input.
- Computer output can become human input.
- Both agents **process received input** before responding.
- Context can affect the response of either agent.

Modelling a specific interaction:
- A model's level of abstraction depends on the **scale and number of entities and properties included**.
- A **unit** is a physical or logical entity that possesses properties and is treated as a complete entity at the chosen abstraction level.
	- A **human** is defined as a unit that is a human being. if the person only reacts to a visual signal with a hand action, the model may use binary properties for whether the signal was perceived and whether the hand moved.
- The **state of a unit** is the unit's current configuration, represented by the specific values of all its property variables.
	- In case of unit human if they are able to press a button or not.
- **Information is relative to a unit.** Data becomes information for a unit when that unit knows some **logical connection** between that data and other data/properties. Correlation or dependency can constitute such a logical connection.
- An **interface** is a **shared boundary** across which two or more units exchange data according to a ruleset.
	- For communication **A → B** to work:
```
A needs physical + logical means to TRANSMIT
B needs physical + logical means to RECEIVE
```

So an interface is not merely a physical cable/screen, it includes the necessary **rules/processes** for exchange.

OUTPUT = data flowing FROM the unit through an interface
INPUT = data RECEIVED BY the unit through an interface

**Implicit input** occurs when the receiver acquires information that:
- the source **did not intend** the receiver to acquire, **or**
-  the source **was not aware** the receiver acquired.
Everything else is explicit.

Control of A over B is defined in terms of a resulting state change in B. Explicit output from A causes a state change in B determined by that output. Implicit output from A causes a state change in B beneficial to A.

 Communication involves transmission or reciprocal exchange of information through interfaces. Interaction requires reciprocal exchange of information. Interaction additionally results in control.

The standard scheme contains, among other things:
- a **human**,
- a **machine**,
- an **interface**,
- and **input/output modalities**.





---
BCI Classification : lecture 8

-> LDA, Normal, CLT, Overfitting

- extract independent features, visualize features, find which models 
- In well-defined feature extraction pipelines, we assume that the extracted features and their corresponding feature vectors are normally distributed. This assumption relies heavily on the **Central Limit Theorem**, which states that when you average or combine many independent random variables (like raw EEG amplitudes over an epoch), their sum tends toward a normal distribution.

>LDA

reduce feature space, check variance on features, to assess a feature look at how it is distibuted (normal), 


Covariance drift


- Choosing btw the k fold  : pseudo online and sequential k fold for more accuracy
- The diff increase as there are more degree of freedom to fit the data






























