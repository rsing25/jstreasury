"use strict"
var ages = [3, 10, 18, 20, 19];
//The find() method returns the value of the first element in an array 
//that pass a test (provided as a function).
// The find() method is not supported in IE 11 (and earlier versions).

var result = ages.find(function(age){
    return age >= 18
});

console.log(result);