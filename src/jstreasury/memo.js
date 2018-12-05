"use strict"

var helloWorld = function(x,y) {
    console.log(x,y);
}

var memo = function(func) {

    const store = {};

    return function() {
        // check arguements here?
        // if arguments is the same as prevoius // return previous value
        // else compute
        // store
        // return value
    console.log(" arguments before  stringify "+arguments);
    const args = JSON.stringify(arguments);
    if (store[args]) { 
        console.log("cached result");
        return store[args];
    } else {
        console.log("acutal result");
        store[args] = func.apply(null, arguments);
        return store[args]; 
    }
        // if store has args => return store[args]; // store[args] = value;
        // return value;
    } 
}
    const enhancedHelloWorld = memo(helloWorld); // enhancedHelloWorld()
    enhancedHelloWorld.call(this,1,2);
    enhancedHelloWorld.apply(this,[1,2]);
    enhancedHelloWorld.bind()(1,2)
