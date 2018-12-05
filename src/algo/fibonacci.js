/*Memoization
Finally, and following the recursive approach we will use memoization to improve our efficiency, 
but first of all, what’s memoization
This change will increase the space complexity of our new algorithm to O(n) 
but will dramatically decrease the time complexity to 2N which will resolve to linear time since 2 is a constant.
*/


var fibonacci = function(num, memo) {
    memo = memo || {};
  
    if (memo[num]) return memo[num];
    if (num <= 1) return 1;
  
    return memo[num] = fibonacci(num - 1, memo) + fibonacci(num - 2, memo);
  }

  console.log(fibonacci(5));
  