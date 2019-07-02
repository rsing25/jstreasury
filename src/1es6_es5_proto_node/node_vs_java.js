1) Node.js is based on  Google V8 JavaScript engine to execute code.
2) Node.js provides an event-driven architecture and a non-blocking I/O API 
that optimizes an application's throughput and scalability.
These technologies are commonly used for real-time web applications.




 event-driven architecture

Event-driven architecture (EDA), is a software architecture pattern promoting the production, detection, consumption of, and reaction to events.

An event can be defined as "a significant change in state"
 Event structure
An event can be made of two parts, the event header and the event body. 
The event header might include information such as event name, time stamp for the event, and type of event. 
The event body provides the details of the state change detected. 











Node.js vs Java Comparison Summary
Our comparison of Node.js and Java as backend tools showed that both have strengths and weaknesses that may influence the choice of technology for a particular application. Let’s summarize our findings so that we can easily see the advantages of both.

Node Js 	Same language across both frontend and backend
Node Js 	Faster and easier development
Node Js 	High application speed for IO-intensive apps
Node Js 	Scalability

Java.        Platform independence
Java.        Convenient IDE
Java.        Large ecosystem
Java.        Higher performance for CPU-intensive apps





==================================================================================================================================

Advantages of Java
Platform Independence
Java is known and loved for its “Write Once, Run Anywhere”

Multi-threaded Processing
Java uses a multi-threaded web server that processes each request in a separate thread. 



Advantages of Node.js
Node.js also has quite a number of advantages that have earned the appreciation of JavaScript developers around the globe.

JavaScript Everywhere
This is the major advantage of Node.js and what made it such a breakthrough. Node.js was the first tool that allowed the developers to use JavaScript on the backend.


Faster Development
Node.js has a much easier learning curve than Java, so getting started is quicker. Besides, knowledge sharing within the team is also smoother when everybody knows JavaScript.


Scalability
Both Node.js and Java can execute requests asynchronously, 
which makes the apps built with both tools highly scalable.
 The requests can be executed in parallel with no need to wait until the previous ones are completed.

However, Node.js shows better horizontal scalability achieved by adding more hardware. 
At the same time, with vertical scalability resulting from adding processing power Node.js is not as great, 
as by its single-threaded nature, the thread uses a single core only. For multi-core systems, 
you need to use the cluster module that allows the creation of child processes that use all cores. 
Still, we should note that running a cluster may be a very memory-consuming solution.

==================================================================================================================================