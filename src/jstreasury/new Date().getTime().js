
/**
 * The internal clock in JavaScript starts at midnight January 1, 1970.
 * Click the button to display the number of milliseconds since midnight, January 1, 1970.
 */
"use strict"

var currentDate = new Date();
var currentTime = new Date().getTime(); // in miliseconds.

var timeOneSecondPlus = new Date().getTime() + 1000 //ms

var diffInMilliSeconds =  timeOneSecondPlus - currentTime //
var diffInSeconds = diffInMilliSeconds/1000;

console.log("currentDate        "+currentDate);
console.log("currentTime        "+currentTime);
console.log("timeOneSecondPlus      "+timeOneSecondPlus);
console.log("diffInMilliSeconds     "+diffInMilliSeconds);
console.log("diffInSeconds      "+diffInSeconds);