
BCI : An interface that derives information or commands from brain activity for interaction with a technical system, independently of muscular activity. 

- A new interface for HCI (Human computer interaction)

BCIs operate on a continuous, closed-loop feedback system:
1. **Recording**: Brain activity is recorded during HCI.
2. **Classification**: Features extracted from the brain recording are analyzed and classified to identify the user's current mental state. 
3. **Inference & Command**: Based on inferences made from changes in that mental state, a specific command is sent to the machine. 
4. **Perception & Feedback**: The user perceives the system's response (e.g., a change on the screen). This perception potentially initiates a new mental state change, starting the loop over again.

	![[notes/BCI/images/Pasted image 20260731150814.png]]

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

----

Direct Control : **Active & Reactive BCI**.
In both cases, BCI information is used as an intentional command pathway
Active BCI uses consciously generated brain activity 
Reactive BCI uses responses to external stimuli to select/control something.

Implicit Control : Passive BCI
Now the machine extracts information that is not simply an explicit command. 

User Modelling : Even with a  **Non-Command** thought the machine derives a **Mental State Index** from brain-related data, combines it with **Context Measures**, and feeds these into a **User Model**.

How a neuroadaptive system actively obtains information about the user, updates its user model, adapts, and decides whether more information is needed.

![[notes/BCI/images/Pasted image 20260811105729.png]]

A **probe stimulus** is selected based on the existing user model. This stimulus is chosen because it can reveal something useful about the user.
The stimulus affects the user and provokes an **automatic response**. This is crucial: the system is not necessarily asking the user to explicitly report their state.
The user’s brain activity/biosignal is monitored. The same biosignal can mean different things in different situations, so the measured data is interpreted **within the given context** to infer **Relevant Aspects of User State**.
The interpreted user-state information updates the internal **User Model**.The system uses the updated user model to **adapt** itself to the user.
After adaptation, the system can evaluate whether the adaptation was sufficient. If not, it can request more information and choose another probe. That is why this is a **closed loop**.

Machine-Learning Based BCIs
The user generates different command-related brain patterns. The **BCI learns to detect the differences** between those patterns. The machine cannot learn a mapping without examples. The command examples therefore become **training data**.

These examples are typically collected in a **calibration session before actual BCI application**, approximately **30 minutes**.
After calibration, the calibrated BCI can then be used in HCI with **well-predictable performance**.
Most BCIs need to be calibrated again for a new HCI session.

Stages of a Machine-Learning BCI : first make the user able to produce usable signals, then train the machine on labeled data, then deploy it online.

- User Training: 5–15 minutes
	The user learns how to generate the **appropriate control signals**. This is not the months-long user-trained BCI, it is a short preparatory stage inside a machine-learning BCI workflow.
- Machine Training: 10–45 minutes
	The machine learns to detect the relevant signals from **labeled data**. This is the calibration / classifier-learning stage.
- Application: long term 
	After training, the machine interprets the **EEG data online** during actual use.

Measuring Brain Activity
Sensors track **physical properties of the brain that correlate with its working processes**.
Different modalities observe different physical phenomena
Some properties of the brain that is measured are
- properties of **blood flow**,
- **biochemical** processes,
- **electrical** processes.

Common acquisition approaches
- **(f)MRI**
- **(f)NIRS**
- **MEG**
- **EEG**

Methods such as **ECoG** and **single-cell recordings** require surgery.

To compare measurement methods 
1. **Invasiveness:** whether application damages the body, especially if damage is irreversible.
2. **Spatial resolution:** how precisely the method can localize brain activity; perfect single-neuron acquisition is not currently possible.
3. **Temporal resolution:** how quickly the method can capture changes in brain activity over time.
4. **Portability:** how technically/physically practical the recording system is to carry or deploy in HCI.
5. **Acquisition cost:** the cost of the measurement system.

A method may measure useful brain information but still be impractical for real-world HCI if it is invasive, non-portable or extremely expensive.

Classical neuroscience often starts with a controlled condition and asks: _what brain activity does this condition produce?_ A BCI needs to operate in the opposite direction: from measured brain activity, it has to infer the relevant command or user-state information.

Real HCI contains many processes at the same time. Attention, perception, movement, emotion, context and artifacts may overlap. Unlike a highly controlled lab experiment, the BCI has less ability to isolate one clean process.
An online BCI usually needs an answer **now**. It cannot wait for dozens of repetitions and average them before deciding what the user meant. This is why **single-trial interpretation** becomes important.
BCIs often must account for person-specific brain patterns rather than relying only on a population-average response.

