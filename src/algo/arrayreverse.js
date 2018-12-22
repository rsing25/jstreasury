/*
Reverse Array in Place
manipulate the array passed in
do NOT push elements into a new array and returned it 
** Don’t use array.reverse() method.
**/

function reverseArrayInPlace(arr) {
// loop should run at first half of array only
for (var i = 0; i < arr.length / 2; i++) {
        // we want to switch first element of array with last elment of array
        // second switch of array with second last element of array
        // if we are in third iteration i =2
        // arr[i] will be arr[2] third element in array
        // arr[arr.length - 1 - i] will be 8 -1 -2 // arr[5] third to last element in array

        var tempVar = arr[i];
        arr[i] = arr[(arr.length -1) -i];
        arr[(arr.length -1) -i] = tempVar;
}
return arr; 
}
console.log(reverseArrayInPlace([1, 2, 3, 4, 5, 6, 7, 8])); 


array.reverse()


x = [1,2]

x.reverse() //[2, 1]

var y = "1,2";

y.split(',').reverse();//[2,1]
y.split('').reverse().join(''); // "2,1"
[...y].reverse().join('');

var str = '123';

str.split("").reduce((revStr, char)=> {
    char + revStr, ''
});


// array.join(separator)
// separator Optional. The separator to be used. If omitted, the elements are separated with a comma
var fruits = ["Banana", "Orange", "Apple", "Mango"];
// no argument add comma
fruits.join(); // Banana,Orange,Apple,Mango
//empty string argument create new string 
fruits.join(''); // BananaOrangeAppleMango
