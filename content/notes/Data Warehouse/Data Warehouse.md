A Data Warehouse is a subject-oriented, integrated, non-volatile, and time variant collection of data in support of managements decisions.
	**Subject-orientation:**  The purpose of the system is not the fulfillment of a single task (e.g., personnel data management), but the modeling of a specific application target.
	**Integrated database:**  Involves the processing of data from several different data sources (both internal and external).
	**Non-volatile database:**  Data in the Data Warehouse will not be removed or modified.
	**Time-variant data:**  Data is stored over a long time period and allows for the comparison of data over time (time series analysis).

A Data Warehouse (DW) is a centralized, massive repository designed specifically to support business intelligence, reporting, and data analysis. It pulls raw data from various operational systems across an organization, cleans it, and stores it in a uniform format

Use Cases :
- **Reporting and Dashboards:** Generating standardized, automated reports (daily, weekly, monthly) and visual dashboards to track Key Performance Indicators (KPIs) like revenue, expenses, and inventory levels.
- **OLAP :** Allowing analysts to perform multidimensional analysis. 
- **Data Mining & Predictive Analytics:** Using advanced algorithms to dig through the massive historical dataset to find hidden patterns, correlations, or anomalies that humans can't see, and using those to predict future trends.

**Distributed Database** A Distributed Database is a single logical database that is physically spread across multiple computers, servers, or geographic locations (nodes) connected by a network. Unlike a data warehouse, which focuses on analysis, a distributed database is typically operational (OLTP - Online Transaction Processing) and is highly Volatile. 

- **OLTP (Online Transaction Processing):** This is the system that _runs_ the daily business. It handles the constant, high-speed flow of everyday operational tasks.
- **OLAP (Online Analytical Processing):** This is the system that _analyzes_ the business. It allows managers and analysts to look at historical data to find trends and make strategic decisions.

Architecture and Components of Data Warehouse system.

![[notes/Data Warehouse/images/Pasted image 20260516175625.png]]

- **Data Flow (Solid lines):** The physical movement and transformation of business data.
- **Control Flow (Dashed lines):** The coordination, scheduling, and management signals.

**Data Procurement Area (ETL Process):**
- **Extraction:** Pulling from source systems.
- **Staging Area:** Temporary storage workspace.
- **Transformation:** Cleaning and integrating data.
- **Loading:** Moving processed data into the main database

- **Monitor:** Detects changes in source systems to trigger data pulls.
- **Data Warehouse Manager:** The central coordinator that schedules and commands the ETL and analysis tools.
- **Metadata Manager:** Manages the "Meta data" (data about the data). It tracks the origins, rules, formats, and history of all data flowing through the system.

Data Sources : The independent systems that supply raw data to the Data Warehouse.
Quality Requirements of Data Source
- **Consistency:** The data must not contradict itself.
	    _Example:_ If a customer's `Date_of_Birth` is 1990, but their `Calculated_Age` column says 85, the data is inconsistent.
- **Correctness:** The data must accurately reflect reality.
- **Completeness:** 
	    _Example:_ A dataset is incomplete if half the rows have blank spaces (NULL values) in the `Email_Address` column.
- **Accuracy and Granularity:**  _Accuracy_ refers to precision (e.g., storing a price as $19.99 instead of rounding to $20). _Granularity_ refers to the level of detail. Do you need sales data recorded by the hour, by the day, or by the month? Highly granular data (hourly) takes up a lot of space but allows for deeper analysis.

Data Warehouse Manager : The central control component of a DW system. It handles the initialization, control, and monitoring of all individual processes (flow control)
- **Extraction Initialization (Starting the ETL process):**
    - _Regular intervals:_ Scheduled batches (e.g., nightly, weekends).
    - _Event-driven:_ Triggered automatically when a source system is updated.
    - _Manual:_ Explicitly requested by an administrator        
- **Process Coordination:**
    - Monitors the data as it moves through cleaning, integration, and transformation.
- **Error Management:**
    - Responsible for documenting/logging any errors that occur during processing.
    - Executes restart mechanisms to recover from failures.
