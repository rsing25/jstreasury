// write Factorial (!) using recursion // Factorial(!)
// // 4! = 4*3*2*1 = 24
function factorial (num) {
if (num == 1) { 
    return num;
} else {
return num* factorial(num -1)
}
 }