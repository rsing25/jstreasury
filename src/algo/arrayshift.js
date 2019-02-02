//Remove the first item of an array and return it.

const arr = [1,2,3];
console.log(arr.shift());
console.log(arr);//[2,3]


//The unshift() method adds new items to the beginning of an array, 
//and returns the new length.


const arr1 = [1,2,3];
console.log(arr1.unshift(4,5));
console.log(arr1);//[4,5,1,2,3]