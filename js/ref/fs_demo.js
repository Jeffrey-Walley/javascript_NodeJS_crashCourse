// File System (fs) Module

const fs = require('fs'); // bring in 'fs' core module
const path = require('path'); // bring in 'path' core module

// Create folders -- this is an async method ((takes in a callback))
/* fs.mkdir(path.join(__dirname, '/test'), {}, err => { // this will create a test folder in the, current directory on node, the second parameter is empty because we have no options in this example, arrow function callback of possible error
    if (err) throw err;
    console.log('Folder Created'); // verifies the folder is created
});*/ // will throw an error after creating the folder when it already exists

// Create file and write to that File
/* fs.writeFile(path.join(__dirname, '/test', 'hello.txt'),
        'This is the Text I chose to enter in the hello.txt file i just created.', err => {
            if (err) throw err;
            console.log('File has been Created'); // this command creates a file in the path above with the text entered in this ex: creates a file "hello.txt" in the /test directory. it will overwrite previous files... to append, use append 

            // File Append (append to a previously created file)
 fs.appendFile(path.join(__dirname, '/test', 'hello.txt'),
            ' Learning is my favorite part of the day', err => {
                if (err) throw err;
                console.log('File has been Created'); // this command appends a file in the path above with the text entered in this ex: creates a file "hello.txt" in the /test directory
            }
        );

    }
); */

// Read file
/* fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data); // you define the 2nd parameter as 'utf8' <charachter encoding> otherwise it will give you the the raw buffer and not the data -- this ex: will log the above created 'hello.txt' file in the terminal
}); */


// Rename a file
fs.rename(
    path.join(__dirname, '/test', 'hello.txt'),
    path.join(__dirname, '/test', 'fs_demo.txt'),
    (err) => {
        if (err) throw err;
        console.log('File Renamed'); // you define the 2nd parameter as the path with the new filename -- this ex: will rename file 'hello.txt' to 'fs_demo.txt'
    });