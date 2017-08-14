//Strings
let color = 'blue';
const food = 'steak';
let evenHappier = happy.toUpperCase();
let noExtraSpaces = extraSpaces.trim();
let properSpaces1 = improperSpaces.split('.').join(' ');
let properSpaces2 = improperSpaces.replace('.', ' ');

//Numbers
let age = 25;
let numbersMin = Math.min(numbersArr);
let numbersMax = Math.max(numbersArr);
let numbersAbs = Math.abs(-47);
let randomFourDigitNumber = Math.round(Math.random() * 100);

//Equality
let equality1 = 5 < 10;
let equality2 = 10 >= 5;
let equality3 = 3 === 3;
let equality4 = (3 + 6) === 9;
let equality5 = !false;
let equality6 = (!undefined);

//Arrays
let colorsArray = ['white', 'blue', 'black', 'red', 'green'];
let favoriteColor = colorsArray[2];
let reversedNumbers = moreNumbers.reverse();
let someNumbers = moreNumbers.slice(5, 9);
let newNumbers = moreNumbers.slice(0);
newNumbers.push(11);
newNumbers.unshift(-2, -1);
let newNumbersLength = newNumbers.length;

//Objects
let favorites = {};
favorites.food = 'steak';
favorites.color = 'blue';
favorites['song'] = 'One - Epik High';
favorites['quote'] = 'The world ends with you.';

let myself = {
  firstName: 'Wilson',
  lastName: 'Yu',
  age: 25,
  dob: 'March 29, 1992',
  occupation: 'Software Engineer',
  favorites: favorites
};

myself.greet = () => {
  console.log(`Hi, my name is ${this.firstName} ${this.lastName}`)
};
myself.greet();

//Loops
for (let i = 0; i < loopString.length; i++) {
  console.log(loopString[i]);
};

for (let i = 0; i < loopArray.length; i++) {
  console.log(loopArray[i]);
}

let keys = Object.keys(loopObject);
for (let i = 0; i < keys.length; i++) {
  console.log(keys[i], loopObject[keys]);
}

let counter = 0;
while (counter < 11) {
  console.log(counter);
  counter++
};

//Functions
let cube = num => {
  return num * num * num;
};

let reverse = str => {
  return str.split('').reverse().join('');
}

let searchForElement = (array, key) => {
  for (let i = 0; i < array.length; i++) {
    if (key === array[i]) {
      return true;
    }
  }
  return false;
}

// let searchForElement = (array, key) => {
//   return array.indexOf(key) === -1 ? false : true;
// };

let each = (array, callback) => {
  for (let i = 0; i < array.length; i++) {
    callback(array[i], i, array);
  }
}