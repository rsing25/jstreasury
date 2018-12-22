//

// JavaScript Sorting Arrays
//  ================================================================
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort(); //Apple,Banana,Mango,Orange

// By default, the sort() function sorts values as strings.
// This works well for strings ("Apple" comes before "Banana").
// However, if numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1".
// Because of this, the sort() method will produce incorrect result when sorting numbers.
// You can fix this by providing a compare function: 

var points = [40, 100, 1, 5, 25, 10];
points.sort( function(a, b) {
return b - a; } );