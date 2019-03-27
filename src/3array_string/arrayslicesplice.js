/*The most noticeable difference is that the 

Slice() method returns up to but NOT INCLUDING the second argument, (SMALL)
whereas SPlice() returns UP to the second argument. (BIG) + (DELTE ORINGAL ARRAY)

*/
['a', 'b', 'c', 'd', 'e'].slice(1,3)
// ["b", "c"]
['a', 'b', 'c', 'd', 'e'].splice(1,3)
// ["b", "c", "d"]


/**
 * Under-the-hood something much more fundamental is going on with the method returns. 
 * slice() creates a brand new array object which it then returns; by contrast,  
 * SPlice() MUTES the original array object and returns it.
 */

const arr = ['a', 'b', 'c', 'd', 'e']
arr.slice(1,3)
// ["b", "c"]
arr
// ['a', 'b', 'c', 'd', 'e']

const arr2 = ['a', 'b', 'c', 'd', 'e']
arr2.splice(1,3)
// ["b", "c", "d"]
arr2
// ["a", "e"]



/*Slice() can take either 1 argument, which acts as the begin or 2 arguments which represent begin and END.
*/

// array.slice(begin)
// array.slice(begin, end)

['a', 'b', 'c', 'd', 'e'].slice(1)
// ["b", "c", "d", "e"]
['a', 'b', 'c', 'd', 'e'].slice(1,3)
// ["b", "c"]

/*For SPlice(), 1 argument acts as the start and a 2nd argument is formally the DELETECOUNT,
 the number of the old array element to be removed.
*/

// array.splice(start)
// array.splice(start, deleteCount)

['a', 'b', 'c', 'd', 'e'].splice(1)
// ["b", "c", "d", "e"]
['a', 'b', 'c', 'd', 'e'].splice(1,3)
// ["b", "c", "d"]

