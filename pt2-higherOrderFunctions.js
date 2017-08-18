/*
Chapter 2: Higher Order Functions

Whenever you see:
//   CODE GOES HERE   // //   CODE GOES HERE   // //   CODE GOES HERE   //,
delete that code and write your code there.

===>>>  Means the function should return what's on the right of the arrow.

Follow the instructions and stop when you see a giant code block that tells you to stop.
When you're done with the entire lesson, run the code in Node.

Try your BEST to use ES6 syntax. Let/Const vs var. Arrow functions, etc.

Keep your code DRY (Don't Repeat Yourself). If you created a function before, utilize that to make your life easier.

Higher order functions are functions that take in another function as a callback. Here we'll be working through and making some of these functions.
                                                                                                                                                                    */


/*
1. Each
We left off last time with you making a very simple 'each' function.
The purpose of that was to be able to loop through an array and be able to do whatever you want to it using a callback function.
When you built it the first time, it only accounted arrays.
With this new each (that you'll be building), let it work on arrays and objects,

In addition, each will fire the callback using three separate arguments:
- the current element/property
- the current index value/key
- the whole array/object as a whole.

Example:

let obj = {
    color: 'blue',
    card: 'playing',
    type: 'ace'
}

each(obj, (prop, key) => {
    console.log(prop, ' ', key);
});
//outputs:
// blue color
// playing card
// ace type

let colors = ['white', 'blue', 'black', 'red', 'green'];

each(obj, elem => {
    console.log(elem, ' ', index);
});

//outputs:
// white 0
// blue 1
// black 2
// red 3
// green 4                                                           */


//   CODE GOES HERE   // //   CODE GOES HERE   // //   CODE GOES HERE   //
//   CODE GOES HERE   // //   CODE GOES HERE   // //   CODE GOES HERE   //
//   CODE GOES HERE   // //   CODE GOES HERE   // //   CODE GOES HERE   //



/*
2. Map
We're only going to be working with array's from here on.

So we can access all the elements with each.
What if we wanted to modify all the elements within the array, save them to a new array with the same order, and return it.

We're going to build a function called 'map' to accomplish this. It works similarly to each.
Map takes in an array and a callback as its only two arguments and it iterates through the array.
The element, index, and array are passed into the callback and the result of each callback is saved into a new array and returned.

The array you return should not affect the original array.

Here is a helper function:

let addExclamationMarks = str => {
    return str + '!!!';
};

let colors = ['white', 'blue', 'black', 'red', 'green'];

map(colors, addExclamationMarks); ===>>> ['white!!!', 'blue!!!', 'black!!!', 'red!!!', 'green!!!']

Try keeping your code DRY. You already wrote each and know what it does.
How can you use what you've already written to prevent yourself from writing the same things again?                 */


//   CODE GOES HERE   // //   CODE GOES HERE   // //   CODE GOES HERE   //
//   CODE GOES HERE   // //   CODE GOES HERE   // //   CODE GOES HERE   //
//   CODE GOES HERE   // //   CODE GOES HERE   // //   CODE GOES HERE   //









/*
3. Reduce
Next we're going to be building one of the most powerful functions in coding.
In terms of iteration, Reduce can do almost anything. This is notably useful for extremely large sets of data.

Let's say we have the following:

let numbers = [1, 2, 5, 6, 3, 4];

And we want the sum of the array.

let sum = (a, b) => {
    return a + b;
};

Or we have an arary of colors:

let colors = ['white', 'blue', 'black', 'red', 'green'];

And you want to concat them into a string:

let concatWithSpaces = (a, b) => {
    return a + ' ' + b;
};

Reduce can handle all of this logic.
It accepts an array and a callback; passing in elements from the array to the callback and reduces it to one final item and returns it.

In addition reduce also takes in an optional starting point.
I can give it a default value to work off of. If I don't have one, it should just grab the first thing in the array.

reduce(colors, concat) ===>>> 'white blue black red green'
reduce(colors, concat, 'my favorite colors are ') ===>>> 'my favorite colors are white blue black red green'
reduce(numbers, sum) ===>>> 21
reduce(numbers, sum, 7) ===>>> 28
*/


