
/*

Method 1 (Basic)
Use two loops. In the outer loop, pick elements one by one 
and count the number of occurrences of the picked element in the inner loop.

This method doesn’t use the other useful data provided in questions like range of numbers is 
between 1 to n and there are only two repeating elements.


Time Complexity: O(n*n)
Auxiliary Space: O(1)
*/


/*
Method 2 (Use Count array)
Traverse the array once. While traversing, 
keep track of count of all elements in the array using a temp array count[] of size n,
 when you see an element whose count is already set, print it as duplicate.

This method uses the range given in the question to restrict the size of count[], 
but doesn’t use the data that there are only two repeating elements.*/
class repeatingElement {

	constructor(inArr) {
		this.inArr = inArr;
		this.tmpObj = {};
	}

	printFirst2Repeating() {
		let retVal = null;
		for(let i = 0; i < this.inArr.length; i++) {
	
			if(	!this.tmpObj[this.inArr[i]] ) {
				this.tmpObj[this.inArr[i]] = 1;
			} else {
				retVal = this.inArr[i];
				break;
			}

		}
		return retVal;
	}
}

const obj = new repeatingElement([4, 2, 4, 5, 2, 3, 1]);

console.log(obj.printFirst2Repeating());


