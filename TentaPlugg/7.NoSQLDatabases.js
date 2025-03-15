/*
7. NoSQL Databases – Simple one 4p (written question)
HINT: Understand the basics of NoSQL databases, including key-value stores, document stores, column-family stores, and graph databases. 
Know the differences between NoSQL and SQL databases and when to use each type.
---------------------------------------------------------------------------------------

*Basics of NoSQL Databases*
    NoSQL databases are designed to handle large volumes of data, high user loads, 
    and frequent changes to data structures. They are schema-less, meaning they do not 
    require a fixed table schema as SQL databases do. 
    NoSQL databases are categorized into four main types:

        * Key-Value Stores:
            Description: Store data as a collection of key-value pairs. Each key is unique and maps to a value.
            Use Case: Suitable for caching, session management, and real-time data.
            Example: Redis, Amazon DynamoDB
            Example Code (using Redis):
                const redis = require('redis');
                const client = redis.createClient();

                // Set a key-value pair
                client.set('username', 'JohnDoe', redis.print);

                // Get the value for a key
                client.get('username', (err, reply) => {
                    console.log(reply); // Output: JohnDoe
                });

        * Document Stores:
            Description: Store data as documents, typically in JSON or BSON format. Each document can have a different structure.
            Use Case: Suitable for content management systems, e-commerce applications, and real-time analytics.
            Example: MongoDB, CouchDB
            Example Code (using MongoDB):
                const { MongoClient } = require('mongodb');
                const url = 'mongodb://localhost:27017';
                const dbName = 'mydatabase';

                MongoClient.connect(url, (err, client) => {
                    const db = client.db(dbName);
                    const collection = db.collection('users');

                    // Insert a document
                    collection.insertOne({ username: 'JohnDoe', age: 30 }, (err, result) => {
                        console.log(result.ops);
                    });

                    // Find a document
                    collection.findOne({ username: 'JohnDoe' }, (err, doc) => {
                        console.log(doc); // Output: { _id: ..., username: 'JohnDoe', age: 30 }
                    });
                });

        * Column-Family Stores:
            Description: Store data in columns rather than rows. Each column family contains rows 
                with a unique key and multiple columns.
            Use Case: Suitable for data warehousing, real-time analytics, and large-scale distributed systems.
            Example: Apache Cassandra, HBase
            Example Code (using Cassandra):
                const cassandra = require('cassandra-driver');
                const client = new cassandra.Client({ contactPoints: ['127.0.0.1'], keyspace: 'mykeyspace' });

                // Insert data
                const query = 'INSERT INTO users (id, username, age) VALUES (?, ?, ?)';
                client.execute(query, [1, 'JohnDoe', 30], { prepare: true });

                // Query data
                client.execute('SELECT * FROM users WHERE id = ?', [1], { prepare: true }, (err, result) => {
                    console.log(result.rows[0]); // Output: { id: 1, username: 'JohnDoe', age: 30 }
                });
        
        * Graph Databases:
            Description: Store data as nodes, edges, and properties. Nodes represent entities, edges represent relationships, and properties store information about nodes and edges.
            Use Case: Suitable for social networks, recommendation engines, and fraud detection.
            Example: Neo4j, Amazon Neptune
            Example Code (using Neo4j):
                const neo4j = require('neo4j-driver');
                const driver = neo4j.driver('bolt://localhost', neo4j.auth.basic('username', 'password'));
                const session = driver.session();

                // Create nodes and relationships
                session.run('CREATE (a:Person {name: $name}) RETURN a', { name: 'JohnDoe' })
                    .then(result => {
                        console.log(result.records[0].get('a'));
                    });

                // Query nodes
                session.run('MATCH (a:Person) WHERE a.name = $name RETURN a', { name: 'JohnDoe' })
                    .then(result => {
                        console.log(result.records[0].get('a')); // Output: Node { identity: ..., labels: [ 'Person' ], properties: { name: 'JohnDoe' } }
                    });

*Differences Between NoSQL and SQL Databases*
    * Schema:
        SQL Databases: Require a predefined schema with fixed tables and columns.
        NoSQL Databases: Schema-less, allowing for flexible and dynamic data structures.

    * Scalability:
        SQL Databases: Typically scale vertically (adding more power to a single server).
        NoSQL Databases: Typically scale horizontally (adding more servers to distribute the load).

    * Data Model:
        SQL Databases: Use a relational model with tables, rows, and columns.
        NoSQL Databases: Use various data models, including key-value, document, column-family, and graph.

    * Transactions:
        SQL Databases: Support ACID (Atomicity, Consistency, Isolation, Durability) transactions.
        NoSQL Databases: Some support ACID transactions, but many prioritize availability 
        and partition tolerance over strict consistency.

    * Use Cases:
        SQL Databases: Suitable for applications requiring complex queries and transactions, 
        such as financial systems and enterprise applications.
        NoSQL Databases: Suitable for applications requiring high scalability, 
        flexibility, and handling large volumes of unstructured data, such as social networks, 
        real-time analytics, and IoT applications.

*When to use each type*

    * SQL Databases: 
        Use when you need strong consistency, complex queries, and transactions. 
        Ideal for structured data and applications with a well-defined schema.

    * NoSQL Databases: 
        Use when you need high scalability, flexibility, and the ability 
        to handle large volumes of unstructured or semi-structured data. 
        Ideal for applications with dynamic schemas and real-time data processing needs.

*Summary*
    Understanding the basics of NoSQL databases and their types is crucial for 
    modern web development. NoSQL databases offer flexibility, scalability, and 
    performance advantages over traditional SQL databases, making them suitable for a 
    wide range of applications. By knowing the differences between NoSQL and 
    SQL databases, you can choose the right database for your specific use case.
*/