/*

6. HTTP Messages – how does it look like, parts does it have where the different things it addresses, properties important … 1p
HINT: Know the structure of HTTP messages, including request messages (method, URL, headers, body) and response messages (status code, headers, body). 
Understand common HTTP headers and status codes.
-----------------------------------------------------------------------------------------------
*HTTP Messages*
    HTTP messages are how data is exchanged between a client and a server. 
    There are two main types of HTTP messages: request messages and response messages.

*HTTP Request Messages*
    An HTTP request message is sent by the client to the server to request a resource. 
    It consists of the following parts:

        * Request Line: Contains the HTTP method, the URL, and the HTTP version.
            Example: GET /index.html HTTP/1.1
        
        * Headers: Provide additional information about the request. Each header is a key-value pair.
            Example:
                Host: www.example.com
                User-Agent: Mozilla/5.0
                Accept: text/html

        * Body: Contains the data being sent to the server (optional, used mainly with POST, PUT, etc.).
            Example:
                { "username": "JohnDoe", "password": "12345" }
    
*Example of an HTTP Request Message*

    GET /index.html HTTP/1.1
    Host: www.example.com
    User-Agent: Mozilla/5.0
    Accept: text/html

*HTTP Response Messages*

An HTTP response message is sent by the server to the client in response to an HTTP request. 
It consists of the following parts:
    * Status Line: Contains the HTTP version, the status code, and the reason phrase.
        Example: HTTP/1.1 200 OK

    * Headers: Provide additional information about the response. Each header is a key-value pair.
        Example:
            Content-Type: text/html
            Content-Length: 1234
            Set-Cookie: sessionId=abc123

    * Body: Contains the data being sent to the client (optional, used mainly with successful responses).
        Example:
            <html>
                <head><title>Example</title></head>
                <body><h1>Hello, World!</h1></body>
            </html>

    * Example of an HTTP Response Message:
        HTTP/1.1 200 OK
        Content-Type: text/html
        Content-Length: 1234
        Set-Cookie: sessionId=abc123

        <html>
            <head><title>Example</title></head>
            <body><h1>Hello, World!</h1></body>
        </html>

*Common HTTP Headers*

    * Content-Type: Indicates the media type of the resource.
        Example: Content-Type: text/html

    * Content-Length: Indicates the size of the response body in bytes.
        Example: Content-Length: 1234

    * Host: Specifies the domain name of the server and the TCP port number on which the server is listening.
        Example: Host: www.example.com
        
    * User-Agent: Contains information about the user agent (client) originating the request.
        Example: User-Agent: Mozilla/5.0

    * Accept: Indicates the media types that the client is willing to receive.
        Example: Accept: text/html

    * Set-Cookie: Used to send cookies from the server to the client.
        Example: Set-Cookie: sessionId=abc123

*Common HTTP Status Codes*

    200 OK: The request has succeeded.

    201 Created: The request has been fulfilled and resulted in a new resource being created.

    400 Bad Request: The server could not understand the request due to invalid syntax
    .
    401 Unauthorized: The client must authenticate itself to get the requested response.

    403 Forbidden: The client does not have access rights to the content.

    404 Not Found: The server can not find the requested resource.

    500 Internal Server Error: The server has encountered a situation it doesn't know how to handle.

*Summary*
    Understanding the structure of HTTP messages is crucial for web development. 
    HTTP request messages consist of a request line, headers, and an optional body, 
    while HTTP response messages consist of a status line, headers, and an optional body. 
    Knowing common HTTP headers and status codes helps in effectively managing and debugging 
    web applications.
*/