
## Introduction

**Key Terminology and Notations:**

- **Observations (ω):** The individual units on which we measure data, such as persons, cars, animals, or plants.
- **Population (Ω):** The collection of all units/observations under consideration.
- **Single Unit (ω ∈ Ω):** One observation selected from the entire population (e.g., one person out of all persons of interest).
- **Sample:** A selection of observations ω1, ω2,...,ωn from the population.
- **Sample as Subset:** A sample is always a subset of the population, expressed as {ω1, ω2,...,ωn} ⊆ Ω.

Once we've defined the population for a research question, we can identify which features of our observations matter. We collect each feature in a statistical variable X. For example, if our observations are human beings, X might represent marital status, gender, age, or any other relevant characteristic. We can examine multiple features simultaneously, each captured in a different variable Xi, i = 1, 2,..., p. Each observation ω takes a specific value for X. If X represents gender, then each person has a value x of either "male" or "female."

**Qualitative variables** take values that cannot be ordered in a logical or natural way. Examples include:
• Eye color
• Political party affiliation
• Mode of transportation to work

There is no inherent reason to list blue eyes before brown eyes, or buses before trains.

**Quantitative variables** represent measurable quantities whose values can be ordered logically and naturally. Examples include:
• Shoe size
• House prices
• Number of semesters studied
• Body weight

**Nominal and Ordinal Variables:**

A **nominal variable** is a qualitative variable whose values are labels without order (e.g., gender, eye color). Numbers used to represent categories are arbitrary codes and cannot be used in mathematical operations.

An **ordinal variable** is also qualitative but has a meaningful order (e.g., T-shirt size: small < medium < large). However, the intervals between values are not necessarily equal, so arithmetic operations are not valid.

**Discrete and Continuous Variables:**

- **Discrete variables:** Take a finite or countable number of values. Examples: eye color, region, shoe size, number of semesters studied.
- **Continuous variables:** Can take infinitely many values within a range. Examples: travel time, height, distance. They are typically *measured* rather than counted.

**Scales:**

Different variables hold varying levels of information, which can be classified by their **scale**:

- **Nominal scale:** Values have no order (e.g., gender, status of application).
- **Ordinal scale:** Values can be ordered, but differences between them are not meaningful (e.g., education level, satisfaction level).
- **Metric scale:** Values can be ordered, and differences between them are meaningful (e.g., height).
    - **Interval scale:** Differences are interpretable, but ratios are not (e.g., temperature in °C).
    - **Ratio scale:** Both differences and ratios are meaningful (e.g., speed).
    - **Absolute scale:** Same as ratio, but measured in natural units (e.g., number of semesters studied).

**Grouped Data:**

Sometimes data are available only in summary form, showing categories instead of exact values. Examples:

- Income grouped by ranges (e.g., €0–€20,000, €20,000–€30,000, etc.)
- Political parties combined under “Other Parties”
- Insurance data showing whether a claim was made (yes/no)

A variable that records such summarized information is called a **grouped variable**. These are also referred to as **categorical variables**, which include any variable with a limited number of possible values—such as nominal, ordinal, or discrete variables. If a categorical variable has only two possible values, it is called a **binary variable**.

![[notes/Statistics/images/image.png]]

**Data Collection** 

Data can be collected on all subjects (census) or a sample of the population. We may collect it ourselves or use third-party sources.

**Methods:**

- **Survey:** Questions or questionnaires; sample should represent population.
    - Surveys ask questions or use questionnaires to gather data. For example, an opinion poll before an election asks voters their intended choice; an exit poll updates this on election day. Surveys should ideally represent the population.
- **Experiment:** Controlled settings; researcher manipulates variables; For example, assigning two toothpastes to participants to compare effects is an experiment. Similarly, management controlling production changes in facilities constitutes an experiment.
- **Observational:** Routine data collection; no intervention; example:  hospital blood samples or government migration data.
- **Primary Data:** Collected by researcher.
- **Secondary Data:** Collected by others (census, databases, prior studies).

**Absolute and Relative Frequencies**

