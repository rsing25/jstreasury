// Array objects
// The inherited toString method of Arrays work abit differently, 
// it works in a way similar to calling the join method of an array without any arguments.


[1,2,3].toString() // "1,2,3"
[1,2,3].join() // "1,2,3"
[].toString() // ""
[].join() // ""

"me" + [1,2,3] // "me1,2,3"
4 + [1,2,3] // "41,2,3"
4 * [1,2,3] // NaN


// So when you pass an array where it expects a string,
//  Javascript concatenates the return value of the toString method with the second operand. 
//  If it expects a number, it attempts to convert the return value to a number.

 4 * [] // 0
4 / [2] // 2

//similar to
4 * Number([].toString())
4 * Number("")
4 * 0

//

4 / Number([2].toString())
4 / Number("2")
4 / 2