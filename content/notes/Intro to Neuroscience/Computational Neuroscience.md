
- A neuron is a cell specialized for information processing.
- Neurons are electrically excitable and connect to each other via specialized membrane junctions called synapses.
- **Morphological Types:** Neurons can be Unipolar, Pseudo-unipolar, Bipolar, or Multipolar.
- **Functional Regions:**
    - **Input:** Dendrites receive signals.
    - **Integrative:** The trigger zone (axon hillock) evaluates signals.
    - **Conductive:** The axon propagates the action potential.
    - **Output:** Synapses release neurotransmitters.

The Cell Membrane and Ion Channels

![cell membrane.png](cell%20membrane.png)

**The Cell Membrane (The Boundary)**

- **What is it?** The cell membrane is the outer boundary of the neuron, separating the inside of the cell (cytosol) from the outside environment (extracellular fluid).
- **Structure:** It is made of a **phospholipid bilayer**.
- **Function:** It acts as an **electrical isolator**. Charged particles (ions) cannot pass freely through this lipid layer on their own.

**Ion Channels (The Doors)**

Because the membrane is an isolator, the cell needs "doors" to let ions (like Sodium Na+ and Potassium K+) in and out. These doors are called ion channels.

Selectivity:
Channels are picky about what they let through. They select ions based on their radius and charge. 

Example:
K+ ions have a smaller attached water (H2O) cloud, which allows them to pass through specific potassium channels.

Types of Ion Channels:

Ligand-gated:
Open when a specific molecule (a ligand or neurotransmitter) binds to them.

Voltage-gated:
Open or close in response to changes in the membrane's electrical potential.

Mechanically-gated:
Open in response to physical stretching or changes in the cytoskeleton.
Example: The hair cells in the inner ear, which help us hear and keep our balance.

---
Charged ions (like Sodium $Na^{+}$ and Chloride $Cl^{-}$) cannot pass through the solid phospholipid bilayer of the membrane on their own.
![[Pasted image 20260227215517.png]]

**Diffusive Flow:** The introduction of ion channels provides a physical pathway that causes a "diffusive flow". Because particles naturally want to spread out, ions will flow down their concentration gradient (from an area of high concentration to an area of low concentration).

**Reaching Equilibrium:** This flow does not continue infinitely. Equilibrium is finally attained when the net flow of ions due to diffusion becomes exactly zero.

**Equilibrium Potential (Nernst Equation):** Equilibrium is achieved when the electrical force equals the diffusion force, resulting in zero net flow

$$\Large E_{ion}=\frac{R\cdot T}{z\cdot F}\cdot ln\frac{[ion]_{o}}{[ion]_{i}}$$

The Equilibrium Potential for Potassium ($K^{+}$)

This slide explains how the **Nernst Potential** (Equilibrium Potential) is established for potassium ions, bringing together the concepts of diffusion and electrical forces.

* Initially, there is a high concentration of $K^{+}$ *inside* the cell and a low concentration *outside* the cell.
* **Opening the Channels:** When potassium channels open, $K^{+}$ ions begin to diffuse *out* of the cell, driven by the concentration gradient (moving from high to low concentration).
* **Reaching Equilibrium:** As positive $K^{+}$ ions leave, the inside of the cell becomes increasingly negative. This negative electrical charge starts pulling the positive $K^{+}$ ions back in. An equilibrium is reached when ion movement stops because the electrical pull (inward) is exactly as strong as the diffusion push (outward).

**Potassium ($K^{+}$) Calculation:**
Plugging in the standard values for a neuron (5mM outside, 100mM inside), the Nernst potential for Potassium is calculated as:

* $E_{K}=61.54mV\cdot log\frac{5mM}{100mM}=-80mV$

---

 The Equilibrium Potential for Sodium ($Na^{+}$)

- Without ion channels, there is a high concentration of sodium outside the cell and a low concentration inside.

**Sodium ($Na^{+}$) Calculation:**  $E_{Na}=61.54~mV\cdot log\frac{150mM}{15mM}=62mV$

---
**Ion Pumps (The Escalators)**

- Maintaining the concentration gradient (keeping more K^{+} inside and more Na^{+} outside) requires energy.
- **Sodium-Potassium Pumps** use ATP (energy) to actively pump ions against their natural flow to maintain this balance.
- Sodium-potassium pumps actively move ions between the cytosol (inside the cell) and the extracellular fluid (outside the cell).
- **Resulting Gradient:** The pumps continuously work against the natural diffusion flow to keep Potassium ($K^{+}$) concentrated inside the cell and Sodium ($Na^{+}$) concentrated outside the cell.

The Two Major Ion Pumps

Both of these pumps have one thing in common: they require energy (ATP) because they are actively pushing ions _against_ their natural diffusion gradients. However, they handle entirely different ions and jobs:

**1. The Sodium-Potassium Pump (Na+/K+ Pump)**

- **The Job:** Maintains the overall resting membrane potential of the neuron.
- **The Action:** For every single cycle, it uses one molecule of ATP to push **3 Na+ ions OUT** of the cell and pull **2 K+ ions IN**.
- **The Result:** It constantly works to ensure that Potassium (K+) stays highly concentrated inside the cell, and Sodium (Na+) stays highly concentrated outside the cell.
		![[Pasted image 20260227183830.png]]The Na+/K+ pump first binding to Sodium to push it out, and then binding to Potassium to pull it in

**2. The Calcium Pump (Ca2+ Pump)**

- **The Job:** Keeps the internal calcium levels almost at zero.
- **The Action:** It actively transports Calcium (Ca2+) ions **OUT** of the cell's fluid (cytosol) across the cell membrane, or pumps them into internal storage units (like the smooth endoplasmic reticulum).
- **The Result:** Because the resting level of calcium inside the cell is kept so incredibly low, any sudden rush of Ca2+ into the cell (which happens at the synapse) acts as a massive, unmistakable signal to release neurotransmitters.

**The Equivalent Circuit: Ion Channels as Electrical Components**

Translates the biological components of the cell membrane into an electrical circuit diagram, which is the foundation for single-compartment computational models.

- **1. The Passive Channel (Without Concentration Gradient)**
    - If there is no difference in ion concentration between the inside and outside of the cell, an ion channel works purely like a **passive electrical resistance**.
    - **Conductance:** The ease with which ions can flow through the channel is called conductance ($\gamma_k$). It is the mathematical inverse of the channel's resistance ($r_k$), expressed as $\gamma_k = \frac{1}{r_k}$.

- **2. The Active Channel (With Concentration Gradient)**
    - In a real neuron, there _is_ a concentration gradient (thanks to the ion pumps). Because of this gradient, the channel acts as both a **resistance _plus_ a battery**.
    - **The Battery ($E_k$):** The concentration gradient provides a driving electrical force, which acts exactly like a battery in a circuit. The voltage of this "battery" is equal to the Nernst/equilibrium potential ($E_k$) of that specific ion.
    - **The Resistor ($\gamma_k$):** The physical channel itself still provides the resistance (or conductance, $\gamma_k$) to the flow of current.

