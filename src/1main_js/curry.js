"use strict"


//Currying is the process of taking a function with multiple arguments
// and turning it into a sequence of functions each with only a single argument.

const notCurry = (x, y, z) => x + y + z; // a regular function
const curry = x => y => z => x + y + z; // a curry function

//If you don’t provide all parameters for a function, 
//it returns a function whose input are the remaining parameters and whose output is the result of the original function.

// avg function takes n number of arguments.
var avg = function(...n) {
    console.log(...n);
    let tot = 0;
    for(let i=0; i<n.length; i++) {
        tot += n[i]
    }
    return (tot/n.length);
};

// this function going to curry it.
// first argument is callback function ,
// second argument is bunch of argument.

var spiceUp = function(fn,...m) {
    // it will return a function which will have another n number of arguments.
    return function(...n) {
        // ...n argument is clsoure to function.
        // n.concat(m) will give another which will have contact of values.
        // i will call n+m arguments to fn function
        // i will call that function.
        return fn.apply(this, n.concat(m));
    }
};


var result = spiceUp(avg,1,2,3)(4,5,6);
console.log("result"+result);
