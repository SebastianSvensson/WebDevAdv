/*
----------------------------------------------------
1. SQL – 4p (written question)
HINT: Understand the basics of SQL queries, including SELECT, INSERT, UPDATE, and DELETE statements. 
Be familiar with filtering using WHERE, sorting using ORDER BY, and joining tables using JOIN.
----------------------------------------------------

1. SQL

1. SELECT Statement
The SELECT statement is used to retrieve data from a database.

Example: Retrieve all columns from the stores table.
    * SELECT * FROM stores;

Example: Retrieve specific columns (name and district) from the stores table.
    * SELECT name, district FROM stores;

2. INSERT Statement
The INSERT statement is used to add new rows to a table.

Example: Insert a new store into the stores table.
    * INSERT INTO stores (name, url, district) VALUES ('New Store', 'newstore.com', 'Atollen');

3. UPDATE Statement
The UPDATE statement is used to modify existing rows in a table.

Example: Update the URL of a store in the stores table.
    * UPDATE stores SET url = 'updatedstore.com' WHERE name = 'New Store';

4. DELETE Statement
The DELETE statement is used to remove rows from a table.

Example: Delete a store from the stores table.
    * DELETE FROM stores WHERE name = 'New Store';

5. Filtering Using WHERE
The WHERE clause is used to filter records based on specific conditions.

Example: Retrieve stores located in the "Atollen" district.
    * SELECT * FROM stores WHERE district = 'Atollen';

6. Sorting Using ORDER BY
The ORDER BY clause is used to sort the result set by one or more columns.

Example: Retrieve all stores sorted by name in ascending order.
    * SELECT * FROM stores ORDER BY name ASC;

Example: Retrieve all stores sorted by district in descending order.
    * SELECT * FROM stores ORDER BY district DESC;

7. Joining Tables Using JOIN
The JOIN clause is used to combine rows from two or more tables based on a related column between them.

Example: Assume we have another table called owners with columns store_id and owner_name. Retrieve the store names along with their owners.
    * SELECT stores.name, owners.owner_name
      FROM stores
      JOIN owners ON stores.id = owners.store_id;

Summary
Understanding these basic SQL operations is crucial for working with databases. Here is a summary of the key points:

SELECT: Retrieve data from a table.
INSERT: Add new rows to a table.
UPDATE: Modify existing rows in a table.
DELETE: Remove rows from a table.
WHERE: Filter records based on specific conditions.
ORDER BY: Sort the result set by one or more columns.
JOIN: Combine rows from two or more tables based on a related column.
*/