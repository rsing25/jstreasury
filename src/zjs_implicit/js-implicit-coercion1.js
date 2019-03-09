// Non-numeric values in numeric expressions
// Strings
// Whenever you pass a string as an operand in a numeric expression
// involving either of these operators: -, *, /, %, 
// the number's conversion process is similar to calling the in-built Number function on the value.
// This is pretty straightforward, any string containing only numeric characters will be converted to it's number equivalent, but a string containing a non-numeric character returns NaN.


3 * "3" // 3 * 3 = 9
3 * Number("3") // 3 * 3 = 9
Number("5") // 5

Number("1.") // 1
Number("1.34") // 1.34
Number("0") // 0
Number("012") // 12

Number("1,") // NaN
Number("1+1") // NaN
Number("1a") // NaN
Number("one") // NaN
Number("text") // NaN