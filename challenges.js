/* WEEK 1 */
/*
FIND LARGEST NUMBER
task: make a function that determines which number is largest
input: 4, 12, 2
output: 12
*/
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


// Build a function that prints the numbers from 1 to 100. But for multiples of three print “Fizz” instead of the number and for the multiples of five print “Buzz”. For numbers which are multiples of both three and five print “FizzBuzz”.

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

function reverseString(str) {
	// Step 1. Use the split() method to return a new array
	var splitString = str.split(""); // var splitString = "hello".split("");
	// ["h", "e", "l", "l", "o"]

	// Step 2. Use the reverse() method to reverse the new created array
	var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
	// ["o", "l", "l", "e", "h"]

	// Step 3. Use the join() method to join all elements of the array into a string
	var joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
	// "olleh"

	//Step 4. Return the reversed string
	return joinArray; // "olleh"
}

console.log(reverseString("hello")); 

/*
CHECK OUTSIDE LETTERS
task: make a function that determines if the first and last letter of a string are the same letter
----
input: 'sisters',
output: true
----
input: 'mister',
output: false
/*
function checkOutsideLetters( word ){
	
}


/* WEEK 2 */
/*
REVERSE STRING
task: make a fuction that uses loops to reverse a string
input: 'greetings earthlings'
output: 'sgnilhtrae sgniteerg' 
// */
function reverseString(string) {
	var newString = '';
	for (var i = string.length; i >= 0; i--) {
		newString = newString + [string[i]]
	}
	return newString;
}

console.log("reverse string", reverseString('greetings earthlings'));

/*
CALCULATE FACTORIAL
task: calculate the factorial of a number
	factorial is a number multiplied by all the numbers lower than it, down to 1
input: 5
output: 120   (5*4*3*2*1)
*/
// function calculateFactorial(number) {

// }

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
	// newArray.join(); 
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
    return "vowels:" + vowels +  "consonants:" + consonants; 
}

console.log( countLetters("word")); 
console.log( countLetters("elephant")); 


