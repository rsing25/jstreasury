
/*
Calling Functions without Apply
To this point we've called Function.prototype.apply, 
passing an array of arguments, to call a function with a given set of parameters held by an array:
*/

function doStuff (x,y,z) {
    console.log(x,y,z);
}
var args = [0,1,2];

doStuff.apply(this,args);
doStuff(...args);

console.log(doStuff.apply(this, args));
console.log(doStuff(...args));

/*
Copying Arrays
*/


var arr1 = ['1', '2'];
var arr2 = ['3', '4', '5'];

arr1.push(...arr2) // Adds arr2 items to end of array
console.log(...arr1);

arr1.unshift(...arr2) //Adds arr2 items to beginning of array
console.log(...arr1);


var ar1 = ['two', 'three'];
var ar2 = ['one', ...ar1, 'four', 'five'];
console.log(...ar2);


/*
Copying Arrays
Getting a copy of an array is a frequent tasks, 
something  we've used Array.prototype.slice to do in the past, 
but we can now use the spread operator to get a copy of an array:
*/

var arr = [1,2,3];
var arr2 = [...arr]; // like arr.slice()
arr2.push(4)

console.log(arr2);

/*Convert arguments or NodeList to Array
Much like copying arrays,
 we've used Array.Prototype.slice to convert NodeList and arguments objects 
 and to true arrays, but now we can use the spread operator to complete that task:
 */

//[...document.querySelectorAll('div')]

/*
Using Math Functions
*/
let numbers = [9, 4, 7, 1];
console.log(Math.max.apply(this, numbers));
console.log(Math.max(...numbers));

/* Destructuring */
let {x, y, ...z} = {x:1 ,y:2, a:3, b:4, c:5}
console.log(x);
console.log(y);
console.log(z);

/* Eliminate duplicates from an Array:
    Set object which lets you store unique values of any type.
    In other words, Set will automatically remove duplicates for us.
 */

const names = ['John', 'Paul', 'George', 'Ringo', 'John'];

let unique = [...new Set(names)];
console.log(unique); // 'John', 'Paul', 'George', 'Ringo'