![[Pasted image 20260227185916.png]]

To calculate the overall resting membrane potential when multiple ion channels are active simultaneously.

* **The Components:** The membrane potential is determined by the combined effect of all individual ion channels (like Sodium, Potassium, and Chloride). Each channel has its own specific conductance ($g$) and equilibrium/Nernst potential ($E$).
* **Total Conductance (Leak Conductance):** The total conductance of the membrane ($g_l$) is simply the sum of all individual ion channel conductance's:

$$g_l = g_{Cl} + g_{Na} + g_{K}$$


* **Calculating the Resting Potential:** The steady-state resting membrane potential ($E_l$ or $V_m$) is calculated as a weighted average of the individual Nernst potentials, weighted by their respective conductances:

$$\Large E_l = \frac{g_{K}E_{K} + g_{Cl}E_{Cl} + g_{Na}E_{Na}}{g_{Cl} + g_{Na} + g_{K}}$$

-  $g_{Na} = 0.5 \times 10^{-6}S$, $E_{Na} = +55 \text{ mV}$
* $g_{K} = 10 \times 10^{-6}S$, $E_{K} = -75 \text{ mV}$
* $g_{Cl} = 2.5 \times 10^{-6}S$, $E_{Cl} = -69 \text{ mV}$
* Plugging these values into the equation yields a resting membrane potential of **-69 mV**.

---
Modeling a neuron as a single, simple electrical compartment, focusing on how the membrane's physical size affects its electrical properties

Key Variables:
    - **$V$**: Membrane potential (Voltage).
    - **$I_e$**: External injected current.
    - **$Q$**: Electrical charge.
    - **$A$**: Neuronal surface area (typically $0.01 - 0.1 \text{ mm}^2$).

- **Membrane Resistance ($R_m$):**  
  The total resistance of the membrane depends on its surface area. A larger membrane has _more_ ion channels, which actually _lowers_ the overall resistance.

  **Equation:**  
  $R_m = \frac{r_m}{A}$  
  (where $r_m$ is the specific membrane resistance, roughly $1 \text{ M}\Omega \cdot \text{mm}^2$).

  - **Voltage Change:**  
    Calculated using Ohm's law:  
    $\Delta V = I_e R_m$.

- **Membrane Capacitance ($C_m$):**
  
  - The lipid bilayer acts as a capacitor (it stores electrical charge). A larger membrane surface area can store _more_ charge.
  
  - **Equation:**  
    $C_m = c_m A$  
    (where $c_m$ is the specific membrane capacitance, roughly $10 \text{ nF/mm}^2$).
  
  - **Stored Charge:**  
    Calculated as  
    $Q = C_m V$.

---
Single compartment models

The model represents the neuron as a single electrical circuit where different types of ion channels are connected in parallel.

- **The Core Equation | General Single-Compartment Equation :** The change in membrane potential over time is determined by the sum of all currents flowing across the membrane:
<br>

  $$\Large C_{m}\frac{du}{dt}=-\sum_{k}I_{k}(t)+I_{e}(t)$$
<br>


- **$C_m$**: Membrane capacitance (how much charge the membrane stores).

- **$u$ (or $V$)**: The membrane potential.

- **$I_k$**: The individual ionic currents flowing through the various channels.

- **$I_e$**: External injected current (if any).

- **Types of Conductance ($g_k$):** The conductance for different channels behaves differently:

  - **Voltage-dependent conductance ($v$):** Opens or closes based on the current membrane potential $V$ (like the $Na^+$ and $K^+$ channels discussed earlier).

  - **Synaptic conductance ($s$):** Depends on the activity of a _pre-synaptic_ neuron firing and releasing neurotransmitters.

- **$E_k$**: The reversal (equilibrium) potential for that specific ion channel branch.


Expanding the Core Equation: The basic equation states that the change in voltage equals the sum of all currents. This slide expands that equation using Ohm's law to show exactly how those ionic currents ($I_k$) are calculated:
* **Basic Equation:** $\large c_{m}\frac{du}{dt}=-\sum_{k}I_{k}(t)+I_{e}(t)$
* **Expanded Equation:** $\huge  c_{m}\frac{du}{dt}=-\sum_{k}g_{k}\cdot(u(t)-E_{k})+I_{e}(t)$
Instead of just writing "$I_k$" (current), we substitute it with **$g_{k}\cdot(u(t)-E_{k})$**.
* This means the current for any specific ion channel is equal to its **conductance ($g_k$)** multiplied by the **driving force ($u(t) - E_k$)**.
* The driving force is the difference between the current membrane potential ($u(t)$) and that specific ion's equilibrium potential ($E_k$).

The Action Potential in the Giant Squid Axon
The squid possesses a single, massive axon that is significantly larger than surrounding structures. This massive size allowed researchers to physically insert electrodes into the cell to measure and clamp voltages.
![[Pasted image 20260228013916.png]]
- **The Action Potential Curve:** This is the total voltage of the cell. It starts near the Potassium equilibrium potential ($E_K$), rapidly spikes toward the Sodium equilibrium potential ($E_{Na}$), and then repolarizes back down. 
- Once the voltage crosses that threshold, the neuron takes over completely and fires an **action potential**. This is an _active_, automatic biological process (an "all-or-nothing" response).
- **$Na^+$ Conductance (Fast-Acting):** The curve for open Sodium channels rises incredibly quickly at the start of the action potential. Crucially, notice how the $Na^+$ conductance peaks and immediately begins dropping _before_ the voltage spike even reaches its maximum height. The Sodium channels quickly plug themselves up (inactivate).
- **$K^+$ Conductance (Delayed/Slow):** The curve for open Potassium channels is much slower. It activates with a delay, reaching its maximum number of open channels during the _falling_ phase of the action potential.
----
### Hodgkin-Huxley Model: The Gating Variables 

To explain exactly how the conductances for Sodium ($g_{Na}$) and Potassium ($g_K$) change during an action potential, Hodgkin and Huxley proposed that each channel is controlled by independent "gating particles."

- **The Core Concept:** For an ion channel to be fully open and let ions through, _all_ of its specific gates must be open at the exact same time.
- **The Probability Variables:** The model uses three variables—$n$, $m$, and $h$—to represent the probability (from 0.0 to 1.0) of a specific single gate being open.

---
The Hodgkin-Huxley equation
$$\Large C_m \frac{du}{dt} = -\Big[ \bar{g}_{Na} m^3 h (u - E_{Na}) + \bar{g}_K n^4 (u - E_K) + \bar{g}_L (u - E_L) \Big] + I_e(t)$$
---

**1. The Potassium ($K^+$) Channel (Activation)**

- The Potassium channel is modeled as having **4 identical activation gates**.
- **Variable ($n$):** Represents the probability of a single $K^+$ activation gate being open.
- **The Equation:** $g_K = \bar{g}_K \cdot n^4$
	- **$g_K$** : The actual, real-time conductance of Potassium.
    - $\bar{g}_K$ : The maximum possible conductance (if 100% of the channels were magically forced open).
    - $n^4$ : Because there are 4 gates, and they must _all_ be open together, you multiply the probability by itself 4 times ($n \cdot n \cdot n \cdot n$).
