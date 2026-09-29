Relational storage implements star or snowflake schemas as relational tables. The main challenges are very large fact tables, which are handled with partitioning; multidimensional query patterns, which require suitable clustering/index structures; and DW update behavior, which is typically append-oriented because historical data is preserved.

Multidimensional storage stores analytical data directly in multidimensional structures, often array-like cubes. Dimensions act as coordinates used to address cube cells, so their order must be defined. Because these structures are optimized for OLAP rather than general relational processing, implementations are often specialized or proprietary.

