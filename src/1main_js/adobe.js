why browser cannot execute jsx

JSX is a syntax extension for JavaScript. It was written to be used by React and looks a lot like HTML. But given JSX is not valid JavaScript, web browsers cant read it directly. So, if JavaScript files contains JSX, that that file will have to be transpiled. 

---------------------------------------------------------------------------------------------------------

--why real dom is slow

A virtual DOM object has the same properties as a real DOM object, but it lacks the real thing’s power to directly change what’s on the screen.

Manipulating the DOM is slow. 
Manipulating the virtual DOM is much faster, because nothing gets drawn onscreen. 
Think of manipulating the virtual DOM as editing a blueprint, as opposed to moving rooms in an actual house.


---------------------------------------------------------------------------------------------------------

--A REST API defines 

A REST API defines a set of functions which developers can perform requests and receive responses via HTTP protocol such as GET and POST.

---------------------------------------------------------------------------------------------------------
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

---------------------------------------------------------------------------------------------------------


/** The word “async” before a function means one simple thing: a function always returns a promise. 
     * If the code has return <non-promise> in it, then JavaScript automatically wraps it into a resolved promise with that value.*/

    /** Async functions */
    async function f() {
        return 1;
    }

    f().then( (res) => {
      console.log(res);
    }); // 1


  async function f() {
    try {
      let response = await fetch('/no-user-here');
      let user = await response.json();
    } catch(error) {
      // catches errors both in fetch and response.json
      console.log(error.message);
    }
  }      
  ---------------------------------------------------------------------------------------------------------

--es6 arrorrow functions


Empty function (no body)
const func1 = () => { };


Single Parameter
const add1 = x => x + 1;

Multiple parameters
const sum = (num1, num2) => num1 + num2;




With arrow functions, things become much terser when passing a callback to methods such as map or reduce.

const powerOf2 = [1, 2, 3, 4].map(el => el ** 2) 
// [ 1, 4, 9, 16 ]

// Here's the ES5 way
const powerOf2 = [1, 2, 3, 4].map(function(el) {
  return el ** 2;
});
---------------------------------------------------------------------------------------------------------
------ this

const details = {
  name: 'Arfat',
  friends: ['Bob', 'Alex'],
  getFriends: function () {
    this.friends.forEach(function (friend) {
      console.log(this.name + " is friends with " + friend);
    });
  }
}
details.getFriends();
// undefined is friends with Bob
// undefined is friends with Alex


const details = {
  name: 'Arfat',
  friends: ['Bob', 'Alex'],
  getFriends: function () {
    const that = this;
    this.friends.forEach(function (friend) {
      console.log(that.name + " is friends with " + friend);
    });
  }
}
details.getFriends();
// Arfat is friends with Bob
// Arfat is friends with Alex

We create a new variable that and bind it to the value of this in the getFriends methods.
In the callback to forEach, instead of using this, we use that. Since the callback does not have a variable called that, 
when it searches for it, it also looks in the parent scope. 
In this case, that variable is found in the parent scope which was correctly bound to the details object. Now, the code behaves as expected.




Arrow functions solve this manual rebinding of this. 
This is such a common problem that forEach method also takes an optional second parameter as a custom value of this. Here’s how that code looks like —


const details = {
  name: 'Arfat',
  friends: ['Bob', 'Alex'],
  getFriends: function () {
    this.friends.forEach(function (friend) {
      console.log(this.name + " is friends with " + friend);
    }, this);
  }
}
details.getFriends();
This code will also work as intended. A lot of methods in JavaScript take an optional this argument because of above-mentioned problems.
// Arfat is friends with Bob
// Arfat is friends with Alex



Arrow functions bind this lexically. In other words, Arrow functions always have a value of this keyword taken from the parent scope. That is, they don’t have any intrinsic, own this value.

const details = {
  name: 'Arfat',
  friends: ['Bob', 'Alex'],
  getFriends: function () {
    this.friends.forEach(friend => {
      console.log(this.name + " is friends with " + friend);
    });
  }
}
details.getFriends();
// Arfat is friends with Bob
// Arfat is friends with Alex
---------------------------------------------------------------------------------------------------------


Arrow Functions vs Traditional functions


Can’t use arguments special variable. 
The purpose of arguments variable was to expose all the parameters in an array-like object.


Can’t use arguments special variable.
function sumAll() {
  var i;
  var sum = 0;
  for(i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}
 sumAll(1, 123, 500, 115, 44, 88);  // 871


const sumAll1 = () => {
  var i;
  var sum = 0;
  for(i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
};
sumAll1(1, 123, 500, 115, 44, 88);



VM380:4 Uncaught ReferenceError: arguments is not defined	


--------------------------


Can’t be used as a constructor.
There is no internal method [[Construct]] which allows a normal function to be called by new and no prototype property. Also, Arrow functions do not have their own new.target property, and hence, cannot be used as constructor functions.

const Person = name =>  {
  this.name = name;
}
const person1 = new Person('Arfat'); // Will throw an error
Running the above will cause an exception Person is not a constructor.

--------------------------
an’t change the this binding.
The this value is always bound. It cannot be changed. Even by functions which manually reassign the this value, for example, .bind() or .apply().

However, they still have access to Function.prototype and bind(), apply(), and call() still work. The only difference is that they cannot bind a different this parameter value, but they can pass arbitrary arguments, as shown below.

const add = (a, b) => a + b;
const add5 = add.bind(null, 5);
add5(7); // 12

--------------------------


Can’t be used as generator functions
To use ES6 generators, you have to use function* syntax. Learn more about generators here.

Despite all these differences, arrow functions and traditional functions both have same typeof value and prototype value.

typeof (() => {}) === "function"; // true
Object.getPrototypeOf(() => {}) === Function.prototype; // true








