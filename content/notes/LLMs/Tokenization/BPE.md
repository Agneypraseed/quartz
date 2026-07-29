
Tokenizer
Text is converted into tokens using a tokenizer whose vocabulary was learned before model training. For any given trained GPT model, that tokenizer is fixed and cannot be changed without changing the model itself. Different GPT models, however, may use different tokenizers.

The tokenizer does **not** assign tokens based on the "word" in a linguistic sense. It assigns tokens based on **the exact sequence of characters (or bytes)**. 
The tokenizer is case-sensitive: "hello", "Hello", and "HELLO" are distinct tokenization inputs and may receive different token IDs or token sequences. Likewise, the same word written in different scripts or languages is tokenized independently. Any semantic similarity between these forms is learned by the language model, not by the tokenizer.





