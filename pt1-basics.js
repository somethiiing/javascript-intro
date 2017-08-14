/*
Welcome to the beginning of this Javascript crash course.  This first part is only testing the basics so it should be fairly easy.
I'm hoping things will get harder (and more challenging!) as you move further through the course.

READ ME FIRST:

Whenever you see //   CODE GOES HERE   // //   CODE GOES HERE   // //   CODE GOES HERE   //, delete that code and write your code there.
Follow the instructions and stop when you see a giant code block that tells you to stop.
When you're done with the entire lesson, run the code in Node.

Try your BEST to use ES6 syntax. Let/Const vs var. Arrow functions, etc.



Chapter 1: The Basics.
Here we're gonna work on basic Javascript syntax. Most of these will be simple variable assignments.
                                                                                                                                                                    */



// Part 1: Strings:
// 1A. Using a 'let' statement, define the variable 'color' with your favorite color!
//   CODE GOES HERE   // //   CODE GOES HERE   // //   CODE GOES HERE   //

// 1B. Define the variable 'food' with your favorite food. Make it so this variable assignment cannot change.
//   CODE GOES HERE   // //   CODE GOES HERE   // //   CODE GOES HERE   //

// 1C. Use the code below. Make it all caps and assign it to a variable evenHappier.
const happy = 'i am super excited'
//   CODE GOES HERE   // //   CODE GOES HERE   // //   CODE GOES HERE   //

// 1D. Using a method, remove all the extra spaces on the variable extraSpaces and assign it to variable noExtraSpaces
const extraSpaces = '      so many extra spaces. DansGame.       ';
//   CODE GOES HERE   // //   CODE GOES HERE   // //   CODE GOES HERE   //

// 1E. Using a method or methods, remove all periods and replace them with spaces. There are two ways to do this. We can call this properSpaces1 and properSpaces2.
const improperSpaces = 'please.turn.these.periods.into.spaces.'
//   CODE GOES HERE   // //   CODE GOES HERE   // //   CODE GOES HERE   //
//   CODE GOES HERE   // //   CODE GOES HERE   // //   CODE GOES HERE   //



// Part 2: Numbers:
// 2A. Define a variable 'age', which is your birthday.
//   CODE GOES HERE   // //   CODE GOES HERE   // //   CODE GOES HERE   //

// 2B. Using Math methods, find the minimum and maximum of the array. Define them in numbersMin and numbersMax;
const numbersArr = [5, 6, 3, 4, 7, 8, 1, 2];
//   CODE GOES HERE   // //   CODE GOES HERE   // //   CODE GOES HERE   //
//   CODE GOES HERE   // //   CODE GOES HERE   // //   CODE GOES HERE   //

// 2C. Find the absolute value of -47 and assign it to numbersAbs.
//   CODE GOES HERE   // //   CODE GOES HERE   // //   CODE GOES HERE   //

// 2D. Assign a random 4 digit number (no decimals!) to variable randomFourDigitNumber
//   CODE GOES HERE   // //   CODE GOES HERE   // //   CODE GOES HERE   //



// Part 3: Equality + Truthy/Falsey
// 3. Assign variables equality1, equality2, etc and make them all true. (This might seem a little convoluted);
// 3A. equality1: Use the less symbol.
//   CODE GOES HERE   // //   CODE GOES HERE   // //   CODE GOES HERE   //

// 3B. equality2: Use the greater than symbol.
//   CODE GOES HERE   // //   CODE GOES HERE   // //   CODE GOES HERE   //

// 3C. equality3: Use the triple equal sign.
//   CODE GOES HERE   // //   CODE GOES HERE   // //   CODE GOES HERE   //

// 3D. equality4: Use addition and the === sign.
//   CODE GOES HERE   // //   CODE GOES HERE   // //   CODE GOES HERE   //

// 3E. equality5: Use false.
//   CODE GOES HERE   // //   CODE GOES HERE   // //   CODE GOES HERE   //

// 3F. equality6: Use undefined.
//   CODE GOES HERE   // //   CODE GOES HERE   // //   CODE GOES HERE   //



// Part 4: Arrays
// 4A. Create a variable colorsArray and put five colors in your array.
//   CODE GOES HERE   // //   CODE GOES HERE   // //   CODE GOES HERE   //

// 4B. Assign the third color in your array and assign it to favoriteColor.
//   CODE GOES HERE   // //   CODE GOES HERE   // //   CODE GOES HERE   //