- **Metadata Integration:**
    - Accesses the metadata repository to control the overall process.
    - Reads the metadata to access the specific operational parameters for individual components.

Monitors : The detection of data manipulation (changes, inserts, deletes) in a data source so only the modified data is extracted.
Monitoring Strategies:
- **Trigger based:**  Automatically triggers (automated scripts) upon data updates to copy modified tuples (rows) to a separate area. 
- **Replication based:**  Leverages the database's built-in replication mechanisms to transfer the modified data.
- **Log based:**  Analyzes the underlying DBMS transaction log files to detect updates without querying the live tables.
- **Timestamp based:**  Identifies modifications by comparing timestamps against the time of the last extraction.
- **Snapshot based:**  Periodically copies the entire dataset to a file (a snapshot). Compares the current snapshot against the previous snapshot to identify differences.

**The Staging Area**
- The central data storage component within the data acquisition (ETL) area.
    - Serves as a **temporary buffer** for data integration.    
    - **Execution of transformations:** All cleaning, standardizing, and integration tasks are performed directly on the data while it is in the staging area.
    - **Gatekeeper:** Transformed data is only loaded into the final Data Warehouse (or base database) _after_ the successful completion of all transformation rules.
    - **Decoupled system:** It operates independently from both the source databases and the target DW.
    - **Data Protection:** Ensures that no erroneous, corrupted, or incomplete data is accidentally transferred into the live Data Warehouse.