//   CODE GOES HERE   // //   CODE GOES HERE   // //   CODE GOES HERE   //
//   CODE GOES HERE   // //   CODE GOES HERE   // //   CODE GOES HERE   //
//   CODE GOES HERE   // //   CODE GOES HERE   // //   CODE GOES HERE   //






/*
4. Map-Reduce
MapReduce is extremely common for processing and generating large sets of data.
Imagine you're Uber, you've downloaded the transactional data of all the rides given in San Francisco for the entire month,
which contains an array of all the fares paid by riders. You'd like to a) subtract the drivers' commission and b)
combine the amount together, to get a better sence of Uber's operating revenue in the city for the month.

Implement MapReduce. It's a function that's going to take in an array and two callbacks.
It's going to do two things -- it's going to map over the entire array using the first callback,
and then the mapped array will be reduced using the second callback.



                                                                                                                             */

//   CODE GOES HERE   // //   CODE GOES HERE   // //   CODE GOES HERE   //
//   CODE GOES HERE   // //   CODE GOES HERE   // //   CODE GOES HERE   //
//   CODE GOES HERE   // //   CODE GOES HERE   // //   CODE GOES HERE   //







/*
5. Sort

This time, you're not going to be implementing it. Array.sort() is a native function built into Javascript.

Use it to sort these numbers lowest to highest.
const nums = [9, 5, 3, 6, 7, 2, 1];

Use it to sort these strings alphabetically.
const words = ['i', 'really', 'like', 'to', 'eat', 'steak']'
*/


//   CODE GOES HERE   // //   CODE GOES HERE   // //   CODE GOES HERE   //
//   CODE GOES HERE   // //   CODE GOES HERE   // //   CODE GOES HERE   //
//   CODE GOES HERE   // //   CODE GOES HERE   // //   CODE GOES HERE   //










/*
Let's make some more useful utility functions. They might not use callbacks, but they're definitely commonly used as well.
As always, try to keep your code DRY. If you can use something you've made before, definitely use it.

6. Pluck
let rackets = [
    { name: 'Armortec 900 Technique', price: 245, color: 'white', weight: '3U' },
    { name: 'Arcsaber 9', price: 220, color: 'white/pink', weight: '4U' },
    { name: 'Nanospeed 9000', price: 240, color: 'blue/yellow', weight: '3U' },
    { name: 'Nanoray 900', price: 255, color: 'Iron Gray', weight: '3U' }
];

The pluck function takes in two arguments: an array and a property type.
It returns an array containing only the values of the property that was passed in.

Example:
pluck(rackets, price) ===>>> [245, 220, 240, 255].

Once again, do your best to keep your code DRY.                                                                       */


//   CODE GOES HERE   // //   CODE GOES HERE   // //   CODE GOES HERE   //
//   CODE GOES HERE   // //   CODE GOES HERE   // //   CODE GOES HERE   //
//   CODE GOES HERE   // //   CODE GOES HERE   // //   CODE GOES HERE   //









/*
7. Merge
Merge is a function that takes in two arrays of identical length and a callback.
It should return one array with the callback applied to both elements with the same index.

merge([1, 2, 3, 4], [5, 6, 7, 8], (a,b) => {
    return a + b;
}); ===>>> [6, 8, 10, 12]

*/

//   CODE GOES HERE   // //   CODE GOES HERE   // //   CODE GOES HERE   //
//   CODE GOES HERE   // //   CODE GOES HERE   // //   CODE GOES HERE   //
//   CODE GOES HERE   // //   CODE GOES HERE   // //   CODE GOES HERE   //








/*
8. Remove
Remove will accept two arrays.
Return a copy of the first array with all instances of the values in the second removed from the first one.

remove([1, 2, 3, 1, 6], [1, 6]) ===>>> [2, 3]
*/

//   CODE GOES HERE   // //   CODE GOES HERE   // //   CODE GOES HERE   //
//   CODE GOES HERE   // //   CODE GOES HERE   // //   CODE GOES HERE   //
//   CODE GOES HERE   // //   CODE GOES HERE   // //   CODE GOES HERE   //






