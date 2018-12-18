// Implement a wrapper method rateLimitCall that 
// calls the method call for the given IP
// if there has not been 100 calls from IP in the last second, else throws an exception.

"use strict"
const func = () => {
    console.log("hi");
}
let allowCall = true;
const timeHash = {};
const countHash = {};

const rateLimitCall = (callback, ip) => {
    
    const currentTimne = new Date().getTime()/1000; // convert ms to sec
    
    const ipArray = Object.keys(timeHash);
    
    ipArray.forEach((i) =>{
        if( i === ip && (timeHash[i] -currentTimne) < 1 && countHash[i] < 5) {
        } else {
            allowCall = false;
        }
    });
    
    if(allowCall) {
        timeHash[ip] = currentTimne;
        if(countHash[ip]) {
            countHash[ip] += 1;
        } else {
            countHash[ip] = 1;
        }  
    callback();
    } else {
         throw new Error("there is more than 100 calls for this ip"+ip);
    }
    

}

for(let i=0 ; i < 10; i++){
    rateLimitCall(func, "0.0.0.1");
}
