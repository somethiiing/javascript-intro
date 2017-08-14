/*
Welcome to the beginning of this Javascript crash course.  This first part is only testing the basics so it should be fairly easy.
I'm hoping things will get harder (and more challenging!) as you move further through the course.

READ ME FIRST:

Whenever you see //CODE// //CODE// //CODE//, delete that code and write your code there.
Follow the instructions and stop when you see a giant code block that tells you to stop.
When you're done with the entire lesson, run the code in Node.

Try your BEST to use ES6 syntax. Let/Const vs var. Arrow functions, etc.



Chapter 1: The Basics.
Here we're gonna work on basic Javascript syntax. Most of these will be simple variable assignments.
                                                                                                                                                                    */



// Part 1: Strings:
// 1A. Using a 'let' statement, define the variable 'color' with your favorite color!
//CODE// //CODE// //CODE//

// 1B. Define the variable 'food' with your favorite food. Make it so this variable assignment cannot change.
//CODE// //CODE// //CODE//

// 1C. Use the code below. Make it all caps and assign it to a variable evenHappier.
const happy = 'i am super excited'
//CODE// //CODE// //CODE//

// 1D. Using a method, remove all the extra spaces on the variable extraSpaces and assign it to variable noExtraSpaces
const extraSpaces = '      so many extra spaces. DansGame.       ';
//CODE// //CODE// //CODE//

// 1E. Using a method or methods, remove all periods and replace them with spaces. There are two ways to do this. We can call this properSpaces1 and properSpaces2.
const improperSpaces = 'please.turn.these.periods.into.spaces.'
//CODE// //CODE// //CODE//
//CODE// //CODE// //CODE//



// Part 2: Numbers:
// 2A. Define a variable 'age', which is your birthday.
//CODE// //CODE// //CODE//

// 2B. Using Math methods, find the minimum and maximum of the array. Define them in numbersMin and numbersMax;
const numbersArr = [5, 6, 3, 4, 7, 8, 1, 2];
//CODE// //CODE// //CODE//
//CODE// //CODE// //CODE//

// 2C. Find the absolute value of -47 and assign it to numbersAbs.
//CODE// //CODE// //CODE//

// 2D. Assign a random 4 digit number (no decimals!) to variable randomFourDigitNumber
//CODE// //CODE// //CODE//



// Part 3: Equality + Truthy/Falsey
// 3. Assign variables equality1, equality2, etc and make them all true. (This might seem a little convoluted);
// 3A. equality1: Use the less symbol.
//CODE// //CODE// //CODE//

// 3B. equality2: Use the greater than symbol.
//CODE// //CODE// //CODE//

// 3C. equality3: Use the triple equal sign.
//CODE// //CODE// //CODE//

// 3D. equality4: Use addition and the === sign.
//CODE// //CODE// //CODE//

// 3E. equality5: Use false.
//CODE// //CODE// //CODE//

// 3F. equality6: Use undefined.
//CODE// //CODE// //CODE//



// Part 4: Arrays
// 4A. Create a variable colorsArray and put five colors in your array.
//CODE// //CODE// //CODE//

// 4B. Assign the third color in your array and assign it to favoriteColor.
//CODE// //CODE// //CODE//

// The next challenges will be using the moreNumbers. DO NOT ALTER the array.
const moreNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// 4C. Use a method to reverse the array and set that to variable reversedNumbers.
//CODE// //CODE// //CODE//

// 4D. Use a method to return the fifth through 8th (inclusive) and assign it to someNumbers.
//CODE// //CODE// //CODE//

// 4E. Make a new copy of the array and assign it to newNumbers.
//CODE// //CODE// //CODE//

// 4F. Add the number 11 to the end of newNumbers.
//CODE// //CODE// //CODE//

// 4F. Add the number -2 and -1 to the front of newNumbers.
//CODE// //CODE// //CODE//

// 4G. Assign to variable newNumbersLength the length of newNumbers.
//CODE// //CODE// //CODE//




// Part 5: Objects
// 5A. Make an empty object literal and assign it to variable 'favorites'.
// Use dot notation to add the property 'food' and assign it your favorite food.
// Use dot notation to add the property 'color' and assign it your favorite color.
// Use bracket notation to add the property 'song' and assign it your favorite song.
// Use bracket notation to add the property 'quote' and assign it your favorite quote.

// 5B. Assign to variable 'myself' with an object literal with the following properties.
// firstName, lastName, dob, age, occupation
// also include the favorites object with property favorites.

// 5C. Add a method to the 'myself' object that logs a greeting with firstName and lastName.
// Then invoke it.
//CODE// //CODE// //CODE//





// Part 6: Loops
// 6A. Use a for loop to iterate over the string, 'loopString', and individually print each letter.
const loopString = 'This string is for looping!';
//CODE// //CODE// //CODE//

// 6B. Use a for loop to iterate over the array, 'loopArray' and individually print each element.
const loopArray = ['white', 'blue', 'black', 'red', 'green'];
//CODE// //CODE// //CODE//

// 6C. Use a for loop to iterate over the object, 'loopObject', and individually print each key and property.
const loopObject = {
  vietnamese: 'pho',
  chinese: 'chow mein',
  japanese: 'ramen',
  korean: 'naengmyun'
};
//CODE// //CODE// //CODE//

