/*


Find duplicates in O(n) time and O(1) extra space | Set 1
Given an array of n elements which contains elements from 0 to n-1, 
with any of these numbers appearing any number of times. 
Find these repeating numbers in O(n) and using only constant memory space.
For example, let n be 7 and array be {1, 2, 3, 1, 3, 6, 6}, 
the answer should be 1, 3 and 6.


Algorithm:

traverse the list for i= 0 to n-1 elements
{
  check for sign of A[abs(A[i])] ;
  if positive then
     make it negative by   A[abs(A[i])]=-A[abs(A[i])];
  else  // i.e., A[abs(A[i])] is negative
     this   element (ith element of list) is a repetition
}


*/

class findDuplicates {

	constructor(inArr) {
		this.inArr = inArr;
	}

	printRepeating() {
		//console.log(this.inArr);
		for(let i =0; i < this.inArr.length; i++) {
			//console.log(this.inArr[i]+ "   "+ i + "	"+this.inArr[Math.abs(this.inArr[i])]);
			if( this.inArr[Math.abs(this.inArr[i])] >= 0) {
				this.inArr[Math.abs(this.inArr[i])] = - this.inArr[Math.abs(this.inArr[i])];
			} else {
				console.log(Math.abs(this.inArr[i]) + " ");
			}
		} 
	}



}

const obj = new findDuplicates([1, 2, 3, 1, 3, 6, 6]);
obj.printRepeating();