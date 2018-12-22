// Objects
// Most Javascript Object conversions usually result in [object Object], For example

"name" + {} // "name[object Object]

// Every javascript Object inherits a toString method, 
// that is called whenever an Object is to be converted to a string. 
// The return value of the toString method is used for such operations 
// as string concatenation and mathematical expressions.

const foo = {}
foo.toString() // [object Object]

const baz = {
  toString: () => "I'm object baz"
}

baz + "!" // "I'm object baz!"

// When it's a mathematical expression, Javascript will attempt to convert 
//the return value to a number, if it's not.

const foo = {
    toString: () => 4
  }
  
  2 * foo // 8
  2 / foo // 0.5
  2 + foo // 6
  "four" + foo // "four4"
  
  const baz = {
    toString: () => "four"
  }
  
  2 * baz // NaN
  2 + baz // 2four
  
  const bar = {
    toString: () => "2"
  }
  
  2 + bar // "22"
  2 * bar // 4
  

