"use strict"

Promise.resolve(x=1).then((val)=>{console.log(val)});
// 1

const posts = [
    {title:'post one', body:'This is post one'},
    {title:'post two', body:'This is post two'}
];

function getPosts() {
    setTimeout( () => {
        let output ='';
        // ES6 Template Strings  ` `
        posts.forEach((post,index) => {
            output +=`${post.title}\n`
        });
        console.log(output);
    },1000)
}


const  createPost = (post)=> {
    return new Promise( (resolve,reject) =>{
        setTimeout( ()=> {
            console.log("createPost")
            posts.push(post);
            const error = true;
            if (!error) {
                resolve();
            } else {
                reject("There is some error")
            }
        },2000);   
    });
}

// .then() and .catch() both will have callback function with response
createPost({title:'post three', body:'this is post three'})
    .then( (res) => { getPosts();}  )
    .catch ( (res) => {console.error(res)});
