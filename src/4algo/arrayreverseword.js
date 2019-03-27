//  Reverse word in string + string methods
// word should be reversed but string as a whole should not be reversed
// should not use array.reverse() method

function reverseWords(string) { 
var wordsArr = string.split(' '); 
var reversedWordsArr = [];
wordsArr.forEach(word => {
var reversedWord = '';
// Reverse String : Looping every word in backword for 
reversedWordsArr.push(word.split('').reverse().join(''));

});
return reversedWordsArr.join(' '); 
}
reverseWords('this is a string of words'); 'siht si a gnirts fo sdrow'