Refined Calibration Pipeline : The more complete procedure for turning brain signals into a validated classification scheme and then deploying it.

Stage 1 : User Training
The purpose is for the user to become familiar with the task that will later be used during machine training.
The exact task depends on BCI type:
- For **active/reactive BCI**: the user may practice generating BCI-detectable signals.
- For **passive BCI**: the user may perform a predefined HCI task that is usually independent of BCI input, so naturally occurring passive signals can be generated.

Stage 2 : Machine Training
The user is guided to generate **prototypes of brain activity** that correspond to what the BCI needs to recognize.
Artifact control is crucial. During machine training, **all artifacts should be controlled**. Otherwise the classifier might learn irrelevant patterns instead of the intended brain signal.

A **classification scheme** consisting of:
Feature extraction : Transform raw brain data into informative variables.
Classifier : Use features to distinguish classes / infer state.
The scheme may either distinguish **intended commands** or infer an **aspect of cognitive state**.

Stage 3 : Confluence Stage
Now the classification scheme is connected to a **simple BCI application**.
This stage checks what happens when the classifier and application actually meet. Depending on performance:
- classifier parameters may be adjusted, or
- in active BCIs, the user may learn how to interact with the system.
This is the stage where the trained classification system and the actual interaction begin to come together.

Stage 4 : Validation Stage
This is the **first test of the intended BCI application**.
Its output is a **performance estimate** for the classification scheme. If performance is insufficient, some of the previous three stages may be repeated.

Stage 5 : Application Stage
The **defined and validated classification scheme** is finally used to generate input to the technical system from the user's brain activity.
Online adaptation : During application, methods capable of **online adaptation** may continuously adjust classifier parameters in response to relevant changes in the user's state.

Passive BCI
A passive BCI can operate **alongside another Human–Computer Interaction without interfering with it**. This is easier than for many active/reactive BCIs because passive BCI does not require an extra conscious control task.
The passive BCI may depend on the **presence** of an ongoing HCI, the **absence** of an ongoing HCI, or may be **invariant** to it.
An application can use **arbitrarily many passive BCI schemes in parallel without conflicts**. Active/reactive BCIs are harder to combine because conscious interaction capacity is limited.
The limiting factor is identifying the relevant processes under **reversed functionality**: we observe brain activity and must infer the underlying process/state.
Passive BCI use itself requires no conscious effort besides preparation. Therefore the main operational cost comes from **mispredictions**.If the BCI produces probabilistic estimates, the application can combine those probabilities with the cost of errors and make a **cost-optimal decision**.

Open-Loop vs Closed-Loop Adaptation

Open-Loop Adaptation
**Non-command brain activity → Machine → Mental State Index → Fixed Adaptation**.

The mental-state estimate triggers a predefined adaptation. The diagram does not explicitly feed the result of that adaptation back into a newly measured user state.

Workload feedback example : The BCI monitors cognitive load. If the user is **overloaded for too long**, the user receives a **notification**.

Closed-Loop Adaptation
Now the adaptation affects the human, which can change the human's state, and that new state can be measured again:

**User state → BCI estimate → adaptation → user changes → new estimate → further adaptation**.

Workload optimization example : The user's current cognitive load is measured and interpreted. The system then **chooses tasks according to the current cognitive load**, aiming to keep it **optimal**.
Possible benefits : **prevent burnout, increase productivity, increase joy at work**. 

Automated Adaptation : Earlier, the system mainly reacted to the **current** estimated state. Here it can use accumulated knowledge represented in the **user model** together with context to make more sophisticated adaptations.

![[notes/BCI/images/Pasted image 20260811151208.png]]

**Active BCI**
Motor Imagery is an example of an **Active BCI** as the user intentionally imagines a movement to generate a controllable brain pattern. The brain activity is therefore directly consciously produced for application control.

Motor Imagery BCI: Design Chain + EEG

The **motor cortex** 
![[notes/BCI/images/Pasted image 20260811152120.png]]

**The primary motor cortex (M1)**, located on the **precentral gyrus** of the frontal lobe. Its main job is to control **voluntary movement** of the opposite side of the body.
- left M1 → mainly controls the right side
- right M1 → mainly controls the left side
Movement and imagined movement create measurable changes in sensorimotor cortical activity that can be recoreded.