- **Absolute Frequency (***nj***):** This is the total number of observations that fall into a particular category.
- **Relative Frequency (***fj***):** This represents the proportion of the total sample in a specific category, calculated as *nj*/*n*

Data can be summarized using class intervals and frequency distributions with absolute and relative frequencies. For example, in a driving license test (maximum 100 points) with scores 28, 35, 42, 90, 70, 56, 75, 66, 30, 89, 75, 64, 81, 69, 55, 83, 72, 68, 73, 16, we can create 5 class intervals (0−20, 21−40, 41−60, 61−80, 81−100) with corresponding counts and relative frequencies. The total of absolute frequencies equals the number of observations, and relative frequencies sum to 1.

![[notes/Statistics/images/image 1.png]]

**Empirical Cumulative Distribution Function**

The empirical cumulative distribution function (ECDF) is a method to summarize and visualize data distributions. It shows cumulative relative frequencies up to any value. 

The **ECDF (***F*(*x*)**)** provides the cumulative relative frequency of all values less than or equal to a specific point *x*

For example, to find how many people scored up to 60 points in a test, add the counts in the intervals 0−20, 21−40, and 41−60, giving a cumulative frequency of 7 and a cumulative relative frequency of 7/20. 

**Ordered Values:** To calculate the ECDF, observations must be arranged in ascending order (*x*(1)≤*x*(2)≤⋯≤*x*(*n*)).

- **Properties:** *F*(*x*) is a **monotonically nondecreasing function** that stays between 0 and 1.
- **Ordinal Variables:** For these, the ECDF is represented as a **step function**.
- **Metric Variables (Grouped):** If metric data is grouped, the ECDF is visualized as a **polygonal chain** that connects the points of each interval, assuming values are distributed uniformly within those intervals

To understand ECDF, we first consider ordered values. Suppose four people have heights x1 = 180 cm, x2 = 160 cm, x3 = 175 cm, x4 = 170 cm. Arranging in ascending order gives x(1) = 160, x(2) = 170, x(3) = 175, x(4) = 180. Ordered values are used to define ECDF. 

The ECDF F(x) at any value x is the sum of relative frequencies of all observed values ≤ x. 

![[notes/Statistics/images/image 2.png]]

F(x) is nondecreasing, ranges from 0 to 1, and is right-continuous. 

As x → -∞ F(x) → 0; As x → +∞ F(x) → 1

For metric variables, F(x) is defined for all real values; for ordinal variables, only observed values are relevant. Ties may occur, e.g., x(3) = x(4).

### ECDF for Ordinal Variables

- Ordinal variables represent categories with a natural order but **without meaningful numerical distance** between them. Examples: rankings, satisfaction levels, education levels (e.g., High School < Bachelor < Master < PhD).
- ECDF is a simple way to describe **how data accumulates** as you move through its values. It’s a step function that climbs from 0 to 1 as you include more observations.

**Example:** Consider a car service satisfaction survey where 200 customers rate their experience on a scale of 1 (not satisfied) to 5 (perfectly satisfied).

- **Data:** 4 people rate "1" (*f*1=0.02) and 16 people rate "2" (*f*2=0.08).
- **ECDF Calculation:** The cumulative frequency at rank 1 is *F*(1)=0.02, and at rank 2 it is *F*(2)=0.02+0.08=0.10

![[notes/Statistics/images/image 3.png]]

For ordinal variables, the ECDF is represented as a **step function**. This is because ordinal data consists of discrete categories with a natural order (e.g., "unsatisfied" to "satisfied"), and the cumulative frequency only changes when moving from one specific rank to the next

The ECDF can be used to obtain the relative frequencies for values contained in
certain intervals as

 H(c ≤ x ≤ d) = relative frequency of values x with c ≤ x ≤ d.

### **ECDF for Metric Variables: The Polygonal Chain**

When metric data is grouped into intervals, the ECDF is visualized as a **polygonal chain**. Unlike ordinal data, metric variables are continuous, so we assume that observations are **distributed uniformly** within each interval.

![[notes/Statistics/images/image 4.png]]

**Example:** Consider pizza delivery times grouped into intervals like (25,30] minutes and (30,35] minutes.

![[notes/Statistics/images/image 5.png]]

Under the assumption that all values in a particular interval are distributed uniformly within this interval, the empirical cumulative distribution function relates to a polygonal chain connecting the points (e0, 0),(e1, F(e1)),(e2, F(e2)), ... , (ek , 1)

![[notes/Statistics/images/image 6.png]]

- **ECDF Calculation:** To find a value within an interval (e.g., 33 minutes), you do not use a jump; you use the linear interpolation formula.
    
    ![[notes/Statistics/images/image 7.png]]
    
    For 33 minutes, this would be 
    
    **Given**
    
    - ej−1=30
    - ej=35
    - dj=35-30=5
    - F(ej−1)=F(30)=0.2480
    - fj= relative frequency of class j = f(6) = F(35)−F(30)=0.2946
    - x=33
    
    H(X ≤ 33) = F(33) = F(30) + f(6)/5 * (33 − 30) = 0.2480 +0.2946/5 · 3 = 0.42476
    

### **Measures of Central Tendency**

These measures describe the "average" or center of a data set

- **Arithmetic Mean:** The sum of all values divided by the number of observations.
- **Weighted Mean:** Used when some values contribute more than others (i.e., they have different "weights" or frequencies). This is especially useful for **grouped data** where we only know the frequency of values in each class interval.

![[notes/Statistics/images/image 8.png]]

- **Properties:**
    
    The sum of deviations of each value from the mean is always zero.
    
    ![[notes/Statistics/images/image 9.png]]
    
    If data is linearly transformed (*y*=*a*+*bx*), the new mean follows the same transformation
    
    ![[notes/Statistics/images/image 10.png]]
    

**Median:** The value that **divides the data into two equal parts**. It is less sensitive to outliers than the mean

![[notes/Statistics/images/image 11.png]]

**Median from Grouped Data** using **Linear Interpolation**.

![[notes/Statistics/images/image 12.png]]

Quantiles

A generalization of the median that partitions data into proportions, such as **quartiles** (four parts), **quintiles** (five parts), **deciles** (ten parts), or **percentiles** (one hundred parts.

The median is the value which splits the data into two equal parts. Similarly, a quantile partitions the data into other proportions. 

| **Name** | **Splits Data into...** | **Alpha Values (α)** |
| --- | --- | --- |
| **Median** | 2 equal parts | $0.5$ |
| **Quartiles** | 4 equal parts | $0.25, 0.50, 0.75$ |
| **Quintiles** | 5 equal parts | $0.20, 0.40, 0.60, 0.80$ |
| **Deciles** | 10 equal parts | $0.10, 0.20, \dots, 0.90$ |
| **Percentiles** | 100 equal parts | $0.01, 0.02, \dots, 0.99$ |

![[notes/Statistics/images/image 13.png]]

**Quantile-Quantile (QQ) Plots:** A graphical tool used to compare two distributions by plotting their quantiles against each other. if the points lie on a 45-degree line, the distributions are similar.

![[notes/Statistics/images/image 14.png]]

**Geometric Mean:** Used specifically for identifying the **average growth factor.**

![[notes/Statistics/images/image 15.png]]

![[notes/Statistics/images/image 16.png]]

## **Measures of Dispersion (Variability)**

These measures characterize how scattered the observations are around the center

Interquartile Range (dQ): The difference between the 75th and 25th percentiles, covering the middle 50% of the data.

$$
dQ = \tilde{x}^{0.75} - \tilde{x}^{0.25}
$$

Variance (s^2): The average of the squared deviations from the mean.

![[notes/Statistics/images/image 17.png]]

Variance for Grouped Data

There are two methods :

**1. The Approximate Method ("Between Variance" only)**

- **When to use:** Use this if you only know the group averages (or midpoints) and do not have the raw data or internal group variances.
- **Assumption:** It assumes everyone in the group is identical (located exactly at the midpoint/mean).

$$
Formula: s_b^2 = \frac{1}{n} \sum n_j (a_j - \bar{x})^2
$$

 aj is the middle value of the jth interval

- **Drawback:** It ignores the spread *inside* the interval, so it usually **underestimates** the true variance.

2: The Exact Method (Variance Decomposition)

When to use:

- You have detailed statistics for each subgroup: specifically the group mean (x̄ⱼ) and the group variance (s̃²ⱼ).

Concept:

- Total variance is split into two components:
    1. Between-Group Variance: How far the group means are from the global mean.
    2. Within-Group Variance: The average of the variances inside each group.

Formula:            

$$
\tilde{s}^2 =\frac{1}{n} \sum n_j (\bar{x}_j - \bar{x})^2+\frac{1}{n} \sum n_j \tilde{s}^2_j
$$

![[notes/Statistics/images/image 18.png]]

```markdown
Let us consider a linear transformation

y_i = a + b x_i   (b ≠ 0),   i = 1, 2, …, n

Mean:
ȳ = a + b x̄
```

![[notes/Statistics/images/image 19.png]]

**If you add/subtract (a):** The Variance does **not change**. (The curve moves left/right, but its width stays the same).

**If you multiply (b):** The Variance is multiplied by **b^2**. (If you double the data values, the variance quadruples).

**Standard Deviation (***s***):** The positive square root of the variance, which share the **same unit of measurement as the original data**

**Standardization /** Z-score : 

 A transformation 

                                                     *y*=(*x*−*μ*)/*σ*

 that results in a variable with a **mean of zero and a variance of one.** 

![[notes/Statistics/images/image 20.png]]

![[notes/Statistics/images/image 21.png]]

**Standardization** is for comparing **individual data points.** It allows to compare "apples and oranges." For example, to compare a student's performance in Math (graded 0-100) vs. English (graded 1-5), standardize both.

Example: You scored 80 in Math (Mean=70, SD=10) and 85 in History (Mean=80, SD=5). Math Z-score = (80-70)/10 = 1.History Z-score = (85-80)/5 = 1.

*Conclusion:* You performed exactly the same relative to the class in both subjects.

A score of 1 in both means the student is exactly "one standard deviation above average" in both subjects.

**Coefficient of Variation (***v***):** A unit-free measure (standard deviation divided by the mean) used to **compare variability** between variables with different units or scales, for comparing the **volatility of entire groups.** 

$$
v = \frac{\tilde{s}}{\bar{x}}

$$

*Example :* Comparing hotel prices in Munich (Euros) vs. London (Pounds).

Munich**:** Mean = 100€, SD = 10€. → CV = 10/100 = 0.1 (10%).

London**:** Mean = 200£, SD = 10£. → CV = 10/200 = 0.05 (5%).

*Conclusion:* Even though the Standard Deviation is 10 for both, Munich prices are technically "twice as variable" relative to the average price.

## **Box Plot**

A graph summarizing a variable's distribution using the **median, quartiles, range, and extreme values (outliers)**.

**The Whiskers:**

- These are the lines extending from the box.
- They mark the **minimum** and **maximum** values of the data (excluding outliers).

                                                 Lower whisker=Q1−1.5×IQR

                                                Upper whisker=Q3+1.5×IQR

**Symmetry:**

- If the median line is exactly in the middle of the box, the data is **symmetric**.
- If the line is closer to the top or bottom, the data is **skewed**.

**Outliers (Extreme Values)**

- **Standard Definition (used in R):** A value is extreme if it is more than **1.5 box lengths** away from the first or third quartile

![[notes/Statistics/images/image 22.png]]

**Measures of Concentration**

Describe how a total quantity (like wealth) is distributed among units. **Concentration** measures **inequality**. It asks: *"Does everyone get a fair share, or does one person hold everything?"*

Concentration summarizes the proportion of each observation with respect to the total sum
of all observations (∑xᵢ).

- **Low Concentration:** The total is spread evenly among everyone.
- **High Concentration:** A large chunk of the total is held by just a few individuals (or just one).
- **Scenario A (Equal Distribution):**
    - Imagine 5 farmers where each owns exactly 20 hectares.
    - Here, land is **not concentrated**. Every observation contributes equally to the sum.
    - A statistical function for this would return a value of **0** (perfect equality).
- **Scenario B (Extreme Concentration):**
    - Imagine 1 farmer owns **all** the land, and the other 4 own nothing.
    - Here, the concentration is **extreme**. One observation contributes 100% to the sum.
    - A statistical function for this would return a value of **1** (perfect inequality/monopoly)

**Lorenz Curve:** A graphical representation where a straight diagonal line represents **total equality**, and a curve falling below that line indicates **concentration.**

![[notes/Statistics/images/image 23.png]]

![[notes/Statistics/images/image 24.png]]

**Gini Coefficient (***G***):** A numerical measure between 0 and 1; **0 indicates no concentration** (equality) and **1 indicates perfect concentration.** 
It quantifies how much the **Lorenz Curve** deviates from the **Line of Perfect Equality** (the diagonal).

Area F:
The area between the Lorenz curve and the diagonal line.

Formula:
G = 2 · F

Logic:

- No concentration (G = 0): The curve lies exactly on the diagonal. The area F is zero.
- Perfect concentration (G ≈ 1): The curve sags all the way to the axes, creating a large triangle. The area F is 0.5.

**Trapezoidal Approximation**

Instead of measuring area geometrically, we calculate it using the cumulative values (v_i) 

![[notes/Statistics/images/image 25.png]]

The “Standardized” Gini Coefficient (G⁺)

The issue:
The theoretical maximum of the standard Gini coefficient (G) is (n − 1) / n, not exactly 1
(unless n is infinite).

The fix:
To ensure the value fits exactly between 0 and 1, even for small sample sizes, we scale it:

![[notes/Statistics/images/image 26.png]]

Range: This standardized version always lies within [0, 1].

**Distribution of Two Discrete Variables**

- **Contingency Tables:** When dealing with two discrete variables, all combinations of their values are listed in a table, and the frequency of each combination is counted

![[notes/Statistics/images/image 27.png]]

- **Joint Frequencies (***nij***):** These represent the number of times a specific combination of values from both variables occurs simultaneously.
    - *Example:* n_{11} = Number of people who are "Male" (x_1) **AND** like "Pepperoni" (y_1).
- **Marginal Frequencies:** These are the row (*ni*+) and column (*n*+*j*) sums of a contingency table, representing the distribution of one variable while ignoring the other.
    - **Row Total (n_{i+}):** The sum of the entire row.
        - n_{1+} = Total count of people in category x_1 (regardless of what Y they chose).
    - **Column Total (n_{+j}):** The sum of the entire column.
        - n_{+1} = Total count of people in category y_1 (regardless of their X category).
    
    From the contingency table above For example, the marginal distribution of X refers to the frequency table of “travel class” (X) and tells us that 62 passengers were flying in economy
    class, 25 in business class and 13 in first class. Similarly, the marginal distribution of “overall rating of flight quality” (Y ) tells us that 10 passengers rated the quality as poor, 36 as fair, 40 as good and 14 as very good.
    
- **Conditional Frequencies:** These represent the distribution of one variable given that the other variable is kept at a fixed value.
    - f_{Y|X_i}: The distribution of Y for a fixed group X_i (e.g., “the pizza preferences of just the men”).
    - f_{X|Y_j}: The distribution of X for a fixed group Y_j (e.g., “the gender breakdown of just the pepperoni lovers”).
    
    For example, the conditional distribution of the overall rating of flight quality (Y)
    among passengers flying in economy class (f_{Y|X=Economy}) is:
    
    - f_{Y|X 1|1} = 10 / 62 ≈ 16%
    Approximately 16% of economy-class customers rate the quality as poor.
    - f_{Y|X 2|1} = 33 / 62 ≈ 53%
    Approximately 53% of economy-class customers rate the quality as fair.
    - f_{Y|X 3|1} = 15 / 62 ≈ 24%
    Approximately 24% of economy-class customers rate the quality as good.

## **Independence and Measures of Association for Discrete Variables**

### Independence

In the context of contingency tables, two variables are independent of each other when the joint relative frequency equals the product of the marginal relative frequencies of the two variables, i.e. the following equation holds:

                                                    f_{ij} = f_{i+} · f_{+j}

In plain English:
“The chance of being a [Man who likes Pepperoni] should equal
(The chance of being a Man) · (The chance of liking Pepperoni).”

Example:

- 50% of people are Men (0.5)
- 20% of people like Pepperoni (0.2)

If there is no special connection between gender and pizza preference,
we expect 10% of the total crowd to be Men who like Pepperoni
(0.5 × 0.2 = 0.1).

Expected Frequencies (ñ_{ij})

This is the most important formula for solving problems. It asks:
"If the variables were perfectly independent, how many people would we expect
to see in this cell?"

Formula to calculate the expected count directly from the totals:

![[notes/Statistics/images/image 28.png]]

Definitions:

- ñ_{ij}: The expected frequency (the theoretical count)
- n_{i+}: The row total (e.g., total Men)
- n_{+j}: The column total (e.g., total Pepperoni lovers)
- n: The grand total

Key Summary:
To check for independence, compare reality (n_{ij}) vs. expectation (ñ_{ij}):

- If n_{ij} ≈ ñ_{ij}: The variables are likely independent
- If n_{ij} is very different from ñ_{ij}: The variables are likely dependent (correlated)

![[notes/Statistics/images/image 29.png]]

Breakdown of a specific cell (Economy Class / Poor Rating)

Actual reality (n_{ij} = 10):
This is the observed data. Ten people in Economy class actually rated the flight as “Poor”.

Theoretical expectation (ñ_{ij} = 6.2):
This is the expected count under independence.
It means: “If class and rating were completely unrelated, we would expect only 6.2 Economy passengers to rate the flight as ‘Poor’.”

Interpretation:
Since the actual count (10) is higher than the expected count (6.2), Economy passengers gave “Poor” ratings more often than statistically expected.

Conclusion:
This suggests dependency. Being in Economy class increases the likelihood of having a poor flight experience.

The Three Tests for Independence : Independence of variables X and Y (2×2 contingency table)

![[notes/Statistics/images/image 30.png]]

If variables X and Y are independent, ALL of the following statements are true.

A. The Proportions Test (the “Ratio Rule”)

This test checks whether the success rate is identical across all groups.

                                        a / (a + c) = b / (b + d) = (a + b) / n

Logic:
If 50% of Group 1 are in Row 1, and 50% of Group 2 are also in Row 1, then the two groups are statistically identical. Knowing the group gives no additional information.

B. The Cross-Product Shortcut (fastest check)

This is the quickest way to check independence without doing any division.

                                              a × d = b × c

Logic:
If the product of the diagonal cells equals the product of the off-diagonal cells,
the variables are independent.

C. The Expected Value Test

This test compares the actual count to the theoretical expectation.

                                              a = (a + b)(a + c) / n

Logic:
This calculates what the count “should” be based on the row and column totals.
If the observed value matches this expectation, the variables are independent.

## Associated

### Pearson’s chi-square (χ²) statistic

Pearson’s χ² statistic is used to measure the strength of association between variables in a contingency table and plays an important role in statistical testing.

Definition:
The χ² statistic measures association by summing the squared differences between
observed frequencies and the frequencies expected under the assumption of independence,
scaled by the expected frequencies.

General formula (k × l contingency table):

![[notes/Statistics/images/image 31.png]]

Interpretation:
The idea behind the χ² statistic is that stronger relationships between variables produce larger deviations between observed and expected frequencies.

- If observed and expected frequencies are very similar, the association is weak and the variables may be independent.
- If the deviations are large, this indicates a stronger association.

Key properties:

- χ² sums all differences between observed and expected frequencies
- Differences are squared and scaled by the expected frequencies
- χ² is always non-negative

Range:
               0 ≤ χ² ≤ n(min(k, l) − 1)

- A χ² value close to 0 indicates a weak association
- A χ² value close to n(min(k, l) − 1) indicates a strong association

Notes:

- The maximum value of χ² depends on the sample size n and the table dimensions k and l
- χ² is a symmetric measure: its value does not depend on which variable is labeled X or Y

Cramer’s V Statistic

Because the range of χ² depends on the sample size and table dimensions, Cramer’s V standardizes the value to lie between 0 (no association) and 1 (perfect association).

Problem with Pearson’s χ²:

- The maximum value of χ² depends on the sample size and the dimensions
of the contingency table.
- This makes it difficult to compare χ² across different tables or datasets.

Solution:

- Standardize χ² by dividing it by its theoretical maximum:
n(min(k, l) − 1)
- This produces a scaled statistic that is independent of sample size and table dimensions.

Formula for a k × l contingency table:

![[notes/Statistics/images/image 32.png]]

Interpretation:

- V ranges from 0 to 1
- The closer V is to 1, the stronger the association between the two variables
- A value near 0 indicates little or no association

### Pearson’s contingency coefficient ( C )

To turn the Chi-Squared score into a number between 0 and 1.

![[notes/Statistics/images/image 33.png]]

Problem : The coefficient C can never reach 1.
Even if two variables are perfectly related (knowing X determines Y with 100% certainty),
the formula for C always falls short of 1.

Examples:

- For a 2 × 2 contingency table, the maximum possible value of C is 0.707. This is confusing because it looks like a "weak" score when it is actually perfect.
- For a 4 × 4 contingency table, the maximum possible value of C is 0.866

Implication:
Because its maximum depends on the table size, C is not directly comparable across contingency tables with different dimensions.

### The maximum possible value (C_max)

To address the limitation of C, statisticians calculate the theoretical maximum that C can reach for a contingency table of a given size (k × l).

Formula:
C_max = √[(min(k, l) − 1) / min(k, l)]

Example (2 × 2 table):

- min(2, 2) = 2
- C_max = √(1 / 2) ≈ 0.707

### **Corrected Pearson's Contingency Coefficient (C_corr) :**

Another way to standardize χ² is a corrected version of Pearson’s contingency
coefficient C.

The corrected coefficient is obtained by dividing C by its maximum possible value:

C_corr = C / C_max

![[notes/Statistics/images/image 34.png]]

If the data are perfectly associated, the value of C equals C_max, and therefore the corrected coefficient C_corr is exactly 1.

![[notes/Statistics/images/image 35.png]]

### **Relative Risks and Odds Ratios**

These are specific ways to measure association in a **2 X 2 table**, and they are incredibly common in medical studies.

**Relative Risk** : This compares the **probability** of an event happening in one group vs. another.

![[notes/Statistics/images/image 36.png]]

### The Odds Ratio (OR)

This compares the **odds** (successes divided by failures), not probabilities.

![[notes/Statistics/images/image 37.png]]

Example 

![[notes/Statistics/images/image 38.png]]

Relative Risk compares the risk of disease in an exposed group (smokers) with the risk in an unexposed group (non-smokers).

1. Identify the groups

Exposed group (Smokers):

- Total smokers: 56
- Smokers with disease: 34

Unexposed group (Non-smokers):

- Total non-smokers: 184
- Non-smokers with disease: 66
1. Calculate the risks

Risk for smokers:
What is the chance that a smoker has the disease?

Risk_smokers = 34 / 56 ≈ 0.607 (60.7%)

Risk for non-smokers:
What is the chance that a non-smoker has the disease?

Risk_non-smokers = 66 / 184 ≈ 0.359 (35.9%)

RR = Risk_smokers / Risk_non-smokers
RR = 0.607 / 0.359 ≈ 1.69

People who smoke are 1.69 times (or 69%) more likely to have the disease than people who do not smoke.

If RR = 1.0, smoking has no effect.
Since RR is well above 1, there is a clear positive association
between smoking and the disease.

**Scatter Plots:** Paired observations for two metric variables are plotted in a coordinate system to reveal **positive, negative, linear, or nonlinear** trends. When you have exact numbers (like Height vs. Weight, or Salary vs. Age), you don't use a table; you use a **Scatter Plot**.

### **Correlation Coefficient (Bravais–Pearson):**

This measures the degree of **linear relationship** between two metric variables, ranging from -1 to +1. 

**With r (Metrical):** Because we are using real numbers, we can have **Negative Correlation**.
When **r = -0.9** it is a **strong** relationship, but it means as one goes UP, the other goes DOWN 

![[notes/Statistics/images/image 39.png]]

Pearson Correlation Components

Top (S_xy):

- The covariance
- Checks whether X and Y tend to be above (or below) their averages at the same time

Bottom (√(S_xx · S_yy)):

- The product of the standard deviations of X and Y
- Scales the correlation so that it always lies between -1 and +1

Properties of the Correlation Coefficient

Unit Independence:

- The correlation coefficient is independent of the units of measurement of X and Y.
- Example: Measuring height and weight in metres/kilograms or centimetres/grams
produces the same correlation coefficient.

Symmetry:

- The correlation coefficient is symmetric.
- r(X, Y) = r(Y, X)

| **Feature** | **Pearson's Contingency Coefficient (C)** | **Pearson's Correlation Coefficient (r)** |
| --- | --- | --- |
| **Symbol** | **C** | **r** |
| **Data Type** | **Categorical** (Tables)
(e.g., "Economy Class" vs "Poor Rating") | **Metrical** (Numbers)
(e.g., "Height" vs "Weight") |
| **Range** | **0 to 1**
(Only measures Strength) | **-1 to +1**
(Measures Strength **AND** Direction) |
| **Meaning** | 0 = Independent
1 = Perfect Association | +1 = Perfect Positive Line
0 = No Line
-1 = Perfect Negative Line |

### Spearman’s Rank Correlation Coefficient (R)

- Uses the ranks of the values rather than the values themselves
- Suitable for ordinal or metric data
- Can detect nonlinear (but monotonic) relationships that Pearson's correlation might miss. It doesn't care if it goes up in a straight line or a curve. As long as the *ranking* order is preserved, Spearman will give you a high score (close to 1).

![[notes/Statistics/images/image 40.png]]

Differences between Pearson and Spearman Correlation Coefficients

1. Type of variables:
    - Pearson’s correlation: only for metric variables
    - Spearman’s rank correlation: for two metric variables, two ordinal variables, or a combination of ordinal and metric variables
    - Neither can be used for nominal variables
2. Type of relationship detected:
    - Pearson: measures the strength of a linear relationship
    - Spearman: responds to any monotonic relationship, including nonlinear
3. Use of data:
    - Pearson uses exact numbers; Rank throws away the numbers and only keeps the order (1st, 2nd, 3rd).
    - **Pearson uses "Entire Information":** It cares about the **exact distance** between numbers.
        - *Example:* It notices the difference between a race won by **0.01 seconds** vs. a race won by **10 minutes**.
    - **Spearman uses "Ordinal Information":** It throws away the distance and only keeps the **place**.
        - *Example:* It treats a "0.01 second win" and a "10 minute win" exactly the same way: **"1st Place."**

**Concordant and Discordant Pairs:** For ordinal variables, association is often measured by comparing pairs of observations to see if they move in the same direction (**concordant**) or opposite directions (**discordant**). 
Instead of comparing exact ranks (like Spearman), this method compares **pairs of observations** to see if they are "consistent" or "inconsistent."

- **Concordant Pair (Agreement):**
    - Customer A gives a **higher** rating than Customer B on *Delivery Time*.
    - Customer A *also* gives a **higher** rating than Customer B on *Payment Options*.
    - **Meaning:** They move in the **same direction**. This supports a **Positive Association**.
- **Discordant Pair (Disagreement):**
    - Customer A gives a **higher** rating on *Delivery Time*.
    - *But* Customer A gives a **lower** rating on *Payment Options*.
    - **Meaning:** They move in **opposite directions**. This supports a **Negative Association**.

The Measures (Gamma & Tau-c)

Goodman and Kruskal’s γ and Stuart’s τ_c

- Both are standardized measures based on concordant and discordant pairs
- Values range from -1 to 1
- Indicate the strength and direction of association between ordinal variables

Once you count all the Concordant pairs (K) and Discordant pairs (D), you plug them into a formula to get a score between -1 and +1.

Goodman and Kruskal’s Gamma (γ)

- Formula:

![[notes/Statistics/images/image 41.png]]

- Simple interpretation:
    - K = number of concordant pairs
    - D = number of discordant pairs
    - γ > 0 if there are more concordant pairs than discordant
    - γ < 0 if there are more discordant pairs than concordant
- Measures the direction and strength of association between ordinal variables

Stuart’s Tau-c (τ_c)

![[notes/Statistics/images/image 42.png]]

- A slightly more complex version of γ
- Adjusts for the size of the table (k × l) and sample size (n)
- Considered more robust than γ for non-square tables

SUMMARY

![[notes/Statistics/images/image 43.png]]

### 1. Two Nominal Variables (Categories)

- **The Data:** Names or labels. There is no order (e.g., Rank 1 vs Rank 2 doesn't exist)
- **Example:** "Eye Color" vs. "Hair Color"
    - Variable 1: Blue, Brown, Green
    - Variable 2: Blonde, Black, Red
- **Question:** Do people with Blue eyes tend to have Blonde hair?
- **The Tools:**
    - Pearson’s Chi-Square: Tells you *if* they are related (Yes/No)
    - Cramer’s V: Tells you the *strength* of the association (0 to 1)
    - **Why?** Colors cannot be put on a number line, so we count frequencies in a contingency table

### 2. Two Ordinal Variables (Ranks)

- **The Data:** Categories with a logical order, but exact distances are unknown
- **Example:** "Education Level" vs. "Job Satisfaction"
    - Variable 1: High School, Bachelor's, PhD
    - Variable 2: Unsatisfied, Neutral, Satisfied
- **Question:** Does having a PhD make you more satisfied?
- **The Tools:**
    - Spearman’s Rank Correlation: Use if you have unique ranks (e.g., 10 employees ranked 1–10)
    - Goodman & Kruskal’s Gamma or Stuart’s Tau-c: Use if there are many "ties" in survey data (e.g., 500 people all said "Satisfied")

### 3. Two Metric Variables (Measurements)

- **The Data:** Real numbers where distances matter (e.g., 10kg is exactly double 5kg)
- **Example:** "Temperature" vs. "Ice Cream Sales"
    - Variable 1: Degrees Celsius (20°, 25°, 30°)
    - Variable 2: Dollars ($500, $1000, $1500)
- **Question:** For every degree hotter, do we sell $100 more?
- **The Tools:**
    - Pearson’s Correlation: The gold standard; use if the relationship is roughly linear
    - Spearman’s Correlation: Use if the relationship is curved (non-linear) or has extreme outliers

![[notes/Statistics/images/image 44.png]]

![[notes/Statistics/images/image 45.png]]

## Permutations

A **permutation** is an ordered arrangement of elements.

### 1. Without Replacement (All Elements Distinct)

- **Description:** All elements are different
- **Example:** Ranking 3 different cities
    - **Formula:** n!

### 2. With Replacement (Some Elements Identical)

- **Description:** Some elements are identical
- **Example:** Arranging balls where some have the same color
- **If groups of identical elements have sizes:** n1, n2, …, ns
- **Formula:** n! / (n1! · n2! · … · ns!)

## 5.3 Combinations

Combinations involve selecting **m elements out of n**. The result depends on **order** and **replacement**.

---

### 1. Without Replacement, Without Order

- **Description:** No repetition, order does not matter
- **Example:** Choosing 5 directors from 15 candidates
- **Formula (Binomial Coefficient):**
(n C m) = n! / [m! (n − m)!]

---

### 2. Without Replacement, With Order

- **Description:** No repetition, order matters
- **Example:** First, second, and third place in a race
- **Formula:** n! / (n − m)! or equivalently (n C m) · m!

---

### 3. With Replacement, Without Order

- **Description:** Repetition allowed, order does not matter
- **Example:** Choosing 3 scoops of ice cream from 4 flavors
- **Formula:** (n + m − 1 choose m)

---

### 4. With Replacement, With Order

- **Description:** Repetition allowed, order matters
- **Example:** A 4-digit PIN using digits 0–9
- **Formula:** n^m

![[notes/Statistics/images/image 46.png]]

**Definitions of Probability**

Two primary ways to define probability:

1. **Relative Frequency (Frequentist):** Probability is interpreted as the limit of the relative frequency of an event as the number of experiment repetitions (*n* ) tends to infinity.

![[notes/Statistics/images/image 47.png]]

**2. Laplace Probability:** Used for experiments where the sample space is finite and all elementary outcomes are **equally probable** (e.g., a fair coin or die). It is calculated as: 

![[notes/Statistics/images/image 48.png]]

## Conditional Probability

Conditional probability handles situations where the probability of an event changes because partial information is known.

- **Example:** Probability of rain given that it is cloudy.
- **Definition:**
    
    The probability of event A given that event B has occurred:
    
    P(A | B) = P(A ∩ B) / P(B)
    
    ![[notes/Statistics/images/image 49.png]]
    

## Law of Total Probability

The Law of Total Probability is used to calculate the probability of an event B by breaking it down across a set of mutually exclusive and exhaustive events.

- The events A₁, A₂, …, Aₘ are disjoint
- Together, they cover the entire sample space

### Formula

P(B) = Σ P(B | Aᵢ) · P(Aᵢ)   for i = 1, …, m

### Interpretation

- First, look at the probability of B occurring within each case Aᵢ
- Then, weight each conditional probability by how likely Aᵢ is
- Finally, sum across all possible cases

Example

![[notes/Statistics/images/image 50.png]]

**Multiplication Theorem:** 

![[notes/Statistics/images/image 51.png]]

## Bayes’ Theorem

Bayes’ Theorem connects P(A | B) with P(B | A).
It allows us to update a prior probability after observing new evidence.

### Formula

![[notes/Statistics/images/image 52.png]]

### Interpretation

- P(A): Prior probability (belief before seeing evidence)
- P(B | A): Likelihood (how likely the evidence is if A is true)
- P(B): Normalizing constant (overall probability of the evidence)
- P(A | B): Posterior probability (updated belief after observing B)

### **Independence**

Two events are **stochastically independent** if knowing that one has occurred gives no information about whether the other will occur. Knowing that **B** happened gives you **zero** new information about **A**.

- **Definition:** *A* and *B* are independent if and only if
    
                                                     $P(A \cap B) = P(A) \cdot P(B)$
    
- **Note:** Independence is different from being disjoint. Disjoint events are highly dependent (if A occurs, B cannot occur)

![[notes/Statistics/images/image 53.png]]

## Pairwise vs. Mutual Independence

- **Pairwise independence:**
    
    Independence holds for every pair of events (m = 2)
    
- **Mutual independence:**
    
    Independence holds for all subsets of events (any m ≤ n)
    

Mutual independence is stronger than pairwise independence.

## Example:

Flip two fair coins.

Define the events:

- **Event A:** First coin is Heads
P(A) = 0.5
- **Event B:** Second coin is Heads
P(B) = 0.5
- **Event C:** Coins match (HH or TT)
P(C) = 0.5

### Test 1: Pairwise Independence

### A and B

- The outcome of the first coin does not affect the second.
- P(A ∩ B) = P(HH) = 0.25
- P(A)P(B) = 0.5 × 0.5 = 0.25

✔ Independent

### A and C

- Given A (first coin is Heads), the second coin can still be H or T.
- Matching occurs only if the second coin is also Heads.
- P(A ∩ C) = P(HH) = 0.25
- P(A)P(C) = 0.5 × 0.5 = 0.25

✔ Independent

### B and C

- Same reasoning as above.
- P(B ∩ C) = 0.25
- P(B)P(C) = 0.25

✔ Independent

### Conclusion (Pairwise)

All event pairs are independent.

⇒ The events are **pairwise independent**.

### Test 2: Mutual Independence

Now test the intersection of all three events.

### Meaning of A ∩ B ∩ C

- First coin is Heads
- Second coin is Heads
- Coins match

This can only occur if the outcome is HH.

### Required Condition

For mutual independence:

P(A ∩ B ∩ C) = P(A)P(B)P(C)

P(A)P(B)P(C) = 0.5 × 0.5 × 0.5 = **0.125**

### Actual Probability

- P(A ∩ B ∩ C) = P(HH) = **0.25**

0.25 ≠ 0.125

✘ Mutual independence fails

Pairwise independence does **not** guarantee mutual independence. Mutual independence is a much stronger condition that prevents hidden logical dependencies between events.

### **Random Variables**

A **random variable (***X***)** is a function that assigns exactly one real number to every possible outcome (*ω*) in the sample space (Ω). Formally, *X* : Ω→R

**(X): Random Variable**

- Represents the *random experiment* or *concept*.
- Example:
    
    “What number will the die roll?”
    
- **(x): Realization / Value**
    - Represents a *specific outcome* of the random variable.
    - Example:
    “The die rolled a 3.”

To fully describe a random variable, we must know:

P(X = x)

Meaning:

- The probability assigned to **each possible value** of X.
- Example:
    - P(X = 1) = 0.10
    - P(X = 2) = 0.20
    - P(X = 3) = 0.15
- What is the probability that X is **less than or equal to x**?. This uses **intervals** rather than single points.
- Set notation:
    
    A = (−∞, x]
    
- Probability statement:
    
    P(X ∈ A) = P(−∞ < X ≤ x) = P(X ≤ x)
    
- This leads directly to the **Cumulative Distribution Function (CDF)**:
    - A function that assigns probabilities to intervals rather than single values.

**Cumulative Distribution Function (CDF)**

The Cumulative Distribution Function (CDF) of a random variable X is defined as:

F(x) = P(X ≤ x)

It gives the probability that X takes a value **less than or equal to x**.

- **Range**
0 ≤ F(x) ≤ 1
- **Monotonicity**
F(x) is monotonically non-decreasing.
As x increases, the probability can only stay the same or increase.
- **Right-Continuity**
lim (h → 0+) F(x + h) = F(x)
This means the CDF does not jump when approached from the right.
- **Boundary Conditions**
lim (x → −∞) F(x) = 0
    
    lim (x → +∞) F(x) = 1
    

The CDF works for:

- Discrete random variables
- Continuous random variables
- Mixed random variables

**Continuous Random Variables (Probability Over an Interval)**

A random variable X is called **continuous** if there exists a function f(x) such that, for all real numbers x we have 

![[notes/Statistics/images/image 54.png]]

where:

- F(x) is the **Cumulative Distribution Function (CDF)** of X
- f(x) is the **Probability Density Function (PDF)** of X

The CDF accumulates probability up to x.

The PDF describes how densely probability is distributed around x.

At all points where f(x) is continuous:

f(x) = d/dx F(x)

- The **PDF is the derivative of the CDF**
- The **CDF is the integral of the PDF**

![[notes/Statistics/images/image 55.png]]

- A variable is **continuous** if there exists a **Probability Density Function (PDF),** *f*(*x*), such that the CDF is the integral of the PDF.
    - The total area under the PDF curve is 1.
    - The probability of observing a specific exact value (e.g., exactly 1.5000...) is **zero** (*P*(*X*=*x*)=0). Probabilities are only calculated for intervals (e.g., between 1.5 and 1.6)

To find the probability that a continuous random variable X falls between two numbers x1 and x2, there are two equivalent methods.

---

Option A: Using the CDF (Cumulative Distribution Function)

P(x1 ≤ X ≤ x2) = F(x2) − F(x1)

Explanation:

- F(x2) gives the total probability accumulated up to x2
- F(x1) gives the total probability accumulated up to x1

---

Option B: Using the PDF (Probability Density Function)

P(x1 ≤ X ≤ x2) = integral from x1 to x2 of f(x) dx

Explanation:

- This calculates the **area under the PDF curve** between x1 and x2
- Probability comes from area, not from individual points

---

For a continuous random variable X:

P(X = x0) = 0

This means the probability of X taking **exactly one specific value** is zero.

P(a ≤ X ≤ b) = P(a < X < b) : Adding or removing the equality sign (≤ or <) changes the probability by **exactly zero**

---

### Why?

- Probability is represented as **area under the curve**: Width × Height
- A single point has **width 0**
- Area = 0 × Height = 0

---

### Example

- What is the chance a person is exactly 175.000000… cm tall?
- Practically zero:
    - They could be 175.00001 cm or 174.99999 cm
- Even though the person exists, **hitting exactly one point on an infinite number line is impossible**.

---

**Discrete Random Variables**

A random variable X is **discrete** if it has a **finite or countable number of possible outcomes**.

Each outcome is assigned a probability using a **Probability Mass Function (PMF)**.

P(X = xi) = pi

where:

- xi are the possible values of X
- pi is the probability assigned to xi
- pi ≥ 0 for all i
- Σ pi = 1

CDF of a Discrete Random Variable (Indicator Form)

![[notes/Statistics/images/image 56.png]]

- For each possible value xi:
    - If xi ≤ x → include its probability pi
    - If xi > x → ignore it
- The CDF simply **adds up the probabilities of all outcomes less than or equal to x**

---

### Intuition

The indicator function acts like a switch:

- ON (1) → include the probability
- OFF (0) → exclude it

So the CDF is just a structured way of saying:

F(x) = sum of all pi such that xi ≤ x

- For discrete variables, the CDF is a **step function**
- It increases only at the values xi where probability mass exists
- Each jump has height pi

### Example : Consider the experiment of rolling a die

![[notes/Statistics/images/image 57.png]]

## CDF: Discrete vs Continuous Random Variables

| Feature | Discrete Random Variable | Continuous Random Variable |
| --- | --- | --- |
| **Definition** | F(x) = P(X ≤ x) | F(x) = ∫ from −∞ to x of f(t) dt |
| **Probability of a single point** | P(X = x) > 0 | P(X = x) = 0 |
| **Graph** | Step function (jumps at each possible value) | Smooth curve (area under PDF) |
| **Computation of interval probability** | Sum of probabilities: P(x1 ≤ X ≤ x2) = Σ P(X = xi) | Area under PDF: P(x1 ≤ X ≤ x2) = ∫ f(x) dx |
| **Derivative** | Not defined (discrete points only) | d/dx F(x) = f(x) (PDF) |
| **Intuition** | Probability accumulates in jumps | Probability accumulates continuously as area |

### Expectation

Expectation (E(X) or μ): This represents the "average" or central value of the population distribution. - 

- Discrete: Weighted sum of outcomes ∑ xi pi

![[notes/Statistics/images/image 58.png]]

- Continuous:

![[notes/Statistics/images/image 59.png]]

### Variance

The core idea of variance is to measure the average distance from the mean.

The variance of a random variable X 

Var(X) = E[(X − E(X))²]

- If we just took the average distance (X − μ), the negative values (left of the mean) would cancel out the positive values (right of the mean), and the result would always be zero.

---

σ² = Var(X)

![[notes/Statistics/images/image 60.png]]

![[notes/Statistics/images/image 61.png]]

Quantiles

The p-quantile (xp) is the value at which the CDF reaches probability p.

Definition:
F(xp) = p

Interpretation:

- xp is the value below which a proportion p of the data lies.
- In other words, P(X ≤ xp) = p.

Examples:

- p = 0.5 → Median
- p = 0.25 → First Quartile (Q1)
- p = 0.75 → Third Quartile (Q3)

**Standardization:** Any random variable can be transformed into a **standardized** variable *Y* with mean 0 and variance 1 using the formula: 

![[notes/Statistics/images/image 62.png]]

**Tschebyschev’s Inequality**

If we do not know the distribution of a random variable X, we can still make probability statements about how far X is from its mean, provided we know:

- The mean μ
- The variance σ²
- The interval must be symmetric around the mean.

The probability that X deviates from its mean by at least c

![[notes/Statistics/images/image 63.png]]

Example: 

Mean (μ): 10 minutes

Variance (σ²): 33 1/3 = 100/3 ≈ 33.33

Calculate the probability of waiting between 3 and 17 minutes.

This interval can be written as:
|X − 10| < 7

---

Distance (c): 7 minutes

(The distance from 10 to 3 and from 10 to 17.)

---

P(|X − 10| < 7) ≥ 1 − (33.33 / 7²)

P ≥ 1 − (33.33 / 49)

P ≥ 0.3198

---

The probability is at least approximately 0.32 (32%).

This is only a lower bound. The true probability could be much larger, but Chebyshev guarantees it cannot be smaller than 32%.

---

Expectation and Variance Rules

For any constant values a and b, and any random variables X and Y

Expectation:

- Additivity:
E(X + Y) = E(X) + E(Y)
- Linear Transformation:
E(a + bX) = a + bE(X)

Suppose the die takes the values 10, 20, 30, 40, 50, 60 instead of the values 1, 2, 3, 4, 5, 6. The random variable Y = 10X describes this suitably and its expectation is
E(Y ) = E(10X) = 10E(X) = 10 · 3.5 = 35

---

Variance:

- Constant:
Var(a) = 0
- Scaling:
Var(bX) = b² Var(X)
- Var(a + bX) = b² Var(X)

---

### Bivariate Random Variables

> Instead of looking at one event in isolation (Univariate), we study **two random variables together** to understand how they interact.
> 

---

The Joint Distribution (The "Map")

This describes the probability of **X and Y happening together**.

---

### A. Discrete Case (The Table)

- **Format:** Contingency Table (Grid)
- **Probability:  p_{ij} = P(X = x_i, Y = y_j)**
- All cells in the table must sum to 1.

![[notes/Statistics/images/image 64.png]]

---

### B. Continuous Case (The 3D Surface)

- **Format:** A Joint PDF function f_{XY}(x,y)$

![[notes/Statistics/images/image 65.png]]

The total volume under the surface must equal 1.

---

### C. The CDF (Cumulative)

![[notes/Statistics/images/image 66.png]]

---

### Marginal Distributions (The "Edges")

> **Goal:** Isolate one variable and ignore the other.
> 

We eliminate the unwanted variable by summing or integrating it out.

---

### Discrete:

![[notes/Statistics/images/image 67.png]]

(Row sum for X, column sum for Y.)

---

### Continuous:

![[notes/Statistics/images/image 68.png]]

(Geometrically: collapsing the 3D surface onto a 2D axis.)

---

## Conditional Distributions (The "Slice")

> **Goal:** How does X behave if Y is already known?
> 

### Discrete:

![[notes/Statistics/images/image 69.png]]

---

### Continuous:

![[notes/Statistics/images/image 70.png]]

The marginal becomes the new "total probability" in the denominator.

---

## Stochastic Independence

Two variables are independent if knowing one gives zero information about the other.

---

Discrete:

![[notes/Statistics/images/image 71.png]]

Continuous:

![[notes/Statistics/images/image 72.png]]

This must hold for all x and y.

---

The higher the sample size, the more secure we are of our conclusions.

We have **n independent and identically distributed (i.i.d.) random variables**:

$$
X_1, \dots, X_n.
$$

- **Mean**

$$
E(X_i) = \mu
$$

- Variance

$$
Var(X_i) = \sigma^2
$$

- Sample Mean

$$
\bar{X} = \frac{1}{n} \sum_{i=1}^{n} X_i
$$

Expectation (The Center)

The average of the sample stays centered on the true population mean.

![[notes/Statistics/images/image 73.png]]

Variance (The Spread)
The spread of the average **shrinks** as n increases. 

![[notes/Statistics/images/image 74.png]]

## Covariance

**Definition:**

Covariance measures the linear association between two random variables X and Y.

![[notes/Statistics/images/image 75.png]]

---

$$
Cov(X, X) = Var(X) 

$$

$$

Cov(X, Y) = E(XY) - E(X)E(Y)
$$

Covariance Matrix

![[notes/Statistics/images/image 76.png]]

**Independent → Zero Covariance:** ALWAYS TRUE.

**Zero Covariance → Independent:** NOT ALWAYS TRUE. (They could have a complex non-linear relationship, like a U-shape, that cancels out to zero).

While Covariance gives you the direction, it is **terrible** at telling you the "strength" of the relationship because it depends on the units.
• **Scenario A:** Covariance in "Meters" might be 0.5.
• **Scenario B:** Convert to "Centimeters," and the Covariance jumps to 5000.
The relationship didn't get stronger; the numbers just got bigger. This is why we usually convert Covariance into **Correlation** (which is unitless) to get a true measure of strength.

### Correlation Coefficient

A standardized version of covariance.

![[notes/Statistics/images/image 77.png]]

### The Additivity Theorem

![[notes/Statistics/images/image 78.png]]

Variances Always Add Up. The variances Var(X) and Var(Y) are **ALWAYS added**. You never subtract variance itself. Only the interaction term (2Cov) changes sign.

	$Var(X - Y) = Var(X) + Var(Y) \mathbf{- 2Cov(X, Y)}$

![[notes/Statistics/images/image 79.png]]

### Probability Distributions

**Discrete Uniform Distribution:** Every possible outcome has the **same probability** 1/*k*.

![[notes/Statistics/images/image 80.png]]

![[notes/Statistics/images/image 81.png]]

**Degenerate Distribution (0 Degrees of Randomness)**

A variable that takes only **one fixed value** *a* with probability 1.

A random variable X has a degenerate distribution at a if:

P(X = a) = 1

This means:

- a is the only possible outcome
- No other value can occur

Cumulative Distribution Function (CDF)

![[notes/Statistics/images/image 82.png]]

**Expectation and Variance**

E(X) = a

Var(X) = 0

To have randomness, we need at least two different possible outcomes.

### Bernoulli distribution:

- Two outcomes: 0 (failure) and 1 (success)
- Both outcomes have positive probability

Unlike the degenerate distribution, Bernoulli has genuine randomness.

![[notes/Statistics/images/image 83.png]]

![[notes/Statistics/images/image 84.png]]

For a Bernoulli distribution, the average is always exactly equal to the probability of success (p).

### Binomial Distribution

Consider **n independent repetitions** of a Bernoulli experiment.

Each trial results in:

- A (success) with probability p
- Ā (failure) with probability 1 − p

X = number of times event A occurs in n trials

Then X can take values:

k = 0, 1, 2, ..., n

---

Probability Mass Function (PMF) for a Binomial Distribution 

If you are running n trials, and you want to find the probability of getting exactly k successes

![[notes/Statistics/images/image 85.png]]

---

![[notes/Statistics/images/image 86.png]]

Variance of a Binomial Random Variable

For any two random variables X and Y:

Var(X + Y) = Var(X) + Var(Y) + 2Cov(X, Y)

- A Binomial variable counts the **sum of n independent Bernoulli trials**
- Independence ⇒ Cov(X_i, X_j) = 0 for all i ≠ j

Var(X_1 + X_2 + ... + X_n) = Var(X_1) + Var(X_2) + ... + Var(X_n)

- Each Bernoulli trial has variance Var(X_i) = p(1 − p)

Var(X) = p(1 − p) + p(1 − p) + ... + p(1 − p) (n times)

Var(X) = n p (1 − p)

The **total uncertainty** in n trials = uncertainty of a single trial × number of trials

---

The sum of two independent Binomial variables with the same *p* is also Binomial

**p MUST be exactly the same for both variables.** A Binomial experiment is just a bunch of single, independent Bernoulli trials added together.If X is made of n Bernoulli trials, and Y is made of m Bernoulli trials, dumping them into the same bucket just gives you a bucket of n + m Bernoulli trials.

---

### Poisson Distribution (Po(λ))

The Poisson distribution models the number of rare events occurring in a fixed interval of time, space, or area.

Examples:

- Number of emails received per hour
- Number of defects per meter of fabric
- Number of accidents per day at an intersection

---

- λ must be strictly greater than zero (λ > 0).
- λ represents the expected number of events in the interval → average rate of occurrence.
- It fully determines the distribution.

X ~ Po(λ)

---

Probability Mass Function (PMF)

![[notes/Statistics/images/image 87.png]]

x is the specific number of events you are asking about. It can be 0, 1, 2, … going all the way up to infinity.

Mean and Variance

E(X) = λ

Var(X) = λ

---

- Small λ → events are rare
- Larger λ → events occur more frequently
- Distribution is skewed right for small λ
- Becomes more symmetric as λ increases

---

- The Poisson distribution arises as a limit of the Binomial distribution when:
    - n → ∞
    - p → 0
    - np = λ (constant)
- Closely related to the Exponential distribution:
    - Poisson counts the number of events in an interval
    - Exponential models the waiting time between events

---

### Multinomial Distribution

The Multinomial distribution is a generalization of the Binomial distribution.

- Binomial → 2 possible outcomes per trial
- Multinomial → More than 2 possible outcomes per trial

It describes a **random vector** (multiple counts), not a single variable.

---

- n independent trials
- Each trial results in exactly one of k categories
- Category probabilities:
    
    p₁, p₂, ..., p_k
    
    where
    
    p₁ + p₂ + ... + p_k = 1
    

---

X₁ = number of times outcome 1 occurs

X₂ = number of times outcome 2 occurs

...

X_k = number of times outcome k occurs

Then:

(X₁, X₂, ..., X_k) ∼ Multinomial(n; p₁, p₂, ..., p_k)

And:

X₁ + X₂ + ... + X_k = n

---

Probability Mass Function (PMF)

![[notes/Statistics/images/image 88.png]]

where:

x₁ + x₂ + ... + x_k = n

---

Expectation

E(X_i) = n p_i

Each category’s expected count equals: number of trials × probability of that category.

![[notes/Statistics/images/image 89.png]]

---

Because we have multiple categories interacting with each other, we can't just use a single variance number. We have to use a **Covariance Matrix**, which measures how every single category relates to itself AND to every other category.

![[notes/Statistics/images/image 90.png]]

Negative covariance occurs because if one category count increases, others must decrease since the total must remain n.

---

Use the Multinomial distribution when:

- You repeat an experiment n times
- Each trial has more than two possible outcomes
- Trials are independent
- Category probabilities are constant

---

### Geometric Distribution

The number of trials needed to obtain the **first success** in repeated independent Bernoulli trials.

Each trial:

- Has two outcomes: Success (1) or Failure (0)
- Has constant probability of success p
- Is independent of other trials

---

Random Variable

Let:

X = number of trials until the first success

Then:

X ∼ Geometric(p)

Possible values:

X = 1, 2, 3, ...

---

Probability Mass Function (PMF)

![[notes/Statistics/images/image 91.png]]

Interpretation:

- Fail k−1 times
- Then succeed on trial k

---

Cumulative Distribution Function (CDF)

P(X ≤ k) = 1 − (1 − p)^k

---

Expectation

E(X) = 1 / p

On average, you need 1/p trials to get the first success.

![[notes/Statistics/images/image 92.png]]

---

Variance

Var(X) = (1 − p) / p²

---

The Geometric distribution is **memoryless**:

P(X > s + t | X > s) = P(X > t)

Meaning:

If you have already failed s times, the probability you must wait at least t more trials
is exactly the same as starting fresh.

Past failures do not change future probabilities.

---

**Binomial asks:** "If I play exactly n times, *how many* wins will I get?"

**Geometric asks:** "How many times do I have to play *until* I get my very first win?"

---

### Hypergeometric Distribution

The Hypergeometric distribution models:

The **number of successes in a sample drawn without replacement** from a finite population.

- Unlike Binomial, trials are **not independent** (no replacement).
- Useful when population is **small or finite**.

Random Variable

Let:

X = number of "successes" in a sample of size n

Population parameters:

- N = total population size
- M = total number of successes in population
- n = number of draws (sample size)

Then X ∼ Hypergeometric(N, M, n)

Possible values:

x = max(0, n − (N − M)) ... min(n, M)

---

Probability Mass Function (PMF)

![[notes/Statistics/images/image 93.png]]

- Choose x successes from M possible successes
- Choose n−x failures from N−M possible failures
- Divide by all ways to choose n items from N

---

## Expectation

![[notes/Statistics/images/image 94.png]]

---

## Variance

![[notes/Statistics/images/image 95.png]]

---

- Sampling **without replacement** causes dependence between trials.
- For large N relative to n, the Hypergeometric distribution approximates a **Binomial distribution**.

---

# Continuous Uniform Distribution

The Continuous Uniform Distribution is the continuous version of the discrete uniform distribution.

All values inside an interval [a, b] are **equally likely**.

X ∼ U(a, b) with a < b.

---

Probability Density Function (PDF)

![[notes/Statistics/images/image 96.png]]

Key idea:

- The density is constant on [a, b].
- The total area under the curve equals 1.
- The graph is a rectangle with height 1/(b − a).

![[notes/Statistics/images/image 97.png]]

---

Expectation (Mean)
                                          E(X) = (a + b)/2

The mean is exactly the midpoint of the interval.

---

Variance

![[notes/Statistics/images/image 98.png]]

The spread depends only on the length of the interval.

Wider interval → larger variance.

---

# Normal Distribution (Gaussian Distribution)

- A random variable (X) follows a normal distribution with mean \(\mu\) and variance \(\sigma^2\) if its PDF is:

$$

f(x) = \frac{1}{\sigma \sqrt{2\pi}} \exp\Big(-\frac{(x-\mu)^2}{2\sigma^2}\Big), \quad -\infty < x < \infty

$$

- Notation: X ~ N(μ, σ²)
- Mean: E(X) = μ
- Variance: Var(X) = σ²

Standard Normal Distribution

If μ = 0 and σ² = 1, X ~ N(0,1)

PDF

![[notes/Statistics/images/image 99.png]]

---

Properties

- Symmetric, bell-shaped curve centered at μ
- Maximum density at x = μ
- Inflection points at x = μ - σ and x = μ + σ
- Smaller σ → sharper peak; larger σ → flatter curve

Standardization

- Convert any normal variable to standard normal:

![[notes/Statistics/images/image 100.png]]

Cumulative Distribution Function (CDF)

![[notes/Statistics/images/image 101.png]]

- Probabilities usually found using **tables** or **software**

---

Linear Combinations

If you take two *independent* normally distributed variables and add them together (or subtract them), the result is **always another perfect Normal Distribution**.

If X, Y are independent normal variables:

Y = aX + bZ ⇒ Y ~ N(aμ_X + bμ_Z, a²σ_X² + b²σ_Z²)

In general, it **cannot** be taken for granted that the sum of two random variables follows the same distribution as the two variables themselves.

---

Distribution of the Arithmetic Mean

Let X ~ N(μ, σ²). Consider a random sample X₁, X₂, ..., Xₙ of independent and identically distributed (i.i.d.) variables with Xᵢ ~ N(μ, σ²).

- **Arithmetic Mean:**
    
    X̄ = (1/n) * Σ Xᵢ
    

![[notes/Statistics/images/image 102.png]]

- **Resulting Distribution:**
    
    X̄ ~ N(μ, σ² / n)
    

---

### Exponential Distribution (Exp(λ))

A random variable X follows an exponential distribution with λ > 0 if its PDF is:

![[notes/Statistics/images/image 103.png]]

X ~ Exp(λ)

- **CDF:**
    
    ![[notes/Statistics/images/image 104.png]]
    
    - Complement: P(X > x) = 1 − F(x) = exp(−λx), x ≥ 0
- **Mean and Variance:**
    
    E(X) = 1 / λ
    
    Var(X) = 1 / λ²
    
- **Memoryless Property:**
    - Like the geometric distribution, the probability of future events does not depend on past events.
    - P(X > t + Δ | X > t) = P(X > Δ), for t, Δ > 0.
- **Relationship to Poisson:**
    - If the number of events Y in a time interval is Poisson distributed with parameter λ,
    the time between two events is exponentially distributed with parameter λ.
    - Applicable to any continuous time period (seconds, minutes, months, etc.).

---

### **Sampling Distributions**

### Chi-Square Distribution (χ²)

Let Z1, Z2, ..., Zn be n independent random variables with Zi ~ N(0,1).

The sum of their squares follows a Chi-Square distribution with n degrees of freedom.

X ~ χ²(n)

- X ≥ 0
    
    The distribution is not symmetric (right-skewed, especially for small n).
    
- **Degrees of Freedom (df):**
    
    The parameter n determines the shape of the distribution.
    
    Larger n → distribution becomes more symmetric.
    
- **Probability Density Function (PDF):**
    
    For x > 0:
    
    ![[notes/Statistics/images/image 105.png]]
    
    where Γ(·) is the Gamma function.
    
- If X1 ~ χ²(m), X2 ~ χ²(n) and X1 and X2 are independent, then
    
    X1 + X2 ~ χ²(m + n)
    
- **Sample Variance**
    
    For an i.i.d. sample of size n from a normal population N(μ, σ²):
    
    ![[notes/Statistics/images/image 106.png]]
    
    This result is fundamental in statistical inference.
    
    - "Does the spread of my small sample prove that the whole population is too chaotic or unpredictable?”

---

### t-Distribution (Student’s t)

Let X and Y be independent random variables where

X ~ N(0,1)

Y ~ χ²(n)

Then the ratio

![[notes/Statistics/images/image 107.png]]

follows a t-distribution with n degrees of freedom.

T ~ t(n)

The t-distribution arises as the ratio of a standard normal variable and the square root of an independent chi-square variable divided by its degrees of freedom.

- **Shape Properties:**
• Symmetric around 0
    
    • Heavier tails than the normal distribution
    
    • Approaches N(0,1) as n → ∞
    
    • Smaller n → thicker tails (more uncertainty)
    
- **Probability Density Function :**
    
    The PDF depends on n (degrees of freedom) and involves the Gamma function.
    
    Its exact expression is more complex than the normal density.
    
    ![[notes/Statistics/images/image 108.png]]
    
- **Main Use:**
• Hypothesis testing for the mean when variance is unknown
    
    • Confidence intervals for the population mean
    
    • Small-sample inference
    

---

Student’s Theorem (Key Application)

Let X1, X2, ..., Xn be an i.i.d. sample from:

Xi ~ N(μ, σ²)

Define:

Sample mean:      X̄

Sample variance:  S² = (1 / (n − 1)) Σ (Xi − X̄)²

Then the statistic

![[notes/Statistics/images/image 109.png]]

follows a t-distribution with n − 1 degrees of freedom:

T ~ t(n − 1)

- **Why n − 1 degrees of freedom?**
Because one degree of freedom is lost when estimating the mean X̄.

---

When σ² is known → use Normal distribution.

When σ² is unknown → replace σ with S → extra variability appears → heavier tails → use t-distribution.

As n increases: 

S becomes a better estimator of σ

t-distribution converges to the standard normal distribution.

---

### F-Distribution (Fisher)

Let X and Y be independent random variables where

X ~ χ²(m)

Y ~ χ²(n)

Then the ratio

F = (X / m) / (Y / n)

follows an F-distribution with (m, n) degrees of freedom.

F ~ F(m, n)

- F ≥ 0 (only nonnegative values)
- Not symmetric (right-skewed)
- Shape depends on two parameters:
m → numerator degrees of freedom
    
    n → denominator degrees of freedom
    
- If W ~ F(m, n), then:
    
    1 / W ~ F(n, m)
    

---

PDF

![[notes/Statistics/images/image 110.png]]

---

- If X ~ χ²(1), then:
    
    (X / 1) / (Y / n) ~ F(1, n)
    
- The square root of F(1, n) follows a t-distribution:
    
    sqrt(F(1, n)) ~ t(n)
    
    This connects:
    χ² → F → t
    

---

Suppose we have two independent samples:

Sample 1:
X1, ..., Xm  from  N(μX, σX²)

Sample 2:
Y1, ..., Yn  from  N(μY, σY²)

Define sample variances:

S_X² = (1 / (m − 1)) Σ (Xi − X̄)²

S_Y² = (1 / (n − 1)) Σ (Yi − Ȳ)²

Then the ratio

S_X² / S_Y²

follows an F-distribution:

S_X² / S_Y² ~ F(m − 1, n − 1)

- Numerator degrees of freedom: m − 1
- Denominator degrees of freedom: n − 1

---

The Chi-square distribution is how we test the variance of one thing, the F-distribution is how we compare the variances of two different things to see if they are acting the same.

---

The Distribution Family

Normal → generates → χ²

χ² ratios → generate → F

Normal / sqrt(χ²) → generate → t

![[notes/Statistics/images/image 111.png]]

Together they form the backbone of classical statistical inference.

---