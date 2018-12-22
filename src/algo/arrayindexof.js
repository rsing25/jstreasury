// Array.indexof(value)
// item Required. The item to search for
// start Optional. Where to start the search. Negative values will start at the given position counting from the end, and search to the end.
// The search will start at the specified position, or at the beginning if no start position is specified, and end the search at the end of the array.
// Returns -1 if the item is not found
var fruits = ["Banana", "Orange", "Apple", "Mango", "Banana", "Orange", "Apple", "Mango"];
var a = fruits.indexOf("Apple", 4); //6


// string.indexOf(searchvalue, start)
// earchvalue Required. The string to search for
// start Optional. Default 0. At which position to start the search
var str = "Hello world, welcome to the universe."; var n = str.indexOf("welcome"); //13
var n = str.indexOf("wel"); //13