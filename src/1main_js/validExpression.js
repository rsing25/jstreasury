[()]{}{[()()]()} -> true

[(]) -> false


[()] -> true




Const validExpression = ( strIn ) => {

Const strInArr = strIn.split(“”);

if( strInArr %2  != 0) {
	return false;
} else {
	Let isValid = true;
for(var i = 0; i < strInArr.length/2; i++) {
	if(strInArr[i] === “[” && strInArr[ (strInArr.length -1)-i] === ”]” ) {
	} else if(strInArr[i] === “(” && strInArr[ (strInArr.length -1)-i] === ”)” ) {
	} else if(strInArr[i] === “{” && strInArr[ (strInArr.length -1)-i] === ”}” ) {
	} else  {
	isValid = false; 
	}
}
return isValid;
}
}

console.log(validExpression(“[()]”));

0	[
1	(
2	)
3	]



[()]{}{[()()]()}


[()]
0123

{}
{  [( ) ( ) ](  ) }
0123456789



Const validExpression = ( strIn ) => {

Const strInArr = strIn.split(“”);


if( strInArr %2  != 0) {
	return false;
} else {
	Let isValid = true;
for(var i = 0; i < strInArr.length; i++) {
	if(strInArr[i] === “[” ) {
	   If ( i%2 == 0 && (strInArr.indexOf(“]”) %2 !=0) ) {
	   } else If ( i%2 != 0 && (strInArr.indexOf(“]”) %2 ==0) ) {
   } else {
isValid = false; 

  }
	  

	} else  {
	isValid = false; 
	}
}
return isValid;
}
}

