/*
Module Pattern
Closure : closure are block that access the data outside of its scope
*/

/*
1 Creating a module

First we start using a anonymous closure.

Anonymous closures are just functions that wrap our code and create an enclosed scope around it.
Closures help keep any state or privacy within that function.
Closures are one of the best and most powerful features of JavaScript.

(
    function() {
    'use strict';
    // Your code here
    // All function and variables are scoped to this function
    } 
());

This pattern is well known as a Immediately Invoked Function Expression or IIFE. 
The function is evaluated then immediately invoked. Its also a good practice to run your modules in ES5 strict mode. 
Strict mode will protect you from some of the more dangerous parts in JavaScript.

*/

/*

2 Exporting our module
Next we will want to export our module. 
This basically assigns the module to a variable that we can use to call our modules methods.

var myModule =
(
    function() { 
    'use strict';
    // Your code here
    // All function and variables are scoped to this function 
    }
());

*/

/** 
 
Either way is fine var x = ( function(){} () ); or
Either way is fine var x = ( function(){} )();

*/

var module = (  
    function() {
        'use strict'

        return {
            publicMethod : function() {
                console.log("Hellow World");
            }
        }
    }()
);

module.publicMethod();

/**
 
4 Private methods & properties
JavaScript does not have a private keyword by default but using closures 
we can create private methods and private state.

An important feature of closures is that an inner function 
still has access to the outer function’s variables.

 */


var person = (
    function() {
        var age = 25;
        return {
            name : "raj",
            getAge : function() {
                return age;
            },
            growOlder : function() {
                age++;
            }

        }
    }
());

console.log(person.name); //raj
console.log(person.getAge()); //25
person.growOlder();
console.log(person.getAge()); //26

console.log(person.age);
// module pattern using Constructor Function 

function PersonF(name) {

    var age = 25;
    this.name = name;

    this.getAge = function() {
        return age;
    };

    this.growOlder = function() {
        age++;
    };

}

var p = new PersonF("raj");

console.log(p.name); //raj
console.log(p.getAge()); //25
p.growOlder(); 
console.log(p.getAge()); // 26

console.log(p.age); //undefined

  var person1 = {
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  }
  var person2 = {
    firstName:"John",
    lastName: "Doe",
  }
  var x = person1.fullName.call(person2); 