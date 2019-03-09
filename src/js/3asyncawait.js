"use strict"
//https://javascript.info/async-await#async-functions

// 1) Async functions

    /** The word “async” before a function means one simple thing: a function always returns a promise. 
     * If the code has return <non-promise> in it, then JavaScript automatically wraps it into a resolved promise with that value.*/

    /** Async functions */
    async function f() {
        return 1;
    }

    f().then( (res) => {
      console.log(res);
    }); // 1

    /** We could explicitly return a promise, that would be the same:*/
    async function f() {
    return Promise.resolve(1);
    }

    f().then(alert); // 1
    /** So, async ensures that the function returns a promise, and wraps non-promises in it.*/


// 2) Await
    /**The keyword await makes JavaScript wait until that promise settles and returns its result. */

    async function f() {

        let promise = new Promise((resolve, reject) => {
          setTimeout(() => resolve("done!"), 1000)
        });
        let result = await promise; // wait till the promise resolves (*)
        alert(result); // "done!"
      }
      
      /**function execution “pauses” at the line (*) and resumes when the promise settles, 
       * with result becoming its result. So the code above shows “done!” in one second. */

      /** Can’t use await in regular functions
      If we try to use await in non-async function, that would be a syntax error:*/
      function f() {
        let promise = Promise.resolve(1);
        let result = await promise; // Syntax error
      }

      /**We can get such error in case if we forget to put async before a function. As said, await only works inside async function. */
      //Error handling
      /**If a promise resolves normally, then await promise returns the result. 
       * But in case of a rejection, it throws the error, just as if there were a throw statement at that line. 
       * We can catch that error using try..catch, the same way as a regular throw:*/
      async function f() {
        try {
          let response = await fetch('/no-user-here');
          let user = await response.json();
        } catch(error) {
          // catches errors both in fetch and response.json
          console.log(error.message);
        }
      }      

      /*sync/await works well with Promise.all
When we need to wait for multiple promises, we can wrap them in Promise.all and then await:*/
        // wait for the array of results
        let results = await Promise.all([
        fetch(url1),
        fetch(url2),
        ]);

// 3)CONCULSION
      /** async/await and promise.then/catch
        When we use async/await, we rarely need .then, because await handles the waiting for us. 
        And we can use a regular try..catch instead of .catch.  */