- **The Potassium Current Equation:** The total current flowing through the $K^+$ channels is calculated as: $I_K = g_K \cdot n^4 \cdot (u(t) - E_K)$.


**2. The Sodium ($Na^+$) Channel (Activation & Inactivation)**

- The Sodium channel is more complex. It acts like a tube with **3 activation doors** and **1 inactivation plug** (which stops the flow even if the doors are open).
- **Variables:** $m$ (probability of an activation door opening) and $h$ (probability of the inactivation plug being _unplugged_ / open).
- **The Equation:** $g_{Na} = \bar{g}_{Na} \cdot m^3 \cdot h$
	- **$g_{Na}$**: The actual, real-time conductance of Sodium.
    - $\bar{g}_{Na}$ : The maximum possible Sodium conductance.
    - $m^3$ : The probability of all 3 activation doors opening.
    - $h$ : The probability of the inactivation plug being open.

**3. The Dynamics (How the gates change over time)**

- These probabilities ($n$, $m$, $h$) are not static; they constantly change based on the cell's voltage. They are calculated using a first-order differential equation:
- **The Rate Equation:** 
- 
		$\Large \frac{dx}{dt} = \alpha_x(V)(1-x) - \beta_x(V)x$ (where $x$ represents $n$, $m$, or $h$)

    - **$\alpha_x(V)$:** The voltage-dependent rate at which closed gates flip to open.
    - **$\beta_x(V)$:** The voltage-dependent rate at which open gates flip to closed.
    - _(Both $\alpha$ and $\beta$ have a "$(V)$" next to them? This proves that the speed at which these gates open and close depends entirely on the current Voltage of the cell!)_	
    - $\alpha$ and $\beta$ are **transition rate constants** that describe how fast the gates are flipping back and forth between open and closed.

- **$\alpha$ (Alpha - The Opening Rate):** This determines how fast a closed gate flips to an **open** state.
    
- **$\beta$ (Beta - The Closing Rate):** This determines how fast an open gate flips back to a **closed** state.

- **The Differential Equation for potassium channel :** The rate at which the $n$ gates flip between open and closed is given by:
	$\huge \dot{n} = \alpha_n(u) \cdot (1 - n) - \beta_n(u) \cdot n$.
	The overall change in open gates = (New gates opening) MINUS (Old gates closing)
	**The "Opening" Half: $\alpha_n(u) \cdot (1 - n)$**
	- **$(1 - n)$** represents the fraction of gates that are currently **closed** (and therefore available to be opened).
	- You multiply the available closed gates by the opening speed ($\alpha$). This tells you exactly how many gates are successfully popping open right now.
    **The "Closing" Half: $\beta_n(u) \cdot n$**
	- **$n$** represents the fraction of gates that are currently **open** (and therefore available to be shut).
	- You multiply the currently open gates by the closing speed ($\beta$). This tells you exactly how many gates are slamming shut right now.
	
	![[Pasted image 20260302003052.png]]
	It shows how the opening and closing speeds depend entirely on the membrane voltage ($u$):
	- **$\alpha_n(u)$ (Blue line - Opening Rate):** As the voltage depolarizes (becomes more positive, moving towards 0 mV), the rate of gates opening shoots up rapidly.
	- **$\beta_n(u)$ (Green line - Closing Rate):** As the voltage depolarizes, the rate of gates closing drops.
	
	 Potassium channels are called "persistent." This means that as long as the voltage stays elevated, the gates will stay open

Unlike Potassium channels (which are "persistent" and stay open as long as the voltage is high), Sodium channels are **transient**. They have an automatic, built-in timer that physically plugs the channel, even if the voltage remains high.

![[Pasted image 20260302011314.png]]

The 4 physical states of the Sodium channel during a sudden jump in voltage (depolarization):

**1. Resting State (Closed but Ready)**
- **Voltage:** Resting at -65 mV.
- **Channel Status:** The main doors (activation gates, $m$) are closed, preventing ion flow. However, notice the purple "ball" hanging below? That is the inactivation gate ($h$), and it is currently unplugged and ready.

**2. Activation (Briefly Open)**
- **Voltage:** Suddenly steps up to -40 mV.
- **Channel Status:** The main doors quickly snap open. $Na^+$ ions rush through the pore (creating the brief downward spike of "Inward current" seen on the graph).

**3. Inactivation (Plugged)**
- **Voltage:** Still held high at -40 mV.
- **Channel Status:** Even though the cell is still depolarized, the inward current stops completely. Why? Because the "ball-and-chain" mechanism (the $h$ gate) swings up and physically plugs the bottom of the channel. The channel is now **inactivated**.

**4. Deinactivation (The Reset)**
- **Voltage:** Drops back down to the resting -65 mV.
- **Channel Status:** You cannot fire another action potential while the channels are plugged. To get the ball to drop out of the pore (to "deinactivate" the channel), the membrane voltage _must_ return to its negative resting state. Once it resets, it is ready for step 1 again.

![[Pasted image 20260302014101.png]]

- **The $m$ gate (Activation):** The blue line ($\alpha_m$) shoots up incredibly fast as the voltage becomes more positive. This explains why Sodium channels rip open so quickly at the very beginning of an action potential.
- **The $h$ gate (Inactivation):** The curves for $\alpha_h$ and $\beta_h$ are compared to $m$. They act in opposite directions to the activation gates.

- **The Blue Line ($m$):** Just like Potassium, as the voltage gets more positive, the probability of the activation doors being open approaches 1.0 (100%).
- **The Green Line ($h$):** At resting negative voltages (-80mV), $h$ is at 1.0 (meaning the plug is _open/unplugged_). But as the voltage becomes more positive, the probability drops all the way to 0. A positive voltage mathematically forces the plug shut!
- **The Red Line ($m^3 \cdot h \cdot 100$):** This curve represents the actual likelihood of the whole channel being open and letting ions through.
    - Because $m$ goes up while $h$ goes down, they essentially cancel each other out at high voltages.
    - If $h=0$ (plugged), then $m^3 \cdot 0 = 0$.        
    - This creates the bell-curve shape: the channel only conducts electricity in that brief middle "window" before the $h$ gate shuts the whole operation down.
---
The Leak Current

- The leak current represents passive ion channels in the neuron's membrane that are **always open**.
- They do not have "activation doors" or "inactivation plugs." They are just open pores.
- They are primarily made up of Chloride ($Cl^-$) channels and some passive Potassium ($K^+$) channels.
- Their main purpose is to stabilize the cell and pull the voltage back to its normal, negative resting baseline (around -65 mV) when the neuron is just sitting there doing nothing.
 $$I_L = g_L \cdot (u - E_L)$$
---

