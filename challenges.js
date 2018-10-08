// FIND LARGEST NUMBER
// task: make a function that determines which number is largest
// input: 4, 12, 2
// output: 12
// */

function findLargestNumber(num1, num2, num3) {
	if (num1 > num2 && num1 > num3) {
		return num1;
	}
	if (num2 > num3 && num2 > num1) {
		return num2;
	}
	if (num3 > num1 && num3 > num2) {
		return num3;
	}
}

console.log("this is the largest number", findLargestNumber(4, 12, 2));

/*
task: make a function that, given 3 strings, returns which string is longest
input: 'stuff', 'hi', 'woohoo'
output: 'woohoo'
*/
function findLongestWord(word1, word2, word3) {
	var longestWord = null;
	if (word1.length > word2.length) {
		if (word1.length > word3.length) {
			longestWord = word1 + " word1 is the longest word ";
			return longestWord;
		}
	}
	if (word2.length > word3.length) {
		longestWord = word2 + " word2 is the longest string ";
		return longestWord;
	}
	else {
		longestWord = word3 + ' word3 is the longest word';
		return longestWord;
	}
}

console.log(findLongestWord("horse", "rhinoceros", "cat"));
console.log(findLongestWord("horse", "bowl", "cat"));


/*
DETERMINE EVEN DIBIBILITY
task: make a function that, given 2 numbers, determines if the 1st number
	is evenly divisible by the 2nd number
----
input: 10,2
output: true
----
input: 5, 2
output: false
*/

function determineEvenDivisibility(num1, num2) {
	if (num1 % num2 === 0) {
		return true;
	}
	if (num1 % num2 != 0) {
		return false;
	}
}

console.log('determine even 10, 2 ', determineEvenDivisibility(10, 2));
console.log('determine even 5,2', determineEvenDivisibility(5, 2));


// Build a function that prints the numbers from 1 to 100. But for multiples of three print “Fizz” 
// instead of the number and for the multiples of five print “Buzz”. For numbers which are multiples 
// of both three and five print “FizzBuzz”.





// - Write a function that takes no parameters
// - The function should output the numbers 1 through 100, following the rules from above

/*
CHECK FIRST LETTER CAPITLIZED
task: make a function that, given a string, determines if the 1st letter is capitalized or not
----
input: 'Fruit'
output: true
----
input: 'fruit'
output: false
*/
function checkFirstLetterCapitalized(word) {
	for (var i =0; i < word.length-1; i++) {
		if (word[i] == word[i].toUpperCase()) {
			return true;
		}
		if (word[i] == word[i].toLowerCase()) {
			return false;
		}
	}
}

console.log("this has something in uppercase,", checkFirstLetterCapitalized('Fruit'));


function reverseString(string){ 
	var splitString = string.split(""); 
	var reverseArray = splitString.reverse(); 
	var joinedArray = reverseArray.join(); 
	return joinedArray; 
}

console.log(reverseString("hello")); 


// CHECK OUTSIDE LETTERS
// task: make a function that determines if the first and last letter of a string are the same letter
// ----
// input: 'sisters',
// output: true
// ----
// input: 'mister',
// output: false


function checkOutsideLetters( word ){
		var firstLetter= word[0]; 
		var lastLetter = word[word.length-1]; 
		if (firstLetter === lastLetter){
			return true; 
		}
		else{
			return false; 
		}
}

console.log(checkOutsideLetters("bottom"), "bottom"); 
console.log(checkOutsideLetters('sisters'), "sisters"); 


// REVERSE STRING
// task: make a fuction that uses loops to reverse a string
// input: 'greetings earthlings'
// output: 'sgnilhtrae sgniteerg' 
// // */
function reverseString(string) {
	var newString = '';
	for (var i = string.length; i >= 0; i--) {
		newString = newString + [string[i]]
	}
	return newString;
}

console.log("reverse string", reverseString('greetings earthlings'));

// find the odd numbers between two numbers and push them to a new array 
function findOddNumbers(k,l){
	var oddNumbers=[]; 
	for ( var i = k; i <= l ; i++ ){
		if( i % 2 != 0 ){
			oddNumbers.push(i); 
		}
	}
	return oddNumbers; 
}

console.log("this is the function to find oddNumbers", findOddNumbers(2,5)); 
console.log("this is the function to find oddNumbers", findOddNumbers(41,61)); 
console.log(" this is the second function to find the odd numbers between two numbers", findOddNumbers(6,40)); 

/*
CALCULATE FACTORIAL
task: calculate the factorial of a number
	factorial is a number multiplied by all the numbers lower than it, down to 1
input: 5
output: 120   (5*4*3*2*1)
*/
// function calculateFactorial(number) {
// 	var factorial = number; 
//   for ( var x = number; x >= number ; x--){
	
