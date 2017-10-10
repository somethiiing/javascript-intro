/*
Chapter 3: Algorithms/Toy Problems

Whenever you see:
//   CODE GOES HERE   // //   CODE GOES HERE   // //   CODE GOES HERE   //,
delete that code and write your code there.

===>>>  Means the function should return what's on the right of the arrow.

Follow the instructions and stop when you see a giant code block that tells you to stop.

Try your BEST to use ES6 syntax. Let/Const vs var. Arrow functions, etc.

Test your code!! run "npm run test:pt3" to run the tests!






Algorithms (or Toy Problems) are a great way to build understanding,in-depth knowledge and skill about a new programming language!

You don't need to complete all of these to move on to the next chapter.
Complete the first five(5) toy problems. Then come back and do the next ones once a day (or whenever you have time) as a warm-up.

Some of the concepts that you will learn here will definitely help with your knowledge of Javascript and your coding knowledge in general.

*/


/*
1. Coin Change

Given coins denominations and total amount, find out the number of ways to make the change.

For example, we have coin denominations 1, 2 and 5 and the total amount is 7. We can make its change in the following six ways:
[
  [1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 2],
  [1, 1, 1, 2, 2],
  [1, 2, 2, 2],
  [1, 1, 5],
  [2, 5]
]


example:

coinChange(7, [1, 2, 5]);

===>>>

[
  [1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 2],
  [1, 1, 1, 2, 2],
  [1, 2, 2, 2],
  [1, 1, 5],
  [2, 5]
]

*/
let coinChange = (amount, denoms) => {
//   CODE GOES HERE   // //   CODE GOES HERE   // //   CODE GOES HERE   //
};


/*
2. Reverse

Given a string as an input, reverse the string and return it.

reverse('ilovesteak') ===>>> 'kaetsevoli';


extra credit: do it without making a new array. (aka do it in-place)
*/

let reverse = str => {
//   CODE GOES HERE   // //   CODE GOES HERE   // //   CODE GOES HERE   //
};


/*
3. Fibonacci

A fibonacci sequence is a series of numbers where the number is a sum of the two numbers before it. Typically it starts with 0 and 1.
Example fibonacci sequence: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55].

Make a Fibonacci finder for up to the nth Fibonacci. (0 index'd)

fibonacci(5) ===>>> 5
fibonacci(10) ===>>> 55
*/

//3A. Make fibonacci using a for loop.
let fibonacciFOR = n => {
//   CODE GOES HERE   // //   CODE GOES HERE   // //   CODE GOES HERE   //
};



//3B. Make fibonacci using RECURSION.
// BE CAREFUL WHEN TESTING RECURSION. IF YOU TEST HIGHER THAN 50, YOUR COMPUTER MAY CRASH.
let fibonacciRECURSION = n => {
//   CODE GOES HERE   // //   CODE GOES HERE   // //   CODE GOES HERE   //
}






// Nice! You can move on to the next section now! But come back once a day and work on one toy problem a day until you finish all of these!

/*
4. Flatten

Flatten is a cool function. It takes in an array of any dimension and 'flattens' it into a single dimensioned array.

let nums = [
 [ [1, 2, 3, [4, 5, 6, [7] ] ] ],
 [8, 9, [10] ],
 [11],
 [12, [13, [14]]],
 15 ];


flatten(nums) ===>>> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
*/

let flatten = arr => {
  //   CODE GOES HERE   // //   CODE GOES HERE   // //   CODE GOES HERE   //
  };



/*






5. Rock-Paper-Scissors

Print out all possible combinations you can get in of rock paper scissors.

ex: rockPaperScissors() ===>>> [ ['rock', 'rock', 'rock'], ['rock', 'rock', 'paper'], ['rock', 'rock', 'scissors'], ['rock', 'paper', 'rock'], ..... ]

*/

let rockPaperScissors = () => {

};


/*
6. Stepper

A little boy can only take 1, 2, or 3 steps. Given n number of steps, how MANY different combinations will it take for him to get to the top.
stepper(3) ===>>> 4
stepper(4) ===>>> 7
stepper(5) ===>>> 13
stepper(10) ===>>> 274

*/
let stepper = num => {
//   CODE GOES HERE   // //   CODE GOES HERE   // //   CODE GOES HERE   //
};

/*
7. Validate Password

validatePW takes in a string and either outputs true or false depending on if it's valid or invalid, respectively.

Things to check for:
1. Between 3 and 20 characters
2. Only contains letters and numbers.
3. Must contain a letter and a number.

validatePW('thisisvalid1234') ===>>> true
validatePW('notvalid') ===>>> false

*/

let validatePW = str => {
//   CODE GOES HERE   // //   CODE GOES HERE   // //   CODE GOES HERE   //
};



