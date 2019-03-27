/* The reduce() method reduces the array to a single value.
   sum is variable and 0 is default value order is each value of array of orders
   
   var totalAMout = orders.reduce( function(sum,order){ }, 0);
*/


var orders = [
    {amout : 250},
    {amout: 400},
    {amout: 100}
];

var totalAmount = orders.reduce( function(sum,order) {
        console.log("hello",sum,order);
        return sum+order.amout;
}, 0);
console.log(totalAmount);


/*
m-c02xd0uxjgh7:js rsing25$ node reduce.js
hello 0 { amout: 250 }
hello 250 { amout: 400 }
hello 650 { amout: 100 }
750
*/

Array.prototype.reduceNew = function (defalutVal) {

        let sum = defalutVal;
        this.forEach ( (element, index) => {
            sum += element.amount;
        });
        return sum;
}
    
console.log( orders.reduceNew(0));

// we can not pass an object
// var totalAmount = orders.reduce( function(resultArr,order) {
//         console.log("hello",resultArr,order);
//         console.log(typeof resultArr);
//         var returnVal = resultArr.push(order.amout)
//         return returnVal;
// }, []);
// console.log(totalAmount);