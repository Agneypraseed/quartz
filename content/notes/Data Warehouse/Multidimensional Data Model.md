
Multidimensional Data Models : Instead of storing data in highly normalized, fragmented tables (which requires slow "joins" to read), it stores data in "multidimensional" structures (often visualized as OLAP cubes)

Data Mart
A Data Mart is a focused subset of a Data Warehouse designed to serve a specific department, team, or business line (e.g., a Sales Data Mart, a Finance Data Mart, or an HR Data Mart). 
Its task is to provide a **content-limited view of the DW** for reasons include autonomy, data protection, load balancing and reducing the amount of data handled

              DATA WAREHOUSE
        ┌──────────┼──────────┐
        ↓          ↓          ↓
      Sales      HR        Finance
     Data Mart  Data Mart   Data Mart

A Finance department may not need individual sales-customer browsing data, while Marketing may not need payroll information.

A Data Mart gives a department **only the part relevant to it**

Dependent Data Mart : A **dependent Data Mart obtains its data from an existing central Data Warehouse**.

This means the data has already gone through global:

```
integration
+
cleaning
+
transformation
```

before the Data Mart is created.

Dependent Data Mart can be seen as a **hub-and-spoke architecture**:

![[Pasted image 20260919124917.png]]

The **DW is the hub**, while the Data Marts are the spokes.

A dependent Data Mart is only an extract, possibly including aggregation, of the Data Warehouse. It performs no new cleaning or normalization, and therefore analysis on the Data Mart remains consistent with analysis on the central DW

Different kinds of dependent Data Mart extracts : 

A **structural extract** restricts which parts of the schema are included. For example, only `Revenue`, `Product`, and `Time`.

A **content extract** restricts which rows/data values are included. For example, only branches in Germany.

An **aggregated extract** reduces granularity. For example, instead of storing daily sales:

```
01 Jan → 100
02 Jan → 120
03 Jan → 95
...
```

the Data Mart may only contain:

```
January → 3,400
February → 3,720
...
```

Independent Data Mart : An **independent Data Mart is created separately rather than being derived from the central Data Warehouse**.

Data marts that are independently created as **"small" Data Warehouses**, often created by individual organizational units, with **no central base database**.
![[Pasted image 20260919163046.png]]

This gives departments autonomy, but later integration and transformation become difficult and analysis consistency can become a problem
Ex : Marketing defines "active customer" = purchased during last 12 months
	Sales defines "active customer" = purchased during last 6 months
Both departments may have valid local systems, but if the company later tries to combine them, the meaning of **active customer** conflicts.

----
Multidimensional Data Model

2 dimensions → table
3 dimensions → cube
3 dimensions → hypercube


A way of structuring data that mirrors how business managers think about their data, as a set of metrics (facts) analyzed across different perspectives (dimensions).

- **Qualifying Information:** Provides the **descriptive context** or the "perspectives" of the business. It answers qualitative questions such as _who, what, where, when, and why_. Forms the **edges and axes** of the data cube. It defines the coordinates of the multi-dimensional space. Example : `Product_Category = 'Electronics'`, `Region = 'Hesse'`. 
- **Quantifying Information:** Provides the **numeric metrics** or the subjects of evaluation. It answers quantitative questions such as _how much, how many, or how long_. Populates the individual **cells** inside the data cube. Example : `Revenue = 45000.00`, `Units_Sold = 150`

One way to tell the difference is to ask: **"Does it make sense to add these numbers together?"**
- **Quantifying Data (Unit Sales):** If you sold 50 policies in Region A and 100 policies in Region B, you can add them together ($50 + 100 = 150$). That math makes total sense. Therefore, Unit Sales is **quantifying**.
- **Qualifying Data (Year):** If you take the year 2018 and add it to the year 2019 ($2018 + 2019 = 4037$), that number is completely meaningless nonsense. Because you cannot mathematically aggregate years, the year is a **qualifying category attribute**.


Basic concepts of the multidimensional data model:

![[Pasted image 20260919190501.png]]

Dimensions : A **dimension** represents one perspective from which a characteristic number is analysed. It consists of dimension elements/hierarchy objects and is used to structure the data space.

