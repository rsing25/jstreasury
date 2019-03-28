const promise1 = Promise.resolve("Hi");
const promise2 = 10345;
const promise3 = new Promise (() =>{
    setTimeout( () => { "Hi this is Rajesh"},1000);
});

Promise.prototype.newall = function () {
  let globalResult = {};
  let args = arguments;
    
  this.then = function() {
    for(let i=0; i<args.length;i++) {
     args[i].then( (res) => {
        globalResult[res] = res;
     });
    }
  return Object.keys(globalResult);
  }
}

// Example

Promise.newall([promise1, promise2,promise3])
  .then( (results) => {
      results.forEach( (resultVal) => {
        console.log(resultVal);
      });

  })
  .catch(err => {
  
  });