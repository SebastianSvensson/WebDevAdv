/*
-----------------------------------------------------------------------------------
3. HTTP Requests and SQL – Bridge between HTTP Requests and SQL, 
what are similar concepts and important 5p (written question)

HINT: Understand how HTTP requests (GET, POST, PUT, DELETE) 
map to SQL operations (SELECT, INSERT, UPDATE, DELETE). 
Know how to handle HTTP requests in a server (e.g., using Express.js) 
and how to interact with a database using SQL queries.
-----------------------------------------------------------------------------------
HTTP requests and SQL operations have similar purposes in their respective domains. 
Here's how they map to each other:

1. GET (HTTP) -> SELECT (SQL)
    * GET requests are used to retrieve data from a server.
    * SELECT queries are used to retrieve data from a database.

2. POST (HTTP) -> INSERT (SQL)
    * POST requests are used to send data to a server to create a new resource.
    * INSERT queries are used to add new records to a database.

3. PUT (HTTP) -> UPDATE (SQL)
    * PUT requests are used to update an existing resource on the server.
    * UPDATE queries are used to modify existing records in a database.

4. DELETE (HTTP) -> DELETE (SQL)
    * DELETE requests are used to remove a resource from the server.
    * DELETE queries are used to remove records from a database.
    
Example: Handling GET Request:

    const express = require('express');
    const app = express();
    const mysql = require('mysql');

    // Create a connection to the database
    const db = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'testdb'
    });

    // Connect to the database
    db.connect((err) => {
        if (err) throw err;
        console.log('Connected to database');
    });

    // Handle GET request to retrieve data
    app.get('/users', (req, res) => {
        const sql = 'SELECT * FROM users';
        db.query(sql, (err, results) => {
            if (err) throw err;
            res.json(results);
        });
    });

    app.listen(3000, () => {
        console.log('Server started on port 3000');
    });

Example: Handling POST Request

    app.use(express.json());

    app.post('/users', (req, res) => {
        const newUser = req.body;
        const sql = 'INSERT INTO users SET ?';
        db.query(sql, newUser, (err, result) => {
            if (err) throw err;
            res.json({ id: result.insertId, ...newUser });
        });
    });

Example: Handling PUT Request

    app.put('/users/:id', (req, res) => {
        const { id } = req.params;
        const updatedUser = req.body;
        const sql = 'UPDATE users SET ? WHERE id = ?';
        db.query(sql, [updatedUser, id], (err, result) => {
            if (err) throw err;
            res.json({ id, ...updatedUser });
        });
    });

Example: Handling DELETE Request

    app.delete('/users/:id', (req, res) => {
        const { id } = req.params;
        const sql = 'DELETE FROM users WHERE id = ?';
        db.query(sql, id, (err, result) => {
            if (err) throw err;
            res.json({ message: 'User deleted', id });
        });
    });


*/