//Strings
let color = 'blue';
const food = 'steak';
let evenHappier = happy.toUpperCase();
let noExtraSpaces = extraSpaces.trim();
let properSpaces = improperSpaces.split('.').join(' ');
// let properSpaces2 = improperSpaces.replace('.', ' ');

//Numbers
let age = 25;
let numbersMin = Math.min(5, 6, 3, 4, 7, 8, 1, 2);
let numbersMax = Math.max(5, 6, 3, 4, 7, 8, 1, 2);
let numbersAbs = Math.abs(-47);
let randomFourDigitNumber = Math.round(Math.random() * 10000);

//Equality
let equality1 = 5 < 10;
let equality2 = 10 >= 5;
let equality3 = 3 === 3;
let equality4 = (3 + 6) === 9;
let equality5 = !false;
let equality6 = (!undefined);
let equality7 = 5 && 6;
let equality8 = true || false;

//Arrays
let colorsArray = ['white', 'blue', 'black', 'red', 'green'];
let favoriteColor = colorsArray[2];
let newNumbers = moreNumbers.slice(0);
let reversedNumbers = moreNumbers.slice(0).reverse();
let someNumbers = moreNumbers.slice(5, 9);
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

myself.greet = function() {
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



// Strings
console.log('STRINGS:');
console.log('1A:  ', typeof color === 'string', '   color: ', color);
console.log('1B:  ', typeof food === 'string', '   food: ', food);
console.log('1C:  ', evenHappier.toUpperCase() === evenHappier, '   evenHappier: ', evenHappier);
console.log('1D:  ', noExtraSpaces[0] !== ' ', '   noExtraSpaces: ', noExtraSpaces);
console.log('1E:  ', properSpaces.indexOf('.') === -1, '   properSpaces: ', properSpaces);
console.log('\n');console.log('\n');console.log('\n');

// Numbers
console.log('Numbers:');
console.log('2A:  ', numbersMin === 1, '   numbersMin: ', numbersMin);
console.log('2B:  ', numbersMax === 8, '   numbersMax: ', numbersMax);
console.log('2C:  ', numbersAbs === 47, '   numbersAbs: ', numbersAbs);
console.log('2D:  ', randomFourDigitNumber.toString().length === 4, '   randomFourDigitNumber: ', randomFourDigitNumber);
console.log('\n');console.log('\n');console.log('\n');

// Equality
console.log('Equality: ');
console.log('3A:  ', equality1);
console.log('3B:  ', equality2);
console.log('3C:  ', equality3);
console.log('3D:  ', equality4);
console.log('3E:  ', equality5);
console.log('3F:  ', equality6);
console.log('3G:  ', equality7);
console.log('3H:  ', equality8);
console.log('\n');console.log('\n');console.log('\n');

// Arrays
console.log('Arrays: ');
console.log('4A:  ', colorsArray.length === 5, '   colorsArray: ', colorsArray);
console.log('4B:  ', colorsArray[2] === favoriteColor, '   favoriteColor: ', favoriteColor);
console.log('4C:  ', newNumbers.toString() === [-2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].toString(), '   newNumbers: ', newNumbers);
console.log('4D:  ', reversedNumbers.toString() === moreNumbers.slice(0).reverse().toString(), '   reversedNumbers: ', reversedNumbers);
console.log('4E:  ', someNumbers.toString() === moreNumbers.slice(5, 9).toString(), '   someNumbers: ', someNumbers);
console.log('4F:  ', newNumbers[newNumbers.length - 1] === 11);
console.log('4G:  ', newNumbers[0] === -2 && newNumbers[1] === -1);
console.log('4H:  ', newNumbersLength === 14, '   newNumbersLength: ', newNumbersLength);
console.log('\n');console.log('\n');console.log('\n');

// Objects
console.log('Objects: ');
console.log('5A:  ', !!favorites && !!favorites.food && !!favorites.color && !!favorites.song && !!favorites.quote, '   favorites: ', JSON.stringify(favorites));
console.log('5B:  ', !!myself && !!myself.firstName && !!myself.lastName && !!myself.age && !!myself.dob && !!myself.occupation && !!myself.favorites, '   myself: ', JSON.stringify(myself));
console.log('5C:  ', typeof myself.greet === 'function');
myself.greet();
console.log('\n');console.log('\n');console.log('\n');

// Loops
// no tests for loops
console.log('Loops: ');
console.log('No tests for loops');
console.log('\n');console.log('\n');console.log('\n');

// Functions:
console.log('Functions: ');
console.log('7A:  ', cube(3) === 27);
console.log('7B:  ', reverse('abc') === 'cba');
console.log('7C:  ', searchForElement([1, 2, 3], 2) === true && searchForElement([1, 2, 3], 4) === false );
console.log('\n');console.log('\n');console.log('\n');

// Putting it all together:
console.log('Putting it all together: ');
console.log('each: function? ', typeof each === 'function');
let eachTest = [1, 2, 3];
each(eachTest, elem => { return elem * 2 });
console.log('each: works? ', eachTest.toString() === [2, 4, 6].toString());


