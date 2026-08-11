BCI research is framed as a set of design decisions used to build theory: **how data are acquired, generated, and processed.**

![[Pasted image 20260811232403.png]]

The hierarchy contains the **system for data acquisition + participant + researcher**, followed by decisions about:

- **Data Acquisition**  
	Invasive vs non-invasive

- **Data Generation**  
	Synchronous vs asynchronous

- **Data Processing**  
	Non-causal vs causal

---
Why acquisition matters : The human brain state is only **implicitly derivable** for an observer. To make the channel as unobstructed as possible, it is useful to derive that state with as few intermediate stations as possible.

---
Why controlled data generation is necessary : A BCI classifier needs examples of the signals it should recognize. Therefore data must be generated in a **controlled, standardized, repeatable** way.

EEG signals must be generated **in a controlled manner and as free of interference as possible**.
This provides the technical system with **prototypes of the signals it is supposed to recognize**.
A participant connected to EEG is asked to perform or imagine activities according to a standardized specification, and a **large number of runs** is collected to create a solid database.

Synchronous data generation
In a synchronous design, the system **prompts for an input** and that input must occur inside a **clearly defined time window**.

The class label can be determined by:
- the **request/stimulus**, or
- the participant’s **recognizable reaction**.
Example : every second, the system randomly displays **L** or **R**. The participant imagines or performs the corresponding left/right hand movement. The stimulus itself, or the later keystroke, can provide the class label.

Asynchronous data generation
Asynchronous means there is **no predefined clocking**. The system must be able to process an input **at any time**.
Example: the participant decides at irregular intervals to imagine a hand movement.

---
After data are collected, they are mathematically transformed, filtered, selected, and interpreted. A decisive issue is **when** the processing takes place.

Collected information is transformed into a **data space** and focused using mathematical methods such as:
- filters,
- selections,
- transformations.
From the interpretation of this data, a **calibration of the system** can be derived.

If you process data retrospectively, you can inspect the **complete passage** and you have more time for complex operations.
If you process data while it is still unfolding, the information is incomplete and the problem is harder.

**Non-causal:** processing is performed at the end of an experimental run using **complete information** and with **undefined processing time**.
You can “look into the future” relative to earlier points in the signal because the whole segment is already available.

**Causal:** processing is performed **iteratively along the time course**. The available information is **incomplete but continuously increasing**.
This limits the method selection for the **Dependent Variables**.

Example of causal processing
In a synchronous experiment, the system tries to estimate which hand will be moved **before the class label is set by the keystroke**. This is causal because the algorithm must make the estimate using only information that has arrived up to that point.

Non-causal = offline/retrospective, complete information.  
Causal = online/in-time, incomplete information that grows as time progresses.

---
Experimental Variables
An experiment tests a theoretical relationship. Some variables are part of the model itself; other variables are not part of the theory but can still distort the result if they are not controlled.

Variables inside the theoretical model

| Variable                      | Role                                           |
| ----------------------------- | ---------------------------------------------- |
| **Independent Variable (IV)** | Manipulated to induce an effect.               |
| **Dependent Variable (DV)**   | Measured to reveal the effect.                 |
| **Moderating Variable**       | Influences the relationship between variables. |
| **Mediating Variable**        | Mediates the relationship.                     |

Variables outside the theoretical model
These do not explain the relationship of interest, but they may still influence the experiment.

|Variable|Meaning|
|---|---|
|**Extraneous Variable (EV)**|Any factor that could conceivably influence the relationship/results; often ignored.|
|**Control Variable (CtV)**|An extraneous variable deliberately included/controlled to avoid biased results.|
|**Confounding Variable (CfV)**|A relevant extraneous variable that we cannot—or forgot to—control.|

---
EEG = brain-related scalp voltage.  
EOG = eyes.  
EMG = muscles.  
EOG/EMG are crucial because eye and muscle activity can contaminate EEG.

Muscle activity produces electrical signals because many muscle fibres generate action potentials near-simultaneously.

- EEG scale: about **1–100 µV**.
- EOG and EMG: about **50 µV–5 mV**.

EEG values are small (µV range). EOG/EMG can be much larger, helping explain why they easily contaminate EEG.

---
Physiological signals are sampled very precisely, so the experiment must also record **exactly when important events happen**. These timestamps are event markers/triggers.

Three classes of markers

**Data markers**  
System phases, e.g. begin/end or break begin/end.

**Stimulus markers**  
System communicates with user, e.g. request left/right action.

**Response markers**  
User response to a stimulus, e.g. left key press.

three types of **non-markable events**:
- **Artifacts**
- **Dependencies**
- **Coincidences**

Artefacts can arise from:
- conscious or unconscious **physiological reactions** of the participant, or
- **external disturbances**.

External electromagnetic artefacts "" Electrodes can pick up electromagnetic activity from the environment.
- The most common example is **50 Hz line noise** from power cables, computers, light bulbs, etc.

Mechanical artefacts : Movement of the equipment can also alter the signal
- an electrode moving across skin changes **resistance**,
- moving electrode cables can change their position inside electromagnetic fields.

Internal artefacts : Biological processes can directly interfere with the biosignal or influence it.
Example: **sweating** changes skin impedance slowly, causing slow drifts in skin-recorded signals.

Second-order internal artefacts
Some biological processes do not merely add a separate contaminating signal; they **change the biosignal of interest itself**.
Example: breathing changes heart rate in ECG. In EEG, almost any psychological state that is not part of the question can influence the recording.

Random vs systematic artefacts
If artefacts are sufficiently **random across conditions**, they may average out.
But if they are **systematically related to the experimental manipulation**, they can mimic an experimental effect and lead to a false conclusion.
- more sweating in one condition,
- frowning when something goes wrong,
- eye blinks after stimulus onset,
- condition-specific personal thoughts.

---
Controlling internal artefacts
- neutral, temperature-controlled environment,
- low electrode impedance,
- comfortable stationary participants,
- guided gaze fixation,
- signal post-processing,
- exclude contaminated data,
- **clever experimental design**.

Random artefacts may average out. **Systematic artefacts are much more dangerous** because they can look like the effect you are trying to measure.

---
Dependencies
A **dependency** is a pattern in EEG that is **induced by an event**.

Examples:
- a contralateral ERP caused by a hand movement,
- the associated contralateral dip in alpha activity.
These are genuine event-related patterns, not automatically artefacts.

Serial dependency
Participant behaviour can depend on what condition they experienced **first or previously**.
Example: in “noisy” vs “quiet” conditions, adapting to noise first may change how quiet is later perceived, or vice versa.

---
A **coincidence** is a temporally or spatially correlated event that is **not inherently part of the phenomenon being studied**..

Example: If one has promised the subject a bar of chocolate as a reward for a successful experiment, and stows it in a drawer on the subject's right side in the subject's presence, the (conscious or unconscious) desire for the chocolate could manifest itself in a coincident pattern (e.g., imagined chewing motion) with each right key press.

---
Repeated events are needed because physiological signals are variable, but presenting events at perfectly predictable intervals can create new EEG effects that contaminate the result.

Anticipation can produce **large-amplitude negative-going EEG activity**. Then your measured EEG is partly reflecting expectancy, not just the event of interest.

Use **variable stimulus onset asynchrony (SOA)**: vary the interval between stimulus onsets so the exact timing is less predictable and less phase-locked to unrelated oscillations.

---
A feature is a deliberately selected/derived aspect of EEG motivated by the experimental question and prior knowledge.

