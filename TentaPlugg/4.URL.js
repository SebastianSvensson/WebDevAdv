/*
4. URL – Gives a lot of points – learn everything 8p
HINT: Learn the structure of a URL, including the scheme (protocol), host (domain), port, path, query parameters, and fragment. 
Understand how to construct and parse URLs.
---------------------------------------------------------------------------------------------
*Structure of a URL*
A URL (Uniform Resource Locator) is a reference to a web resource that specifies its 
location on a computer network and a mechanism for retrieving it. 

Here is the general structure of a URL:
    * scheme://host:port/path?query#fragment

Each part of the URL serves a specific purpose:
    * Scheme (Protocol): Indicates the protocol to be used to access the resource. 
      Common schemes include http, https, ftp, mailto, etc.
        Example: https

    * Host (Domain): Specifies the domain name or IP address of the server where the resource is located.
        Example: www.example.com

    * Port: An optional part that specifies the port number to connect to on the server. 
      If omitted, the default port for the scheme is used (e.g., 80 for HTTP, 443 for HTTPS).
        Example: 8080

    * Path: Specifies the path to the resource on the server. 
      It is often hierarchical and case-sensitive.
        Example: /path/to/resource

    * Query Parameters: A set of key-value pairs that provide additional information to the server. 
      They are separated by & and start with a ?.
        Example: ?key1=value1&key2=value2

    * Fragment: An optional part that specifies a section within the resource, often used for navigating to a specific part of a web page.
        Example: #section1

*Example URL*      
Let's look at an example URL and identify its components:
    * URL: https://www.example.com:8080/path/to/resource?key1=value1&key2=value2#section1
        - Scheme: https
        - Host: www.example.com
        - Port: 8080
        - Query Parameters: key1=value1&key2=value2
        - Fragment: #section1
*Constructing a URL*
To construct a URL, you can concatenate the different parts together. Here is an example in JavaScript:
    const scheme = 'https';
    const host = 'www.example.com';
    const port = '8080';
    const path = '/path/to/resource';
    const queryParams = 'key1=value1&key2=value2';
    const fragment = 'section1';

    const url = `${scheme}://${host}:${port}${path}?${queryParams}#${fragment}`;
    console.log(url); // Output: https://www.example.com:8080/path/to/resource?key1=value1&key2=value2#section1

*Parsing a URL*
To parse a URL, you can use the URL class in JavaScript, 
which provides properties to access different parts of the URL:

    const url = new URL('https://www.example.com:8080/path/to/resource?key1=value1&key2=value2#section1');

    console.log(url.protocol); // Output: https
    console.log(url.hostname); // Output: www.example.com
    console.log(url.port); // Output: 8080
    console.log(url.pathname); // Output: /path/to/resource
    console.log(url.search); // Output: ?key1=value1&key2=value2
    console.log(url.hash); // Output: #section1


*/