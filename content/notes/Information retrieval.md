
Information Retrieval is the science of searching for documents, acting as the bridge for knowledge transfer from information producers to information demanders. It goes beyond simple web searches, encompassing image searches, video, audio, library catalogs, and specialized filtering services.

- **Database Search:** Typically used by programmers who formulate precise queries based on a specific schema, usually interacting through an application. Relies on deterministic models, precise schemas, and exact matches. It is highly sensitive to errors.
- **Information Retrieval:** Designed for the end-user who has a vague and natural language queries. It operates on probabilistic models to find the "best" or "partial" matches and is generally insensitive to minor errors.

Kuhlen's model : Data, Knowledge, and Information represent a progression from raw encoding to actionable solutions.

**Data (The Syntactical Level):**
- Data relates to the purely structural or syntactical level. Anything that is just raw structure with no meaning attached is data.
- It involves defined procedures of data processing.
- Examples include basic file formats and character encodings like Unicode, ASCII, XML, and PDF

**Knowledge (The Semantical Level):**
- Knowledge moves one step higher to the semantical level, which deals with meaning.
- This represents the actual document content.
- It relies on justified procedures of knowledge representation.

**Information (The Pragmatical Level)**
- Information is tied to the pragmatical level, which focuses on practical application.
- It involves controlled information processing aimed at informational action assurance.
- Utilizing the system for finding the solution to a user's specific need.

- Moving from the syntactical (Data) to the semantical (Knowledge) level requires **Representation**
- Connecting the semantical (Knowledge) level with the pragmatical (Information) level requires **Extraction**.

Typical Tasks in Information Retrieval (IR)
- Query Processing : Taking a user's formulated information need (the query) and searching the system to find and rank relevant documents. The system processes the query against its index to return a ranked list of relevant web pages or internal documents
- Classification : Organizing and categorizing documents into predefined structures or hierarchies
	- _Example:_ Automatically or manually sorting new patents into specific technical categories in a patent database
	- _Example:_ An email system automatically sorting incoming mail into _Spam_, _Promotions_, or _Primary_.
- Browsing : Allowing users to manually navigate through a structured collection of documents or categories without having to issue a specific keyword search
- Information Filtering : Actively monitoring a dynamic, ongoing stream of incoming documents and selecting those that match a user's predefined interests or profile.
	- _Example_ : Google Alerts, which constantly scans the newly published web content and sends you a notification whenever a new article mentions a specific topic you are tracking.

Main Aspects of a Retrieval Model
When designing or analyzing an Information Retrieval (IR) model, there are four fundamental aspects to consider:
1. **Representation of the Information Need:** How the user's query is translated into a format the system can understand (e.g., a Boolean logic statement or a mathematical vector).
2. **Representation of the Documents:** How the raw documents are stored and indexed by the system so they can be easily searched (e.g., using extracted keywords or feature vectors).
3. **Matching:** The specific mathematical or logical method used to compare the query representation against the document representations to find relevant results.
4. **Implementation:** The underlying technical execution, data structures (like inverted lists), and algorithms used to make the search efficient and scalable

![[Pasted image 20260510201807.png]]
There is also a **possible feedback process** where the user evaluates the results and refines their query, starting the loop over again

Models of Information Retrieval

- ### The Boolean Retrieval Model
	Based strictly on classical set theory and Boolean logic (AND, OR, NOT).
	- A query is formulated as a logical statement (e.g., "economy AND industrialization"). The system searches the index and retrieves the unstructured set of documents that strictly satisfy this logic.
	- **Matching:** It relies on an **exact match**. A document either perfectly matches the query conditions, or it doesn't. There is no middle ground.
	- Does **not** rank documents. A document that contains the word "economy" 50 times is treated exactly the same as a document that contains it only once, because there is no term weighting.
	- It is highly efficient for the computer to process using inverted lists. However, it is difficult for users to formulate good queries , the size of the results is highly unpredictable , and the lack of ranking makes it poor for modern web searches.


	Inverted lists 
		The system creates a vocabulary of all terms. For each individual word, it manages and saves a list of all the documents that contain that specific word
		![[Pasted image 20260510234634.png]]
		
- ### The Vector Space Model (VSM)
	This model solves the rigid limitations of the Boolean model by treating language geometrically.
	- Both the user's query and the documents in the database are transformed into multi-dimensional vectors within a shared mathematical space.
	- Before the system can convert text into a vector, the raw text must be cleaned and standardized. This involves several critical steps:		
		- **Stop Word Elimination:** Removing common words that carry little to no independent meaning (e.g., "and", "or", "the").
		- **Stemming:** Tracing all occurring word variants back to their base or root form (e.g., reducing "emperors" to "emperor").
		- **Synonym Handling:** Replacing synonyms with a single, preferred uniform term to ensure consistency
	- Each distinct term in the vocabulary represents a different dimension (or axis) in this space.
		- _Example_ : Consider an entire vocabulary of only three words. Because there are three words.
			Vocabulary (The Dimensions): 
			 Dimension 1 (x-axis): The word ”Data” 
			 Dimension 2 (y-axis): The word ”Retrieval” 
			 Dimension 3 (z-axis): The word ”System” 
			 
			 Document 1 (D1): ”Data Data Retrieval System” →  D1 = (2, 1, 1) 
			 Document 2 (D2): ”Retrieval System System” → D2 = (0, 1, 2) 
			 Query (Q): ”Data System” → Q = (1, 0, 1)
			 ![[Pasted image 20260510220922.png]]
	- It allows for **partial matches**. Instead of a binary yes/no, it calculates the weight of each term using the **TF-IDF formula** (Term Frequency-Inverse Document Frequency). This ensures that words appearing frequently in a document ($tf$) but rarely across the whole collection ($idf$) are given the highest importance.
	- Documents are ranked based on their similarity to the query. This is calculated using the scalar product (The angle, $\alpha$, between the query vector and the document vector). A smaller angle means a higher similarity.
	- 
	- 
	- It provides a ranked result list and handles vague queries well. 
	- It assumes all words are independent of each other (ignoring the order of words and context).

- ### The Probabilistic Retrieval Model
	Attempts to calculate the actual mathematical odds of relevance.
	- Uses Probability Ranking Principle (PRP). The core idea is to estimate the probability that a specific document will be relevant to a specific user's query, separating documents into a "relevant" set and a "non-relevant" set.
	- It uses statistical probability rather than spatial geometry. Modern implementations (like the famous BM25 algorithm) calculate term weights based on the distribution of terms across the relevant and non-relevant documents.
	- Documents are ranked in decreasing order of their calculated probability of relevance.
	- 