
Queries with constraints 

- `BETWEEN → checks if a number is within an inclusive range. 
	- Example: `SELECT * FROM table WHERE col_name BETWEEN 1.5 AND 10.5;`  
- ` IN ` → checks if a number matches any value in a list. 
	- Example: `col_name IN (2, 4, 6)`
- `LIKE` → Case insensitive exact string comparison.
	- Example `col_name LIKE "AGNEY"`  matches values exactly equal to `AGNEY` (no wildcards used, so behaves like `=` in most cases).  
- ` % ` → Used anywhere in a string to match a sequence of zero or more characters. Use only with LIKE or NOT LIKE.
	- Example : `col_name LIKE "%AG%"`  → matches any value that contains `AG` anywhere in the string.
- `_` → Used anywhere in a string to match a single character. Use only with LIKE or NOT LIKE.
	- Example : `col_name LIKE "AG_"`  (matches "AGN", but not "AG")

 Limiting results to a subset

- The `LIMIT` will reduce the number of rows to return, and the optional `OFFSET` will specify where to begin counting the number rows from.
	- Example : `SELECT title FROM movies
			  `ORDER BY title ASC  
			  `LIMIT 5 OFFSET 5;

String comparisons depend on the database + collation
- PostgreSQL: case-sensitive by default
- WHERE country = 'Germany' $\neq$ WHERE country = "Germany"
- MySQL: often case-insensitive (depends on collation like `utf8_general_ci`)
- SQLite: usually case-insensitive for ASCII unless configured

JOIN 
Using the `JOIN` clause in a query, we can combine row data across two separate tables using this _primary key_
The `INNER JOIN` is a process that matches rows from the first table and the second table which have the same key (as defined by the `ON` constraint) to create a result row with the combined columns from both tables. `INNER JOIN` is written simply as a `JOIN`
	Example : 
```sql
	SELECT title, domestic_sales, international_sales 
	FROM movies as m 
	INNER JOIN boxoffice as b  
    ON m.id = b.movie_id;
```

`LEFT JOIN` : Includes rows from A regardless of whether a matching row is found in B.

```sql
SELECT distinct building_name, role
FROM buildings b
left join employees e
on b.building_name = e.building
```

`RIGHT JOIN` : keeps rows in B regardless of whether a match is found in A. 

`FULL JOIN` : Rows from both tables are kept, regardless of whether a matching row exists in the other table.

