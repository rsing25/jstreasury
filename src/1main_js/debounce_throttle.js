With debouncing, it’s like “Hey, I’m not going to execute that function until I know there are no more changes inbound”.


Debounce is the simpler of the two to implement.

const debounce = (func, delay) => {
  let inDebounce
  return function() {
    const args = arguments
    clearTimeout(inDebounce)
    inDebounce = setTimeout(() => func.apply(this, args), delay)
  }
}



Here’s how that debounce looks in action.

debounceBtn.addEventListener('click', debounce(function() {
  console.info('Hey! It is', new Date().toUTCString());
}, 3000));





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