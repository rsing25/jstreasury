/*
Objects/ Clousure
objects have a special hidden property [[Prototype]]
t __proto__ is not the same as [[Prototype]]. 
That’s a getter/setter for it.



*/

let animal = { 
    eats: true
};
let rabbit = {
    jumps: true 
};
rabbit.__proto__ = animal; //This line sets animal to be a prototype of rabbit.
console.log(rabbit.eats)


function Person(name){ 
    this.name =name;
}
Person.prototype.syaName = function () { 
    console.log(this.name);
}
var p1 = new Person("dd");
p1.syaName();
var p2 = new Person("mm");
p2.syaName();



function Rectangle (len,w){ 
    this.len =len;
    this.w = w;
    this.getArea = function () {
        console.log(this.len * this.w);
    }
}
function Square(s){ 
    this.len =s;
    this.w = s;
}
Square.prototype = new Rectangle();
Square.prototype.construcgor = Square;

var sq = new Square(5);
sq.getArea();


//Object.create 

prototypeObject = {
	fullName: function(){
		return this.firstName + " " + this.lastName		
	}
}

var person = Object.create(prototypeObject, {
      'firstName': {
            value: "Virat", 
            writable: true, 
            enumerable: true
      },
      'lastName': {
                value: "Kohli",
                writable: true,
                enumerable: true
      }
})
    
console.log(person) 



// strict mode is important, as otherwise instead of a TypeError // you will just have a silent failure
'use strict'
const obj = { 
    answer: 42
} 
Object.freeze(obj)
obj.answer = 43 // throws TypeError about read only property obj.newProperty = 'foo' // throws TypeError about object not being extensible Object.defineProperty(obj, 'bar', {value: 'bar'}) // the same TypeError



let parent = { 
    type: "parent",
    getName: function(){
        return this.type;
    }
};
let child = {
    type: "child" 
};



child.__proto__ = parent; //This line sets animal to be a prototype of rabbit.
console.log(child.getName());
console.log(parent.getName());

console.log(    parent.getName.call(child, null)     ); // IMP parent.getName no parenthesis () just func name

console.log(    parent.getName.apply(child, null)    ); // IMP parent.getName no () just func name

console.log(    parent.getName.bind(child, null)()    ); // IMP parent.getName no () just func name
