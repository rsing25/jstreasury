outer join
inner join


btree 
for indexing


// var _ = require('underscore');

// function sayHello() {
//   console.log('Hello, World');
// }

// _.times(5, sayHello);




const arr = [1, 2, [3, 4, [5], 6], 7, 8];


const flatten = (arr , retA ) => {   
  
  const retArr = retA || [];
  
  arr.forEach( (arrVal, index) => {
  
    if (!Array.isArray(arrVal)) {
      retArr.push(arrVal)
    } else {
      flatten(arrVal,retArr);
    }    
  });

  return retArr;

}

console.log(flatten(arr));

/* 
Your previous Ruby content is preserved below:

# Array#flatten
# [1, 2, [3, 4, [5], 6], 7, 8].flatten => [1, 2, 3, 4, 5, 6, 7, 8]
# Implement Array#flatten

def my_flatten(arr)
  result = [];

  for val in arr
    
  end
  
end

my_flatten([1, 2, [3, 4, [5], 6], 7, 8]) 
# => [1, 2, 3, 4, 5, 6, 7, 8]
 */