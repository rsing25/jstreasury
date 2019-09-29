
function twoSumBest(array, target) {
    const numsMap = new Map();
    for (let i = 0; i < array.length; i++) {
        if(numsMap.has(target - array[i])) {
            return [numsMap.get(target - array[i], i)];
            // get() returns a specified element associated with the specified key from the Map object.
        } else {
            numsMap.set(array[i], i);
            //  set() adds or updates an element with a specified key and value to a Map object.
        }
    }
}
// Time complexity of above : O(n). We traverse the list containing nn elements only once. Each look up in the table costs only O(1) time.

// Space complexity :O(n). The extra space required depends on the number of items stored in the hash table, which stores at most nn elements.


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums,  target) {
    
    var retrunArray = [];
    
    var i = 0;
    var j = nums.length-1;
    
    while (i < j) {
        if( nums[i] + nums[j] == target) {
             retrunArray.push(i,j); 
             return retrunArray;
        }
        if( nums[i] + nums[j] < target ) {
            i++;
        }
        if( nums[i] + nums[j] > target ) {
            j--   
        }
    }
    return retrunArray;
};

console.log(twoSum([2,7,11,15], 9));



/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    
    var retrunArray = [];
    
    var i = 0;
    var j = nums.length-1;
    
    while (i < j) {
        if( nums[i] + nums[j] == target) {
             retrunArray.push(i,j); 
             return retrunArray;
        }
        if( nums[i] + nums[j] < target ) {
            i++;
        }
        if( nums[i] + nums[j] > target ) {
            j--   
        }
    }
    return retrunArray;
};

console.log(twoSum([2,7,11,15], 9));