EEG measurement
EEG records **brain electrical activity** as spatially distributed **voltage differences relative to a reference electrode**. EEG has **high temporal resolution**. 

![[notes/BCI/images/Pasted image 20260811153103.png|606]]


Systems with up to **256 electrodes**; the illustrated setup uses **128**. Electrodes are placed in a standardized cap and connected to the scalp with **gel**.

**Core neurophysiology**
Motor imagery works because imagining movement changes rhythmic activity over the corresponding sensorimotor cortex. The important phenomenon is **Event-Related Desynchronization (ERD)**

Motor activity produces a **contralateral desynchronization** in the motor cortex. Imagining movements also leads to **event-related desynchronization in the α and β bands** of the corresponding sensorimotor cortex.

- **α-band: 7–13 Hz**
- **β-band: 14–30 Hz**

The relevant cortical change is strongest on the **opposite hemisphere** from the imagined hand.
- Move your **right hand** → strongest ERD/desynchronization occurs in the **left motor cortex**
- Move your **left hand** → strongest ERD occurs in the **right motor cortex**

ERD refers to a **decrease in synchronized rhythmic activity / band power** relative to the resting or reference state. The classifier can exploit the spatial difference between hemispheres.

Imagine hand → contralateral sensorimotor ERD → α/β power changes → features from C3/C4 etc. → classifier distinguishes left vs right.

![[notes/BCI/images/Pasted image 20260811155341.png]]

| Electrode | Approx. location                          | ERD here suggests                      |
| --------- | ----------------------------------------- | -------------------------------------- |
| **C3**    | Left sensorimotor cortex                  | **Right-hand movement**                |
| **Cz**    | Midline sensorimotor cortex               | Often **leg movement**                 |
| **C4**    | Right sensorimotor cortex                 | **Left-hand mvement**                  |
| **CP3**   | Left centro-parietal / sensorimotor area  | Often supports **right-hand movement** |
| **CP4**   | Right centro-parietal / sensorimotor area | Often supports **left-hand movement**  |

**Right hand moves**  
→ left motor cortex activates  
→ **C3 α/β power decreases (ERD)**

**Left hand moves**  
→ right motor cortex activates  
→ **C4 α/β power decreases (ERD)**

Single-trial EEG

![[notes/BCI/images/Pasted image 20260811160007.png]]

Two random trials from an experiment with **imagined left-hand and right-hand movements**.

The raw voltage trace contains many overlapping frequencies and sources. The relevant motor-imagery information is therefore not obvious by simply looking at the unprocessed waveform.

We already know that motor imagery changes rhythmic activity in the **alpha range 7–13 Hz** and beta range. So signal processing can focus specifically on the frequency range believed to contain useful information.

Band-pass filtering

After we apply a **7–13 Hz band-pass filter**.

![[notes/BCI/images/Pasted image 20260811160055.png]]

This means frequencies outside 7–13 Hz are suppressed while activity in that band is retained.

The result looks more oscillatory because we are now focusing on the alpha-band component relevant to ERD. The classifier does not need every aspect of the raw EEG. It needs the part that carries information useful for distinguishing left from right motor imagery.

After filtering, we still have a time series. Machine learning works better if we compress that time series into a small number of informative features.

Band power is estimated using the **logarithmic variance** of the filtered voltage signal:

**feature = log(var(V))**

For a band-limited oscillatory signal, variance reflects how large the oscillations are, so it acts as an estimate of power in that frequency band.

![[notes/BCI/images/Pasted image 20260811160620.png]]

For each trial, the pipeline can calculate one band-power feature from **C3** and another from **C4**.

So one trial becomes a compact feature vector such as:

**x = [Bandpower(C3), Bandpower(C4)]**

Left and right motor imagery cause different contralateral ERD patterns. Therefore the pair of C3/C4 band-power values can differ systematically between left and right trials.

Feature space : Each trial is represented using two features:
**x-axis = Bandpower(C3)**  
**y-axis = Bandpower(C4)**

During calibration, the system has labeled examples: it knows which trials belong to **left** and which belong to **right**. These labeled points are used to learn how the two classes differ.

Linear Discriminant Analysis (LDA)
LDA creates a **separating hyperplane**. In a two-dimensional feature space. New trials are classified according to which side of that decision boundary they fall on.

![[notes/BCI/images/Pasted image 20260811170901.png]]

**Motor imagery → EEG → band-pass filter → band-power features → LDA → left/right output → application control**.

---


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






























