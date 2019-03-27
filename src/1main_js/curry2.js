
function curry2(x) {
  return (y) => {
    return x+y;
  }
}

console.log(curry2(2)(3));


function strictCurry(fn) {
    console.log("strictCurry.length "+strictCurry.length);
    return (x) => {
      console.log("x "+x);
      if (fn.length <= 1) {
        return fn(x);
      }
    console.log("fn.length "+fn.length);
    return strictCurry(fn.bind(null, x));
    };
  }
  
  const multiply = (x, y, z) => {
    return x * y * z
  };
  
  console.log(strictCurry(multiply)(5)(2)(3)) // 30
  console.log("here");
  
  console.log(multiply.bind(null, 1 , 2, 5)());
  console.log(multiply.bind(null, 2).bind(null, 1).bind(null, 5)());


  function curry(fn) {
    return (...xs) => {
      if (xs.length === 0) {
        throw Error('EMPTY INVOCATION');
      }
      if (xs.length >= fn.length) {
        return fn(...xs);
      }
      return curry(fn.bind(null, ...xs));
    };
  }
  console.log(curry(multiply)(5)(2)(3)) // 30
