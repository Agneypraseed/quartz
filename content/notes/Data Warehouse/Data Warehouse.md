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

![[Pasted image 20260516175625.png]]

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
		- **Data Auditing:** Uses _data mining methods_ on the dataset as a whole to uncover hidden patterns. Focuses on the detection of statistical deviations and anomalies (flagging outliers that might indicate bad data).
	Loading:  
		Transfer the newly cleaned and processed data out of the temporary staging area and into the Data Warehouse.
		Bulk Loading : The loading component uses specialized, high-speed tools (like Oracle's `SQL*Loader`) to inject massive blocks of data into the warehouse simultaneously.
		

Moving massive amounts of data can lock up databases so users can't query them. The ETL process must be incredibly efficient to keep these "down times" as short as possible.
Main problem with ETL is semantics ("fuzzy" or unknown meaning)

The Base Database acts as a purely **integrated database**. It holds all the freshly cleaned data from the staging area in its most detailed, granular form. It feeds the smaller, downstream Data Warehouses/Marts with this clean data, often summarizing (aggregating) it specifically for whatever that downstream system needs during the transfer. Building a massive ODS _and_ separate Data Warehouses is incredibly expensive and time-consuming. Many modern companies skip the dedicated Base Database entirely.

_Multidimensional Data Models:_ Instead of storing data in highly normalized, fragmented tables (which requires slow "joins" to read), it stores data in "multidimensional" structures (often visualized as OLAP cubes)

Data Mart
A Data Mart is a focused subset of a Data Warehouse designed to serve a specific department, team, or business line (e.g., a Sales Data Mart, a Finance Data Mart, or an HR Data Mart).


Multidimensional Data Model

A way of structuring data that mirrors how business managers think about their data, as a set of metrics (facts) analyzed across different perspectives (dimensions).

- **Qualifying Information:** Provides the **descriptive context** or the "perspectives" of the business. It answers qualitative questions such as _who, what, where, when, and why_. Forms the **edges and axes** of the data cube. It defines the coordinates of the multi-dimensional space. Example : `Product_Category = 'Electronics'`, `Region = 'Hesse'`. 
- **Quantifying Information:** Provides the **numeric metrics** or the subjects of evaluation. It answers quantitative questions such as _how much, how many, or how long_. Populates the individual **cells** inside the data cube. Example : `Revenue = 45000.00`, `Units_Sold = 150`

One way to tell the difference is to ask: **"Does it make sense to add these numbers together?"**
- **Quantifying Data (Unit Sales):** If you sold 50 policies in Region A and 100 policies in Region B, you can add them together ($50 + 100 = 150$). That math makes total sense. Therefore, Unit Sales is **quantifying**.
- **Qualifying Data (Year):** If you take the year 2018 and add it to the year 2019 ($2018 + 2019 = 4037$), that number is completely meaningless nonsense. Because you cannot mathematically aggregate years, the year is a **qualifying category attribute**.

Basic concepts of the multidimensional data model:
- Dimensions : The structural **edges or coordinate axes** of the multidimensional data space. To ensure clean "slicing and dicing," dimensions must be strictly **orthogonal** (completely independent of one another).

**Orthogonality** is defined as the absolute functional and logical independence of all dimensions. A schema satisfies the rule of orthogonality if there are **no functional dependencies between attributes of different dimensions**

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