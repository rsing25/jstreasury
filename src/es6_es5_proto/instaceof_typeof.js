Array instanceof Object
returns true

Array -> Function.prototype -> Object.prototype
Object -> Function.prototype -> Object.prototype

Array instanceof Function // true
Object instanceof Function // true


Array.isArray() method determines whether the passed value is an Ar
Array.isArray([1, 2, 3]);  // true




The "typeof" operator in JavaScript allows you to probe the data type of its operand, 
such as whether a variable is string, numeric, or even undefined.


"number"	Operand is a number
"string"	Operand is a string
"boolean"	Operand is a Boolean
"object"	Operand is an object
null		Operand is null.
"undefined"	Operand is not defined.




Also in JavaScript, there are 5 primitive values.
Both null and undefined are primitive values. 

Boolean
Number
String
Null
Undefined



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
