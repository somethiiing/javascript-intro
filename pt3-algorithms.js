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



/*
13. Shuffle Deck

Given an array containing a deck of cards, implement a function that shuffles the deck.

Example:
  let deck = orderedDeckCreator();
  // ["A♥","2♥","3♥",...,"J♦","Q♦","K♦"]
  shuffleDeck(deck);
  // ["2♠","J♣","A♦", ... ,"7♣","8♣","K♠"]


Note:
  A shuffled deck should be completely random. That means that a given card should
  be as likely as any other to appear in a given deck index, completely independent
  of the order of the input deck. Think carefully about how to be sure your algorithm
  generates a properly shuffled deck-- it is easy to accidentally create a biased algorithm.

A further note on randomness:
  Technically, a computer-shuffled deck will usually be "pseudorandom",
  not "truly" random. However, the difference between the two is too small to
  be detectable by any known test.
  See http://en.wikipedia.org/wiki/Pseudorandom_number_generator .

*/

// orderedDeckCreator creates a perfectly ordered deck.
let orderedDeckCreator = () => {
  const suits = [ '♥', '♣', '♠', '♦' ];
  const values = [ 'A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K' ];
  let deck = [];

  suits.forEach(suit => {
    values.forEach(value => {
      deck.push(value + suit);
    });
  });

  return deck;
};

let shuffleDeck = deck => {
//   CODE GOES HERE   // //   CODE GOES HERE   // //   CODE GOES HERE   //
};




/*
14. Roman Numeral Translator

Given a roman numeral as input, write a function that converts the roman numeral to a number and outputs it.

Ex: translateRomanNumeral("LX") ===>>> 60

When a smaller numeral appears before a larger one, it becomes
a subtractive operation. You can assume only one smaller numeral
may appear in front of larger one.

Ex:
translateRomanNumeral("IV") ===>>> 4

You should return `null` on invalid input.
*/

const romanNumeralDigitValues = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
};

let translateRomanNumeral = romanNumeral => {
//   CODE GOES HERE   // //   CODE GOES HERE   // //   CODE GOES HERE   //
};



/*
15. Merge Sort

Implement a function that sorts an array of numbers using the "mergesort" algorithm.

Mergesort is an optimized sorting algorithm which is a common choice to implement `sort`
methods in standard libraries as an alternative to quicksort or heapsort. (For example,
Firefox's Array.sort method uses a tuned mergesort; the WebKit engine used by Chrome and
Safari uses quicksort for numeric arrays, and mergesort for arrays of strings.)

Mergesort uses a divide-and-conquer strategy. It begins by treating the input list of length N
as a set of N "sublists" of length 1, which are considered to be sorted. Adjacent sublists are then
"merged" into sorted sublists of length 2, which are merged into sorted sublists of length 4, and so
on, until only a single sorted list remains. (Note, if N is odd, an extra sublist of length 1 will be left
after the first merge, and so on.)

This can be implemented using either a recursive ("top-down") or an iterative ("bottom-up") approach.

Illustration of an iterative approach:

  Initial step: Input array is split into "sorted" sublists
  [4,7,4,3,9,1,2] -> [[4],[7],[4],[3],[9],[1],[2]]

  Merge step: Adjacent sublists are merged into sorted sublists
  [[4],[7],[4],[3],[9],[1],[2]] -> [[4,7],[3,4],[1,9],[2]]

  Repeat merge step:
  [[4,7],[3,4],[1,9],[2]] -> [[3,4,4,7], [1,2,9]]

  Repeat merge step:
  [[3,4,4,7], [1,2,9]] -> [[1,2,3,4,4,7,9]]

  Done! Return the sorted array:
  [1,2,3,4,4,7,9]
Illustration of a recursive approach:

  1. Split the input array in half
  [4, 7, 4, 3, 9, 1, 2] -> [4, 7, 4], [3, 9, 1, 2

  2. Both sides are sorted recursively:
  [4, 7, 4] -> [4, 4, 7]
  [3, 9, 1, 2] -> [1, 2, 3, 9]

  3. Both halves are merged:
  [4, 7, 4], [3, 9, 1, 2] -> [1, 2, 3, 4, 4, 7, 9]

  Step 2 might seem a bit mystical - how do we sort both sides? The
  simple answer is that we use mergesort! After all, mergesort sorts
  arrays, right? We can test this on [4, 7, 4] by just following the
  steps above but imagining that [4, 7, 4] is the whole array, which
  is what happens when you call mergesort on it.

  1. Split the input array in half
  [4, 7, 4] -> [4], [7, 4]

  2. Both sides are sorted recursively:
  [4] -> [4]
  [7, 4] -> [4, 7]

  3. Both halves are merged:
  [4], [4, 7] -> [4, 4, 7]

  I cheated again by going directly from [7, 4] to [4, 7], but that's
  really just:

  1. Split the input array in half
  [7, 4] -> [7], [4]

  2. Both sides are sorted recursively:
  [7] -> [7]
  [4] -> [4]

  3. Both halves are merged:
  [7], [4] -> [4, 7]

  As you can see, all the work actually gets done in step 3, the merge
  step. Everything else is just splitting and recursing.
*/

let mergeSort = arr => {
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
  paintCan: paintCan,
  orderedDeckCreator: orderedDeckCreator,
  shuffleDeck: shuffleDeck,
  romanNumeralDigitValues: romanNumeralDigitValues,
  translateRomanNumeral: translateRomanNumeral,
  mergeSort: mergeSort
};
