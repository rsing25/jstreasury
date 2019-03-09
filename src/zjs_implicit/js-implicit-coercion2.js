// The case for the + operator
// The + operator unlike other mathematical operators, performs two functions:

// Mathematical addition
// String concatenation
// When a string is an operand of the + operator, 
// Javascript instead of converting the string to a Number, converts the number to a string.

// concatenation
1 + "2" // "12"
1 + "js" // "1js"   

// addition
1 + 2 // 3
1 + 2 + 1 // 4

//addition, then concatenation
1 + 2 + "1" // "31"
(1 + 2) + "1" // "31"

//concatenation all through
1 + "2" + 1 // "121"
(1 + "2") + 1 // "121"