// The next challenges will be using the moreNumbers. DO NOT ALTER the array.
const moreNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// 4C. Use a method to reverse the array and set that to variable reversedNumbers.
//   CODE GOES HERE   // //   CODE GOES HERE   // //   CODE GOES HERE   //

// 4D. Use a method to return the fifth through 8th (inclusive) and assign it to someNumbers.
//   CODE GOES HERE   // //   CODE GOES HERE   // //   CODE GOES HERE   //

// 4E. Make a new copy of the array and assign it to newNumbers.
//   CODE GOES HERE   // //   CODE GOES HERE   // //   CODE GOES HERE   //

// 4F. Add the number 11 to the end of newNumbers.
//   CODE GOES HERE   // //   CODE GOES HERE   // //   CODE GOES HERE   //

// 4F. Add the number -2 and -1 to the front of newNumbers.
//   CODE GOES HERE   // //   CODE GOES HERE   // //   CODE GOES HERE   //

// 4G. Assign to variable newNumbersLength the length of newNumbers.
//   CODE GOES HERE   // //   CODE GOES HERE   // //   CODE GOES HERE   //




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
//   CODE GOES HERE   // //   CODE GOES HERE   // //   CODE GOES HERE   //





// Part 6: Loops
// 6A. Use a for loop to iterate over the string, 'loopString', and individually print each letter.
const loopString = 'This string is for looping!';
//   CODE GOES HERE   // //   CODE GOES HERE   // //   CODE GOES HERE   //

// 6B. Use a for loop to iterate over the array, 'loopArray' and individually print each element.
const loopArray = ['white', 'blue', 'black', 'red', 'green'];
//   CODE GOES HERE   // //   CODE GOES HERE   // //   CODE GOES HERE   //

// 6C. Use a for loop to iterate over the object, 'loopObject', and individually print each key and property.
const loopObject = {
  vietnamese: 'pho',
  chinese: 'chow mein',
  japanese: 'ramen',
  korean: 'naengmyun'
};
//   CODE GOES HERE   // //   CODE GOES HERE   // //   CODE GOES HERE   //

// 6D. Use a while loop to print numbers 1 - 10.
//   CODE GOES HERE   // //   CODE GOES HERE   // //   CODE GOES HERE   //




// Part 7: Functions
// 7A. Write a function called cube that returns the cube of a number.
//   CODE GOES HERE   // //   CODE GOES HERE   // //   CODE GOES HERE   //

// 7B. Write a function called reverse that takes in a string as an argument and returns the string reversed.
//   CODE GOES HERE   // //   CODE GOES HERE   // //   CODE GOES HERE   //

// 7C. Write a function called searchForElement that takes in a array and a key as arguments. find returns true if the key is found, false if not.
//   CODE GOES HERE   // //   CODE GOES HERE   // //   CODE GOES HERE   //





// Part 8. Putting it all together
// Everything in Part 8 will be used together.
// Try your best not to reference anything else!



/*
Let's put everything together now.
8A. Create an array 'favoriteFoods', containing five strings. Each element should be some sort of food you enjoy.
Log the third item within this array to the console.
*/



//   CODE GOES HERE   // //   CODE GOES HERE   // //   CODE GOES HERE   //
//   CODE GOES HERE   // //   CODE GOES HERE   // //   CODE GOES HERE   //
//   CODE GOES HERE   // //   CODE GOES HERE   // //   CODE GOES HERE   //



/*
Now let's do something with this array.
8B. Create a function 'print', It takes in a string as an argument.
Assuming we pass in 'ramen' to the function, it will print to the console:
'One of my favorite things is ramen'
*/



//   CODE GOES HERE   // //   CODE GOES HERE   // //   CODE GOES HERE   //
//   CODE GOES HERE   // //   CODE GOES HERE   // //   CODE GOES HERE   //
//   CODE GOES HERE   // //   CODE GOES HERE   // //   CODE GOES HERE   //




/*
Now let's call it.
8C. Call print on each element in the favoriteFoods array.
*/



//   CODE GOES HERE   // //   CODE GOES HERE   // //   CODE GOES HERE   //
//   CODE GOES HERE   // //   CODE GOES HERE   // //   CODE GOES HERE   //
//   CODE GOES HERE   // //   CODE GOES HERE   // //   CODE GOES HERE   //


/*
Calling this five times isn't very DRY (Don't Repeat Yourself) How can we minimize this?
8D. Use a loop to iterate through the array and call print on each element.
*/



