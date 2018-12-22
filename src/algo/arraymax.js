//4 _b more Array methods ============
//find largest number in JS
const inputArray = [ 1, 3, 4, 9, 16, 2, 20, 18];
const maxNumber = Math.max.apply( Math, inputArray );
console.log(maxNumber);
// How might I find the largest number contained in a JavaScript array? using reduce() ================================================================
// The reduce() method reduces the array to a single value.
// The reduce() method executes a provided function for each value of the array (from left-to-right).
// The return value of the function is stored in an accumulator (result/total).
var arr = [1,20,3,4];
var largest = arr.reduce(function(x,y){
     return (x > y) ? x : y;
});


