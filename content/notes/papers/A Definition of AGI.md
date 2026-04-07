

**Spearman’s g** (_general intelligence_) is a theoretical construct that refers to a **single underlying cognitive ability** that influences performance across _all_ mental tasks.
IQ tests are engineered to approximate g as closely as possible.

Cattell-Horn-Carroll (CHC) theory of cognitive abilities :  A **modern framework for understanding human cognitive abilities**. It breaks down general intelligence into distinct broad abilities and numerous narrow abilities (such as induction, associative memory, or spatial scanning).

CHC rejects the idea that intelligence is _one thing_. CHC theory organizes cognitive abilities into a hierarchy of three levels, or "strata," ranging from the most general to the highly specific.

Stratum III: General Intelligence (_g_) 
	This represents the overarching cognitive ability that influences a person's performance across all types of mental tasks. 
	Similar to Spearman’s _g_

Stratum II : Broad Abilities

Core domains of cognition
![[Pasted image 20260405203011.png]]

Stratum I: Narrow Abilities
	Highly specific skills under each broad ability. There are over 70 recognized narrow abilities.
	Under the broad ability of **Visual Processing (Gv)**, abilities like _Spatial Relations_, _Visual Memory_, and _Closure Speed_.	
	Example under Gf include Inductive reasoning and Sequential reasoning

![[Pasted image 20260406010754.png]]

While proficient in knowledge-intensive domains, current AI systems have critical deficits in foundational cognitive machinery, particularly long-term memory storage.