Revenue
   │
   ├── viewed by TIME
   ├── viewed by PRODUCT
   └── viewed by REGION

The structural **edges or coordinate axes** of the multidimensional data space. To ensure clean "slicing and dicing," dimensions must be strictly **orthogonal** (completely independent of one another).

**Orthogonality** is defined as the absolute functional and logical independence of all dimensions. A schema satisfies the rule of orthogonality if there are **no functional dependencies between attributes of different dimensions**

Category attribute 
Category attributes are the attributes used to organize and navigate a dimension.

Ex : In a time dimension

```
Year
Quarter
Month
Day
```

A dimensional attribute gives extra descriptive information but does not normally define another aggregation level (You normally do not have a hierarchy). 

Customer
   │
   ├── Address
   └── Phone

Classification hierarchy : Gives a path from detailed data to increasingly aggregated data.
A **dimension hierarchy** organizes dimension data from **detailed levels to increasingly aggregated levels**. An individual item is the **finest level**, while `Top` is the most aggregated level.

Day          → very detailed
Month     → more aggregated
Quarter   → more aggregated
Year         → highly aggregated
Top          → everything

A simple hierarchy has one consolidation path.
![[Pasted image 20260919195417.png|328]]


Parallel hierarchies : A **parallel hierarchy** exists when the **same dimension can be grouped in multiple independent ways**.

![[Pasted image 20260919195839.png]]

A **classification level** simply represents one level of aggregation in a hierarchy. Higher levels contain increasingly aggregated information.

Classification hierarchy = whole path 
Classification level = one particular level on that path

A **consolidation path** is a path through the classification schema. 

Formal definition of the classification schema of a dimension  : A classification schema of a dimension is a partially ordered set of category attributes connected by functional dependencies, with a common maximum element TopDTop_D and exactly one finest category attribute that functionally determines all other category attributes.

- The **primary attribute** is the attribute at the **finest possible granularity** of the dimension. 

- Classification attributes form the actual **hierarchy used for aggregation/navigation**.

	Classification attributes are the levels used for things such as:
	- drill-down
	- roll-up
	- aggregation
	- grouping

A **characteristic number** is a numerical measured value describing a business issue such as:

```
Revenue
Profit
Loss
Contribution margin
Quantity sold
Cost
```

Fact = base characteristic number stored or observed at the finest level.

Ex : for one order

```
Order O101
Quantity = 2
Unit price = €500
Cost = €700
```

These are base values from which other measures may be calculated.

A characteristic number can also be **constructed from facts using arithmetic operations**.

```
Quantity = 10
Price    = €20
```

Revenue= Quantity×Price 
Revenue=10×20=€200 => derived value

---

Granularity defines what one individual fact/cube cell refers to.
Granularity G={G1,…,Gk} specifies the degree of detail of a fact. Each granularity attribute belongs to a dimension schema, and no selected granularity attribute should functionally determine another, to avoid redundant hierarchy levels.

A characteristic number M is defined by its granularity G, a calculation function f over one or more facts, and a summation type. The calculation function can be scalar, aggregate, or order-based. Scalar functions calculate values within a fact, aggregate functions summarize several facts, and order-based functions depend on the ordering or ranking of facts.

---
Summation Types

A **flow** measures something that occurs **during a period of time**. FLOW values can generally be summed across all relevant dimensions.

A **stock** describes the amount that exists **at a specific point in time**. STOCK cannot normally be summed across the time dimension.

Suppose inventory is:

```
Monday    100 laptops
Tuesday    90 laptops
Wednesday  80 laptops
```

You must **not** calculate:
100+90+80=270
because these are snapshots of the **same inventory at different times**.

VALUE-PER-UNIT — VPU

A VPU is a **rate, ratio, price, percentage, or value per unit**.

Examples:

- exchange rate
- tax rate
- average price
- percentage
- interest rate

Suppose:

```
January exchange rate = 1.10
February exchange rate = 1.08
```

It makes no sense to say:
1.10+1.08=2.18
So these values generally **cannot be summed**.

Instead, meaningful operations may include:

