express - Express.js—or simply Express—a Sinatra-inspired web development framework for Node.js, 
and the de-facto standard for the majority of Node.js applications out there today.

hapi - a very modular and simple to use configuration-centric framework 
for building web and services applications

connect - Connect is an extensible HTTP server framework for Node.js, 
providing a collection of high performance “plugins” known as middleware; serves as a base foundation for Express.




Blocking is when the execution of additional JavaScript in the Node.js process must wait until a non-JavaScript operation completes. 
This happens because the event loop is unable to continue running JavaScript while a blocking operation is occurring.



Blocking methods execute synchronously and non-blocking methods execute asynchronously.

const fs = require('fs');
const data = fs.readFileSync('/file.md'); // blocks here until file is read
console.log(data);
moreWork(); // will run after console.log



And here is a similar, but not equivalent asynchronous example:

const fs = require('fs');
fs.readFile('/file.md', (err, data) => {
  if (err) throw err;
  console.log(data);
});
moreWork(); // will run before console.log



===================================================================================================================================================

Import the module
We can import the module in two ways: Either using CommonJS or using ES6 import syntax.


Node.js module.exports vs. exports
exports.method = function() {…} 
vs.
module.exports.method = function() {…}


// calculator.js
module.exports.add = (a,b) => a+b

// app-use-calculator.js
const calculator = require('./calculator.js')
console.log(calculator.add(2,2)) // prints 4

import calculator from './calculator';
console.log(calculator);

===================================================================================================================================================
node js promise example

var Promise = require('promise');
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost/EmployeeDB';
MongoClient.connect(url)

.then(function(db) {
    db.collection('Employee').insertOne({
        Employeeid: 4,
        EmployeeName: "NewEmployee"
    })

    .then(function(db1) {
        db1.collection('Employee').insertOne({
            Employeeid: 5,
            EmployeeName: "NewEmployee1"
        })
    })
});

===================================================================================================================================================



