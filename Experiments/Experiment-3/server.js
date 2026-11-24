
/*
====================================================
EXPERIMENT 3
TITLE: Create a Basic HTTP Server Using Node.js

AIM:
To create an HTTP server using http.createServer(),
respond with "Hello World" and return headers
along with the status code.
====================================================
*/

// Import HTTP module
const http = require('http');

// Create HTTP server
const server = http.createServer((req, res) => {

    // Set HTTP status code
    res.statusCode = 200;

    // Set response headers
    res.setHeader('Content-Type', 'text/plain');
    res.setHeader('X-Powered-By', 'Node.js');

    // Send response
    res.end('Hello World');

});

// Start server on port 3000
server.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});

/*
====================================================
EXPECTED TERMINAL OUTPUT:

Server running at http://localhost:3000

OPEN IN BROWSER:
http://localhost:3000

EXPECTED BROWSER OUTPUT:
Hello World

HTTP RESPONSE:
HTTP/1.1 200 OK
Content-Type: text/plain
X-Powered-By: Node.js

====================================================

====================================================
CONCLUSION:

Successfully created an HTTP server using Node.js
http.createServer(), sent a Hello World response,
and configured HTTP headers and status code.
====================================================
*/
