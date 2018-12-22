/**
 Big O Notation
Big O Notation tells how scalable a function or algorithm is
it allows us to estimate worse case run time of algorithm .
Big O Notation tells how much slower algorithm will run if it input size grows
 */

//=================================================================
// Constant Run Time
// Big O Notation: “O (1)”
// log first two element of array 
// run time is constant .
// as input size increases number of operations remain same 

function log (array) {
console.log (array [0]);
console.log (array [1]);
}

//=================================================================
// Linear runtime
// Big O Notation: “O (n)”
// log every value of array

function logAll (array) {
    for (var i =0; i < array.length; i++ ) {
         console.log(array[i]);
    }
}
    
//===================================
// Exponential runtime “O (n^2)” O of n square
//not very efficient

// log every possible combinations of array

function andAndlog (array) {
    for (var i =0; i < array.length; i++ ) {
        for (var j =0; i < array.length; j++ ) { 
            console.log( array[i] + array[j]);
        } 
    }
    }
    // andAndlog([‘A’,’B’,’C’]) // 9 paris 
    // andAndlog([‘A’,’B’,’C’,’D’]) // 16 paris 
    // andAndlog([‘A’,’B’,’C’,’D’,’E’]) // 25 pariss

    
/**=========================================================
 * Logarithm run time ..it is very performing // Big O Notation: O (log n)
example binary search
binary search has Logarithm run time. because every operation
we are cutting the input by half.
 */

/** 
 * search “HOUSE” from below string ABCDEFGHIJKLMNOPQRSTUVWXYZ
at mid we are at M we know House will be before M so we can forget second half of string
so we just cut the input size and number of element we have to search to half
ABCDEFGHIJKL
now we will go half of this section at F we house will on right of F so we now left with GHIJKL
GHI H
we only performed 4 operation as input was 26 as number of input size grows
number of operations grow logrithimlly not proportionally
4,000 element —Binary Search—> will take 12 operations only
*/



    function binarySearchRecurrsion(numArray, key) {
        // if key is present in our numArray we will return true otherwise we will return false;
        var middleIdx = Math.floor(numArray.length / 2); 
        var middleElem = numArray[middleIdx];
        if (middleElem == key) { 
            return true;
        } else if (key > middleElem && numArray.length >1 ) {
        return binarySearchRecurrsion(numArray.splice(middleIdx,numArray.length),key ); } 
        else if (key < middleElem && numArray.length >1) {
        } 
    }
    console.log(binarySearchRecurrsion([1,2,3,4,5],4));

    let binarySearch = function (arr, x) { 
   
        let start=0, end=arr.length-1; 
              
        // Iterate while start not meets end 
        while (start<=end){ 
      
            // Find the mid index 
            let mid=Math.floor((start + end)/2); 
       
            // If element is present at mid, return True 
            if (arr[mid]===x) return true; 
      
            // Else look in left or right half accordingly 
            else if (arr[mid] < x)  
                 start = mid + 1; 
            else
                 end = mid - 1; 
        } 
       
        return false; 
    } 

    console.log(binarySearchRecurrsion([1,2,3,4,5],4));
