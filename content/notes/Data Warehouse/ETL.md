Extraction :

Synchronous
Asynchronous

Snapshot = complete current dataset each time.

### Differential Snapshot Problem

A sequence of change operations is defined as

$O \in {INS,DEL,UPD}^{*}$

where:

- $INS$ = insert    
- $DEL$ = delete
- $UPD$ = update
- $O$ is a **sequence of change operations**

Applying the sequence $O$ to an initial state $F_1$ produces a new state $F_2$:

$O(F_1)=F_2$

For example,

$O=\langle INS(K3),DEL(K4),UPD(K202)\rangle$

means that we perform these operations in order:

$INS(K3) \rightarrow DEL(K4) \rightarrow UPD(K202)$

Applying all these operations to $F_1$ transforms it into $F_2$.

>Find the **smallest possible sequence** $O$ such that $O(F_1)=F_2$

---
The Algorithms for solving the Differential Snapshot Problem differ mainly in how much main memory MM is available and how much disk I/O they require.

# Difference Snapshot Algorithms

The goal of all algorithms is to compute the **smallest sequence of change operations** $O$ that transforms snapshot $F_1$ into snapshot $F_2$:

$O(F_1)=F_2$

with

$O\in{INS,DEL,UPD}^{*}$

Let

$f_1=|F_1|,\qquad f_2=|F_2|$

and let $M$ denote the amount of available main memory.

---
$DS_{\text{naive}}$ : Nested Loops

For every record $R\in F_1$, scan the entire $F_2$ looking for a record with the same key.

```text
Take R from F1
      ↓
Scan all of F2
      ↓
Same key found?
```

If no matching key exists:

$R\notin F_2\Rightarrow DEL(R)$

because the record existed in $F_1$ but disappeared from $F_2$.

If the key exists:

```text
Same key + same attributes
        → unchanged → ignore

Same key + different attributes
        → UPDATE
```

$R\in F_2\Rightarrow UPD(R)\text{ or ignore}$

Finding INSERTs

Scanning records from $F_1$ naturally finds **deletes** and **updates**, but it cannot directly find records that exist only in $F_2$.

Therefore, matched records in $F_2$ must be marked.

After the comparison:

```text
Unmarked record in F2
        ↓
      INSERT
```

Example:

```text
F1 = {K1, K2, K4}
F2 = {K1, K2, K3}
```

Comparison:

```text
K1 → unchanged
K2 → unchanged
K4 → DEL(K4)
```

Final scan of $F_2$:

```text
K3 was never matched
→ INS(K3)
```

Cost

$\boxed{f_1\cdot f_2+\delta}$

where $\delta$ is the cost of writing the resulting change sequence.

Improvement

Instead of processing one $F_1$ record at a time, load $M$ records from $F_1$ into memory.

```text
M records from F1
        ↓
One scan through F2
```

The cost becomes approximately

$\frac{f_1}{M}\cdot f_2$

instead of

$f_1f_2$.

---
$DS_{\text{small}}$ : Small Snapshot

Use this method when one entire snapshot fits into main memory.

Assume, for example,

$\boxed{M>f_1}$

Load the complete $F_1$ into RAM.

```text
RAM
┌─────────────┐
│ Entire F1   │
│ K1          │
│ K2          │
│ K4          │
└─────────────┘
```

Then scan $F_2$ once.

For each $S\in F_2$:

```text
S exists in F1?
      │
      ├── Yes → compare attributes
      │          ├── same      → ignore
      │          └── different → UPD(S)
      │
      └── No  → INS(S)
```

Whenever a matching record is found, mark the corresponding record in $F_1$.

After scanning $F_2$, any unmarked record in $F_1$ must have been deleted:

$R\in F_1\text{ and unmatched}\Rightarrow DEL(R)$

Example

```text
F1 = {K1, K2, K4}
F2 = {K1, K2, K3}
```

Load $F_1$ into RAM.

```text
K1 → found → unchanged
K2 → found → unchanged
K3 → not found → INS(K3)
```

Afterwards:

```text
K4 is still unmarked
→ DEL(K4)
```

Cost

Each snapshot is essentially read once:

$\boxed{f_1+f_2+\delta}$

An efficient in-memory structure such as a **hash table** or a sorted structure can be used for fast key lookup.

---
$DS_{\text{sort}}$ : Sort-Merge

Neither snapshot fits into memory:

$M\ll f_1$

and

$M\ll f_2$

