//--->USING JSX COMPONENT that need some kind of build system webpack or babel
const content = 'Hello World'

// IN jsx once you put in curly braces you are in javascript you can use IIEF 

const element = (<div className="container">{ ( ()=> content )() } </div>)



/*
7. What do you understand by Virtual DOM? Explain its working.
A virtual DOM is a lightweight JavaScript object which originally is just the copy of the real DOM.

It is a node tree that lists the elements, their attributes and content as Objects and their properties. 
React’s render function creates a node tree out of the React components. 
It then updates this tree in response to the mutations in the data model which is caused by various actions done by the user or by the system.
This Virtual DOM works in three simple steps.

Whenever any underlying data changes, the entire UI is re-rendered in Virtual DOM representation.

Then the difference between the previous DOM representation and the new one is calculated.

Once the calculations are done, the real DOM will be updated with only the things that have actually changed. 

*/


/*

What is Props? Props is the shorthand for Properties in React. 
They are read-only components which must be kept pure i.e. immutable.

Understanding ReactJS Props
In ReactJS we use props to send data to components.
In ReactJS every component is treated as a pure javascript function.
In ReactJS props are equivalent to parameters of a pure javascript function.
Props are immutable. Because these are developed in the concept of pure functions. In pure functions we cannot change the data of parameters. So, also cannot change the data of a prop in ReactJS.
*/


/**
 * What is a state in React and how is it used?
 * 
State is like a data store to the ReactJS component. It is mostly used to update the component when user performed some action like clicking button, typing some text, pressing some key, etc.
React.Component is the base class for all class based ReactJS components. Whenever a class inherits the class React.Component it’s constructor will automatically assigns attribute state to the class with intial value is set to null. we can change it by overriding the method constructor.
In many cases we need to update the state. To do that we have to use the method setState and directly assigning like this.state = {'key': 'value'} is strictly prohibited.


 /**
  * Stateful Component:ontains the knowledge of past, current and possible future changes in state
  * 
  * Stateless Component : They receive the props from the Stateful components and treat them as callback functions.
  */

  /**
   * 
   *  
Higher Order Component is an advanced way of reusing the component logic.
 Basically, it’s a pattern that is derived from React’s compositional nature. 
 HOC are custom components which wrap another component within it. 
 They can accept any dynamically provided child component but they won’t modify or copy any behavior from their input components.
  You can say that HOC are ‘pure’ components.

  HOC can be used for many tasks like:

Code reuse, logic and bootstrap abstraction
Render High jacking
State abstraction and manipulation
Props manipulation
*/

/**
 * 
 * redux is one of the hottest libraries for front-end development in today’s marketplace. 
 * It is a predictable state container for JavaScript applications and is used for the entire applications state management. Applications developed with Redux are easy to test and can run in different environments showing consistent behavior.
 
  * Actions in React must have a type property that indicates the type of ACTION being performed. 
  * They must be defined as a String constant and you can add more properties to it as well
 
   * Reducers are pure functions which specify how the application’s state changes in response to an ACTION. 
   */