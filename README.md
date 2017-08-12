# Javascript Intro

## Table of Contents

- [Introduction](#intro)
- [Basics](#basics)
- [Functions](#functional-programming)

## Intro

Javascript is an object-oriented programming language commonly used to create interactive effects within web browsers. With the addition of Node, Javascript is also used fairly often on the back-end as well. Javascript is a high-level, dynamic, weakly-typed, object-based, multi-paradigmed, and interpreted programming language. Along with HTML and CSS, Javascript is one of the three core technologies of World Wide Web content production.

## Basics

The basic syntax of Javascript.

### Variables

Javascript has three different variable assigners.

#### const
when const is used, Javascript doesn't allow for reassignment.
```
const name = 'Taylor Swift'
name = 'Kanye West';
//output: Uncaught TypeError: Assignment to constant variable.
```

#### let
let is used when you want to assign a variable for the first time. After the variable is assigned, you can reassign without let.
let allows you to declare variables that are limited in scope to the block, statement, or expression on which it is used. This is unlike the var keyword, which defines a variable globally, or locally to an entire function regardless of block scope.
```
let favoriteFood = 'steak';
favoriteFood = 'fried rice';

console.log(favoriteFood);
//logs: fried rice
```

#### var
let and const came out in ES2015 (or ES6). For most instances, use let and const because it gives you more control. I'm only mentioning it here in case you look at older code.
var is very similar to let. But it defines a variable globally, regardless of block scope.
```
var favoriteDrink = 'milk tea';
```

To see an in-depth answer on the difference between let and var, see the FAQ.

### Strings

Strings in Javascript are expressed through single quotes (' '), double quotes(" "), or back ticks (` `);

#### Single or Double Quotes
Single quotes and double quotes are basically the same thing. Which one you use is dependant on your code base. Common practice is single quotes for things.

```
let name = 'Taylor Swift';

console.log('I love ' + name + '.');
//output: I love Taylor Swift.
```

#### Template Literals
Template literals (the back ticks ` `) were introduced in ES2015, allows for more easy manipulation of strings. You can put expressions inside a '${}' inside a template literal for easier usage.

```
let name = 'Taylor Swift';

console.log(`My favorite singer is ${name}.`)
output: My favorite singer is Taylor Swift.
```

#### Escape Notation

Beside regular, printable characters, special characters can be encoded using escape notation:

``` \n ``` new line;
``` \t ``` tab;
``` \\ ``` backslash
``` \" ``` double quote
``` \' ``` single quote

See full list [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String);


### Numbers

### Falsey

### Arrays

### Objects

### If

### Loops

### Functions



## Functional Programming

## Node

## FAQs

### var vs let

Scoping makes the difference. var's scope is function level but let is scoped in its enclosing block, that is ({}).

Declared outside any block, both are global.

Unlike var, variables declared with let are not accessible before they are declared in their enclosing block.

Though useful, hoisting posed a major source of error for programmers coming from different background like C,C++,Java...

```
function letseethediff() {
  console.log(i); 		// i is undefined due to variable hoisting
  // console.log(j);	 // ReferenceError: j is not defined

  for( var i = 0; i < 3; i++ ) {
    console.log(i); // 0, 1, 2
  };

  console.log(i); // 3
  // console.log(j); // ReferenceError: j is not defined

  for( let j = 0; j < 3; j++ ) {
    console.log(j);
  };

   console.log(i); // 3
  // console.log(j); // ReferenceError: j is not defined
}
```

Redeclaring variable with let keyword stops us from doing so as it throws error, whereas it's fine with var.

```
let name = 'john';
let name = 'doe'; //Uncaught SyntaxError: Identifier 'name' has already been declared
```

Another difference is visible here in the loops.

```
for (var i = 0; i < 5; ++i) {
  setTimeout(function () {
    console.log(i);
  }, 100);
}
// prints '5' 5 times
var replaced with let

for (let i = 0; i < 5; ++i) {
  setTimeout(function () {
    console.log(i); // output 0, 1, 2, 3, 4
  }, 100);
}
// prints 1, 2, 3, 4, 5
```

let in the loop rebinds it to each iteration of the loop, ensuring it has new value from the previous loop iteration, so it can be used to avoid issue with closures.