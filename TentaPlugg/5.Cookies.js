/*
5. Cookies - how they are transmitted, where they are created 4p (true/false)
HINT: Understand how cookies are created (using document.cookie in JavaScript or 
Set-Cookie header in HTTP response), how they are transmitted between the client 
and server, and their properties (e.g., expires, path, domain, secure, HttpOnly).
---------------------------------------------------------------------------------
*What are Cookies?*
Cookies are small pieces of data stored on the client's browser. They are used to remember information about the user between HTTP requests. 
Cookies are commonly used for session management, personalization, and tracking.

*How Cookies are Created*
Cookies can be created in two main ways:
    * Using document.cookie in JavaScript:
        You can create and manipulate cookies directly in the browser using JavaScript.
        Example:
*/
            // Create a cookie
            document.cookie = "username=JohnDoe; expires=Fri, 31 Dec 2025 23:59:59 GMT; path=/";

            // Read a cookie
            console.log(document.cookie); // Output: username=JohnDoe
/*
    * Using the Set-Cookie header in an HTTP response:
        The server can send cookies to the client using the Set-Cookie header in the HTTP response.
        Example (HTTP response header):
            Set-Cookie: username=JohnDoe; expires=Fri, 31 Dec 2025 23:59:59 GMT; path=/

*How Cookies are Transmitted*
Cookies are transmitted between the client and server as part of the HTTP request and response headers:

    * From Server to Client:
        The server sends cookies to the client using the Set-Cookie header in the HTTP response.
        Example:
            HTTP/1.1 200 OK
            Content-Type: text/html
            Set-Cookie: username=JohnDoe; expires=Fri, 31 Dec 2025 23:59:59 GMT; path=/

    * From Client to Server:
        The client sends cookies to the server using the Cookie header in the HTTP request.
        Example:
            GET /index.html HTTP/1.1
            Host: www.example.com
            Cookie: username=JohnDoe
    
*Cookie Properties*
Cookies have several properties that control their behavior:

    * expires: 
        Specifies the expiration date of the cookie. 
        If not set, the cookie is a session cookie and will be deleted when the browser is closed.
        Example:
            document.cookie = "username=JohnDoe; expires=Fri, 31 Dec 2025 23:59:59 GMT";

    * path:
        Specifies the URL path that must exist in the requested URL for the browser 
        to send the cookie header.
        Example:
            document.cookie = "username=JohnDoe; path=/";

    * domain:
        Specifies the domain that must exist in the requested URL for the browser 
        to send the cookie header.
        Example:
            document.cookie = "username=JohnDoe; domain=example.com";

    * secure:
        Indicates that the cookie should only be sent over HTTPS connections.
        Example:
            document.cookie = "username=JohnDoe; secure";
    * HttpOnly:
        Indicates that the cookie should not be accessible via 
        JavaScript(helps mitigatge cross-site scripting (XSS attacks)) to improve security.
        Example (HTTP response header):
            document.cookie = "username=JohnDoe; HttpOnly";

*Example: Creating and Reading Cookies in JavaScript*
*/
    // Create a cookie
    document.cookie = "username=JohnDoe; expires=Fri, 31 Dec 2025 23:59:59 GMT; path=/";

    // Read all cookies
    console.log(document.cookie); // Output: username=JohnDoe

    // Create a secure, HttpOnly cookie (set by the server)
    const httpResponseHeader = "Set-Cookie: sessionId=abc123; secure; HttpOnly";
/*

*Summary*
Understanding cookies is essential for web development, especially for session management 
and user tracking. Cookies can be created using JavaScript or HTTP headers, and they have 
various properties that control their behavior and security. 
By understanding how cookies are transmitted and their properties, you can effectively manage 
cookies in your web applications.

*/ 