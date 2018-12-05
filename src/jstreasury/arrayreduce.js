/* The reduce() method reduces the array to a single value.
   sum is variable and 0 is default value order is each value of array of orders
   
   var totalAMout = orders.reduce( function(sum,order){ }, 0);
*/


var orders = [
    {amout : 250},
    {amout: 400},
    {amout: 100}
];

var totalAMout = orders.reduce( function(sum,order) {
        console.log("hello",sum,order);
        return sum+order.amout;
}, 0);


/*
m-c02xd0uxjgh7:js rsing25$ node reduce.js
hello 0 { amout: 250 }
hello 250 { amout: 400 }
hello 650 { amout: 100 }
*/