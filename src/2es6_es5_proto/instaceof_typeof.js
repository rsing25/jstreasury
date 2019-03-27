

=========================================================================================================
1 primitive types

In JavaScript, there are 5 primitive types.

Both null and undefined are primitive types. 

Boolean
Number
String
Null
Undefined

typeof "Nicholas" 	//	"string"
typeof of 10 		//	"number"
typeof of true 		//	"boolean"
typeof undefined    // "undefined"

typeof null // "object" mistake

"5" == 5 true
"5" === 5 false




What is null?
There are two features of null you should understand:

1) null is an empty or non-existent value.
2) null must be assigned.
Here’s an example. We assign the value of null to a:

let a = null;
console.log(a);
// null

What is undefined?
1)Undefined most typically means a variable has been declared, but not defined.

For example:

let b;
console.log(b);
// undefined

=========================================================================================================



2 Reference types : 
Reference types represent objects in javascript.
an object is an unordered list of properties consisting of name and value;


Reference types do not stgore the object directluy into variable.
instead it holds a pointer to the location im memory.

var object1 = new Object();
var object2 = object1;

both will point to same object.


there are 6 build in Reference types
Array
Date
Error
Function
Object
RegExp 

function x() {}

typeof x	// "function"

y = {};

typeof y       //"object"


z = [];

typeof z		//"object"

Array.isArray(z) // true





var items = [];
var object = {};
function fn() {

}


items instanceof Array // true
object instanceof Object  // true
fn instanceof Function // true




=========================================================================================================
Array instanceof object //returns true

Array -> Function.prototype -> Object.prototype
Object -> Function.prototype -> Object.prototype

Array instanceof Function // true
Object instanceof Function // true

