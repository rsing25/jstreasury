// Using Object.assign() method
// The Object.assign() method is used to copy the values of all enumerable 
// own properties from one or more source objects to a target object

//Note: Properties on the prototype chain and non-enumerable properties cannot be copied. See here:

let obj = {
    a: 1,
    b: {
      c: 2,
    },
  }
  let newObj = Object.assign({}, obj);
  console.log(newObj); // { a: 1, b: { c: 2} }
  obj.a = 10;
  console.log(obj); // { a: 10, b: { c: 2} }
  console.log(newObj); // { a: 1, b: { c: 2} }
  newObj.a = 20;
  console.log(obj); // { a: 10, b: { c: 2} }
  console.log(newObj); // { a: 20, b: { c: 2} }
  newObj.b.c = 30;
  console.log(obj); // { a: 10, b: { c: 30} }
  console.log(newObj); // { a: 20, b: { c: 30} }
  // Note: newObj.b.c = 30; Read why..
  //Why is obj.b.c = 30? we have problem here
  


// Using JSON.parse(JSON.stringify(object));
// This fixes the issue we had earlier. Now newObj.b has a copy and not a reference! This is a way to deep copy objects. Here's an example:

let obj = { 
  a: 1,
  b: { 
    c: 2,
  },
}
let newObj = JSON.parse(JSON.stringify(obj));
obj.b.c = 20;
console.log(obj); // { a: 1, b: { c: 20 } }
console.log(newObj); // { a: 1, b: { c: 2 } } (New Object Intact!)

// Another Way to Deep clone

function cloneObject(obj) {
    var clone = {};
    for(var i in obj) {
        if(obj[i] != null &&  typeof(obj[i]) == "object")
            clone[i] = cloneObject(obj[i]);
        else
            clone[i] = obj[i];
    }
    return clone;
}