/*
9. Unique
Unique is a function that will accept an array and return a copy with no duplicates.

unique(['tarmogoyf', 'tarmogoyf', 'wasteland', 'jace', 'deathrite', 'jace']) ===>>> ['tarmogoyf', 'wasteland', 'jace', 'deathrite']
*/

//   CODE GOES HERE   // //   CODE GOES HERE   // //   CODE GOES HERE   //
//   CODE GOES HERE   // //   CODE GOES HERE   // //   CODE GOES HERE   //
//   CODE GOES HERE   // //   CODE GOES HERE   // //   CODE GOES HERE   //






/*
10. IndexOf

IndexOf takes in an unsorted array and a target.
It finds the first index of the found target, or -1 if it doesn't find anything.

indexOf([0, 2, 6, 1, 3, 5], 2) ===>>> 1
indexOf([0, 2, 2, 1, 3, 5], 2) ===>>> 1
indexOf([0, 2, 6, 1, 3, 5], 9) ===>>> -1
*/

//   CODE GOES HERE   // //   CODE GOES HERE   // //   CODE GOES HERE   //
//   CODE GOES HERE   // //   CODE GOES HERE   // //   CODE GOES HERE   //
//   CODE GOES HERE   // //   CODE GOES HERE   // //   CODE GOES HERE   //





/*
11. LetterCount
Given a string, return an object.
Keys are each unique character
Property equal to number of times that character appears in the string.

Assume the string is always lowercase.


letterCount('hello world') ===>>> { h: 1, e: 1, l: 3, o: 2, w: 1, r: 1, d: 1 }
*/

//   CODE GOES HERE   // //   CODE GOES HERE   // //   CODE GOES HERE   //
//   CODE GOES HERE   // //   CODE GOES HERE   // //   CODE GOES HERE   //
//   CODE GOES HERE   // //   CODE GOES HERE   // //   CODE GOES HERE   //




/*
12. Duplicates
Given an array, find out if that array you've been given has any duplicates.
If it has no duplicates, return true. Otherwise return false.


duplicates([1, 2, 3, 4, 1]) ===>>> true
duplicates([1, 2, 3, 4, 5]) ===>>> false
*/

//   CODE GOES HERE   // //   CODE GOES HERE   // //   CODE GOES HERE   //
//   CODE GOES HERE   // //   CODE GOES HERE   // //   CODE GOES HERE   //
//   CODE GOES HERE   // //   CODE GOES HERE   // //   CODE GOES HERE   //




/*
13. Filter
Filter takes in an array and a callback.
The callback takes in the element, index, array.
Whatever returns true from the callback, gets put in a new array and returned.


let greaterThanFive = elem => {
    if (elem > 5) {
        return true;
    }
    return false;
}

filter([1, 2, 3, 4, 5, 6, 7], greaterThanFive) ===>>> [6, 7]
*/


//   CODE GOES HERE   // //   CODE GOES HERE   // //   CODE GOES HERE   //
//   CODE GOES HERE   // //   CODE GOES HERE   // //   CODE GOES HERE   //
//   CODE GOES HERE   // //   CODE GOES HERE   // //   CODE GOES HERE   //






/*
14. Every
Every takes in an array and a callback.
If the whole array passes the callback test, return true. Otherwise return false.

let greaterThanFive = elem => {
    if (elem > 5) {
        return true;
    }
    return false;
}

every([6, 7, 8, 9, 10], greaterThanFive) ===>>> true
every([4, 5, 6, 7, 8, 9, 10], greaterThanFive) ===>>> false
*/

//   CODE GOES HERE   // //   CODE GOES HERE   // //   CODE GOES HERE   //
//   CODE GOES HERE   // //   CODE GOES HERE   // //   CODE GOES HERE   //
//   CODE GOES HERE   // //   CODE GOES HERE   // //   CODE GOES HERE   //






/*
15. Some
Some is almost exactly the same as Every, except instead of every element, if ANY pass, return true.
Otherwise return false.

let greaterThanFive = elem => {
    if (elem > 5) {
        return true;
    }
    return false;
}

some([6, 7, 8, 9, 10], greaterThanFive) ===>>> true
some([4, 5, 6, 7, 8, 9, 10], greaterThanFive) ===>>> true
some([1, 2, 3, 4], greaterThanFive) ===>>> true
*/

