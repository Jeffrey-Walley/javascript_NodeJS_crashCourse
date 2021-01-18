const path = require('path'); // bring the 'path' module into this module -- 'path is a core node module

// NPM Methods

// Basename -- get's base file name 
// console.log(__filename); // gives the complete directory path and filename
console.log(path.basename(__filename)); // will log only the file name without the directories

// Directoy Name
console.log(path.dirname(__filename)); // gives the directory name without filename -- same as using '__dirname', but in this situation we are using the 'path' module

// File extension
console.log(path.extname(__filename)); // will return the file .ext only (in this case '.js' when you run 'node path_demo in the terminal below)

// Create path object
console.log(path.parse(__filename)); // returns the path of the current file as an object
console.log(path.parse(__filename).base); // returns only the 'base:' of the __filename object (in this example 'path_demo.js')

// Concatenate paths using .join
console.log(path.join(__dirname, 'test', 'hello.html')); // helps keep the correct dilimeter when going between mac and windows