//   }
// }

// I COULD NOT GET THIS ONE ON MY OWN FOUND ON MEDIUM
function factorialize(num) {
	if (num < 0) 
		  return -1;
	else if (num == 0) 
		return 1;
	else {
		return (num * factorialize(num - 1));
	}
  }
  factorialize(5);


/*
FIND LONGEST WORD IN ARRAY
task: given an array of words, determine which one is the longest and returns it
input: ['great','days','hi']
output: 'great'
*/
// function findLongestWordInArray(wordArray) {

// }

/*
EVERY OTHER LETTER
task: given a string, return a string with every other letter
----
input: 'silliness'
output: 'ilns'
----
input: 'mistermister'
output: 'itritr'
*/
// function getEveryOtherLetter(string) {
  		
// }

/*
ALPHABETIZE LETTERS
task: given a string, return a string with each letter in alphabetical order
----
input: 'marshmallow'
output: 'aahllmmorsw'
----
input: 'tuba'
output: 'abtu'
*/
function alphabetizeLetters(string) {
	var newArray=[]; 
	for (var i=0; i<string.length; i++){
		newArray.push(string[i]); 
	}
	newArray.sort(); 
	var newString = newArray.join(''); 
	return newString; 
}

console.log(alphabetizeLetters("marshmallow")); 



var first=["Dan", "Lisa", "Sam"];
var last = [ "Smith","Burns", "Sale"];  

function combineArrays( firstNames, lastNames){
	var newArray =[]; 
	  for(var i=x=0; i <firstNames.length; i++, x++){
			  newArray.push({first: firstNames[i], last:lastNames[x]})
		  
	  }
	return newArray; 
  }
  
  console.log(combineArrays(first, last)); 
  console.table(combineArrays(first, last)); 

  function countLetters ( word ){
    var vowels =0; 
    var consonants =0; 
    for (var x =0; x <word.length; x++){
         if((word[x]) == "a" || (word[x]) == "e" || (word[x]) == "i" || (word[x]) == "o" || (word[x]) == "u" ) {
             vowels = vowels + 1 ; 
         }
        else {
        consonants = consonants + 1 ; 
        }
    }
    return "vowels:" + vowels + " and "+ "consonants:" + consonants; 
}

console.log( countLetters("word")); 
console.log( countLetters("elephant")); 



function translate(string){
    var stringArray = string.split(" ");
    var pigLatinArray=[]; 
    var arrayIndex=''; 
    for( var i=0; i < stringArray.length; i++){
		arrayIndex=stringArray[i].slice(1,stringArray[i].length); 
        arrayIndex = arrayIndex + stringArray[i][0] + "ay"; 
        pigLatinArray.push(arrayIndex);         
    }   
    var newArray = pigLatinArray.join(); 
    return newArray;  
}


console.log("pig latin string", translate("Hello my name is Stu"));


/*
Given a string, output that string with every letter capitalized
EXCEPT the first and last letters
for example: 
input:
   stuff
   
 output:
   sTUFf
*/

function mountainCase(string) {

}

/*
Determine whether or not the given string can be formed into a palindrome:
input:
  'rcearca'  (mix up of racecar, which is a palindrome)
output:
  true
*/

function findPossiblePalindrome( letters ) {

}

/*
Given 2 numbers, divide the first number by the second
and then output the number with commas put in the appropriate place
for example: 
input: 
  1054204
  2
output: 
  '527,102'
*/
function divideAndFormat(dividend, divisor) {
  
}

/*
Given 2 strings, return a string with the difference between the longest and the shortest
input: 
    "corrupted"
    "carrumba
output:
    'opted'
*/
function hashDifference(firstString, secondString) {

}
/*
Given a string, output that string with every letter capitalized
EXCEPT the first and last letters
for example: 
input:
   stuff
   
 output:
   sTUFf
*/

function mountainCase(string) {

}

/*
Determine whether or not the given string can be formed into a palindrome:
input:
  'rcearca'  (mix up of racecar, which is a palindrome)
output:
  true
*/

function findPossiblePalindrome( letters ) {

}

/*
Given 2 numbers, divide the first number by the second
and then output the number with commas put in the appropriate place
for example: 
input: 
  1054204
  2
output: 
  '527,102'
*/
function divideAndFormat(dividend, divisor) {
  
}

/*
Given 2 strings, return a string with the difference between the longest and the shortest
input: 
    "corrupted"
    "carrumba
output:
    'opted'
*/
function hashDifference(firstString, secondString) {

}
