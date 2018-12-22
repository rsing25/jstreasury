
// JavaScript String substring() Method
// start Required. The position where to start the extraction. First character is at index 0

// end Optional. 
// The position (up to, but not including) like slice of array.
// where to end the extraction. If omitted, it extracts the rest of the string
// n to n-1
var str = "Hello world!"; 012345
var res = str.substring(2, 5); // will give 2 to 4
// llo
// If "start" is less than 0, it will start extraction from index position 0: var res = str.substring(-3)
// Hello world!
var res = str.substring(2); // will give 2 to end
//llo world!
