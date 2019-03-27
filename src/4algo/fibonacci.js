/*Memoization
Finally, and following the recursive approach we will use memoization to improve our efficiency,

but first of all, what’s memoization
This change will increase the space complexity of our new algorithm to O(n) 

but will dramatically decrease the time complexity to 2N which will resolve 
to linear time since 2 is a constant.
*/


  var fib = function(n) {
    let arr = [0, 1];
    for (let i = 2; i < n + 1; i++) {
      arr.push(arr[i - 1] + arr[i -2]);

    }
    return arr;
  }

  console.log(fib(10));

  var fibonacci = function(n, memo) {
    memo = memo || {};

    if (n < 2) {
      return n
    }
    return fibonacci(n - 1, memo) + fibonacci (n - 2, memo)
  }

  console.log(fibonacci(10));
  /*

  [ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55 ]
  55

  */