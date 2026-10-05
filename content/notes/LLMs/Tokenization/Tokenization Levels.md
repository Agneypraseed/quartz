
**Embedding:** A numerical vector representation of a token (word, subword, or character) that allows a ML model to represent and process its meaning or properties

1. Word-Level Tokenization
- **Token = word**
- The sentence is split into individual words and punctuation.
- **Does not leverage word roots**, related words such as `read`, `reading`, and `reader` may be treated as completely separate tokens.
-  If a word was not included in the tokenizer's vocabulary, it cannot be represented directly.

2. Character-Level Tokenization
- **Token = character**
- The text is split into individual characters, including spaces and punctuation.
- **Small vocabulary** and **Robust to casing and misspellings**
- **Much slower computation** as one sentence becomes a much longer token sequence than with word-level tokenization.
- **Embeddings are less interpretable** an embedding for a single character like `r` or `e` carries much less obvious semantic meaning than an embedding for a whole word

At the **word level**, a token itself already has a clear meaning:
`"dog"` → one token → one embedding
At the **character level**:
`"dog"` → `"d"`, `"o"`, `"g"`
Each character gets its own embedding:
`d → [ ... ]`  
`o → [ ... ]`  
`g → [ ... ]`

3. Subword-Level Tokenization
- The tokenizer split words into smaller meaningful pieces.
	- `reading` → `["read","ing"]`
- The tokenizer learns which character sequences are useful/common enough to keep as subword tokens.
- **Efficiency depends on the training corpus**: If a word or word-piece appeared frequently in the tokenizer's training data, it may get a compact representation. Rare or unusual words may be split into more pieces.

Special Tokens
Reserved tokens added for specific structural purposes rather than representing ordinary text.
- **`[UNK]` — Unknown token**  
    Used when an input token is not present in the vocabulary.  
    `I like abcxyzzzzzz` → `I`, `like`, `[UNK]`
- **`[BOS]` — Beginning of Sequence**  
    Marks where a sequence starts.
	`Hello world` → `[BOS]`, `Hello`, `world`
- **`[EOS]` — End of Sequence**  
    Marks where a sequence ends.  
    Example:  
    `Hello world` → `Hello`, `world`, `[EOS]`  
- **`[PAD]` — Padding token**  
    Added to shorter sequences so that sequences can have the same length.  
    `I love AI` → `I`, `love`, `AI`, `[PAD]`, `[PAD]`

- Different tokenizers use different conventions. Chat systems may also use special tokens for roles such as **user** and **assistant**. _Example_ :  a tokenizer may use something like `<|end_of_text|>` instead of `[EOS]`

Token representations

One Hot Encoding  
- Every token in the vocabulary is represented by a vector where:
	- one position is **1**
	- all other positions are **0**
- One-hot vectors do **not encode similarity or meaning** between tokens. All different tokens are equally unrelated. 
- The resulting token vectors are orthogonal to one another, no matter how close they are semantically

Learned Embeddings
- a learned vector representation that can also capture relationships between tokens (meaningful)

![[Pasted image 20261002004020.png]]


