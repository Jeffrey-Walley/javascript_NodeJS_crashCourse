//  'Common JS' module
/* const Person = require('./person.js'); // calls upon the person.js using the path


const person1 = new Person('Trelvyn Martin-Walley', 5);

person1.greeting(); */

// core node modules - no express -- brings in these 3 core modules
const http = require("http");
const path = require("path");
const fs = require("fs");

// CREATE SERVER that handles requests and responses
const server = http.createServer((req, res) => {

    // This is an inefficient way to demonstrate what we are doing. in order to handle multiple HTML pages and CSS read the below method---------------------------------------------------------------------------------------- 
    /* if (req.url === '/') {  // we are checking the URL - if it is / (which it is in this ex:)
        fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, content) => {
            if (err) throw err;  // then we readFile (read the File) 'index.html', in the 'public' folder -- if error then it will throw an error 
            res.writeHead(200, { 'Content-Type': 'text/html' }); // set Port status 200,and a content type of text / html
            res.end(content); */ // outputs HOME with 'content' localhost port or port 5000  

    /* if (req.url === '/about') { // we are checking the URL - if it is / (which it is in this ex:)
        fs.readFile(path.join(__dirname, 'public', 'about.html'), (err, content) => {
            if (err) throw err; // then we readFile (read the File) 'index.html', in the 'public' folder -- if error then it will throw an error 
            res.writeHead(200, { 'Content-Type': 'text/html' }); // set Port status 200,and a content type of text / html
            res.end(content); */ // outputs HOME with 'content' localhost port or port 5000   


    /* res.writeHead(200, { 'Content-Type': 'text/html' }); // added a Port with status 200,and a content type type text / html
    res.end('<h1>Homestyle Fried Potatoes</h1>'); */ // outputs HOME with <h1> on localhost port or port 5000


    /* if (req.url === '/api/users') {
        const users = [
            { name: 'Trelvyn Martin-Walley', age: 5 },
            { name: 'Isis Walley', age: 11 },
            { name: 'Jubel Martin-Walley', age: 0 }
        ];
        res.writeHead(200, { 'Content-Type': 'application/json' }); // uses JSON instead of the HTML from ex above
        res.end(JSON.stringify(users));
    }; */



    // More efficient method -- dynamic file path

    // Build File Path
    let filePath = path.join(__dirname,
        'public',
        req.url === '/' ? 'index.html' : req.url);
    // the code above joins the path to the current directory name (__dirname) and states that if the req.url is '/' (root) to '?' (turnery symbol 'then') 'index.html' is loaded, 'else' (turnery symbol ':') then return req.url whatever that might be

    // get the Extension of the file
    let extname = path.extname(filePath);

    // initial content type
    let contentType = 'text/html';

    //Check ext and set content type
    switch (extname) {
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.css':
            contentType = 'text/css';
            break;
        case '.json':
            contentType = 'application/json';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        case '.jpg':
            contentType = 'image/jpg';
            break;
        case '.jpeg':
            contentType = 'image/jpg';
            break;
    }

    // Read File
    fs.readFile(filePath, (err, content) => {
        if (err) { // if there is an error then '
            if (err.code == 'ENOENT') {
                // Page Not Found
                fs.readFile(
                    path.join(__dirname, "public", "404.html"),
                    (err, content) => {
                        res.writeHead(404, { "Content-Type": "text/html" });
                        res.end(content, "utf8");
                    }
                );
            } else {
                //  Some server error
                res.writeHead(500);
                res.end(`Server Error: ${err.code}`);
            }
        } else {
            // Success
            res.writeHead(200, { "Content-Type": contentType });
            res.end(content, "utf8");
        }
    });
});


const PORT = process.env.PORT || 5000; // port is set to whatever PORT the host decides (that's what 'process.env.PORT' is) otherwise it will use PORT 5000 (that is the '|| 5000')

server.listen(PORT, () => console.log(`Server running on port ${PORT}`)); // when server launches it logs 'server running on port 5000' in the terminal below