**Gating Variables as Voltage-Dependent Low-Pass Filters**
Converting the Hodgkin-Huxley gating variables into **voltage-dependent low-pass filters**.
Instead of looking at the gates as a tug-of-war between opening ($\alpha$) and closing ($\beta$) rates, we can mathematically rewrite the equations to act like **low-pass filters**.

$$\dot{m} = \alpha_m(u) \cdot (1 - m) - \beta_m(u) \cdot m$$
$$\dot{m} = \alpha_m - (\alpha_m + \beta_m) \cdot m$$

Factor out $-(\alpha_m + \beta_m)$ from the entire right side.
$$\dot{m} = -(\alpha_m + \beta_m) \cdot \left(m - \frac{\alpha_m}{\alpha_m + \beta_m}\right)$$

$$\dot{m} = -\frac{1}{\tau(u)}(m - m_\infty(u))$$

We created two brand new variables that completely define the low-pass filter:

- **The Steady-State Goal ($m_\infty$):**
$$m_\infty(u) = \frac{\alpha_m(u)}{\alpha_m(u) + \beta_m(u)}$$
		This is the _target percentage_ of gates that want to be open at the current voltage. If you hold the voltage perfectly still forever, the gates will eventually settle exactly at this number.

- **The Time Constant / Speed Limit ($\tau$):**
    
    $$\tau(u) = \frac{1}{\alpha_m(u) + \beta_m(u)}$$

    - This is _how fast_ the gates can physically move to reach that steady-state goal. A small $\tau$ means the gates snap to their target incredibly fast; a large $\tau$ means they are sluggish and take a long time to get there.

**The Time Constants ($\tau_m, \tau_h, \tau_n$)**

![[Pasted image 20260302221530.png]]
- **The Blue Line ($\tau_m$):** The time constant for Sodium activation ($m$) is incredibly small, it **never exceeds 1 ms**. This proves mathematically why Sodium channels rip open almost instantly when the voltage changes.
- **The Green and Red Lines ($\tau_h, \tau_n$):** These variables show much slower (taller) time constants of roughly equal magnitude. This perfectly explains why Sodium plugging ($h$) and Potassium opening ($n$) are delayed, and why they happen at roughly the same time during the falling phase of the action potential.
- Because the steady states and time constants for $n$ and $h$ are so similar in timing and opposite in direction, physicists often use an approximation to simplify the math: $n_0(u) \approx 1 - h_0(u)$.

![[Pasted image 20260302231836.png]]

The Top Row ($h_0$): INACTIVATED States
- In this entire row, the inactivation plug has swung up and is physically blocking the pore.
The Bottom Row ($h_1$): States WITHOUT Inactivation
- In this entire row, the inactivation plug ($h$) is **OPEN (unplugged)** and out of the way.
The Columns ($m_0$ to $m_3$): The Activation Doors
- Moving from left to right tracks how many of the main activation doors are currently open, from zero ($m_0$) up to all three ($m_3$).
- **The Transitions (The Arrows)**
  - **Horizontal arrows:**
    - The $m$ gates opening ($\alpha_m$) or closing ($\beta_m$). If the channel is at $m_0$ (0 open doors), there is a $3\alpha_m$ chance of moving forward
    - $\beta_m$ multipliers work as you move right-to-left (closing the doors)
  - **Vertical arrows:** 
    - The $h$ plug swinging in ($\beta_h$) or out ($\alpha_h$).	
In that final shaded circle on the bottom right ($m_3h_1$), two things are happening perfectly at the same time:
- **$m_3$:** All 3 of the main activation doors are fully open.
- **$h_1$:** The inactivation "ball" ($h$) is open (unplugged and out of the way)
- The **only state where ions can actually flow**.

---
The gating variables ($m, h, n$) control the currents, which in turn control the voltage. 

![[Pasted image 20260303014229.png]]
**The Green Line:** This shows the **membrane potential ($u$)** of the neuron, which is firing a series of action potentials.
**The Blue Line:** This represents the **external stimulus current ($I_{ext}$)**. It starts at zero and then steps up to a constant positive value. This continuous injection of current is what triggers and maintains the firing of the action potentials shown by the green line
![[Pasted image 20260303014049.png]]
- **The Rising Phase:** The $m$ gates open the sodium channel incredibly fast, creating a transient conductance. Because both $m$ (activation) and $h$ (inactivation) are non-zero at the same time, $Na^+$ rushes into the cell (influx), causing the membrane potential to rapidly rise. This influx directly causes the action potential spike.
- **The Turning Point:** Shortly after, the $h$ plug slowly swings in to close the sodium channel.
- **The Falling Phase:** At roughly the same time, the $n$ gates slowly open the potassium channel, creating a persistent conductance. This forces the membrane potential to decrease back down to rest.
- It is the precise combination and timing of these Na and K currents that physically causes the action potential.

----
**The refractory period**
If the interval between current pulses is too short, a new action potential cannot be generated. 
The $h$ gate (the sodium plug) after a spike are all locked shut. The neuron physically _cannot_ fire another spike until it rests at a negative voltage long enough for the $h$ plugs to drop back out of the channels.
	![[Pasted image 20260303142439.png]]

**Rebound Firing**
Pushing the cell into deep negative voltages perfectly resets every single $h$ plug and slams all the Potassium doors shut. When you suddenly release that negative hold, the Sodium activation doors ($m$) snap open so fast that they trigger a spike before the slower gates can catch up and stop it.
	![[Pasted image 20260303143252.png]]
**Rebound firing** is when a neuron fires an action potential **immediately after being strongly inhibited**.

---
A neuron needs a strong enough "shock" ($\Delta I$) to wake up, but it needs a strong enough constant "push" ($I_2$) to keep firing repeatedly.
		![[Pasted image 20260303225629.png]]

---
Propagation of the action potential
Saltatory Conduction : Because the membrane is completely insulated by myelin, the action potential doesn't have to slowly open and close doors every single millimeter. Instead, the electrical charge rapidly shoots through the insulated sections and successfully triggers the channels only at the bare **Nodes of Ranvier**.
The only places where the cell membrane is bare and has those ion channels are the tiny gaps called the **"Node of Ranvier"**.
![[Pasted image 20260304005702.png]]

---
Assumptions of the Hodgkin-Huxley Model
Iso-potential property : 
- The model assumes that the membrane potential (voltage) is exactly the same everywhere on the membrane at the exact same time. It completely ignores 3D space and treats the neuron as one tiny, single dot (a "single compartment").
- Real neurons are huge and branch out, meaning the voltage at the dendrites is different from the voltage at the axon
Electrotonic Homogeneity : 
- The model assumes that "charge carriers" (which are just the ions, like $Na^+$ and $K^+$) are perfectly and evenly mixed/distributed inside the neuron.
Deterministic Behaviour : 
- The model assumes that the ion channels behave in a perfectly predictable, mathematical way without any random influences (no "stochastic behaviour").
The HH model isn't structurally realistic. Modern electron microscopes have revealed that the Sodium channel is actually formed by **4** activation particles, not 3. Hodgkin and Huxley just used the power of 3 because it made their curves fit the data best at the time.

