"use strict"

// add(1, 2, 3..) === add(1)(2)(3)


var add = function(...x) {
    const curried = function(...y) {
        return add(...x,...y);
    }

    curried.sumByReduce = function () {
        return x.reduce(function(sum,current){
            return sum+ current;
        },0);
    }

    return curried;
    
}

console.log(add(1,2,3).sumByReduce());

console.log(add(1)(2)(3).sumByReduce());