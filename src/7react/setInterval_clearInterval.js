Example
Display the current time (the setInterval() method will execute the "myTimer" function once every 1 second).

Use clearInterval() to stop the time:

var myVar = setInterval(myTimer, 1000);

function myTimer() {
  var d = new Date();
  var t = d.toLocaleTimeString();
  document.getElementById("demo").innerHTML = t;
}

function myStopFunction() {
  clearInterval(myVar);
}