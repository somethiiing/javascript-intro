# Javascript Intro

## Table of Contents

- [Introduction](#intro)
- [Getting Started](#getting-started)
- [Basics](#basics)
  - [Variables](#variables)
  - [Strings](#strings)
  - [Numbers](#numbers)
  - [Truthy and Falsey](#truthy-and-falsey)
  - [Equality](#equality)
  - [Arrays](#arrays)
  - [Objects](#objects)
  - [Conditionals](#conditionals)
  - [Loops](#loops)
  - [Functions](#functions)
  - [Try // Catch](#try--catch)
  - [Switch Statements](#switch-statements)
- [Functions](#functional-programming)
- [Node](#node)
- [Angular](#angular)
- [React](#react)
- [Philosophy](#philosophy)
- [FAQs](#faqs)

## Intro

This course is meant to quickly onboard someone from nearly no computer knowledge to making a simple webpage using modern frameworks. This course will try to walk through everything from the basics of Javascript to making a Node server, to making a front-end using React or Angular.

### How to Use this Repo

This repo was made to be sort of interactive. And I think following specific steps will produce the best outcome. So refer to this section whenever you finish each bullet point and try to follow the instructions in each part.

1. Get set up locally. [Running Code Locally](#running-code-locally)
2. Do the basics of [Code School](www.codeschool.com) or [Codecademy](www.codecademy.com)
  - While you do the Code School/Codecademy follow along in the [Basics](#basics) section of this readme.
  - If you have trouble, use the [Basics](#basics) to clarify.
  - Or Google! MDN, or W3Schools will be your best friends.
3. After you finished reading the basics, open up pt1-basics.js and start coding!
  - Parts 1 - 7, feel free to reference the [Basics](#basics) section if you need any help.
  - Don't forget to run/test your code!
  - But, for Part 8, try your absolute best to not reference anything (or look anything up). This is intended to build on top of each other.
  - If you get stuck, timebox yourself. Set a timer for 20 minutes: If you're still stuck after 20 minutes of working on it, then look it up.
  - As an engineer, you're going to need to solve your problems. Googling answers is a skill, yes. But not very beneficial for the long run.
4. Open up pt2-higherOrderFunctions.js, and work on that!
5. COMING SOON.


### What is Javascript?
Javascript is an object-oriented programming language commonly used to create interactive effects within web browsers. With the addition of Node, Javascript is also used fairly often on the back-end as well. Javascript is a high-level, dynamic, weakly-typed, object-based, multi-paradigmed, and interpreted programming language. Along with HTML and CSS, Javascript is one of the three core technologies of World Wide Web content production.

## Getting Started

### Browsers
My recommended browser for Javascript + testing is Google Chrome. Chrome uses the V8 engine which Node is built from and overall, probably has some of the best dev tools for Javascripting.

### Text Editors
It doesn't really matter what you use. Just pick one and modify it. There's plenty of plugins for each one to let you do whatever customizations that you want.

Some Text Editors:
- Sublime Text
- Atom
- IntelliJ
- WebStorm
- VIM
- VS Code

One recommendation if you plan on using Angular is to use VS Code. VS Code is developed by Microsoft (the same company that develops Typescript) and it has the best Typescript support out of the box.

### Running Code Locally
I recommend a Mac (not a PC) for web development. If you're on a Mac, getting started is fairly simple.

1. Install homebrew: https://brew.sh/
2. Install NodeJS/NPM: `brew install node` OR (SOME PEOPLE HIGHLY RECOMMEND USING NODE VERSION MANAGER; Do one or the other. Not both.) [Node Version Manager](https://github.com/creationix/nvm)
3. Now you can run your code by running `node [filename].js` in your terminal. If you have any console.logs, it will show up in the terminal.
4. Install Git on your computer. [link](https://git-scm.com/book/en/v2/Getting-Started-The-Command-Line)
5. Make a [Github](www.github.com) account. Fork this repo to your own account. Then clone your copy of the repo to your local computer.

### Testing your code
1. Open up Google Chrome.
2. Open up the Dev Tools (either through the options or hotkeys)
  - Windows: ctrl + shift + i
  - Mac: command + shift + i
3. Go to the Console tab.
4. Test your code!

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

To see an in-depth answer on the difference between let and var, see the [FAQ](#var-vs-let).

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

#### Methods

String Methods are things that let you change or alter the string. There is a huge list of methods. And I'm not even going to go through them all, as most of them are fairly straightforward. However, I will provide a list of ones I use fairly frequently. If you want to learn more, just google them.

- charAt()
- concat()
- includes()
- indexOf()
- search()
- slice()
- split()
- toUpperCase()
- toLowerCase()
- trim()

#### Properties

Strings have properties that let you access specific things about them.

- constructor: returns the strings constructor function.
- length: returns the strings length.
- prototypes: lets you add properties and methods to an object.

In addition, you can access the string using bracket notation and passing in an index. Also strings start at a zero-index.

```
let str = 'i love steak';
console.log(str[0]);
//Outputs: i
console.log(str[2]);
//Outputs: l

console.log(str.length);
//Outputs: 12
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

#### Methods

Numbers have methods too, just like strings do. Some of these are:
- toString()
- toPrecision()
- valueOf()

However, when doing many number and Math related things, Javascript has a Math object that has many premade methods for easy math-ing! Some of these are:

- Math.PI
- Math.round()
- Math.sqrt()
- Math.abs()
- Math.ceil()
- Math.floor()
- Math.min()
- Math.max()
- Math.random()

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

To learn more about `==` vs `===`, see the [FAQ](#-vs-).

```
console.log(3 + 2 === 5)
//Output: true
console.log(3 + 2 === 6)
//Output: false
```

#### Not (!)

The syntax for 'not' is an exclamation mark (!). Sometimes called a 'bang'. When evaluating statements and you want the opposite of what you have evaluated you use an exclamation mark.

```
console.log(!undefined);
//Output: true
```

To learn about what (!!) is, see the [FAQ](#double-bang).


#### Not Equals

The syntax for not equals is `!==`.

```
console.log(3 + 2 !== 5)
//Output: false
console.log(typeof 'foo bar' !== number)
//Output: true
```

#### And // Or

##### And: &&

The syntax for 'and' is &&. Which means there will be two expressions connected with the && symbol. Will only return true if BOTH statements are true.

```
console.log((2 < 3 && 5 > 3));
//Outputs: true
```

console.log((2 > 3 && 5 > 3));
//Outputs: false

#### Or: ||

The syntax for 'or' is ||. Which means two expressions connected with the double pipe, ||. Will return true if either of the statements are true. If both are not true, then will return false.

```
console.log((2 < 3 || undefined));
//Outputs: true
```

```
console.log(null || undefined);
//Outputs: false
```

```
console.log(null || !undefined);
//Outputs: false
```

#### Arithmetic
- Addition: +
- Subtraction: -
- Division: /
- Multiplication: *
- Greater Than: >
- Greater or Equal To: >=
- Less Than: <
- Less or Equal To: <=

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

Javascript Arrays are special objects that let you store multiple values at a time. An array can hold many values under a single variable, and you can can access the values by referring to an index number. The values kept in an array are in a specific order.

You can store strings, numbers, objects, or even more arrays inside an array. You can mix and match, it doesn't matter!

#### Creating an array:
```
let numbers_array = [1, 2, 3, 4, 5];
let string_array = ['hi', 'my', 'name', 'is', 'wilson'];
let array_array = [[1,2,3], ['strings', 'go', 'here']];
let mixed_array = [
  'strings',
  { name: 'Taylor Swift' },
  12345
];
```

#### Accessing Elements of Array:
Elements of an Array are accessible through indexes. Arrays start with a 0-index.

```
let famousPeople = ['Taylor Swift', 'Katy Perry', 'Beyonce', 'Rihanna'];
console.log(famousPeople[0]);
console.log(famousPeople[1]);
console.log(famousPeople[3]);
//Outputs: Taylor Swift
//Outputs: Katy Perry
//Outputs: Rihanna
```

#### Properties:
There are certain qualities of the Array object.

- constructor: Returns the function that created the Array object's prototype
- length: Sets or returns the number of elements in an array
- prototype: Allows you to add properties and methods to an Array object

#### Methods:
Like everything else, Arrays have a variety of methods. Here are some commonly used ones:

- Array.isArray();
- Array.concat();
- Array.forEach();
- Array.map();
- Array.reverse();
- Array.shift();
- Array.pop();
- Array.push();
- Array.sort();
- Array.splice();
- Array.slice();

There are many others. Definitely look into these!

### Objects

In Javascript, nearly everything is an object.
- Booleans can be objects (if defined with the new keyword)
- Numbers can be objects (if defined with the new keyword)
- Strings can be objects (if defined with the new keyword)
- Dates are always objects
- Maths are always objects
- Regular expressions are always objects
- Arrays are always objects
- Functions are always objects
- Objects are always objects

All JavaScript values, except primitives, are objects.

#### Javascript Primitives

A primitive value is a value that has no properties or methods.

A primitive data type is data that has a primitive value.

JavaScript defines 5 types of primitive data types:
- string
- number
- boolean
- null
- undefined

Primitive values are immutable (they are hardcoded and therefore cannot be changed).

#### Object Creation

Can create an object as an object literal then adding properties.

```
let taylorSwift = {}
taylorSwift.name = 'Taylor Swift';
taylorSwift.birthday = 'December 13, 1989';
taylorSwift['occupation'] = 'Singer';
```

Or can create by instantiating the object with the properties inside. This is also known as an object literal. A JavaScript object literal is a comma-separated list of name-value pairs wrapped in curly braces. Object literals encapsulate data, enclosing it in a tidy package.

```
let seolhyunKim = {
  name: 'Seolhyun Kim',
  birthday: 'January 3, 1995',
  occupation: 'Singer'
}
```

#### Properties

Properties on an object are any values associated with a Javascript object. Javascript object is a collection of unordered properties. Properties can be added, changed, and deleted. But some are read-only.

Can add, change, or access properties through dot notation, or bracket notation.

##### Dot Notation

objectName.property

```
let katyPerry = {
  name: 'Katy Perry',
  birthday: 'October 25, 1984'
}
// assigning:
katyPerry.occupation = 'Singer';
// accessing:
console.log(katyPerry.name)
//Outputs: 'Katy Perry'
```

##### Bracket Notation

objectName['property'] or objectName[expression]

```
let haleyWilliams = {
  name: 'Hayley Williams',
  birthay: 'December 27, 1988'
};
// assigning:
hayleyWilliams['occupation'] = 'Singer';
// accessing:
console.log(hayleyWilliams['name'])
//Outputs: Hayley Williams
```

Variables can be passed into bracket notation to access or assign properties.

```
let name = 'name';

let jieunSong = {}
jieunSong[name] = 'Jieun Song';

console.log(jieunSong[name])
//Outputs: Jieun Song
```

#### Methods
Methods are just functions assigned as a property. Methods have access to properties on the object.

```
let taylorSwift = {
  name: 'Taylor Swift',
  firstName: 'Taylor',
  lastName: 'Swift',
  age: '28',
  greet: () => {
    console.log(`Hi, my name is ${this.name} and I am ${this.age} years old!`)
  },
  fullName: () => {
    return `${this.firstName} ${this.lastName}`
  }
}

taylorSwift.greet()
//Outputs: Hi, my name is Taylor Swift and I am 28 years old!

console.log(taylorSwift.fullName())
//Outputs: Taylor Swift

```

### Conditionals

Sometimes in functions or other situations, you need to run code depending on a conditional.
Where the conditional is, you can put an expression and it will evaluate it, then run the check. See Truthy or Falsey.

#### if

```
if (conditional) {
  // run this code
}
```

#### else

```
if (conditional) {
  // run this code
} else {
  // otherwise, run this code
}
```

#### else if

```
if (conditional) {
  // if conditional, run this code
} else if (otherConditional) {
  // if otherConditional, run this code
} else {
  // otherwise, run this code
}
```

#### Example
```
let a = 5;

if (a < 10) {
  console.log('a IS SMALL!');
} else {
  console.log('a IS BIG!);
}

//Outputs: a IS SMALL
```

### Loops

There are many different kinds of loops, but they all essentially do the same thing: they repeat an action some number of times (and it's actually possible that number could be zero).

#### For

A for loop repeats until a specified condition evaluates to false.
```
for ([initialExpression]; [condition]; [incrementExpression]) {
  statement
}
```

##### How For Loops Run

1. The initializing expression initialExpression, if any, is executed. This expression usually initializes one or more loop counters, but the syntax allows an expression of any degree of complexity. This expression can also declare variables.
2. The condition expression is evaluated. If the value of condition is true, the loop statements execute. If the value of condition is false, the for loop terminates. If the condition expression is omitted entirely, the condition is assumed to be true.
3. The statement executes. To execute multiple statements, use a block statement ({ ... }) to group those statements.
4. If present, the update expression incrementExpression is executed.
5. Control returns to step 2.

##### Examples
Basic Loop
```
for (let i = 0; i < 5; i++) {
  console.log(i);
}
//Outputs:
// 0
// 1
// 2
// 3
// 4
```

Looping over Arrays
```
let array = ['white', 'blue', 'black', 'red', 'green'];

for (let i = 0; i < array.length; i++) {
  console.log(`I really like the color ${array[i]}.`);
};
//Outputs:
// I really like the color white.
// I really like the color blue.
// I really like the color black.
// I really like the color red.
// I really like the color green.
```

Go backwards!
```
for (let i = 10; i > 4; i--) {
  console.log(i);
}
// Outputs:
// 10
// 9
// 8
// 7
// 6
// 5
```

#### While

A while statement executes its statements as long as a specified condition evaluates to true.

```
while (condition) {
  // run this code
}
```

###### How While Loops Run
If the condition becomes false, statement within the loop stops executing and control passes to the statement following the loop.

The condition test occurs before statement in the loop is executed. If the condition returns true, statement is executed and the condition is tested again. If the condition returns false, execution stops and control is passed to the statement following while.

###### Examples

```
let x = 0;
while (x < 5) {
  console.log(x);
  x++;
}
//Outputs:
// 0
// 1
// 2
// 3
// 4
```

```
let x = 0;
let cont = true;
while (cont) {
  console.log(x);
  x++;
  if (x === 2) {
    cont = false;
  }
};

//Outputs:
// 0
// 1
```

###### Warning: Be careful of infinite loops

while (true) {
  console.log('i love steak');
}

This will go on forever and make you close the process to stop it.

#### Break

Sometimes you need to stop your loop before it's intended stop time. To stop it, we use a break statement.

```
for (let i = 0; i < 10; i++) {
  if (i === 2) {
    break;
  }
  console.log(i);
}
//Outputs:
// 0
// 1
```

#### Continue

Sometimes you need to break out of an iteration of a loop, but you want it to continue. For this case, we use a continue statement.

```
for (let i = 0; i < 5; i++) {
  if (i === 2) {
    continue
  }
  console.log(i);
}

//Outputs:
// 0
// 1
// 3
// 4
```

### Functions

- A JavaScript function is a block of code designed to perform a particular task. The function is executed when "something" invokes it (calls it).
- Functions reuse code: Define the code once, and use it many times. Use different arguments to produce different results.
- Function parameters are the names listed in the function definition.
- Function arguments are the real values received by the function when it is invoked.
- Functions are invoked with ().

Example:
```
let greet = () => {
  console.log('hello world');
}

// function invoking
greet();
//Outputs: hello world
```

##### In order to get something back from a function, you have to `return` it.

```
let a = 5;
let b = 3;

let addition = (num1, num2) => {
  return num1 + num2;
}

console.log(addition(a, b));
// Outputs 8
```

##### If you don't return it, this is what happens:
```
let a = 5;
let b = 3;

let addition = (num1, num2) => {
  num1 + num2;
}

console.log(addition(a, b));
// Outputs undefined
```

##### You don't always have to return something. Sometimes you're modifying something with the function
```
let a = 5;
let addFiveToA = () => {
  a = a + 5;
}

console.log(a);
addFiveToA();
console.log(a);
addFiveToA();
console.log(a);

//Outputs:
// 5
// 10
// 15

```

##### You can also assign the output of a function to a variable.
```
let name = 'Taylor Swift';
let nameExclaimer = str => {
  return str + '!!!';
}

let happyName = nameExclaimer(name);
console.log(happyName);
//Output:
// Taylor Swift!!!

```


#### Creating Functions
Three different ways to make a function. The first one looks weird, but it's a new thing in ES2015 called arrow functions. All three of these functions are usable. But common practice is to use the arrow functions. There are reasons to use the other two. But that will be covered later. For more information, see the [FAQ](#hoisting).

```
let name = (parameter1, parameter2, parameter3) => {
  // code to be executed
}
```

```
let name = function (parameter1, parameter2, parameter3) {
  // code to be executed
}
```

```
function name(parameter1, parameter2, parameter3) {
  // code to be executed
}
```


#### Random Notes:

In an arrow function, if there is only one parameter, you don't need the parenthesis. If there is zero or 2+ parameters, you do.
```
// one parameter:
let person1 = 'Taylor Swift';
let person2 = 'Katy Perry';

let nameExclaimer = name => {
  return name + '!!!';
};

console.log(nameExclaimer(person1));
console.log(nameExclaimer(person2));

//Output:
// Taylor Swift!!!
// Katy Perry!!!

```

#### Examples
```
toCelsius = fahrenheit => {
    return (5/9) * (fahrenheit-32);
};

multiply = (num1, num2) => {
  return a * b;
};

logAll = array => {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
};
```

### Try // Catch

Todo.

### Switch Statements

Todo.





## Higher Order Functions

This is part of Functional Programming. In other languages, they call these higher order functions, "Lambda Functions". A higher order function is a function that accepts another function as an argument. The function that is passed in is known as a callback. There are built in methods that are higher order functions:

- Array.map
- Array.reduce
- Array.sort

As well as some libraries such as underscoreJS provide lots of utility in their higher order functions.

### Callbacks
A callback function is a function that is both:

- passed as an argument to another function
- is invoked after some kind of event

Often, for asynchronous events, the callback invokes after the async task finishes.

### Each

### Map

### Reduce

### Filter

### Sort

## NPM

## Node

## Angular

## React

## Philosophy

### You spend more time maintaining code than writing it.

### You write code for your future self, not your present self.

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

Double Equal is known as abstractly equal. Whereas triple equal is known as strictly equal. The differences summed up are basically: Abstract equality will attempt to resolve the data types via type coercion before making a comparison. Strict equality will return false if the types are different.

Example:

```
console.log(3 == "3"); // true
console.log(3 === "3"); // false.
```
```
console.log(true == '1'); // true
console.log(true === '1'); // false
```

What happens in the two examples above, is the types are converted before doing the equality check.

When I mentioned pitfalls earlier, the two examples above are traps. But the bigger ones are these next two examples.

```
console.log(undefined == null); // true
console.log(undefined === null); // false. Undefined and null are distinct types and are not interchangeable.
```
```
console.log(true == 'true'); // false. A string will not be converted to a boolean and vice versa.
console.log(true === 'true'); // false
```

### Hoisting

Todo

### Double Bang (!!)

The double bang syntax is used as shorthang for quickly evaluating whether a value or expression is truthy or falsey.
The first (!) evaluates it and turns it to the opposite. The second (!) turns it back to the original positive (or negative) value.

```
console.log(Boolean(undefined));
//Outputs: false

console.log(!!undefined)
//Outputs: false


console.log(Boolean('positive or negative'));
//Outputs: true

console.log(!!'positive or negative');
//Outputs: true
```

#### Other Random Things
String literals are different than String objects.
```
console.log("This is a string." == new String("This is a string.")); // true
console.log("This is a string." === new String("This is a string.")); // false
```

To see why strict equality returned false, look at the next example:
```
console.log(typeof "This is a string."); // string
console.log(typeof new String("This is a string.")); //object
```

Long story short, don't use `==`. Just use `===` to be able to control what you want to do. Some people try to do some ridiculously cute things with `==`, and it just makes the code very difficult to comprehend.


## Todo
- Call/Bind/Apply/This
- Switch Statements
- Try // Catch
- Instantiation Patterns
- Hoisting
- Immutable Data Structures
- Getting Started: Console.
- Dev Tools
- TDD
- Additional links to learn: MDN, NG, React/Redux, W3, etc
- new Date()
- !!
- Spread Operator (...)
- Recursion