//   CODE GOES HERE   // //   CODE GOES HERE   // //   CODE GOES HERE   //
//   CODE GOES HERE   // //   CODE GOES HERE   // //   CODE GOES HERE   //
//   CODE GOES HERE   // //   CODE GOES HERE   // //   CODE GOES HERE   //



/* Cool. Let's do some more stuff.
8E. Create an array, favoriteFruits, and fill this with your favorite fruits.
Now call print on each element of favoriteFruits using a loop again.
*/



//   CODE GOES HERE   // //   CODE GOES HERE   // //   CODE GOES HERE   //
//   CODE GOES HERE   // //   CODE GOES HERE   // //   CODE GOES HERE   //
//   CODE GOES HERE   // //   CODE GOES HERE   // //   CODE GOES HERE   //



/*
It looks like we're repeating this loop over and over again. Let's create a function to keep our code DRY.
8F. Create a function called printEach. It takes in an array as an argument.
printEach will iterate over the array, then call print on each element of the array.
*/



//   CODE GOES HERE   // //   CODE GOES HERE   // //   CODE GOES HERE   //
//   CODE GOES HERE   // //   CODE GOES HERE   // //   CODE GOES HERE   //
//   CODE GOES HERE   // //   CODE GOES HERE   // //   CODE GOES HERE   //



/*
Let's see what we have now.
8G. Call printEach on favoriteFoods. Then call printEach again but on the favoriteFruits array.
*/



//   CODE GOES HERE   // //   CODE GOES HERE   // //   CODE GOES HERE   //
//   CODE GOES HERE   // //   CODE GOES HERE   // //   CODE GOES HERE   //
//   CODE GOES HERE   // //   CODE GOES HERE   // //   CODE GOES HERE   //



/*
Now we're going to create another function.
8H. Create a function called printWithExclaims.
printWithExclaims takes a string and will add three exclamation marks to the end of the string.
Example: steak!!!
*/



//   CODE GOES HERE   // //   CODE GOES HERE   // //   CODE GOES HERE   //
//   CODE GOES HERE   // //   CODE GOES HERE   // //   CODE GOES HERE   //
//   CODE GOES HERE   // //   CODE GOES HERE   // //   CODE GOES HERE   //



/*
Let's create another function that includes loops.
8I. Create a function called printEachWithExclaims.
Will do the exact same thing printEach does, but will call printWithExclaims instead.
*/



//   CODE GOES HERE   // //   CODE GOES HERE   // //   CODE GOES HERE   //
//   CODE GOES HERE   // //   CODE GOES HERE   // //   CODE GOES HERE   //
//   CODE GOES HERE   // //   CODE GOES HERE   // //   CODE GOES HERE   //



/*
Awesome. We're almost done!
8J. Call printEachWithExclaims on both favoriteFoods and on favoriteFruits.
*/



//   CODE GOES HERE   // //   CODE GOES HERE   // //   CODE GOES HERE   //
//   CODE GOES HERE   // //   CODE GOES HERE   // //   CODE GOES HERE   //
//   CODE GOES HERE   // //   CODE GOES HERE   // //   CODE GOES HERE   //



/*
Looks like printEach and printEachWithExclaims still aren't very DRY.
When you think about it, they keep repeating the loop.
Let's settle this once and for all.
8K. Create a function 'each'. It takes in two arguments: an array and a function.
It iterates through the array and calls the function on every element of the array.
It passes in the leement as an argument for the function being called.

Basically, we want to be able to call 'each' and pass in 'favoriteFoods' or 'favoriteFruits', or any other array;
as well as any function we've created.
This lets us be versatile on what we want to do, so we don't have to set a new function to do something every single time.
*/



//   CODE GOES HERE   // //   CODE GOES HERE   // //   CODE GOES HERE   //
//   CODE GOES HERE   // //   CODE GOES HERE   // //   CODE GOES HERE   //
//   CODE GOES HERE   // //   CODE GOES HERE   // //   CODE GOES HERE   //



/*
Last one, then you're done with Chapter 1.
8L. Call 'each' on both favoriteFruits and favoriteFoods. Passing in two functions we made earlier.
*/



//   CODE GOES HERE   // //   CODE GOES HERE   // //   CODE GOES HERE   //
//   CODE GOES HERE   // //   CODE GOES HERE   // //   CODE GOES HERE   //
//   CODE GOES HERE   // //   CODE GOES HERE   // //   CODE GOES HERE   //










// CONGRATULATIONS. YOU FINISHED CHAPTER ONE!


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
