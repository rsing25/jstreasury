// Write a function that takes in a sentence, 
// and returns the word with the most characters.
// If it's a tie between two words, return the first one.
// e.g. longestWord('what is the longest word? --> 'longest'

const longestWord = (sentenceText) => {

     let maxLength = 0;
     let maxWord = null;
     // let alphabet = 'abc..z'.split('');

     sentenceText.split(' ').forEach((word)=>{
          if(word.length > maxLength) {
               maxWord = word;
               maxLength = word.length;
          }
     });

     return maxWord;

}

console.log(longestWord("hi 123 hellow"));

