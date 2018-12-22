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



const multiply = (x, y, z) => {
    console.log("x"+x +"y"+y+"z"+z);
    return x * y * z
  };
//both are same. 
//bind() each time will return a function with passed argument.
  console.log(multiply.bind(null, 1 , 2, 5)());
  console.log(multiply.bind(null, 2).bind(null, 1).bind(null, 5)());