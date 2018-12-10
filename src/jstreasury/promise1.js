/**
 * A promise is an object that has 2 internal properties:
 *  
 * state — initially “pending”, then changes to either “fulfilled” or “rejected”,
 * result — an arbitrary value of your choosing, initially undefined
 * 
 * 
 * The function passed to new Promise is called the executor.
 * When the promise is created, this executor function runs automatically
 * When the executor finishes the job, it should call one of the functions that it gets as arguments:
    
    resolve(value) — to indicate that the job finished successfully:
    sets state to "fulfilled",
    sets result to value.

    reject(error) — to indicate that an error occurred:
    sets state to "rejected",
    sets result to error.
 */


// let promise = new Promise(function(resolve, reject) {
// });


function loadScript(src) {
    return new Promise(function(resolve, reject) {
      let script = document.createElement('script');
      script.src = src;
  
      script.onload = () => resolve(script);
      script.onerror = () => reject(new Error("Script load error: " + src));
  
      document.head.append(script);
    });
  }

  let promise = loadScript("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js");

promise.then( (script) => { console.log(`${script.src} is loaded!`) }, (error) => {console.log(`Error: ${error.message}`)} );

promise
.then(  (script) => { console.log(`${script.src} is loaded!`) })
.catch( (error) => { console.log(`Error: ${error.message}`)} );


//  promise.then(
//     function(result) { /* handle when Promise is resolves and receives the result */ },
//     function(error) { /* handle when when the Promise is rejected and receives the error */ }
//   );

//   // OR
//   promise.then(
//     function(result) { /* handle a successful result */ },
//   ).catch(
//     function(error) { /* handle an error */ }
//   );
