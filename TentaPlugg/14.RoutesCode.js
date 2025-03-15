/*
-----------------------------------------------------------------------------------------------
14. Routes – How can I define Routes, get parameters, process… How can I create functionality? 
Responses, how? how to define routes, how to get parameters, process and how to create 
functionality with routes 12p
HINT: Understand how to define routes in a web server (e.g., using Express.js). 
Know how to handle route parameters, query parameters, and request bodies. 
Be familiar with sending responses and handling different HTTP methods.
-----------------------------------------------------------------------------------------------

*Setting Up Express.js*

    Express.js is a popular web framework for Node.js that simplifies the process of 
    creating web servers and handling routes.

    Example:
*/

    const express = require('express');
    const app = express();
    const port = 3000;

    // Middleware to parse JSON request bodies
    app.use(express.json());

/*
----------------------------------------------------
*Defining Routes*

    Routes define the endpoints of your web server and specify how to 
    handle requests to those endpoints.

    Example:
*/

    // Define a simple route
    app.get('/', (req, res) => {
        res.send('Hello, World!');
    });

/*
---------------------------------------------------------
*Handling Route Parameters*

    Route parameters are dynamic segments of the URL that can be accessed in the request object.

    Example:
*/

    app.get('/users/:userId', (req, res) => {
        const userId = req.params.userId;
        res.send(`User ID: ${userId}`);
    });

/*
-----------------------------------------------------------
*Handling Query Parameters*

    Query parameters are key-value pairs that appear after the `?` in a URL. 
    They can be accessed in the request object.

    Example:
*/

    app.get('/search', (req, res) => {
        const query = req.query.q;
        res.send(`Search query: ${query}`);
    });

/*
------------------------------------------------------------
*Handling Request Bodies*

    Request bodies contain data sent by the client in POST, PUT, or PATCH requests. 
    They can be accessed in the request object.

    Example:
*/

    app.post('/users', (req, res) => {
        const newUser = req.body;
        res.send(`User created: ${JSON.stringify(newUser)}`);
    });

/*
---------------------------------------------------------------
*Sending Responses*

    Responses can be sent using the `res` object. You can send different types of responses, 
    such as text, JSON, or status codes.

    Example:
*/

    // Send a JSON response
    app.get('/json', (req, res) => {
        res.json({ message: 'Hello, JSON!' });
    });

    // Send a status code
    app.get('/status', (req, res) => {
        res.sendStatus(404); // Not Found
    });

/*
---------------------------------------------------------------
*Handling Different HTTP Methods*

    Express.js allows you to handle different HTTP methods (GET, POST, PUT, DELETE, etc.) 
    for the same route.

    Example:
*/

    app.route('/items')
        .get((req, res) => {
            res.send('Get all items');
        })
        .post((req, res) => {
            res.send('Create a new item');
        });

    app.route('/items/:itemId')
        .get((req, res) => {
            const itemId = req.params.itemId;
            res.send(`Get item with ID: ${itemId}`);
        })
        .put((req, res) => {
            const itemId = req.params.itemId;
            res.send(`Update item with ID: ${itemId}`);
        })
        .delete((req, res) => {
            const itemId = req.params.itemId;
            res.send(`Delete item with ID: ${itemId}`);
        });





    // Starting the Server
    app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`);
    });

/*
*Summary*

Understanding how to define routes, handle parameters, process requests, and send responses is crucial for building web applications with Express.js. By mastering these concepts, you can create robust and scalable web servers that handle various HTTP methods and provide dynamic functionality.
*/