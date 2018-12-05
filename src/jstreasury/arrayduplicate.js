/* Eliminate duplicates from an Array:
    Set object which lets you store unique values of any type.
    In other words, Set will automatically remove duplicates for us.
 */
const names = ['John', 'Paul', 'George', 'Ringo', 'John'];
let unique = [...new Set(names)];
console.log(unique); // 'John', 'Paul', 'George', 'Ringo'

/*The filter() method creates an array filled with all array elements that pass a test (provided as a function).
Note: filter() does not execute the function for array elements without values.
Note: filter() does not change the original array.
*/
/* 
We can use it to remove the duplicates. On each iteration, 
we’ll use Array.indexOf() to see if our item already exists. 
If the returned index is smaller than the current index, that means an instance of item already exists. Otherwise, we’ll return it to add it to the new array.
*/
Array.prototype.removeDupplicate = function() {
    var that = this;
    var returnArray =  that.filter(function(element, index) {
        console.log(" element "+ element, " index " + index + " that.indexOf(element) "+that.indexOf(element));
        return that.indexOf(element) === index;
    });
    return returnArray;
}
console.log(names.removeDupplicate());

Array.prototype.removeDups = function() {
    var that = this;
    let uniqueObj = {};
    that.forEach((element) => {
        if(!uniqueObj[element]) {
            uniqueObj[element] = element;
        }
    });
    console.log("uniqueObj --" + uniqueObj);
    
    console.log("Object.values(uniqueObj) --" + Object.values(uniqueObj));
    console.log("Object.keys(uniqueObj) --" + Object.keys(uniqueObj));
    
    return Object.keys(uniqueObj);
}
console.log(names.removeDups());