---
Noise 
Even when the neuron is at rest, individual Sodium and Potassium proteins are randomly twitching open and closed for fractions of a millisecond, causing tiny, random fluctuations in the cell's voltage. 
To make the computer simulation look like that realistic wobbly graph, we have to inject some randomness (stochastic activity) into the math. A modified, more realistic version of the Hodgkin-Huxley equation that accounts for the random, microscopic popping of ion channels is 
$$C \cdot \dot{u} = -g_{Na} \cdot (m^3 \cdot h + \xi_{Na}) \cdot (u - E_{Na}) - g_K \cdot (n^4 + \xi_K) \cdot (u - E_K) - g_L \cdot (u - E_L) + I$$
----
### The FitzHugh-Nagumo Model
A highly simplified 2D version of the Hodgkin-Huxley equations.

Instead of tracking a bunch of individual ion gates ($m$, $h$, and $n$), this model groups everything into just two variables:
- **$u$ (The Excitation Variable):** This represents the membrane potential (voltage). It is responsible for the fast, upward spike of the action potential.
- **$w$ (The Recovery Variable):** This single variable takes the jobs of both the slow Potassium opening ($n$) and the slow Sodium closing ($h$) and clumps them together. It represents the slow forces that pull the voltage back down to rest.
- **Voltage Equation:** $\huge \dot{u} = u - \frac{1}{3}u^3 - w + I$
	- This equation has a cubic shape ($u^3$), which allows for the rapid "explosion" of voltage.
- **Recovery Equation:** $\huge \dot{w} = \varepsilon \cdot (b_0 + b_1u - w)$
	- This equation is much slower (tuned by the $\varepsilon$ and $b$ parameters) and acts as the brakes for the system. Clumps the slow Potassium opening and slow Sodium closing together to act as the "brakes."

Phase Plane Analysis
This allows us to literally _see_ if a neuron is resting or spiking without having to calculate massive matrices.
Instead of graphing voltage over time, a phase plane graphs the two variables against each other. The x-axis is $u$ (voltage) and the y-axis is $w$ (the recovery variable).
	![[Pasted image 20260305014654.png]]
	A nullcline is a line where one specific variable completely stops changing.

- **The Magenta S-Curve ($u$-nullcline):** Anywhere on this pink line, the voltage stops changing ($\dot{u} = 0$). It has an S-shape because of the cubic math ($u^3$) in its equation.
- **The Red Diagonal ($w$-nullcline):** Anywhere on this straight red line, the recovery variable stops changing ($\dot{w} = 0$).
- The Vector Field (Blue Arrows) : These are the mathematical "ocean currents". They dictate exactly which direction the math will push the neuron's state at any given coordinate.
- **The Trajectory (The Green Loop)** : This bright green line traces the actual journey the neuron took during a simulation.
- **The Fixed Point:** The exact spot on the left where the pink and red lines cross is the stable resting state of the neuron. The neuron eventually settles down into a stable, resting state where the two lines cross.
---
To determine if the fixed point (where the nullclines cross) is a stable resting state or an unstable tipping point.

The States ($\dot{u}$, $\dot{w}$, $u$, and $w$) :
-  **$u$ and $w$:** These are the current states of the neuron. $u$ is the voltage, and $w$ is the recovery variable.
- **$\dot{u}$ and $\dot{w}$:** The little dots on top mean "rate of change". This is how fast the voltage and recovery variables are changing at this exact millisecond.

The Functions ($F$ and $G$) : 
- **$F(u,w)$:** This represents the entire right side of the voltage equation. If you wrote it out fully, $F(u,w)$ is exactly the same as $(u - \frac{1}{3}u^3 - w + I)$.
- **$G(u,w)$:** This represents the entire right side of the recovery equation. Fully written out, $G(u,w)$ is exactly the same as $\varepsilon \cdot (b_0 + b_1u - w)$.

The Distance Vector ($\underline{x}$) : This is a vector that measures the exact **distance** between where the neuron is right now ($u, w$) and where the perfectly stable resting point is ($u_{FP}, w_{FP}$).

**Step 1: Measure the Distance ($\underline{x}$)**
- Once you find the fixed point ($u_{FP}, w_{FP}$), you need to measure how far away the neuron currently is from that perfectly balanced center.
- The vector $\underline{x}$ calculates this exact difference: $\large \underline{x} = \begin{bmatrix} u - u_{FP} \\ w - w_{FP} \end{bmatrix}$

**Step 2: Linearize (The Matrix)**
- Real neuron equations are curvy and non-linear. To make the math solvable, we use a **Taylor expansion to first order** right at that intersection point. This essentially zooms in so close that the curves look like straight lines.
- We organize this linear math into a matrix using **partial derivatives** ($\large F_u, F_w, G_u, G_w$)
	$\large F_u  = \frac{\partial F}{\partial u}$, $\large F_w  = \frac{\partial F}{\partial w}$, $\large G_u  = \frac{\partial G}{\partial u}$, $\large G_w  = \frac{\partial G}{\partial w}$
- By finding these four partial derivatives, you build a simple, linear matrix ($\frac{d\underline{x}}{dt}$) that tells you exactly how the neuron will behave when it is pushed slightly away from its resting state

$$\large \frac{d\underline{x}}{dt} = \begin{pmatrix} F_u & F_w \\ G_u & G_w \end{pmatrix} \underline{x}$$
This clean, linear matrix equation completely replaces the FitzHugh-Nagumo equations, but _only_ for the tiny area right around our fixed point $(u_{FP}, w_{FP})$.

To officially prove if this fixed point is stable (a resting potential) or unstable (a tipping point for a spike), we need to calculate the eigenvalues.

**Step 3: The Eigenvalue Shortcut (Trace and Determinant)**
- **The Trace:** The sum of the two eigenvalues equals the sum of the top-left to bottom-right diagonal of the matrix:
$$\large \lambda_+ + \lambda_- = F_u + G_w$$
- **The Determinant:** The product of the two eigenvalues equals the cross-multiplication of the matrix:
$$\large \lambda_+ \cdot \lambda_- = F_u G_w - F_w G_u$$**The Rule:** For the fixed point to be absolutely stable, **both eigenvalues must have real parts smaller than zero** (they must be negative).
- Using the shortcut above, you don't even need to solve for the exact eigenvalues. You just need to prove two things:
	1. The Trace must be negative: $F_u + G_w < 0$
	2. The Determinant must be positive: $F_u G_w - F_w G_u > 0$


---
Levels of Abstraction in Modeling
- **Level I: Detailed compartmental models:** The most realistic. They take a massively complex branching neuron and chop it up into thousands of tiny electrical circuits to perfectly simulate every single dendrite.
- **Level II: Reduced compartmental models:** A compromise. They simplify the shape of the neuron down to just the main body (soma) and a few thick branches.
- **Level III: Single-compartment models:** It treats the entire neuron as a single unified circuit. Using the capacitors ($C_m$) and variable resistors ($g_{Na}, g_K$) used in our Hodgkin-Huxley equation.

