
http://demo.nimius.net/debounce_throttle/
====================================================================================================================================
debounce_.debounce(function, wait, [immediate]) 


Creates and returns a new debounced version of the passed function which will postpone its execution 
until after wait milliseconds have elapsed since the last time it was invoked. 

Useful for implementing behavior that should only happen after the input has stopped arriving. 
For example: rendering a preview of a Markdown comment, 
recalculating a layout after the window has stopped being resized, and so on.

var lazyLayout = _.debounce(calculateLayout, 300);
$(window).resize(lazyLayout);
If you need to cancel a scheduled debounce, you can call .cancel() on the debounced function.

====================================================================================================================================
throttle_.throttle(function, wait, [options]) 


Creates and returns a new, throttled version of the passed function, that, when invoked repeatedly, 
will only actually call the original function at most once per every wait milliseconds. 

Useful for rate-limiting events that occur faster than you can keep up with.

By default, throttle will execute the function as soon as you call it for the first time, 

and, if you call it again any number of times during the wait period, as soon as that period is over. If you'd like to disable the leading-edge call, pass {leading: false}, and if you'd like to disable the execution on the trailing-edge, pass 
{trailing: false}.

var throttled = _.throttle(updatePosition, 100);
$(window).scroll(throttled);
If you need to cancel a scheduled throttle, you can call .cancel() on the throttled function.

====================================================================================================================================












Debounce: the original function be called after the caller stops calling the decorated function after a specified period.


const debounce = (func, delay) => {
  let inDebounce
  return function() {
    const args = arguments
    clearTimeout(inDebounce)
    inDebounce = setTimeout(() => func.apply(this, args), delay)
  }
}


debounceBtn.addEventListener('click', debounce(function() {
  console.info('Hey! It is', new Date().toUTCString());
}, 3000));


====================================================================================================================================

Throttle: the original function be called at most once per specified period.

Throttling
The first call to our function will execute and sets the limit period inThrottle. 
We can call our function during this period but it will not fire until the throttle period has passed. 
Once it has passed, the next invocation will fire and the process repeats.

const throttle = (func, limit) => {
  let inThrottle
  return function() {
    const args = arguments
    if (!inThrottle) {
      func.apply(this, args)
      inThrottle = true
      setTimeout(() => inThrottle = false, limit)
    }
  }
}


throttleBtn.addEventListener('click', throttle(function() {
  return console.log('Hey! It is', new Date().toUTCString());
}, 1000));

====================================================================================================================================
