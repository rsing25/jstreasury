/* There are 4 static methods in the Promise class. 
There are 4 static methods of Promise class:

Promise.resolve(value) – makes a resolved promise with the given value,
Promise.reject(error) – makes a rejected promise with the given error,
Promise.all(promises) – waits for all promises to resolve and returns an array of their results. If any of the given promises rejects, then it becomes the error of Promise.all, and all other results are ignored.
Promise.race(promises) – waits for the first promise to settle, and its result/error becomes the outcome.
*/


//(1) Promise.resolve

let promise1 = Promise.resolve(value); //Returns a resolved promise with the given value.
//Same as:
let promise2 = new Promise((resolve, reject) => resolve(value));


/*For instance, the loadCached MEMO function below fetches the url and remembers the result, 
so that future calls on the same URL return it immediately:
*/

function loadCached(url) {
    let cache = loadCached.cache || (loadCached.cache = new Map());
  
    if (cache.has(url)) {
      return Promise.resolve(cache.get(url)); // (*)
    }
  
    return fetch(url)
      .then(response => response.text())
      .then(text => {
        cache.set(url,text);
        return text;
      });
  }
  /* We can use loadCached(url).then(…), because the function is guaranteed to return a promise. 
  That’s the purpose Promise.resolve in the line (*): 
  it makes sure the interface unified. We can always use .then after loadCached.*/

  //(2)Promise.reject
  let promise3 = Promise.reject(error);
  // same as 
  let promise4 = new Promise((resolve, reject) => reject(error));

  //(3)Promise.all

  /**For instance, if we have an array of URLs, we can fetch them all like this: */
  
  let urls = [
    'https://api.github.com/users/iliakan',
    'https://api.github.com/users/remy',
    'https://api.github.com/users/jeresig'
  ];
  
  // map every url to the promise fetch(github url)
  let requests = urls.map(url => fetch(url));
  
  // Promise.all waits until all jobs are resolved
  Promise.all(requests)
    .then(responses => responses.forEach(
      response => alert(`${response.url}: ${response.status}`)
    ));


//    (4) Promise.race.  Similar to Promise.all takes an iterable of promises,
// but instead of waiting for all of them to finish – waits for the first result (or error), and goes on with it.









