/*

Segregate Even and Odd numbers
Given an array A[], write a function that segregates even and odd numbers. The functions should put all even numbers first, and then odd numbers.
Example:

Input  = {12, 34, 45, 9, 8, 90, 3}
Output = {12, 34, 8, 90, 45, 9, 3}
In the output, the order of numbers can be changed, i.e., in the above example, 34 can come before 12 and 3 can come before 9.

Recommended: Please solve it on “PRACTICE ” first, before moving on to the solution.
The problem is very similar to our old post Segregate 0s and 1s in an array, and both of these problems are variation of famous Dutch national flag problem.


Algorithm: segregateEvenOdd()
1) Initialize two index variables left and right:  
            left = 0,  right = size -1 
2) Keep incrementing left index until we see an odd number.
3) Keep decrementing right index until we see an even number.
4) If lef < right then swap arr[left] and arr[right]

*/
class SegregateOddEven {

	constructor(inArray) {
		this.inArray = inArray;
	}

	printOddEven() {
		let left = 0;
		let right = this.inArray.length-1;

		while(left < right) {
			while( this.inArray[left] %2 === 0 && left < right) {
				left++;
			}

			while( this.inArray[right]%2 === 1 && left < right) {
				right--;
			}

			if(left < right) {
				let temp = this.inArray[left];
				this.inArray[left] = this.inArray[right];
				this.inArray[right] = temp;
				console.log("left "+left + " this.inArray[left]	"+this.inArray[left]);
				console.log("right "+ right+ " this.inArray[right] "+this.inArray[right]);
				left++;
				right--;
			}
		}

	}

	printArr() {
		console.log(this.inArray);
	}

}


const obj = new SegregateOddEven([12,34,45,8,90,3]);
obj.printArr();
obj.printOddEven();
obj.printArr();