These top three levels all share the same foundation: they physically represent the neuron using **Hodgkin-Huxley style membrane equations** to calculate actual ion channel dynamics and synaptic transmission.

- **Level IV: Cascade models:** Stop trying to simulate the physical ion channels. Instead, use a "Linear-nonlinear cascade". They take an incoming stimulus $S(t)$, pass it through a linear filter, and then apply a math formula (nonlinearity) to output a response $R(t)$.
- **Level V: Black-box models:** This is the ultimate mathematical abstraction. The neuron is treated as a literal "black box" marked with a question mark. We don't care about biology, circuits, or filters. We strictly look at statistics: what is the **conditional probability** of getting a specific response ($R$) depending on a specific stimulus ($S$). 
---
## The Leaky Integrate-and-Fire (LIF) Model

It doesn't care about tracking Sodium or Potassium channels. Instead, it treats the neuron like a leaky bucket filling with water (electricity) until it overflows (spikes). The LIF model trades biological accuracy for mathematical simplicity. By using three simple rules (fill up, hit the line, reset)

The entire model is defined by three strict mathematical rules:

**1. The Leak & The Integration (The Build-Up)**
- 
$$\Huge \dot{u} = \frac{(E - u(t))}{\tau} + \frac{I(t)}{C}$$

- This linear differential equation describes exactly what happens to the membrane potential _between_ spikes.
- **"Integrate":** The $\large \frac{I(t)}{C}$ part represents the incoming current filling up the neuron (like water pouring into a bucket).
- **"Leaky":** The $\large \frac{(E - u(t))}{\tau}$ part represents the voltage naturally seeping back out toward its resting state $E$ (like a hole in the bottom of the bucket). It acts as a mathematical "lowpass filter" dictated by the time constant $\tau = RC$.
- Rearranging  

$$\dot{u} = \frac{E - u(t)}{\tau} + \frac{R \cdot I(t)}{\tau}$$

$$\dot{u} = \frac{E_L + R_M \cdot I(t) - u}{\tau}$$

**2. The Fire (The Threshold)**
- **The Equation:** $\large t_f : u(t_f) = \vartheta$
- The model says that at a specific time ($t_f$), the voltage ($u$) will hit a strict, pre-defined threshold ($\vartheta$).
- When it hits this threshold, it fires a spike! But it doesn't draw a realistic biological wave; it draws a perfectly straight vertical line called a **Dirac pulse**.

**3. The Reset**
- **The Equation:** $\large \lim_{t \to t_f; t > t_f} u(t) = u_r$
- This limit equation just says that the very millisecond _after_ the spike fires, the math forcefully resets the neuron's voltage all the way back down to its resting reset value ($u_r$).

	![[Pasted image 20260309171133.png]]

The Analytical Solution 
- Because this model is built on a simple linear equation, we don't have to use messy phase planes to predict what it will do.
- If you inject a **constant** current ($I_0$), you can calculate the exact voltage at any exact moment in time by using this solved formula:
$$\Large u(t) = R \cdot I_0 \cdot \left(1 - e^{-\frac{t-t_f}{\tau}}\right) + u_r$$


- To find out how fast a neuron is firing, we need to know exactly how much time passes between one spike ($t_1$) and the next spike ($t_2$). This time difference is $\Delta t$.
- Set the target voltage to equal our firing threshold ($\vartheta$):
$$\vartheta = R \cdot I_0 \cdot \left(1 - e^{-\frac{t_2 - t_1}{\tau}}\right) + u_r$$
  we can rearrange that equation to solve purely for the time difference ($\Delta t$):
$$\Delta t = t_2 - t_1 = -\tau \cdot \ln\left(1 - \frac{\vartheta - u_r}{R \cdot I_0}\right)$$
- The Firing Rate ($f$)
							$f = 1 / \Delta t$

- Pure LIF math allows for impossibly fast firing. As you pump in more and more current, the frequency just keeps rocketing upward. To fix this flaw, we program a delay into the LIF model called the **absolute refractory time ($t_{abs}$)**. Whenever the neuron spikes, the math forces it to sit completely frozen at its reset value ($u_r$) for a set amount of time (like 2ms) before it is allowed to start integrating current again.
		![[Pasted image 20260309170323.png]]


Spike rate adaptation 
Many real neurons show spike rate adaptation, i.e., the **firing rate** in response to a constant current decreases over time (t=100ms).

In the basic LIF model because the incoming current is constant, the neuron fires like a perfect metronome. The time between every single spike is exactly identical.
To make the neuron slow down, we add a new variable to the math: a time-dependent conductance called $g_{rsa}$. Biologically, this represents a special, slow-acting Potassium ($K^+$) channel that opens up more and more as the neuron fires, actively resisting the incoming current.

- **The Jump :** Every single time the neuron fires a spike ($t_f$), it permanently adds a constant chunk of resistance ($\Delta g_{rsa}$) to the pile.
$$\lim_{t \to t_f; t > t_f} g_{rsa}(t) = g_{rsa}(t_f) + \Delta g_{rsa}$$
- **The Decay :** Between spikes, this resistance doesn't just stay flat; it slowly decays away based on its own time constant ($\tau_{rsa}$).
$$\dot{g}_{rsa} = -\frac{g_{rsa}}{\tau_{rsa}}$$
- **The Modified Main Equation:** We plug this adapting resistance directly into our master voltage equation ($\dot{u}$).
$$\dot{u} = (E_L + R_M \cdot I(t) - r_m \cdot g_{rsa} \cdot (u - E_K) - u) / \tau$$
	-  **$g_{rsa}$**: The **Rate Spike Adaptation Conductance**. A variable that tracks how many times the neuron has fired. Every time there is a spike, this number jumps up.
	- **$E_K$**: The **Potassium Reversal Potential**. This is a super-low, deeply negative voltage. The adaptation mechanism is specifically modeled as a Potassium ($K^+$) channel, and Potassium always wants to pull the neuron down to this low $E_K$ level.
	- **$(u - E_K)$**: The **Driving Force**. This calculates how far away the current voltage ($u$) is from the deep Potassium floor ($E_K$). The further away it is, the stronger the pull downward.
	- **$r_m$**: A specific **resistance multiplier** for this particular ion channel, used to scale the conductance perfectly into the rest of the voltage equation.


By forcing an absolute freeze ($t_{abs}=2ms$), the firing frequency (red line) completely flattens out. the neuron cannot fire any faster, no matter how much current you add. 
To create a much more realistic **relative refractory period** we use the spike rate adaptation, but with a much shorter time constant (t=2ms) and larger increase of the leak conductance following an action potential. 

**The Exponential Integrate-and-Fire (EIF) Model**
For more realistic simulations, non-linear extensions of the IF model are used, such as the exponential integrate-and-fire model.
Add a non-linear term to simulate the explosive opening of Sodium channels right before a spike.
$$\Large \frac{du}{dt} = \frac{(E - u)}{\tau} + \frac{I}{C} + \frac{\Delta}{\tau} \cdot e^{\frac{u - \vartheta_{rh}}{\Delta}}$$

