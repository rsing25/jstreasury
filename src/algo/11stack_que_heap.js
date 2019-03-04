/*
-Stack is a simple data structure used for storing data. 
1) Stack is a linear data structure.
1) Heap is a hierarchical data structure.


-Heap is a tree with some special property.
 That special property of the heap is, 
 the value of a node must be >= or <= to its children 
 like binary search tree

2) Elements in stack follow LIFO or FILO property
2) Elements in heap follow heap property 


*/

//stack is already implemented in JavaScritp array. you can simply call push and pop method.
var myStack = [];

//push
myStack.push(1);
myStack.push(2);
myStack.push(3);

//pop
myStack.pop(); //3
myStack.pop(); //2
myStack.pop(); //1


remove an particular elemnt from array
myQueue.splice(index,1)

//Queue is pretty much same. other than calling pop you will use shift method to get the element in the front side of your array.

var myQueue = [];

//push
myQueue.push(1);
myQueue.push(2);
myQueue.push(3);

//pop
myQueue.shift(); //1
myQueue.shift(); //2
myQueue.shift(); //3


remove an particular elemnt from array
myQueue.splice(index,1)
