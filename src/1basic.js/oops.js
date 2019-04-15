Object-Oriented Programming is a methodology or paradigm to design a program using classes and objects. 
It simplifies the software development and maintenance by providing some concepts:

Object
Class

1)	Inheritance
2) 	Polymorphism
3) 	Abstraction
4)	Encapsulation

==================================================================================================================================



Why use inheritance in java
For Method Overriding (so runtime polymorphism can be achieved).
For Code Reusability.

==================================================================================================================================
Polymorphism  (overloading and overriding)

There are two types of polymorphism in Java: compile-time polymorphism and runtime polymorphism. 
We can perform polymorphism in java by method overloading and method overriding.

Runtime Polymorphism in Java
Runtime polymorphism or Dynamic Method Dispatch is a process in which a call to an overridden method is resolved at runtime 
rather than compile-time.
class Bike{  
  void run(){System.out.println("running");}  
}  
class Splendor extends Bike{  
  void run(){System.out.println("running safely with 60km");}  
  
  public static void main(String args[]){  
    Bike b = new Splendor();//upcasting  
    b.run();  
  }  
} 
//running safely with 60km.
==================================================================================================================================




Abstract class in Java
A class which is declared with the abstract keyword is known as an abstract class in Java. 
It can have abstract and non-abstract methods (method with the body).

There are two ways to achieve abstraction in java

Abstract class (0 to 100%)
Interface (100%)

Abstract class in Java
A class which is declared as abstract is known as an abstract class. It can have abstract and non-abstract methods. It needs to be extended and its method implemented. It cannot be instantiated.

Points to Remember
An abstract class must be declared with an abstract keyword.
It can have abstract and non-abstract methods.
It cannot be instantiated.
It can have constructors and static methods also.
It can have final methods which will force the subclass not to change the body of the method.


==================================================================================================================================	

encapsulation in Java
Encapsulation in Java is a process of wrapping code and data together into a single unit, for example, a capsule which is mixed of several medicines.

encapsulation in java
We can create a fully encapsulated class in Java by making all the data members of the class private. 
Now we can use setter and getter methods to set and get the data in it.