- **$\vartheta_{rh}$ (Rheobase threshold):** This is the critical voltage zone. As the voltage ($u$) gets closer to this number, the exponential term wakes up and starts pulling the voltage up faster and faster.
- **$\Delta$ (Sharpness parameter):** This dictates how "sharp" or sudden the spike initiation is.


#### **Synaptic Transmission**

- Information (electrical signals from other cells) is collected by the branch-like structures called the **dendritic tree**.
- All that collected electrical info pools together in the cell body. If the membrane potential gets high enough, it triggers a full action potential right at the **axon hillock**
- The action potential is actively moving along the axon.
- When the spike reaches the very end of the axon, it hits the **synapse** (tiny gap between two neurons). 
- The electrical spike forces the cell to spit out chemical messengers called **neurotransmitters** into that gap.
- Those chemical neurotransmitters float across the gap and physically bind to the next neuron (the postsynaptic cell), forcing its **ion channels** to open up.
- Because those new ion channels opened, the cell's **conductance** changes. This allows ions to flood in or out, which directly changes the **membrane potential** of that new postsynaptic neuron.

The Mechanism : a three-step sequence of how an electrical signal is converted into a chemical signal, and then back into an electrical one.
- The Arrival & Calcium Influx : An **action potential** reaches the **presynaptic axon terminal**. This sudden electrical jolt forces special Calcium ($Ca^{2+}$) channels to open up, allowing $Ca^{2+}$ to flood directly into the cell.
- Vesicle Fusion & Release : Inside the nerve terminal, chemical neurotransmitters are safely packaged into little spherical bubbles called **vesicles**. That sudden influx of Calcium acts as a biological trigger. It causes these vesicles to move down, physically fuse with the bottom membrane, and dump all their neurotransmitter contents directly into the empty space (the synaptic cleft).
- The Reaction : EPSP 
	- The blue neurotransmitters float across the gap and perfectly plug into green **receptor-channels** waiting on the postsynaptic cell (the receiving neuron).
	- Plugging in the transmitters forces these channels to open, allowing a rush of positively charged Sodium ($Na^+$) to enter the receiving cell.
	- **The EPSP:** Because positive charge just entered the cell, the receiving neuron experiences a small, temporary upward bump in its voltage. This is called an **Excitatory Postsynaptic Potential (EPSP)**.

	![[Pasted image 20260310150859.png]]

Common neurotransmitters include:
- Glutamate
- GABA
- Acetylcholine
- Dopamine
- Serotonin
---
**Excitatory transmission with Glutamate**

**The Main Chemical: Glutamate**
In the brain, the primary excitatory neurotransmitter is **glutamate**. In the human brain (the Central Nervous System), glutamate handles well over 80% of all the fast excitatory signals.

When glutamate locks into the postsynaptic cell, it opens up channels that let both Sodium ($Na^+$) and Potassium ($K^+$) flow through the membrane. The equilibrium point for these specific channels is exactly 0 mV. This means if the cell's voltage is somehow artificially held at exactly 0 mV, you wouldn't see any Excitatory Postsynaptic Potential (EPSP) bump

**Ionotropic Receptors (The "Direct" Doors)**
"Ionotropic" just means that the receptor itself is literally the door for the ions. Glutamate acts like the key, turns the lock, and the door immediately opens. There are three main types of these receptors:
- **AMPA** ($\alpha$-amino-3-hydroxy-5-methylisoxazole-4-propionic acid)
- **NMDA** (_N_-methyl-D-aspartate)
- **Kainate**

**The Key (The Neurotransmitter):** **Glutamate** is the physical chemical floating across the gap. It is the key.
**The Locks (The Receptors):** **AMPA** and **NMDA** are the different types of locks built into the postsynaptic cell that the Glutamate key fits into.

- **AMPA (The Sprinter):** These are incredibly fast. They have a very short time constant of just 2 ms. They open instantly, let ions in, and close almost immediately.
	-  The purple glutamate (Glu) key binds to the top, the door pops open, Sodium ($Na^+$) rushes in, and Potassium ($K^+$) rushes out. Simple and instant
	 ![[Pasted image 20260310160227.png]]

- **NMDA (The Marathoner):** These are much slower and more complex.
    - _Timing:_ They open fast (rise: 2 ms) but stay open for a long time (decay: 100 ms).
    - _The Magnesium Block:_ They are **voltage-dependent**. At a normal resting voltage (-65 mV), a giant Magnesium ion ($Mg^{2+}$) literally gets stuck in the channel, blocking it completely. The cell has to be partially depolarized (made more positive by AMPA receptors first) to "spit out" the Magnesium so the door can actually open. 
	-  _The Cofactor:_ It needs both Glutamate (Glu) _and_ the cofactor Glycine (Gly) just to activate.
	 ![[Pasted image 20260310160518.png]]
	- Until the cell gets a positive voltage jolt from the AMPA receptors to push that $Mg^{2+}$ cork out, nothing gets through. ***The Calcium Bonus:** Once the cork is gone, NMDA doesn't just let $Na^+$ in; it also lets Calcium ($Ca^{2+}$) rush in. (The Calcium influx is actually the biological basis for how your brain forms new memories)


**Metabotropic Receptors (The "Indirect" Doors)**
- Hidden at the very bottom is another class of glutamate receptors called **metabotropic** receptors.
- Instead of being direct doors, these are more like doorbells. When glutamate rings them, they send "second messengers" deep inside the cell to do complex chemical tasks, which eventually open ion channels indirectly.
	 ![[Pasted image 20260310161305.png]]
- **There is no hole**. When glutamate binds to the top, ions cannot flow through this receptor.
- Instead, the receptor is physically attached to a **G protein** on the _inside_ of the cell.
- When the glutamate rings the doorbell on the outside, it activates that G protein on the inside, which breaks off and goes to talk to an **Effector**. This starts a complex chemical chain reaction (second messengers) that will eventually go open other ion channels somewhere else on the cell membrane.


The neurotransmitters (like glutamate) float across the water-filled gap and bump into the next neuron. They act like physical keys and plug into specific locks (like the AMPA and NMDA receptors)
![[Pasted image 20260310154804.png]]
When the chemical key turns the lock, a physical door opens in the cell wall. This allows positively charged ions (like Sodium, $Na^+$) to rush inside the cell. Because those ions carry an electrical charge, the cell's voltage suddenly spikes upward.
One single chemical key opening one single door usually only creates a tiny, tiny electrical bump. It is rarely enough to cause a full action potential on its own.    
If enough chemical keys open enough doors, the electrical voltage will finally rise high enough to hit the magic threshold ($\vartheta$), and _then_ the neuron will explosively fire its own action potential down the line.