`AGI is an AI that can match or exceed the cognitive versatility and proficiency of a well-educated adult 

Human cognition is not a monolithic capability; it is a complex architecture composed of many distinct abilities honed by **evolution**. 

A framework for evaluating Artificial General Intelligence (AGI) by adopting and adapting the Cattell-Horn-Carroll (CHC) theory of human intelligence. The framework decomposes general intelligence into ten core cognitive components (broad abilities) and numerous narrow cognitive abilities. Solving all the tasks corresponding to these abilities implies an AGI Score of 100%.

#### General Knowledge (K)

Commonsense : Commonsense is the vast set of shared, obvious background knowledge about how the world works. This is highly related to the narrow CHC ability “General Verbal Information (K0).”

	Intuitive Physics : If you drop a glass bottle on a concrete floor, what is the most likely outcome?
	
	Temporal Commonsense : Does making a sandwich usually take longer than baking a loaf of bread?

Science : We give three opportunities to demonstrate proficiency in aspects of science: physics, chemistry, and biology. The AGI score is 1% if the model is proficient in exactly one of these subjects.
The AGI score is 2% if it is proficient in two or more of these subjects. 
This is highly related to the narrow CHC ability “General Science Information (K1).”. 

	Physics : Water flows through a horizontal pipe that narrows. Where the pipe is narrower, is the water’s speed higher or lower? Is the pressure higher or lower?
	
	Chemistry : State the molecular geometry for the sulfur tetrafluoride molecule.
	
	Biology : In pea plants, the allele for purple flowers (P) is dominant to the allele for white flowers (p). If two heterozygous (Pp) pea plants are crossed, what is the expected phenotypic ratio of their offspring?

Social Science : We give five opportunities to demonstrate proficiency in aspects of social science: psychology, microeconomics, and macroeconomics, geography, and comparative government. The AGI score is 1% if the model is proficient in exactly one of these subjects. 
The AGI score is 2% if it is proficient in two or more of these subjects.
This is related to the narrow CHC ability “Geography Achievement (A5).”

	Psychology : Which part of the brain is most associated with fear and emotional responses such as aggression?
	
	Microeconomics : A firm’s total cost is $500, and its fixed cost is $200. If it produces 10 units, what is its average variable cost?
	
	Macroeconomics : What is the difference between the nominal interest rate and the real interest rate?
	
	 Geography :  Using an example, describe how **linguistic geography** can reveal patterns of migration and cultural interaction.
	 
	 Comparative Government : What is the primary difference between a presidential system and a parliamentary system?

History :  Knowledge of past events and objects. We give four opportunities to demonstrate proficiency in aspects of history: European history, US history, world history, and art history. 
The framework predominantly considers western History. 
The AGI score is 1% if the model is proficient in exactly one of these subjects. The AGI score is 2% if it is proficient in two or more of these subjects.

Culture :  This evaluates cultural literacy and awareness. It is divided into Current Affairs (1%) and Popular Culture (1%). This is highly related to the narrow CHC ability “General Verbal Information (K0).” LLM have their *search tools enabled*
		
	   Current Affairs : Is Nvidia’s market cap over five trillion dollars?

	   Popular Culture : I’ll play the first part of a song. Tester plays the first 30 seconds of Can't Tell Me Nothing so that the listener just hears “La la la-la, Wait till i get my money right”. What line does he say next? 


#### Reading and Writing Ability (RW)

Capturing all of the declarative knowledge and procedural skills a person uses to consume and produce written language. This is highly related to the broad CHC ability “Reading and Writing (Grw).”

![[Pasted image 20260407010017.png]]

Into four distinct areas: 
1. Letter-Word Ability (1%): The ability to recognize letters and decode words. 
	This is highly related to the narrow CHC ability “Reading Decoding (RD).”
		How many “r’s” are in “strawberry”?
		Which two letters match exactly? Bb Dd Aa aa

2. Reading Comprehension (3%): The ability to understand connected discourse during reading.     This is highly related to the narrow CHC ability “Reading Comprehension (RC).”
    Systems must also be able to determine if a question is underdetermined by the context (a hallucination rate of less than 1%).
	We split reading comprehension into three levels: sentence level (1%), paragraph level (1%), and document level (1%).
		
			Sentence Level: Read the sentence: “The trophy would not fit in the brown suitcase because it was too large.” What was too large?	
					
			Paragraph Level: Read the paragraph: “Mars is the fourth planet from the Sun. It is often referred to as the ‘Red Planet’ because the iron oxide prevalent on its surface gives it a reddish appearance. This rust is a key feature of its landscape.” Why is Mars called the Red Planet? 
			
			Document Level: Read the following product manual excerpt: “...Protect the motor, display and battery against extreme temperatures... A two-year warranty applies to the battery. Should a fault occur during this period, your Gazelle specialist will replace the battery. Normal aging as well as wear and tear...” What is the warranty period for the battery? (Full document here

3. Writing Ability (3%): The ability to write with clarity of thought, organization, and good sentence structure. This is highly related to the narrow CHC ability “Writing Ability (WA).”
     We split writing ability into three levels: sentence level (1%), paragraph level (1%), and essay level (1%)

		Sentence Level: Write a single sentence using the words “ocean,” “moon,” and “tide.” 
		
		Paragraph Level: Write a paragraph discussing the benefits of regular exercise.
		
		Essay Level: Write a well-structured essay arguing for or against the proposition that remote work should be the default option for office-based jobs.


4. English Usage Knowledge (3%): Knowledge of writing in the English language with respect to capitalization, punctuation, usage, and spelling. 
   This is highly related to the narrow CHC ability “English Usage (EU).” 
   We split English usage knowledge into three levels: sentence level (1%), paragraph level (1%), and document level (1%). Document level English usage knowledge can be operationalized as proofreading a multipage document.

			Sentence Level: Is the following sentence grammatically acceptable? “I bought an Italian hunting blue little antique beautiful cap.”
			
			Paragraph Level: Find the typos in this: "Example para". 
			
			Document Level: Find the typos in this: ""Example pdf""


#### Mathematical Ability (M)

![[Pasted image 20260407011711.png]]

We decompose mathematical ability into five distinct areas, each contributing 2% to the AGI score: Arithmetic,  Algebra,  Geometry, Probability, Calculus. 
This is highly related to the broad CHC ability “Quantitative Knowledge (Gq)” and the narrow abilities Mathematical Knowledge (KM), Mathematical Achievement (A3), and General Sequential Reasoning (RG)

Arithmetic : 
	Rudimentary Illustrative Examples: 
		What is 60, 003 − 46, 789?
		What is 2,405 times 61? 
	Proficient Illustrative Examples: 
		“Janet had 22 green pens and 10 yellow pens. Then she bought 6 bags of blue pens and 2 bags of red pens. There were 9 pens in each bag of blue and 6 pens in each bag of red. How many pens does Janet have now?” 

Algebra :
	Example : 
	Let g(x) = ax2 + 24, where a is a constant. If g(4) = 8, what is g(−4)?
	Integers a, b, and c satisfy ab + c = 100, bc + a = 87, and ca + b = 60. What is ab + bc + ca? 

Geometry :
	Example : 
	A square and an equilateral triangle have equal perimeters. If the square has sides of length 3, what is the length of one side of the triangle?

Probability : 
	Example : 
	A certain hospital currently contains 319 patients, 25 nurses, 8 doctors, and 48 visiting family members. If a person is picked at random from every person currently in the hospital, which of the following choices is closest to the probability that they are a nurse?

Calculus : 
	Example : 
	A circular object is increasing in size in some unspecified manner, but it is known that when the radius is 6, the rate of change of the radius is 4. Find the rate of change of the area when the radius is 6.
	Find all the critical points of the function$$   f(x, y) = x^3 - 6xy + y^2 + 6x + 3y - 5 $$


#### On-the-Spot Reasoning (R)
![[Pasted image 20260407173933.png]]
Problems that cannot be performed by relying exclusively on previously learned habits, schemas, and scripts.
This is highly related to the CHC broad ability “Fluid Reasoning (Gf).”
**Fluid intelligence (Gf)** is the capacity to **reason, identify patterns, and solve novel problems independent of prior knowledge**.

We decompose this ability into four distinct areas: 

Deduction (2%): Reasoning from general statements or premises to reach a logically guaranteed conclusion. This should test categorical reasoning, sufficient conditional reasoning, necessary conditional reasoning, disjunctive reasoning, and conjunctive reasoning. This is highly related to the CHC narrow ability “General Sequential Reasoning (RG).”
	Example : David knows Mr. Zhang’s friend Jack, and Jack knows David’s friend Ms. Lin. Everyone of them who knows Jack has a master’s degree, and everyone of them who knows Ms. Lin is from Shanghai. Who is from Shanghai and has a master’s degree?

Induction (4%): Discovering the underlying principles or rules that determine a phenomenon’s behavior. 
For induction tests, we use Raven’s Progressive Matrices (RPMs), where you identify the missing piece in visual patterns. We have two private RPM sets. Each test has a visual representation as well as a verbal representation. We average the percentile of the two tests to determine the AI’s percentile (p) in comparison to a human population.
		![[Pasted image 20260407172517.png]]
	The mapping from percentile to score is as follows: 
	 0 ≤ p < 50 → 0%
	 50 ≤ p < 90 → 1%
	 90 ≤ p → 2%.

Theory of Mind (2%): The ability to attribute unobservable mental states, such as beliefs, intentions, and desires to others and to understand that those states may differ from one’s own.

	Example : The can of Pringles has moldy chips in it. Mary picks up the can in the supermarket and walks to the cashier. Is Mary likely to be aware that “The can of Pringles has moldy chips in it.”?

Planning (1%): Devise a sequence of actions to achieve a specific goal by mentally mapping out the steps from an initial state to a desired future state
	Example : You plan a 14-day trip to 3 European cities, taking only direct flights between. You’ll stay 4 days in Paris, 5 days in Bucharest, and 7 days in Riga. You need to meet a friend in Bucharest between days 10 and 14. Direct flights are available between London and Bucharest, and between London and Reykjavik. Find a 14-day travel plan that satisfies these conditions.

Adaptation (1%): The ability to infer an unstated classification rule from performance feedback and to flexibly abandon that rule and search for a new one when the sorting criteria change without warning. 
	Example : Wisconsin Card Sorting Test
			![[Pasted image 20260407173823.png]]


#### Working Memory (WM)