//   CODE GOES HERE   // //   CODE GOES HERE   // //   CODE GOES HERE   //
//   CODE GOES HERE   // //   CODE GOES HERE   // //   CODE GOES HERE   //
//   CODE GOES HERE   // //   CODE GOES HERE   // //   CODE GOES HERE   //



/*
16. Reject
Reject takes in an array and a callback.
Returns an array with things that fail the callback.

reject([1, 2, 3, 4, 5, 6], num => { return num % 2 == 0; })  ===>>> [1, 3, 5]
*/

//   CODE GOES HERE   // //   CODE GOES HERE   // //   CODE GOES HERE   //
//   CODE GOES HERE   // //   CODE GOES HERE   // //   CODE GOES HERE   //
//   CODE GOES HERE   // //   CODE GOES HERE   // //   CODE GOES HERE   //



/*
17. ShallowFlatten
ShallowFlatten takes in an array and flattens it one layer deep.

shallowFlatten([1, [2], [3, [[4]]]])  ===>>> [1, 2, 3, [[4]]];
*/

//   CODE GOES HERE   // //   CODE GOES HERE   // //   CODE GOES HERE   //
//   CODE GOES HERE   // //   CODE GOES HERE   // //   CODE GOES HERE   //
//   CODE GOES HERE   // //   CODE GOES HERE   // //   CODE GOES HERE   //




/*
18. Intersection
Intersection takes in any number of arrays as parameters.
Generates and returns an array with elements present in all arrays.

HINT: You'll need to look into the arguments object. Google 'arguments object javascript'.

intersection([1, 2, 3], [101, 2, 1, 10], [2, 1]) ===>>> [1, 2]
*/

//   CODE GOES HERE   // //   CODE GOES HERE   // //   CODE GOES HERE   //
//   CODE GOES HERE   // //   CODE GOES HERE   // //   CODE GOES HERE   //
//   CODE GOES HERE   // //   CODE GOES HERE   // //   CODE GOES HERE   //




/*
19. Zip
Merges together the values of arrays with the same length. Takes in any amount of arguments.
Return an array of arrays with each array having the index of elements from each of the arguments.

zip(['moe', 'larry', 'curly'], [30, 40, 50], [true, false, false]) ===>>> [["moe", 30, true], ["larry", 40, false], ["curly", 50, false]]
*/


//   CODE GOES HERE   // //   CODE GOES HERE   // //   CODE GOES HERE   //
//   CODE GOES HERE   // //   CODE GOES HERE   // //   CODE GOES HERE   //
//   CODE GOES HERE   // //   CODE GOES HERE   // //   CODE GOES HERE   //



/*
20. SortedIndex
Similar to indexOf, SortedIndex returns the same things. Index if found, -1 if not.
However:
- Numbers only.
- Array is sorted from lowest to highest. Ex: [1, 2, 3, 4, 5]
- Array can contain millions of items, so looping won't be the most ideal solution.

* NO LOOPING.

Hint: Think about an everyday collection of sorted items that may be sitting in your living room.
      How could you find something that you're looking for in there.

sortedIndex([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 8) ===>>> 7
*/

//   CODE GOES HERE   // //   CODE GOES HERE   // //   CODE GOES HERE   //
//   CODE GOES HERE   // //   CODE GOES HERE   // //   CODE GOES HERE   //
//   CODE GOES HERE   // //   CODE GOES HERE   // //   CODE GOES HERE   //








/*
CONGRATULATIONS. YOU FINISHED CHAPTER 2.


Depending on how much help you needed to do this, you might have a pretty good grasp on functional programming now.
I highly recommend getting more practice with these, as you'll be using these much more indepthly in the future.


Also, in case you didn't notice many of these functions are native methods to Javascript.
In addition, there are libraries such as UnderscoreJS that provide all of these.
In addition further in your learnings, when you deal with Promises or Observables, you'll be needing to use these as well.
*/