---
Inhibitory Transmitters & Receptors
The two main inhibitory messengers in the nervous system are **GABA** ($\gamma$-aminobutyric acid) and **glycine**.
They mostly open doors for **Chloride ($Cl^-$)**. Because Chloride has a _negative_ electrical charge, letting it into the cell makes the overall voltage drop downward. This negative voltage bump is called an **IPSP** (Inhibitory Postsynaptic Potential).
The equilibrium point for these $Cl^-$ channels is **-70 mV**. If the cell is already resting exactly at -70 mV, opening these doors won't change the voltage at all (no visible IPSP)

The Two GABA Receptors
GABA has different types of locks it can fit into:

- **$GABA_A$ :** This is an **ionotropic** receptor. When GABA binds to it, it opens directly and lets negative $Cl^-$ rush in. It stays open for a solid 10 ms (time constant).
- **$GABA_B$ :** This is a **metabotropic** receptor. When GABA rings this doorbell, it starts a chemical chain reaction inside the cell that eventually opens **Potassium ($K^+$)** channels instead.
    - $K^+$ is positive, but it is highly concentrated _inside_ the cell. When the door opens, positive charge rushes _out_ of the cell, leaving the inside even more negative! Its reversal potential is a super-deep **-80 mV**.

A single Glycine channel has a larger "conductance" (**46 pS**) than a single GABA channel (**30 pS**).

---
**Other Transmitters & Neuromodulation**

Acetylcholine (ACh) is most famous for being the chemical messenger at the **neuromuscular junction**. This is the exact synapse where your nervous system plugs into your physical muscle fibers to tell them to contract. 
ACh has two different types of locks (receptors) it can fit into:

- **Nicotinic Receptors :** These are **ionotropic** and excitatory. When ACh binds, the door opens instantly, letting positive Sodium ($Na^+$) in and Potassium ($K^+$) out (pushing the voltage up toward a reversal potential of 0 mV). Aside from muscles, you also find these in the autonomic nervous system and the Central Nervous System (CNS).
- **Muscarinic Receptors :** These are **metabotropic**. They trigger complex, indirect chain reactions inside the cell and can have totally different effects depending on where they are.

**Volume transmission (Neuromodulation)** is completely different. Instead of whispering to a single neighbor, specific brain regions act like a sprinkler system, spraying chemicals widely over huge areas of the Central Nervous System (CNS) 
- **Dopamine** (Reward and motivation)
- **Serotonin** (Mood and sleep)
- **Noradrenaline / Norepinephrine** (Alertness and fight-or-flight)
- **Acetylcholine** (Also acts as a neuromodulator in the brain for attention)

---
**The Electrical Synapse (Gap Junction) ** 
In a gap junction, there are no chemicals, no vesicles, and no waiting. The two neurons physically plug into each other like extension cords.
The two cell walls get incredibly close together (only 3.5 nm apart). They build physical **pores** (tunnels) that punch straight through both cell walls. This connects the inside (cytoplasm) of Cell 1 directly to the inside of Cell 2.
![[Pasted image 20260311163319.png]]
These tunnels are built out of specialized proteins. A single puzzle piece is called a **Connexin** .Six connexins group together in a circle to form a half-pipe called a **Connexon**.
The two neurons are physically locked together by those Connexon tunnels, they essentially share the same internal fluid. The positively charged ions (like Sodium) that rush into the first cell during an action potential just keep flowing right through the tunnel into the second cell, instantly raising its voltage.
When Cell 1 sticks a Connexon out, and Cell 2 sticks a Connexon out, they snap together perfectly in the middle to form a continuous tube. Because there is a direct physical tube, electrical ions ($Na^+$, $K^+$, etc.) just flow straight from one cell directly into the next.

**Gap junctions are extremely rare between neurons**. The vast, vast majority (well over 99%) of your neural connections are **chemical synapses**.

---
### The Synaptic Leaky Integrate-and-Fire Model

$$\Large C_m \frac{du}{dt} = g_l \cdot (E_l - u) + g_s \cdot w_s \cdot p_s \cdot (E_s - u)$$

**The Synaptic Input ($g_s \cdot w_s \cdot p_s \cdot (E_s - u)$):** It represents the neurotransmitters hitting the receptors and opening the doors. It uses a modified version of Ohm's Law (Current = Conductance $\times$ Voltage Difference):

- **Conductivity ($g_s \cdot w_s \cdot p_s$):** This represents how "wide open" the doors are. $g_s$ is the base conductance, $w_s$ is the **synaptic weight** (how strong or "loud" this specific synapse is), and $p_s$ is the fraction of doors currently open.
- **Driving Force ($E_s - u$):** This is the difference between the cell's current voltage ($u$) and the synapse's reversal potential ($E_s$). It dictates how hard the ions are being pushed through the open doors.

The Channel Dynamics Equation : 
To know how many doors are actually open ($p_s$) at any given millisecond
$$\Huge \frac{dp_s}{dt} = -\frac{p_s}{\tau_s} + \sum_k \delta(t - t_k)$$
---
Two different ways to model the electrical current entering the neuron from a synapse. 

Current-Based Synapse : 

$\large \dot{I}(t) = \left( \sum_{i=1}^N w_i \cdot \sum_k \delta(t_i^k - t) - I(t) \right) / \tau'$
**$N$:** The total number of synapses (connections) attached to this neuron.
**$w_i$:** The **Synaptic Weight**.
**$\delta(t_i^k - t)$:** This is the **Dirac delta function**.

- In this simple model, we pretend the synapse just injects a fixed, flat amount of electrical current ($I$) every time a spike arrives, completely ignoring what the neuron's voltage is currently doing.
- Its an okay approximation for **Excitatory synapses** (like Glutamate). Because their target reversal potential ($u_E = 0 \text{ mV}$) is so incredibly far away from the resting potential (around -70 mV), the magnetic "pull" on the ions is basically at maximum strength all the time.


Conductance-Based Synapse : 
The actual electrical current ($I$) entering the cell at any given millisecond
$$\Large I(t) = g \cdot (u_E - u(t)) \cdot \sum_{i=1}^N s_j(t)$$
- Mandatory for Inhibitory Synapses
- **$g$:** The maximum conductance (how wide the doors _can_ open).
- **$(u_E - u(t))$:** The **Driving Force**. This is the reversal potential of the synapse ($u_E$) minus the current voltage of the neuron ($u(t)$). _This is the crucial part that makes it "realistic"!_
- **$\sum s_j(t)$:** The sum of all the open channels across all the different synapses connecting to the cell.
- If the cell's current voltage $u(t)$ is already sitting exactly at the target voltage $u_E$, no ions will flow, even if the doors are wide open. 
- Opening a door doesn't guarantee ions will flow. They only flow if there is a magnetic "pull" or **Driving Force** making them want to cross. That driving force is the difference between the synapse's target ($u_E$) and the cell's current voltage ($u(t)$).

Exactly how many doors are open ($s_j$) at any given moment is given by : 
$$\large \dot{s}_j(t) = \sum_k \delta(t - t_i^k) - s_j(t) / \tau'$$

---
