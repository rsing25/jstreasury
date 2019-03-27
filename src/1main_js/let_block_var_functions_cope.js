//var is in function scope

//let const is in block scope

var message = "hi"
function gree() {
    var message = "bye";
}

console.log(message) //hi

let message = "hi"
{
    let message = "bye";
}

console.log(message) //hi




/*
Hoisting is the JavaScript interpreter’s action of
1 -moving all variable and function declarations to the top of the current scope. 

However, only the actual declarations are hoisted.


2- Any assignments are left where they are.
*/

//Variable Hoisting

(function() {
    var foo = 1;
    alert(foo + " " + bar + " " + baz); var bar = 2;
    var baz = 3;
    })();
    
    (function() {
        var foo; var bar; var baz;
        foo = 1;
        alert(foo + " " + bar + " " + baz); bar = 2;
        baz = 3;
        })();
 /**
  * Clearly, the alert takes place before bar and baz are declared.
However, this is perfectly valid JavaScript, which does not generate an exception. 
Instead, the alert displays "1 undefined undefined".
 */       

example 2
(function() {
var foo = 1;
alert(foo + " " + bar + " " + baz); var bar = 2;
})();
/**
 BNow, let’s take the same IIFE, but remove the baz declaration altogether, as shown below.
Suddenly, we have a ReferenceError because baz is not defined.  
 */

var a = 1
const func = () => {
console.log(a);
}
func() // output 1

const func2 = () => { 
var a = 2;
console.log(a); 
}
func2() // output 2

const func3 = () => { 
console.log(a);
var a = 2; 
}
//this will translate into
const func3 = () => { 
var a;
console.log(a);
a = 2; 
}
func3() //output undefined

/**
 * 
 Function Hoisting
 As previously mentioned, function declarations are also hoisted.
 However, functions that are assigned to variables are not hoisted. 
 For example, the following code will work as expected due to function declaration hoisting.
 *  */
foo();
function foo() { alert("Hello!");
}

/**
 However, the following example will fail spectacularly. 
 The variable declaration for foois hoisted before the function call. However, 
 since the assignment to foo is not hoisted, an exception is thrown for trying to call a non-function variable.
 *  */
foo();
var foo = function() { alert("Hello!");
};
