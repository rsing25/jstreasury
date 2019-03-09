const promise1 = Promise.resolve('Hellow World');
const promise2 = 10;
const promise3 = new Promise( (resolve,reject) => {
    setTimeout(() => {
        resolve("Hi from resolve");
    },1000);
});

// fetch you need two .then 
//first .then will format json 
//second .then will return data
const promise4 = 3 // fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json());


// Promie.all accepts an array only.
// then ( (res) => {}) response will alsoe be an array only.
Promise.all( [promise1,promise2,promise3,promise4] ).then((res) => {
    res.forEach( (resval) => {
        console.log(resval)
        });
})