/*
8. Biggest Number

biggestNumber takes in an array of numbers only. It returns the index of the highest number.
If there's multiple of the same large number, it returns the first index found.

biggestNumber([5, 10, 4, 3, 3, 3, 1, 6, 9]) ===>>> 1
biggestNumber([5, 0, 4, 3, 3, 9, 3, 1, 6, 9]) ===>>> 5

*/

let biggestNumber = arr => {
//   CODE GOES HERE   // //   CODE GOES HERE   // //   CODE GOES HERE   //
};



/*
9. Is Palindrome

IsPalindrome takes in a string and returns true or false depending on if its a palindrome or not.

isPalindrome('abcabccbacba') ===>>> true
isPalindrome('abcabcdfcbacba') ===>>> false
*/

let isPalindrome = str => {
//   CODE GOES HERE   // //   CODE GOES HERE   // //   CODE GOES HERE   //
};

/*
10. Longest Palindrome
LongestPalindrome takes in a str and returns the longest palindrome in the str. If it's tied in length, it will return the first palindrome.

longestPalindrome('radarrepaperracecar') ===>>> 'arrepaperra'
longestPalindrome('kayak') ===>>> 'kayak';
longestPalindrome('myfavoritesteak') ===>>> 'm'   (if there's a hidden palindrome there, my bad. I don't think there is tho.)
*/

let longestPalindrome = str => {
//   CODE GOES HERE   // //   CODE GOES HERE   // //   CODE GOES HERE   //
};


/*
11. Rotate Matrix

Write a function that rotates a NxN matrix 90 degrees.

A matrix, also called a 2-D array, is simply an array of arrays of values.

Example 1x1 matrix:
   [ [1] ]

Example 2x2 matrix:
  [ [1,2],
    [3,4] ]

Important note:
  In mathematics, and generally in CS, matrices are identified as m-by-n, where m is
  the number of *row* and n is the number of *column*. So an [i][j] address in a matrix
  will be i places down, and j places over. This usually matches the way arrays are
  addressed in code, but keep in mind that it differs from use in geometry and computer
  graphics, where coordinates of the form (x,y) are usually x units over, and y units down.

Example rotation of a 4x4 matrix:

var matrix = [
  [1,2,3,4],
  [5,6,7,8],
  [9,'A','B','C'],
  ['D','E','F','G']
];
matrix[0][0]; // 1
matrix[3][2]; // 'F'

var rotatedMatrix = rotateMatrix(matrix); // Rotate 90 degrees clockwise
// rotatedMatrix is:
[ ['D',9,5,1],
  ['E','A',6,2],
  ['F','B',7,3],
  ['G','C',8,4]
]
rotatedMatrix[0][0]; // 'D'
rotatedMatrix[3][2]; // 8
*/

let rotateMatrix = matrix => {
//   CODE GOES HERE   // //   CODE GOES HERE   // //   CODE GOES HERE   //
};


/*
12. Paint Can

Paint Can is a matrix algorithm. Basically the functionality we want to have is similar to Microsoft Paint's paint can.
If we select an index, we turn everything surrounding it (with the same number) into the thing we selected.

Paint Can can take in a matrix of any size of at least 2 x 2 and less than 15 x 15.
The target is any index inside the matrix.
The 'color' can be any number.

let matrix = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 0, 0, 1, 1, 1, 0],
  [0, 1, 1, 1, 0, 0, 1, 1, 1, 0],
  [0, 1, 1, 1, 0, 0, 1, 1, 1, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  [1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 1, 0, 0, 0, 0, 0, 0, 0, 0]
];

paintCan(matrix, [1, 1], 2); ===>>>

[
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 2, 2, 2, 0, 0, 1, 1, 1, 0],
  [0, 2, 2, 2, 0, 0, 1, 1, 1, 0],
  [0, 2, 2, 2, 0, 0, 1, 1, 1, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  [1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 1, 0, 0, 0, 0, 0, 0, 0, 0]
];

*/

let paintCan = (matrix, target, color) => {
//   CODE GOES HERE   // //   CODE GOES HERE   // //   CODE GOES HERE   //
};




























module.exports = {
  coinChange: coinChange,
  reverse: reverse,
  fibonacciFOR: fibonacciFOR,
  fibonacciRECURSION: fibonacciRECURSION,
  flatten: flatten,
  rockPaperScissors: rockPaperScissors,
  stepper: stepper,
  validatePW: validatePW,
  biggestNumber: biggestNumber,
  isPalindrome: isPalindrome,
  longestPalindrome: longestPalindrome,
  rotateMatrix: rotateMatrix,
  paintCan: paintCan
};
