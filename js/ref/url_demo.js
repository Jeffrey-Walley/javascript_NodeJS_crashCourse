// URL module
const url = require('url');

const myUrl = new URL('http://mywebsite.com:8000/hello.html?id=100&status=active');

// get Serialized URL
console.log(myUrl.href); // returns the URL info from 'myURL'
console.log(myUrl.toString()); // 'toString' method way of doing the same thing as above

// only get Host (root domain)
console.log(myUrl.host); // gives root domain name includes port
// Hostname (does not get port)
console.log(myUrl.hostname); // gives hostname (without port)

// Pathname
console.log(myUrl.pathname);

// Serialized Query
console.log(myUrl.search);
// Serialized Query that Creates Object
console.log(myUrl.searchParams); // returns as an object with ids and values

// Add parameters to URL
myUrl.searchParams.append('abc', '123');
console.log(myUrl.searchParams); // above appends the URL infor to add parameters

// Loop through parameters
myUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`));