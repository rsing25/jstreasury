// Queue class 
class Queue { 

    // Array is used to implement a Queue 
    constructor() { 
        this.items = []; 
    } 


    // enqueue function 
        enqueue(element) {     
            // adding element to the queue 
            this.items.push(element); 
        } 

        dequeue() { 
            // removing element from the queue 
            // returns underflow when called  
            // on empty queue 
            if(this.isEmpty()) 
                return "Underflow"; 
            return this.items.shift(); 
        }

} 

