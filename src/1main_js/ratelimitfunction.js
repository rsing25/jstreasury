//===================================================================

function parent(func, args) {
    return function() {
        console.log("parent");
        func.apply(this, args);
    }
}
var x = [2];
console.log(parent( (x) => console.log("inner func"+x) , x)());

function doStuff (x,y,z) {
    console.log(x,y,z);
}
var args = [0,1,2];

doStuff.apply(this,args);
doStuff(...args);

console.log(doStuff.apply(this, args));
console.log(doStuff(...args));

//===================================================================


function limiter(fn, wait){
    let isCalled = false,
        calls = [];

    let caller = function(){
        console.log("calls.length" + calls.length);
        console.log("isCalled" + isCalled);

        if (calls.length && !isCalled){
            isCalled = true;
            calls.shift().call();
            setTimeout(function(){
                isCalled = false;
                caller();
            }, wait);
        }
    };

    return function(){
        console.log("limiter return function starts");
        calls.push(fn.bind(this, ...arguments));
        // let args = Array.prototype.slice.call(arguments);
        // calls.push(fn.bind.apply(fn, [this].concat(args)));

        caller();
        console.log("limiter return function ends");

    };
}

const logMessageLimited = limiter(msg => { console.log(msg); }, 500);

for (let i = 0; i < 3; i++){
    logMessageLimited(`[Message Log] Action (${i}) rate limited.`);
}

//==========================================================


function debounce(func, wait, immediate) {
    var timeout;
    return function() {
        var context = this,
            args = arguments;
        var later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};

var logging = debounce(function(){
    console.log("Heavy task");
}, 500);


setTimeout(logging, 10); // excute function after 10 ms.