```
AVG()
MIN()
MAX()
```

The finer categories must be disjoint. One concrete fact must belong to exactly one child category when calculating the parent total.
Disjoint = every fact goes into the total exactly once, not twice.

Completeness means the child categories together contain everything in the parent category.

---
Formal definition of a multidimensional data cube

$C=(DS,M)$

where

$DS={D_1,\ldots,D_n}$

is the set of **dimension schemas**, and

$M={M_1,\ldots,M_m}$

is the set of **characteristic numbers (measures)**.

Therefore,

$\boxed{C=(DS,M)=\left({D_1,\ldots,D_n},{M_1,\ldots,M_m}\right)}$

A cube is the basic structure for **multidimensional analysis**. Its **dimensions** are the axes, and its **cells** contain one or more characteristic numbers/measures.

Orthogonality requires dimensions to be independent, meaning that functional dependencies may exist within a dimension hierarchy but not between attributes of different dimensions.

---
Once the data cube is built, we need operations to navigate through the data space. These are standard **OLAP (Online Analytical Processing) operations**. They allow a user to dynamically change their view of the data without rewriting complex backend SQL queries.
- Pivot (Rotate) : **Rotates the data axes** to view the data from a different geometric perspective. 
- **Roll-Up (Aggregation):** This moves **up** the hierarchy to a coarser, less detailed level. It combines (aggregates) data cells together.
    - _Example:_ Changing your report view from tracking sales by individual `Cities` to tracking total sales by `Countries`.
- **Drill-Down (De-aggregation):** This moves **down** the hierarchy to a finer, more granular level. It breaks a big summary number apart into its individual sub-components.
    - _Example:_ Clicking on the year `2026` to expand it and reveal individual sales metrics for `Q1`, `Q2`, `Q3`, and `Q4`.
- **Slice:** This takes a **single coordinate** on one dimension and cuts out a flat, 2-dimensional sub-table. The result is always a flat 2D plane.
    - _Example:_ Filtering the entire cube to look _only_ at data where $\text{Time} = \text{'2026'}$. You are left with a flat "slice" of all products across all regions for just that year.
- **Dice:** This selects a **sub-cube** by filtering multiple dimensions simultaneously using specific ranges or sets. The result maintains its multi-dimensional coordinate depth, carving out a mini-cube.
    - _Example:_ Filtering the cube to look at $(\text{Time} \in \{\text{'2025'}, \text{'2026'}\}) \text{ AND } (\text{Location} = \text{'Germany'}) \text{ AND } (\text{Product} = \text{'Smartphones'})$. You have extracted a smaller mini-cube out of the giant main cube.
- Drill-Across (Cross-Cube Navigation) : This operation allows you to **link multiple independent data cubes** together, provided they share at least one common dimension at the exact same granularity.
	- _Example_ : If you have a `Sales Cube` and a separate `Inventory Cube`, and both share an identical `Product` dimension, you can drill-across from your sales report to immediately check current warehouse stock levels for those exact same items.

---
A **data model** is the general set of concepts/rules used to describe data. It tells us _how_ data may be structured, related, and constrained.

Relational data model
→ relations/tables, attributes, keys

Multidimensional data model
→ dimensions, hierarchies, facts,
  characteristic numbers, cubes

Conceptual design → application-level information structure 
Logical design → formal schema 
Physical design → storage/access implementation

E/R is a general-purpose conceptual model based on entities, relationships and attributes. mE/R extends the E/R idea specifically for multidimensional analysis by explicitly distinguishing fact relationships, characteristic numbers and classification levels connected by roll-up relationships.


E/R                  → classical conceptual
mE/R                 → multidimensional conceptual
mUML                 → multidimensional conceptual

Relational Model     → classical logical
Data Cube            → multidimensional logical
Classification Hier. → multidimensional logical

ROLAP                → multidimensional physical/internal
MOLAP                → multidimensional physical/internal

A star schema is denormalized and has **exactly one dimension table for each dimension**.

Snowflake schema normalizes the hierarchy, it preserves 3rd normal form and uses a **separate table for each classification level**. Each level contains its ID and a foreign key to the next higher level.