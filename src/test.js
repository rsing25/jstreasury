"use strict"

// Write a function that takes in a sentence, 
// and returns the word with the most characters.
// If it's a tie between two words, return the first one.
// e.g. longestWord('what is the longest word? --> 'longest'

const longestWord = (sentence) => {
    let maxLength =0;
    let maxWord = null;
    sentence.split(' ').forEach( (word) => {
        if(word.length > maxLength) {
            maxWord = word;
            maxLength = word.length;
        }
    })
    return maxWord;
}

console.log(longestWord("Hi this is rajesh"));


// 1. What is callback?
// 2. Write out example of callback.

/** What is a Callback or Higher-order Function?

A callback function, also known as a higher-order function, 
is a function that is passed to another function (let’s call this other function “otherFunction”) as a parameter,
 and the callback function is called (or executed) inside the otherFunction.
  A callback function is essentially a pattern (an established solution to a common problem), 
  and therefore, the use of a callback function is also known as a callback pattern.

*/
const posts = []

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

