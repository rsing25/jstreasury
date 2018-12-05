"use strict"

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


const createPost = (post,callback)=> {
    setTimeout( ()=> {
        posts.push(post);
        callback();
    },2000);
}

/*
createPost({title:'post three', body:'This is post three'});
getPosts();

m-c02xd0uxjgh7:test rsing25$ node callback.js
post one
post two
*/

createPost({title:'post three', body:'This is post three'}, getPosts);
/*
m-c02xd0uxjgh7:test rsing25$ node callback.js
post one
post two
post three
*/