// 6D. Use a while loop to print numbers 1 - 10.
//CODE// //CODE// //CODE//




// Part 7: Functions
// 7A. Write a function called cube that returns the cube of a number.
//CODE// //CODE// //CODE//

// 7B. Write a function called reverse that takes in a string as an argument and returns the string reversed.
//CODE// //CODE// //CODE//

// 7C. Write a function called searchForElement that takes in a array and a key as arguments. find returns true if the key is found, false if not.
//CODE// //CODE// //CODE//

// 7D. Write a function called each that takes in an array and a callback. For more information on callbacks, look for callback under Functional Programming.
// Each does not return anything. It applies the callback on three different parameters, each element of the array, each index of the array, and the array as a whole.
/* Example:
const functionNumbers = [1, 2, 3, 4, 5];
each(functionNumbers, (element, index, array) => {
  console.log(element, index, array);
});

Outputs:
1 0 [1, 2, 3, 4, 5]
2 1 [1, 2, 3, 4, 5]
3 2 [1, 2, 3, 4, 5]
4 3 [1, 2, 3, 4, 5]
5 4 [1, 2, 3, 4, 5]
*/
//CODE// //CODE// //CODE//







/*
STOP CODING HERE. STOP CODING HERE. STOP CODING HERE. STOP CODING HERE. STOP CODING HERE. STOP CODING HERE. STOP CODING HERE. STOP CODING HERE. STOP CODING HERE. STOP CODING HERE. STOP CODING HERE.
STOP CODING HERE. STOP CODING HERE. STOP CODING HERE. STOP CODING HERE. STOP CODING HERE. STOP CODING HERE. STOP CODING HERE. STOP CODING HERE. STOP CODING HERE. STOP CODING HERE. STOP CODING HERE.
STOP CODING HERE. STOP CODING HERE. STOP CODING HERE. STOP CODING HERE. STOP CODING HERE. STOP CODING HERE. STOP CODING HERE. STOP CODING HERE. STOP CODING HERE. STOP CODING HERE. STOP CODING HERE.
STOP CODING HERE. STOP CODING HERE. STOP CODING HERE. STOP CODING HERE. STOP CODING HERE. STOP CODING HERE. STOP CODING HERE. STOP CODING HERE. STOP CODING HERE. STOP CODING HERE. STOP CODING HERE.
STOP CODING HERE. STOP CODING HERE. STOP CODING HERE. STOP CODING HERE. STOP CODING HERE. STOP CODING HERE. STOP CODING HERE. STOP CODING HERE. STOP CODING HERE. STOP CODING HERE. STOP CODING HERE.
STOP CODING HERE. STOP CODING HERE. STOP CODING HERE. STOP CODING HERE. STOP CODING HERE. STOP CODING HERE. STOP CODING HERE. STOP CODING HERE. STOP CODING HERE. STOP CODING HERE. STOP CODING HERE.
STOP CODING HERE. STOP CODING HERE. STOP CODING HERE. STOP CODING HERE. STOP CODING HERE. STOP CODING HERE. STOP CODING HERE. STOP CODING HERE. STOP CODING HERE. STOP CODING HERE. STOP CODING HERE.
STOP CODING HERE. STOP CODING HERE. STOP CODING HERE. STOP CODING HERE. STOP CODING HERE. STOP CODING HERE. STOP CODING HERE. STOP CODING HERE. STOP CODING HERE. STOP CODING HERE. STOP CODING HERE.
STOP CODING HERE. STOP CODING HERE. STOP CODING HERE. STOP CODING HERE. STOP CODING HERE. STOP CODING HERE. STOP CODING HERE. STOP CODING HERE. STOP CODING HERE. STOP CODING HERE. STOP CODING HERE.
STOP CODING HERE. STOP CODING HERE. STOP CODING HERE. STOP CODING HERE. STOP CODING HERE. STOP CODING HERE. STOP CODING HERE. STOP CODING HERE. STOP CODING HERE. STOP CODING HERE. STOP CODING HERE.
STOP CODING HERE. STOP CODING HERE. STOP CODING HERE. STOP CODING HERE. STOP CODING HERE. STOP CODING HERE. STOP CODING HERE. STOP CODING HERE. STOP CODING HERE. STOP CODING HERE. STOP CODING HERE.
STOP CODING HERE. STOP CODING HERE. STOP CODING HERE. STOP CODING HERE. STOP CODING HERE. STOP CODING HERE. STOP CODING HERE. STOP CODING HERE. STOP CODING HERE. STOP CODING HERE. STOP CODING HERE.
STOP CODING HERE. STOP CODING HERE. STOP CODING HERE. STOP CODING HERE. STOP CODING HERE. STOP CODING HERE. STOP CODING HERE. STOP CODING HERE. STOP CODING HERE. STOP CODING HERE. STOP CODING HERE.
STOP CODING HERE. STOP CODING HERE. STOP CODING HERE. STOP CODING HERE. STOP CODING HERE. STOP CODING HERE. STOP CODING HERE. STOP CODING HERE. STOP CODING HERE. STOP CODING HERE. STOP CODING HERE.
STOP CODING HERE. STOP CODING HERE. STOP CODING HERE. STOP CODING HERE. STOP CODING HERE. STOP CODING HERE. STOP CODING HERE. STOP CODING HERE. STOP CODING HERE. STOP CODING HERE. STOP CODING HERE.
*/

