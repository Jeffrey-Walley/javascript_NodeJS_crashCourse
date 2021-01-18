// Import HTTP module <core Node module>
const http = require('http');

// Create Server Object
http.createServer((req, res) => {
    // Write Response
    res.write('Friendly Friend');
    res.end();
}).listen(5000, () => console.log('Server Running...')); // starts a server on port 5000 and returns 'Friendly Friend' in the browser

// ctrl-c to break from the server in node