"use strict"

// 1) Introduction: callbacks

/** JavaScript are asynchronous. */
function loadScript(src) {
    let script = document.createElement('script');
    script.src = src;
    document.head.append(script);
  }

//  But if we do that immediately after the loadScript(…) call, that wouldn’t work:
loadScript('/my/script.js'); // the script has "function newFunction() {…}"  
newFunction(); // no such function!

/*Let’s add a callback function as a second argument to loadScript that should execute when the script loads:*/
function loadScript(src, callback) {
  let script = document.createElement('script');
  script.src = src;
  script.onload = () => callback(script);
  document.head.append(script);
}

loadScript('/my/script.js', function() {
    // the callback runs after the script is loaded
    newFunction(); // so now it works
});

// 2) Callback in callback
  /*How to load multiple scripts sequentially */
  loadScript('/my/script.js', function(script) {
    loadScript('/my/script2.js', function(script) {
      loadScript('/my/script3.js', function(script) {
        // ...continue after all scripts are loaded
      });
    })
  });

  
  //Handling errors

  function loadScript(src, callback) {
    let script = document.createElement('script');
    script.src = src;
  
    script.onload = () => callback(null, script);
    script.onerror = () => callback(new Error(`Script load error for ${src}`));
  
    document.head.append(script);
  }

  loadScript('/my/script.js', function(error, script) {
    if (error) {
      // handle error
    } else {
      // script loaded successfully
    }
  });


  //callback hell” or “pyramid of doom

  /**it’s a viable way of asynchronous coding. And indeed it is. For one or maybe two nested calls it looks fine
   *  But for multiple asynchronous actions that follow one after another we’ll have code like this: 
   * 
   * in the code below:

    We load 1.js, then if there’s no error.
    We load 2.js, then if there’s no error.
    We load 3.js, then if there’s no error – do something else (*).
    As calls become more nested, the code becomes deeper and increasingly more difficult to manage, especially if we have a real code instead of ..., that may include more loops, conditional statements and so on.

    That’s sometimes called “callback hell” or “pyramid of doom.”
*/

  loadScript('1.js', function(error, script) {

    if (error) {
      handleError(error);
    } else {
      // ...
      loadScript('2.js', function(error, script) {
        if (error) {
          handleError(error);
        } else {
          // ...
          loadScript('3.js', function(error, script) {
            if (error) {
              handleError(error);
            } else {
              // ...continue after all scripts are loaded (*)
            }
          });
  
        }
      })
    }
  });

