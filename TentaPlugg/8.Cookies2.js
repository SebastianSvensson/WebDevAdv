/*
----------------------------------------------------------------------------------------------
8. Cookies 2 – Cookies important to understand, how they go back and forth etc 3p (fill in stuff)
HINT: Review how cookies are set by the server and sent back to the server with each request. 
Understand the lifecycle of a cookie and how to manage cookies in the browser.
----------------------------------------------------------------------------------------------

*Setting Cookies*

    Cookies can be set by the server using the Set-Cookie header in an HTTP response. 
    Here is an example of how a server sets a cookie:

    Example: Setting a Cookie in an HTTP Response

        HTTP/1.1 200 OK
        Content-Type: text/html
        Set-Cookie: username=JohnDoe; expires=Fri, 31 Dec 2025 23:59:59 GMT; path=/

    In this example, the server sets a cookie named username with the value JohnDoe. 
    The cookie has an expiration date, a path, and other optional attributes.

*Sending Cookies Back to the Server*

    Once a cookie is set, the browser will send the cookie back to the server with each subsequent request to the same domain. 
    This is done using the Cookie header in the HTTP request.

    Example: Sending a Cookie in an HTTP Request

        GET /index.html HTTP/1.1
        Host: www.example.com
        Cookie: username=JohnDoe

    In this example, the browser sends the username cookie back to the server with the request.

*Lifecycle of a Cookie*

    The lifecycle of a cookie includes its creation, transmission, and eventual expiration or deletion. 
    Here are the key stages:

        1. Creation: A cookie is created by the server using the Set-Cookie header or by 
        the client using JavaScript (document.cookie).

        2. Transmission: The cookie is sent back to the server with each request to 
        the same domain using the Cookie header.

        3. Expiration: A cookie can have an expiration date set using the expires attribute. 
        If no expiration date is set, the cookie is a session cookie and will be 
        deleted when the browser is closed.

        4. Deletion: A cookie can be deleted by setting its expiration date to a past date.

*Managing Cookies in the Browser*

    Cookies can be managed in the browser using JavaScript. Here are some common operations:

    * Creating a Cookie

        document.cookie = "username=JohnDoe; expires=Fri, 31 Dec 2025 23:59:59 GMT; path=/";

    * Reading Cookies

        console.log(document.cookie); // Output: username=JohnDoe

    * Deleting a Cookie

        document.cookie = "username=JohnDoe; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";

*Example: Full Lifecycle of a Cookie*

1. Server Sets a Cookie:

    HTTP/1.1 200 OK
    Content-Type: text/html
    Set-Cookie: sessionId=abc123; expires=Fri, 31 Dec 2025 23:59:59 GMT; path=/; HttpOnly

2. Browser Sends the Cookie Back to the Server:

    GET /dashboard HTTP/1.1
    Host: www.example.com
    Cookie: sessionId=abc123

3. Client-Side JavaScript Creates a Cookie:

    document.cookie = "username=JohnDoe; expires=Fri, 31 Dec 2025 23:59:59 GMT; path=/";

4. Client-Side JavaScript Reads the Cookie:

    console.log(document.cookie); // Output: sessionId=abc123; username=JohnDoe

5. Client-Side JavaScript Deletes the Cookie:

    document.cookie = "username=JohnDoe; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";

*Summary*

Understanding how cookies are set by the server, sent back to the server with each request, 
and managed in the browser is crucial for web development. Cookies play a vital role in session management, 
user tracking, and personalization. By mastering the lifecycle of a cookie and how to manage them, 
you can effectively use cookies in your web applications.

*/