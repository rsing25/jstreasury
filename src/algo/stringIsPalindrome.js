// return true if string is Palindrome

function isPalindrome(str) {
str = str.replace(/\W/g, '').toLowerCase(); 
return (str == str.split('').reverse().join(''));
}
console.log(isPalindrome("level")); 
console.log(isPalindrome("levels"));
console.log(isPalindrome("A car, a man, a maraca")); // logs 'true'


function isPalindrome1(string) { 
    string = string.toLowerCase();
    // split by empty string will give array of character
    var charactersArr = string.split('');
    var validCharacters = 'abcdefghijklmnopqrstuvwxyz'.split('');
    var lettersArr = []; 
    charactersArr.forEach(char => {
    // Array.indexof(value)
    if (validCharacters.indexOf(char) > -1) { 
        lettersArr.push(char);
    } 
    });
    return lettersArr.join('') === lettersArr.reverse().join(''); 
}
    
isPalindrome1("Madam, I'm Adam"); 
isPalindrome1(“race, ran”);