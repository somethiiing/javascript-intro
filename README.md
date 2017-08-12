# Javascript Intro

## Table of Contents

- [Introduction](#intro)
- [Basics](#basics)
- [Functions](#functional-programming)
- [Github](#github)
- [Node](#node)
- [Angular](#angular)
- [React](#react)
- [FAQs](#faqs)

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

Strings in Javascript are expressed through single quotes (' '), double quotes(" "), or back ticks (``` ` ` ```);

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

- ``` \n ``` new line
- ``` \t ``` tab
- ``` \\ ``` backslash
- ``` \" ``` double quote
- ``` \' ``` single quote

See full list [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String).

#### Converting to String

You can convert something to a string by using the ```String(var)``` function.

Usage:
```
let numbers = 12345;
let stringified = String(numbers);
console.log('The type of numbers is ', typeof numbers);
console.log('The type of stringified is ', typeof stringified);
```


### Numbers

Numbers in Javasript are assigned when you have just numbers in the expression.
*NOTE: numbers in single or double quotes are strings (as in a stringified number)*

```
let age = 25;

let stringifiedAge = '25';

console.log(age);
console.log(stringifiedAge);
console.log(age === stringifiedAge);
//outputs:
// 25
// 25
// false
```

#### NaN (Not a Number)

NaN is part of the Number prototype, but is returned when something isn't convertible into a Number.

```
console.log(typeof NaN);
outputs: number
```

#### Infinity or Negative Infinity
Infinity and Negative Infinite are expressed through ```Infinity``` or ```-Infinity``` , respectively.

#### Converting to Number

You can convert something to a number by using the ```Number(var)``` function.
If can't convert, returns NaN;

```
let string = '12345';
let name = 'Taylor Swift';

console.log(Number(string));
console.log(Number(name));

//outputs:
// 12345
// NaN

```

### Truthy and Falsey

#### Falsey

The following values evaluate to false:
- false
- null
- undefined
- 0
- NaN
- ' '
- " "

#### Truthy

Numbers that are non-zero, empty Object or Arrays, non-empty strings, new Dates equate to truthy.

The following values evaluate to true:
- true
- {}
- []
- 42
- 'foo'
- new Date()
- -42
- 3.14
- -3.14
- Infinity
- -Infinity

### Equality

Equality expressions matters in things like `if` statements or `while` Statements.

#### Equals

`===` is the expression for checking if things are equal.

`==` is also usable, but it's abstractly equal, compared to `===` which is strictly equal.

If you're learning how to Javascript, just use `===`. Using `==`, and not knowing what you're doing can cause some very terrible unintended side effects.

To learn more about `==` vs `===`, see the FAQ.

```
console.log(3 + 2 === 5)
//Output: true
console.log(3 + 2 === 6)
//Output: false
```

#### Not Equals

The syntax for not equals is `!==`.

```
console.log(3 + 2 !== 5)
//Output: false
console.log(typeof 'foo bar' !== number)
//Output: true
```

#### Arithmetic
- Addition: +
- Subtraction: -
- Division: /
- Multiplication: *

Modulo: % (Returns the remainder). Example:
```
console.log(10 % 2)
//Outputs: 0
console.log(2 % 10)
//Outputs: 2
console.log(11 % 2)
//Outputs: 1
```




### Arrays

### Objects

### If

### Loops

### Functions






## Functional Programming

### Callbacks

### Each

### Map

### Reduce

### Filter

### Sort

## Github

## NPM

## Node

## Angular 2

## React

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


### == vs ===

Double Equal is known as abstractly equal. Where as triple equal is known as strictly equal.


## Todo
- Call/Bind/Apply/This