Extract, Transform, Load :
	Extraction: It simply securely transfers raw data from the origin (Source Systems) to the destination (Staging Area).
		The extraction component isn't intelligent on its own; it takes its orders from the Data Warehouse Manager and relies on the **Monitoring Strategy**
			- _Periodic:_ Scheduled batch runs (e.g., nightly).
			- _On query:_ Manual, on-demand extraction requests.
			- _Event-driven:_ Triggered automatically when a specific condition is met (e.g., after 5,000 new updates).
			- _Immediate:_ Real-time extraction the moment data changes in the source.
		Technical Implementation :
		Because the source systems are highly heterogeneous (different brands, different structures), you don't want to write custom extraction code for every single database. Instead, the component uses standard, universal protocols like **ODBC** (Open Database Connectivity) or JDBC.
		Type of Data :
			**Snapshots (The Whole Picture):** The source just hands over its entire current database. If you have 10,000 products, it gives you a list of all 10,000, even if only 2 changed prices.
			**Logs:** The source system provides its internal transaction log file. This shows _every single action_ that happened.
			**Net Logs :** The source system calculates the net difference (the delta) and just hands that over. (e.g., "The price started at $4 today and ended at $7. Here is the net update.").
	Transformation: Modifying and cleaning raw data in the staging area before it enters the warehouse.
		Standardizing data types, dates, measurement units, and text encodings across all integrated data.
		Actively fixing or deleting incorrect values, missing values (NULLs), exact redundancies, and obsolete information.
		**Data Scrubbing:**  Uses _domain-specific knowledge_ (business rules) to intelligently detect impurities. (e.g., "Age must be > 0").
		**Data Auditing:** Uses _data mining methods_ on the dataset as a whole to uncover hidden patterns. Focuses on the detection of statistical deviations and anomalies (flagging outliers that might indicate bad data).
	Loading:  
		Transfer the newly cleaned and processed data out of the temporary staging area and into the Data Warehouse.
		Bulk Loading : The loading component uses specialized, high-speed tools (like Oracle's `SQL*Loader`) to inject massive blocks of data into the warehouse simultaneously.
		

Moving massive amounts of data can lock up databases so users can't query them. The ETL process must be incredibly efficient to keep these "down times" as short as possible.
Main problem with ETL is semantics ("fuzzy" or unknown meaning)

The Base Database acts as a purely **integrated database**. It holds all the freshly cleaned data from the staging area in its most detailed, granular form. It feeds the smaller, downstream Data Warehouses/Marts with this clean data, often summarizing (aggregating) it specifically for whatever that downstream system needs during the transfer.
The **Base Database** is basically an **ODS (Operational Data Store)** in Inmon’s terminology.
An **ODS** is a database that takes data from several operational/source systems, **cleans and integrates it**, and stores a consistent, usually fairly detailed/current version of the data before it is shaped for warehouse analysis.
 Building a massive ODS _and_ separate Data Warehouses is incredibly expensive and time-consuming. Many modern companies skip the dedicated Base Database entirely.


The **Data Warehouse**, on the other hand, is specifically structured for **analysis**. Its structure is specifically designed for analysis rather than day-to-day transactional processing.

A company's DW might contain:

```
Sales
Customers
Products
Locations
Marketing
Time
Inventory
```

and allow all of these to be analysed together.

---
### Analysis Tools

Analysis tools are the **user-facing software layer** of a Data Warehouse system. They allow users to **access, explore, analyze, and present data stored in the Data Warehouse**.
Typical tools include **Business Intelligence (BI) tools, OLAP front ends, dashboards, reporting tools, and data-mining tools**.
Presentation of collected data with interactive navigation and analysis options, users should not just see a static table they should be able to interact with the data.

- Support for OLAP operations such as:
	- **Drill-down** – move to more detailed data.
	- **Roll-up** – move to more aggregated data.
	- **Slice** – select one specific value of a dimension.
	- **Dice** – select a subset across several dimensions.
	- **Filtering and sorting**.

- **Analysis of data**, ranging from simple operations such as:
    - SUM
    - COUNT
    - AVG
    - aggregation  
        to more complex statistical analysis and **data mining**.

- **Preparation of analysis results** for:
    - reports
    - dashboards
    - exports
    - further processing
    - distribution to users or other systems.


Data Warehouse
   ↓
Analysis Tools
   ↓
OLAP / Dashboards / Reports / Data Mining

The **Data Warehouse stores and organizes the analytical data**, while **analysis tools allow users to work with that data and obtain useful information from it**.

Analysis tools can be divided into **three levels of increasing complexity**

| Level           | Main purpose                          | Typical operations                            |
| --------------- | ------------------------------------- | --------------------------------------------- |
| **Data Access** | Retrieve and present data             | SQL, reports, simple calculations             |
| **OLAP**        | Interactive multidimensional analysis | drill-down, roll-up, aggregation, slice/dice  |
| **Data Mining** | Discover unknown patterns             | classification, association rules, clustering |

#### Data Access
Data access : is the simplest analytical level. It is the reporting tools that read data, perform simple arithmetic enrichment (SUM,AVG,COUNT), present it as reports, possibly use rule-based formatting and are fundamentally based on SQL.
```
SELECT SUM(revenue)
FROM Sales
WHERE year = 2025;
```
The user already knows **what information they want**

#### OLAP
OLAP is more interactive. OLAP provides **interactive multidimensional analysis** of Data Warehouse data, allows users to **analyze data interactively from different dimensions and levels of detail.** 

Instead of looking at only a fixed report, users can navigate through dimensions such as:

```
Time
Product
Region
Customer
```

and analyze measures such as:

```
Revenue
Profit
Quantity
Cost
```

- Interactive data analysis
	The user can dynamically change the perspective.

For example:

```text
Revenue by Year
       ↓
Revenue by Quarter
       ↓
Revenue by Month
```

or:

```text
Revenue by Country
       ↓
Revenue by City
       ↓
Revenue by Branch
```


OLAP commonly works with **aggregated characteristic numbers / measures**.

```text
Individual sales transactions
        ↓ SUM
Monthly revenue
        ↓ SUM
Quarterly revenue
        ↓ SUM
Yearly revenue
```

OLAP navigation operations

Important operations include:
- **Drill-down**
	Move from general data to more detailed data.

```text
Year
 ↓
Quarter
 ↓
Month
 ↓
Day
```

- **Roll-up**
	The opposite of drill-down.
	Move from detailed data to more aggregated data.

```text
Day
 ↓
Month
 ↓
Quarter
 ↓
Year
```

- **Drill-across**
	Compare or navigate across related facts or analysis areas that share common dimensions.

```text
Sales revenue
vs.
Shipping cost
```

```text
Product × Month × Region
```

So you can compare different measures using compatible dimensions.

OLAP can also support:
- Slice
- Dice
- Pivot
- Grouping
- Statistical calculations
- Business calculations

OLAP is often used when the analyst already has an idea they want to check.

For example:
> “Sales in the southern region were lower in Q2.”

The analyst can navigate through the cube and verify whether this is true. So OLAP is often **hypothesis-driven**.

A plausibility check asks:
> “Does this result make sense?”

For example:
```text
Average monthly revenue = €20 million
```
but the company normally earns:
```text
€500,000 per month
```

That result may indicate:
- duplicated records
- incorrect aggregation
- wrong filter
- ETL error

So plausibility checking helps detect suspicious results.

> **OLAP = interactively explore, aggregate, compare, and navigate through multidimensional data.**

#### Data Mining
Data mining is the **most advanced level**.

Its purpose is to discover:
> **previously unknown patterns, relationships, rules, or structures in data.**

Unlike OLAP, the analyst does not necessarily know beforehand what they are looking for.

Typical methods include:
- classification
- association rules
- clustering

Association Rules
Association-rule mining discovers relationships of the form:

```text
If X happens,
Y often happens as well.
```

Conceptually:

```text
X → Y
```

It looks for items or events that frequently occur together.

The goal is to discover **relationships that were not explicitly specified beforehand**.

Clustering means:

> Grouping similar data objects according to their characteristics.

The algorithm discovers the groups itself.

```text
Customers
   ↓
Clustering
   ↓
Cluster A
Cluster B
Cluster C
```

The groups may be based on characteristics such as:

```text
spending
purchase frequency
product preferences
location
```



![[Pasted image 20260919170022.png]]

Realization
Realization describes the type of software used to provide these functions, such as reporting tools, analysis clients, spreadsheet add-ins, or development environments. One realization can support more than one functionality level.

| Type                         | Main purpose                                 |
| ---------------------------- | -------------------------------------------- |
| **Standard reporting**       | Predefined recurring reports                 |
| **Report tools**             | Design and present reports                   |
| **Ad-hoc query/reporting**   | Create flexible reports on demand            |
| **Analysis clients**         | Interactive OLAP / multidimensional analysis |
| **Spreadsheet add-ins**      | Analyze DW data inside spreadsheets          |
| **Development environments** | Build custom analytical applications         |

---
### Repository

The **repository** is a storage area for **Data Warehouse metadata**.

>Metadata means **data about the DW system and its data**.

```
Database schemas
Table definitions
Column definitions
Access rights
ETL rules
Source-to-target mappings
Processing steps
Process parameters
```

For example, the actual DW may contain:

```
Revenue = €12,500
```

while the repository could contain:

```
Attribute: Revenue
Type: DECIMAL
Currency: EUR
Source: Orders.total_amount
Loaded by: Sales_ETL
Access: Finance, Management
```


---
### Metadata Manager
The **Metadata Manager** is the component that controls and works with the metadata stored in the repository.

Metadata management control : It manages the creation, modification, deletion, and consistency of metadata.

Access, query, navigation : Users or other DW components need to be able to search and inspect metadata.

Metadata can change over time.

```
Version 1:
	Customer table
		- ID
		- Name
		- Country

Version 2:
	Customer table
		- ID
		- Name
		- Country
		- Customer_Segment
```

The Metadata Manager keeps track of such versions.

It can also manage configurations such as:
```
ETL job frequency
Connection information
Transformation rules
Schema versions
```

|Component|Main purpose|Example|
|---|---|---|
|**Metadata Repository**|Stores DW metadata|schemas, access rights, ETL/process steps, parameters|
|**Metadata Manager**|Controls and works with the stored metadata|query metadata, navigate it, update versions, manage configurations|

---