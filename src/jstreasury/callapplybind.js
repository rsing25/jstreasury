var obj = { num:2 };

var myFunc = function(...n) {
    console.log(this);
    console.log(...n , n.length);
}

myFunc.call(obj, 1,2,3);

myFunc.apply(obj, [4,5]);

console.log("-------------");
var returnFunc = myFunc.bind(obj);
returnFunc(6,7,8); // comma sperated values correct way passing to a function with spread operater as in;put.
returnFunc([9,10]); // wrong // you are passing a array.