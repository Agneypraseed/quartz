
Tokenizer
Text is converted into tokens using a tokenizer whose vocabulary was learned before model training. For any given trained GPT model, that tokenizer is fixed and cannot be changed without changing the model itself. Different GPT models, however, may use different tokenizers.

The tokenizer does **not** assign tokens based on the "word" in a linguistic sense. It assigns tokens based on **the exact sequence of characters (or bytes)**. 
The tokenizer is case-sensitive: "hello", "Hello", and "HELLO" are distinct tokenization inputs and may receive different token IDs or token sequences. Likewise, the same word written in different scripts or languages is tokenized independently. Any semantic similarity between these forms is learned by the language model, not by the tokenizer.

Naive Implementation 
1. **Pretokenization**: 
   Firstly, we pretokenize the text into word chunks to get a frequency count of all the unique words. This is done by reading the input file and splitting it using a regex. To prepare for BPE, each word is immediately broken down into a tuple of its individual single bytes.
   ```python
   # Example: word_counts
   {
       (b'l', b'o', b'w'): 5,
       (b'l', b'o', b'w', b'e', b'r'): 2,
       (b'n', b'e', b'w', b'e', b's', b't'): 6,
   }
   ```
2. **Vocabulary and Merges**: 
   Then we build an initial vocabulary. Importantly, this initial vocabulary does **not** map whole words to IDs yet; it maps the 256 individual base bytes (0–255) to token IDs. We also initialize an empty list of `merges`. This will store all of our learned merge rules (e.g., merging `a` and `n` into `an`) so that we can refer to them later during encoding. Full words like `Hello` will only map to a single token ID (like `31373`) much later, after all its individual letters have been merged together.
3. **Finding the most frequent pair**: 
   The next step is to find the most frequent pair of adjacent bytes. This is done by iterating over the tuples in our `word_counts` dictionary and counting how many times each adjacent pair appears (multiplied by the word's frequency). The pair with the highest total count is the winner.
4. **Applying our Merge**: 
   Once we've found this most common pair, we apply the merge to the current list of words in our `word_counts` dictionary. For instance, if our most frequent pair was `(b'e', b'l')`, we replace all instances of that pair with the new merged unit `b'el'`. The word `"Hello"` would transform from `(b'H', b'e', b'l', b'l', b'o')` into `(b'H', b'el', b'l', b'o')`.




![[Pasted image 20260828221840.png|636]]
