

 What is a Callback or Higher-order Function?
 
    A callback function, also known as a higher-order function, 
    is a function that is passed to another function (let’s call this other function “otherFunction”) as a parameter,
    and the callback function is called (or executed) inside the otherFunction.
    callback function is also known as a callback pattern.




 Callback Functions Are Closures
    When we pass a callback function as an argument to another function, 
    the callback is executed at some point inside the containing function’s 
    body just as if the callback were defined in the containing function. 
    This means the callback is a closure. 





 Basic Principles when Implementing Callback Functions
 1 Use Named OR Anonymous Functions as Callbacks
    arry.forEach( ()=> {}) // Anonymous Functions callacbl



2 Pass Parameters to Callback Functions
    Since the callback function is just a normal function when it is executed, we can pass parameters to it. 
    
    createPost({title:'post three', body:'This is post three'}, getPosts); // Name Functions callback



 Problem When Using Methods With The this Object as Callbacks
        When the callback function is a method that uses the this object, 
        we have to modify how we execute the callback function to preserve the this object context. 

        Use the Call or Apply Function To Preserve this
        We can fix the preceding problem by using the Call or Apply function



 “Callback Hell” Problem And Solution

 In asynchronous code execution, which is simply execution of code in any order, 
 sometimes it is common to have numerous levels of callback functions to the extent that you have code that looks like the following. 
 The messy code below is called callback hell because of the difficulty of following the code due to the many callbacks.


