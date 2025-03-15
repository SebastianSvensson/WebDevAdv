/*
FRÅGOR------------
1. SQL – 4p (written question)
HINT: Understand the basics of SQL queries, including SELECT, INSERT, UPDATE, and DELETE statements. 
Be familiar with filtering using WHERE, sorting using ORDER BY, and joining tables using JOIN.

2. Mixed Question – About JavaScript in General - Languages 3p (true/false)
HINT: Review general JavaScript concepts, such as variable declarations (var, let, const), data types, functions, scope, and closures. 
Understand the differences between JavaScript and other programming languages.

3. HTTP Requests and SQL – Bridge between HTTP Requests and SQL, what are similar concepts and important 5p (written question)
HINT: Understand how HTTP requests (GET, POST, PUT, DELETE) map to SQL operations (SELECT, INSERT, UPDATE, DELETE). 
Know how to handle HTTP requests in a server (e.g., using Express.js) and how to interact with a database using SQL queries.

4. URL – Gives a lot of points – learn everything 8p
HINT: Learn the structure of a URL, including the scheme (protocol), host (domain), port, path, query parameters, and fragment. 
Understand how to construct and parse URLs.

5. Cookies - how they are transmitted, where they are created 4p (true/false)
HINT: Understand how cookies are created (using document.cookie in JavaScript or Set-Cookie header in HTTP response), 
how they are transmitted between the client and server, and their properties (e.g., expires, path, domain, secure, HttpOnly).

6. HTTP Messages – how does it look like, parts does it have where the different things it addresses, properties important … 1p
HINT: Know the structure of HTTP messages, including request messages (method, URL, headers, body) and response messages (status code, headers, body). 
Understand common HTTP headers and status codes.

7. NoSQL Databases – Simple one 4p (written question)
HINT: Understand the basics of NoSQL databases, including key-value stores, document stores, column-family stores, and graph databases. 
Know the differences between NoSQL and SQL databases and when to use each type.

8. Cookies 2 – Cookies important to understand, how they go back and forth etc 3p (fill in stuff)
HINT: Review how cookies are set by the server and sent back to the server with each request. 
Understand the lifecycle of a cookie and how to manage cookies in the browser.

9. Event Propagation – How does an event work, how does the browser engine identify what you’re clicking on js how does an event gets into the growers, 
how the browser engine can identify what you clicking on and its important to understand how it works in browser 3p (fill in stuff)
HINT: Understand event propagation in JavaScript, including event capturing, event bubbling, and event delegation. 
Know how to use event listeners and how the browser handles events.

10. Javascript – General question – 8 points (true/false)
HINT: Review general JavaScript concepts, including syntax, data types, control structures, functions, objects, arrays, and the DOM. 
Be familiar with ES6 features like arrow functions, template literals, and destructuring.

11. Virtualization and Containers – What’s the differences and concepts 6p (true/false)
HINT: Understand the differences between virtualization and containerization. Know the benefits and use cases of virtual machines (VMs) and containers (e.g., Docker). 
Be familiar with concepts like hypervisors, container runtimes, and orchestration tools (e.g., Kubernetes).
Coding

12. Arrays JavaScript decide what happens there 5p
HINT: Be comfortable with array operations in JavaScript, such as adding/removing elements, iterating over arrays, and using array methods like map, filter, reduce, forEach, push, pop, shift, and unshift.

13. JavaScript DOM – Get things out from the DOM (how to operate it 6p
HINT: Know how to manipulate the DOM using JavaScript. Be familiar with methods like getElementById, querySelector, querySelectorAll, createElement, appendChild, removeChild, and modifying element attributes and styles.

14. Routes – How can I define Routes, get parameters, process… How can I create functionality? Responses, how? how to define routes, how to get parameters, process and how to create functionality with routes 12p
HINT: Understand how to define routes in a web server (e.g., using Express.js). Know how to handle route parameters, query parameters, and request bodies. Be familiar with sending responses and handling different HTTP methods.

15.JavaScript Code – Given code and then explain what happens with it. 4p
Hint: Practice reading and understanding JavaScript code. Be able to explain what the code does, identify any issues, and describe the flow of execution.
Grades
3: 50%
4: 70%
5: 90%
*/

/*
1. SQL

1. SELECT Statement
The SELECT statement is used to retrieve data from a database.

Example: Retrieve all columns from the stores table.
SELECT * FROM stores;

Example: Retrieve specific columns (name and district) from the stores table.
SELECT name, district FROM stores;

2. INSERT Statement
The INSERT statement is used to add new rows to a table.

Example: Insert a new store into the stores table.
INSERT INTO stores (name, url, district) VALUES ('New Store', 'newstore.com', 'Atollen');

3. UPDATE Statement
The UPDATE statement is used to modify existing rows in a table.

Example: Update the URL of a store in the stores table.
UPDATE stores SET url = 'updatedstore.com' WHERE name = 'New Store';

4. DELETE Statement
The DELETE statement is used to remove rows from a table.

Example: Delete a store from the stores table.
DELETE FROM stores WHERE name = 'New Store';

5. Filtering Using WHERE
The WHERE clause is used to filter records based on specific conditions.

Example: Retrieve stores located in the "Atollen" district.
SELECT * FROM stores WHERE district = 'Atollen';

6. Sorting Using ORDER BY
The ORDER BY clause is used to sort the result set by one or more columns.

Example: Retrieve all stores sorted by name in ascending order.
SELECT * FROM stores ORDER BY name ASC;

Example: Retrieve all stores sorted by district in descending order.
SELECT * FROM stores ORDER BY district DESC;

7. Joining Tables Using JOIN
The JOIN clause is used to combine rows from two or more tables based on a related column between them.

Example: Assume we have another table called owners with columns store_id and owner_name. Retrieve the store names along with their owners.
SELECT stores.name, owners.owner_name
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