function * generatorFunction() { // Line 1
    console.log('This will be executed first.');
    yield 'Hello, ';   // Line 3
    console.log('I will be printed after the pause');  
    yield 'World!'; // Line 5
  }
  const generatorObject = generatorFunction();

  console.log(generatorObject.next().value); // Line 3
  console.log(generatorObject.next().value); // Line 5
  console.log(generatorObject.next().value); // Line 6
  
  // This will be executed first.
  // Hello, 

  // I will be printed after the pause
  // World!
  
  // undefined
  

  function *naturalNumbers() {
    let num = 1;
    while (true) {
      yield num;
      num = num + 1
    }
  }
  const numbers = naturalNumbers();
  console.log(numbers.next().value)
  console.log(numbers.next().value)
  console.log(numbers.next().value)