The idea is to **sort both snapshots by key** and then scan them simultaneously.

Example:

```text
F1 sorted       F2 sorted

K1              K1
K4              K3
K7              K7
K10             K10
```

Use two pointers.

Initially:

```text
F1          F2
K1    ↔     K1
```

Equal keys:

$K_1=K_1$

so compare their attributes.

Then:

```text
F1          F2
K4          K3
```

Since

$K3<K4$

$K3$ can only occur in $F_2$.

Therefore,

$INS(K3)$

Advance the $F_2$ pointer:

```text
F1          F2
K4          K7
```

Now,

$K4<K7$

so $K4$ exists only in $F_1$:

$DEL(K4)$

Thus, after sorting, the two files can be compared with a single sequential merge scan.

External Sorting

Large files that do not fit into RAM are sorted using **external merge sort**.

Split the file into partitions:

$P_1,P_2,\ldots,P_k$

where approximately

$|P_i|\le M$

For every partition:

```text
Read M records
      ↓
Sort in RAM
      ↓
Write sorted run to disk
```

Example:

```text
Run 1: K1 K8 K20
Run 2: K2 K5 K30
Run 3: K3 K9 K11
```

Then merge the runs:

```text
K1 K2 K3 K5 K8 K9 K11 K20 K30
```

Once today's $F_2$ has been sorted, keep the sorted version.

For the next difference snapshot:

$\text{Today's }F_2=\text{Tomorrow's }F_1$

Therefore, tomorrow's old snapshot is **already sorted**.

Only the new $F_2$ must be sorted.

---
$DS_{\text{sort2}}$ : Interleaving

$DS_{\text{sort2}}$ improves the ordinary sort-merge method.

Normally:

```text
Sort F2
   ↓
Write sorted F2
   ↓
Read sorted F2 again
   ↓
Compare with sorted F1
```

With interleaving, the **final merge of $F_2$ and the comparison with $F_1$ happen simultaneously**:

```text
F2 sorted runs
      ↓
Final merge
      +
Compare with sorted F1
      ↓
Generate INS / DEL / UPD
```

Therefore, the completely merged $F_2$ does not need to be written and then read again merely for comparison.

The approximate cost is

$\boxed{f_1+2f_2\log_M f_2+\delta}$

Under the memory condition

$M>\sqrt{f_2}$

this can simplify approximately to

$\boxed{f_1+4f_2+\delta}$

**Interleaving combines the last merge phase with difference detection, reducing additional disk I/O.**

---
$DS_{\text{hash}}$ : Partitioned Hashing

Instead of sorting records, divide them into partitions using a hash function.

For example,

$h(K)=K\bmod 3$

This creates partitions such as

$P_0,;P_1,;P_2$

with

$P_i\cap P_j=\varnothing\qquad i\neq j$

so every key belongs to exactly one partition.

Apply the **same hash function** to both $F_1$ and $F_2$.

Example:

```text
F1                      F2

P0: K3 K9               P0: K3 K12
P1: K1 K7               P1: K1 K7
P2: K2 K5               P2: K2 K8
```

Now only corresponding partitions need to be compared:

```text
F1.P0 ↔ F2.P0
F1.P1 ↔ F2.P1
F1.P2 ↔ F2.P2
```

Because the same hash function is used, a key placed in $P_1$ in $F_1$ must also be placed in $P_1$ in $F_2$.

So instead of searching the whole file, we only compare a much smaller matching partition.

The partitions are chosen so that they can be processed efficiently in memory.

The approximate cost is

$\boxed{f_1+3f_2+\delta}$

which is much closer to linear processing than the naive

$f_1f_2$

approach.

---

|Algorithm|Main idea|Memory condition|Approximate cost|
|---|---|---|---|
|$DS_{\text{naive}}$|Compare each $F_1$ record with $F_2$|Very little memory|$f_1f_2+\delta$|
|$DS_{\text{small}}$|Keep one entire snapshot in RAM|$M>f_1$ or $M>f_2$|$f_1+f_2+\delta$|
|$DS_{\text{sort}}$|Sort by key and merge|Files may exceed RAM|External-sort cost|
|$DS_{\text{sort2}}$|Merge and compare simultaneously|Files may exceed RAM|Less I/O than $DS_{\text{sort}}$|
|$DS_{\text{hash}}$|Hash into matching partitions|Each working partition fits RAM|$f_1+3f_2+\delta$|
