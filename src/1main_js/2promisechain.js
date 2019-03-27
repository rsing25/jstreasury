"use strict"

const weather = true;

const date = new Promise( (resolve,reject) => {

    const dateDetails = {
        name : 'inchin bamboo',
        location : 'sunnyvale ca',
        table: 5
    }

    if(weather) {
        // data passed in resolved will be avaialbe as response of  .then  method
        resolve(dateDetails);
    } else {
        // data passed in reject will be avaialbe as response of  .catch  method
        reject( new Error("Bad Weather. So no date"));
    }
});

const orderUber = (dateDetails) => {
    // es6 templete strings
    const message = `Get me an uber asap to ${dateDetails.name} at ${dateDetails.location}. We are going on date `;
    return Promise.resolve(message);

    // above or below both will do same 

    /*
    return new Promise((resolve,reject) => {
        const message = `Get me an uber asap to ${dateDetails.name} at ${dateDetails.location}. We are going on date `;
        resolve(message);
    });
    */

}

date.then ( (response) => {
    console.log(response);
    return response;
})
.then (orderUber)
.then ((response) => {
    console.log(response);
})
.catch( (error) => {
    console.log(error.message);
});

/*
m-c02xd0uxjgh7:test rsing25$ node promisechain.js
{ name: 'inchin bamboo', location: 'sunnyvale ca', table: 5 }
Get me an uber asap to inchin bamboo at sunnyvale ca. We are going on date
*/