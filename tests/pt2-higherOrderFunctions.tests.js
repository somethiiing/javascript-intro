let _ = require('../pt2-higherOrderFunctions');
let expect = require('chai').expect;

describe('Part 2: Higher Order Functions', () => {
  describe('each', () => {
    it('should be a function', () => {
      expect(typeof _.each).to.equal('function');
    });
    it('should not return anything', () => {
      let returnValue = _.each([], () => {});
      expect(returnValue).to.not.exist;
    });
    it('should not mutate the input array', () => {
      let input = [1,2,3,4,5];
      let result = _.each(input, () => { });
      expect(input).to.eql([1,2,3,4,5])
    });
    it('should iterate over array and access every element', () => {
      let letters = ['a', 'b', 'c'];
      let results = [];
      _.each(letters, elem => {
        results.push(elem);
      });
      expect(results).to.eql(['a', 'b', 'c']);
    });
    it('should iterate over array and access every index', () => {
      let letters = ['a', 'b', 'c'];
      let results = [];

      _.each(letters, (elem, ind) => {
        results.push([elem, ind]);
      });
      expect(results).to.eql([['a', 0], ['b', 1], ['c', 2]]);
    });
    it('should iterate over array and have access to original collection', () => {
      let letters = ['a', 'b', 'c'];
      let results = [];

      _.each(letters, (elem, ind, collection) => {
        results.push([elem, ind, collection]);
      });
      expect(results).to.eql([['a', 0, ['a', 'b', 'c'] ], ['b', 1, ['a', 'b', 'c']], ['c', 2, ['a', 'b', 'c']]]);
    });
    it('should not iterate over properties', () => {
      let letters = ['a', 'b', 'c'];
      let results = [];
      letters.someProperty = 'Do not iterate!';

      _.each(letters, (letter, index, collection) => {
        results.push(letter);
      });

      expect(results).to.not.include('Do not iterate!');
    });
    it('should iterate over object and should access each property', () => {
      let obj = {a: 'apple', b: 'banana', c: 'carrots'};
      let results = [];
      _.each(obj, prop => {
        results.push(prop);
      });
      expect(results).to.eql(['apple', 'banana', 'carrots']);
    });
    it('should iterate over object and should access each key', () => {
      let obj = {a: 'apple', b: 'banana', c: 'carrots'};
      let results = [];
      _.each(obj, (prop, key) => {
        results.push([prop, key]);
      });
      expect(results).to.eql([['apple', 'a'], ['banana', 'b'], ['carrots', 'c']]);
    });
    it('should iterate over object and should have access to the collection', () => {
      let obj = {a: 'apple', b: 'banana', c: 'carrots'};
      let results = [];
      _.each(obj, (prop, key, collection) => {
        results.push([prop, key, collection]);
      });
      expect(results).to.eql([['apple', 'a', {a: 'apple', b: 'banana', c: 'carrots'}], ['banana', 'b', {a: 'apple', b: 'banana', c: 'carrots'}], ['carrots', 'c', {a: 'apple', b: 'banana', c: 'carrots'}]]);
    });
    it('should not confuse an object with a length property for an array', () => {
      let dresser = { length: 39, width: 79, height: 127};
      let iterations = [];
      _.each(dresser, (value, property, object) => {
        iterations.push([value, property, object]);
      });
      expect(iterations).to.eql([ [39, 'length', dresser], [79, 'width', dresser], [127, 'height', dresser] ]);
    });




  });
  describe('map', () => {
    it('should be a function', () => {
      expect(typeof _.map).to.equal('function');
    });
    it('should not mutate the input array', function() {
      let input = [1,2,3,4,5];
      let result = _.map(input, () => {});
      expect(input).to.eql([1,2,3,4,5])
    });
    it('should apply a function to every element in an array', () => {
      let doubledNumbers = _.map([1, 2, 3], elem => {
        return elem * 2;
      });
      expect(doubledNumbers).to.eql([2, 4, 6]);
    });
    it('should produce a brand new array instead of modifying the input array', () => {
      let numbers = [1, 2, 3];
      let mappedNumbers = _.map(numbers, elem => {
        return elem;
      });
      expect(mappedNumbers).to.not.equal(numbers);
    });
  });
  describe('reduce', () => {
    it('should be a function', () => {
      expect(typeof _.reduce).to.equal('function');
    });
    it('should not mutate the input array', () => {
      let input = [1,2,3,4,5];
      let result = _.reduce(input, (memo, item) => item);
      expect(input).to.eql([1,2,3,4,5])
    });
    it('should invoke the iterator function with arguments (memo, item) in that order', () => {
      let memoInCallback, itemInCallback;

      _.reduce(['item'], (memo, item) => {
        memoInCallback = memo;
        itemInCallback = item;
      }, 'memo');

      expect(memoInCallback).to.equal('memo');
      expect(itemInCallback).to.equal('item');
    });
    it('should pass items of the array into the iterator from left to right', () => {
      let orderTraversed = [];

      _.reduce([1,2,3,4], (memo, item) => {
        orderTraversed.push(item);
        return memo;
      }, 10);

      expect(orderTraversed).to.eql([1,2,3,4]);
    });
    it('should continue to call iterator even if the iterator returns undefined', () => {
      let callCount = 0;
      let returnFalsey = (total, item) => {
        callCount++;
        return callCount === 1 ? undefined : item + 1;
      };
      let total = _.reduce([1,1,2], returnFalsey);
      expect(total).to.equal(3);
    });
    it('should pass every item of the array into the iterator if a memo is passed in', () => {
      let result = _.reduce([1,2,3], (memo, item) => {
        return memo - item;
      }, 10);
      expect(result).to.equal(4);
    });
    it('should accept falsey values as a valid memo', () => {
      // Be careful how you check if a memo has been passed in
      let result = _.reduce([1,2,3], (memo, item) => {
        return memo * item;
      }, 0);
      expect(result).to.equal(0);
    });
    it('should set memo to be the first item of the array if no memo is passed in', () => {
      let result = _.reduce([1,2,3], memo => {
        return memo;
      });
      expect(result).to.equal(1);
    });
    it('should pass the second item of the array into the iterator first if a memo is not passed in', () => {
      let result = _.reduce([3,2,1], (memo, item) => {
        return memo - item;
      });
      expect(result).to.equal(0);
    });

  });
  describe('mapReduce', () => {
    it('should be a function', () => {
      expect(typeof _.mapReduce).to.equal('function');
    });
    it('should not mutate the input array', () => {
      let input = [1,2,3,4,5];
      let result = _.mapReduce(input, elem => elem, (memo, item) => item);
      expect(input).to.eql([1,2,3,4,5])
    });
    it('should run even if third argument isn\'t there', () => {
      expect(_.mapReduce([1, 2, 3], elem => elem)).to.eql([1, 2, 3]);
    });
    it('should apply a function to every element in an array', () => {
      let doubledNumbers = _.mapReduce([1, 2, 3], elem => {
        return elem * 2;
      });
      expect(doubledNumbers).to.eql([2, 4, 6]);
    });
    it('should produce a brand new array instead of modifying the input array', () => {
      let numbers = [1, 2, 3];
      let mappedNumbers = _.mapReduce(numbers, elem => elem);
      expect(mappedNumbers).to.not.equal(numbers);
    });
    it('should continue to call iterator even if the iterator returns undefined', () => {
      let callCount = 0;
      let returnFalsey = (total, item) => {
        callCount++;
        return callCount === 1 ? undefined : item + 1;
      };
      let total = _.mapReduce([1,1,2], elem => elem, returnFalsey);
      expect(total).to.equal(3);
    });
    it('should set memo to be the first item of the array if no memo is passed in', () => {
      let result = _.mapReduce([1,2,3], elem => elem, memo => {
        return memo;
      });
      expect(result).to.equal(1);
    });
    it('should pass the second item of the array into the iterator first if a memo is not passed in', () => {
      let result = _.mapReduce([3,2,1], elem => elem, (memo, item) => {
        return memo - item;
      });
      expect(result).to.equal(0);
    });
    it('should reduce after map runs', () => {
      let numbers = [1, 2, 3];
      let result = _.mapReduce(numbers, elem => elem * 2, (memo, item) => memo + item);
      expect(result).to.eql(12);
    });
  });
  describe('sort', () => {
    it('should be a function', () => {
      expect(typeof _.sort).to.equal('function');
    });
    it('should return an empty array if passed an empty array', () => {
      expect(_.sort([])).to.eql([]);
    });
    it('should sort numbers ascending', () => {
      expect(_.sort([3, 2, 1])).to.eql([1, 2, 3]);
    })
    it('should sort strings alphabetically', () => {
      expect(_.sort('c', 'b', 'a')).to.eql(['a', 'b', 'c']);
    });
  });
  describe('pluck', () => {
    it('should return values contained at a user-defined property', () => {
      let people = [
        { name: 'joe', age: 20 },
        { name: 'moe', age: 30 }
      ];
      expect(_.pluck(people, 'name')).to.eql(['joe', 'moe']);
    });
    it('should not modify the original array', () => {
      let people = [
        { name: 'joe', age: 20 },
        { name: 'moe', age: 30 }
      ];
      _.pluck(people, 'name');
      expect(people).to.eql([{ name: 'joe', age: 20 }, { name: 'moe', age: 30 }]);
    });
  });
  describe('merge', () => {
    it('should be a function', () => {
      expect(typeof _.merge).to.equal('function');
    });
    it('should return undefined when no callback', () => {
      expect(_.merge([], [])).to.equal(undefined);
    });
    it('should have access to every element', () => {
      expect(_.merge([1, 2, 3], [2, 4, 6], (elem1, elem2) => [elem1, elem2])).to.eql([[1,2], [2,4], [3,6]]);
    });
    it('should apply callback to each element of both arrays', () => {
      expect(_.merge([1, 2, 3], [2, 4, 6], (elem1, elem2) => elem1 + elem2)).to.eql([3, 6, 9]);
    });
  });
  describe('remove', () => {
    it('should be a function', () => {
      expect(typeof _.remove).to.equal('function');
    });
    it('should return [] if empty array passed in', () => {
      expect(_.remove([])).to.eql([]);
    });
    it('should return original array if no second argument', () => {
      expect(_.remove([1, 2, 3])).to.eql([1, 2, 3]);
    });
    it('should not alter original array', () => {
      let original = [1, 2, 3];
      let result = _.remove(original, [1, 2]);
      expect(original).to.eql([1, 2, 3]);
    });
    it('should successfully return a new array with elements removed', () => {
      let original = [1, 2, 3];
      expect(_.remove(original, [1, 2])).to.eql([3]);
    });
  });
  describe('unique', () => {
    it('should not mutate the input array', () => {
      let input = [1,2,3,4,5];
      let result = _.unique(input);
      expect(input).to.eql([1,2,3,4,5])
    });
    it('should return all unique values contained in an unsorted array', () => {
      let numbers = [1, 2, 1, 3, 1, 4];
      expect(_.unique(numbers)).to.eql([1, 2, 3, 4]);
    });
    it('should produce a brand new array instead of modifying the input array', () => {
      let numbers = [1, 2, 1, 3, 1, 4];
      let uniqueNumbers = _.uniq(numbers);
      expect(uniqueNumbers).to.not.equal(numbers);
    });
  });
  describe('indexOf', () => {
    it('should be a function', () => {
      expect(typeof _.indexOf).to.equal('function');
    });
    it('should find the correct index in the list', () => {
      let numbers = [10, 20, 30, 40, 50];
      expect(_.indexOf(numbers, 40)).to.equal(3);
    });
    it('should be able to compute indexOf even when the native function is undefined', () => {
      let numbers = [10, 20, 30];
      expect(_.indexOf(numbers, 20)).to.equal(1);
    });
    it('returns -1 when the target cannot be found not in the list', () => {
      let numbers = [10, 20, 30, 40, 50];
      expect(_.indexOf(numbers, 35)).to.equal(-1);
    });
    it('returns the first index that the target can be found at when there are multiple matches', () => {
      let numbers = [1, 40, 40, 40, 40, 40, 40, 40, 50, 60, 70];
      expect(_.indexOf(numbers, 40)).to.equal(1);
    });
  });
  describe('letterCount', () => {
    it('should be a function', () => {
      expect(typeof _.letterCount).to.equal('function');
    });
    it('should return an object even if there is an empty string', () => {
      expect(_.letterCount('')).to.eql({});
    });
    it('should should accurately return letter count', () => {
      expect(_.letterCount('hello world')).to.eql({ h: 1, e: 1, l: 3, o: 2, w: 1, r: 1, d: 1 });
    });
    it('should work on punctuations', () => {
      expect(_.letterCount('!!!:D:D')).to.eql({ '!': 3, ':': 2, 'D': 2 });
    });
    it('should differentiate capitalized and lowercased letters', () => {
      expect(_.letterCount('aaaAAAbbbBBB')).to.eql({ a: 3, A: 3, b: 3, B: 3 });
    });
  });
  describe('duplicates', () => {
    it('should be a function', () => {
      expect(typeof _.duplicates).to.equal('function');
    });
    it('should return true if passed in an empty array', () => {
      expect(_.duplicates([])).to.equal(true);
    });
    it('should return false when no duplicates', () => {
      expect(_.duplicates([1, 2, 3, 4])).to.equal(false);
    });
    it('should return true when there is duplicates', () => {
      expect(_.duplicates([1, 2, 3, 1])).to.equal(true);
    });
  });
  describe('filter', () => {
    it('should be a function', () => {
      expect(typeof _.filter).to.equal('function');
    });
    it('should return all even numbers in an array', () => {
      let isEven = num => num % 2 === 0;
      let evens = _.filter([1, 2, 3, 4, 5, 6], isEven);
      expect(evens).to.eql([2, 4, 6]);
    });

    it('should return all odd numbers in an array', () => {
      let isOdd = num =>  num % 2 !== 0;
      let odds = _.filter([1, 2, 3, 4, 5, 6], isOdd);
      expect(odds).to.eql([1, 3, 5]);
    });

    it('should produce a brand new array instead of modifying the input array', () => {
      let isOdd = num => num % 2 !== 0;
      let numbers = [1, 2, 3, 4, 5, 6];
      let evens = _.filter(numbers, isOdd);
      expect(evens).to.not.equal(numbers);
    });
  });
  describe('every', () => {
    it('should be a function', () => {
      expect(typeof _.every).to.equal('function');
    });
    it('passes by default for an empty collection', () => {
      expect(_.every([], val => val)).to.be.true;
    });

    it('passes for a collection of all-truthy results', () => {
      expect(_.every([true, {}, 1], val => val)).to.be.true;
    });

    it('fails for a collection of all-falsey results', () => {
      expect(_.every([null, 0, undefined], val => val)).to.be.false;
    });

    it('fails for a collection containing mixed falsey and truthy results', () => {
      expect(_.every([true, false, 1], val => val)).to.be.false;
      expect(_.every([1, undefined, true], val => val)).to.be.false;
    });

    it('should work when provided a collection containing undefined values', () => {
      expect(_.every([undefined, undefined, undefined], val => val)).to.be.false;
    });

    it('should cast the result to a boolean', () => {
      expect(_.every([1], val => val)).to.be.true;
      expect(_.every([0], val => val)).to.be.false;
    });

    it('should handle callbacks that manipulate the input', () => {
      expect(_.every([0, 10, 28], isEven)).to.be.true;
      expect(_.every([0, 11, 28], isEven)).to.be.false;
    });

    it('should work when no callback is provided', () => {
      expect(_.every([true, true, true])).to.be.true;
      expect(_.every([true, true, false])).to.be.false;
      expect(_.every([false, false, false])).to.be.false;
    });
  });
  describe('some', () => {
    it('should be a function', () => {
      expect(typeof _.some).to.equal('function');
    });
    it('should fail by default for an empty collection', () => {
      expect(_.some([])).to.be.false;
    });
    it('should pass for a collection of all-truthy results', () => {
      expect(_.some([true, {}, 1], val => val)).to.be.true;
    });
    it('should fail for a collection of all-falsey results', () => {
      expect(_.some([null, 0, undefined], val => val)).to.be.false;
    });
    it('should pass for a collection containing mixed falsey and truthy results', () => {
      expect(_.some([true, false, 1], val => val)).to.be.true;
    });
    it('should pass for a set containing one truthy value that is a string', () => {
      expect(_.some([null, 0, 'yes', false], val => val)).to.be.true;
    });
    it('should fail for a set containing no matching values', () => {
      expect(_.some([1, 11, 29], isEven)).to.be.false;
    });
    it('should pass for a collection containing one matching value', () => {
      expect(_.some([1, 10, 29], isEven)).to.be.true;
    });
    it('should cast the result to a boolean', () => {
      expect(_.some([1], val => val)).to.be.true;
      expect(_.some([0], val => val)).to.be.false;
    });
    it('should work when no callback is provided', () => {
      expect(_.some([true, true, true])).to.be.true;
      expect(_.some([true, true, false])).to.be.true;
      expect(_.some([false, false, false])).to.be.false;
    });
  });
  describe('reject', () => {
    it('should be a function', () => {
      expect(typeof _.reject).to.equal('function');
    });
    it('should reject all even numbers', () => {
      let isEven = num => num % 2 === 0;
      let odds = _.reject([1, 2, 3, 4, 5, 6], isEven);
      expect(odds).to.eql([1, 3, 5]);
    });
    it('should reject all odd numbers', () => {
      let isOdd = num => num % 2 !== 0;
      let evens = _.reject([1, 2, 3, 4, 5, 6], isOdd);
      expect(evens).to.eql([2, 4, 6]);
    });
    it('should produce a brand new array instead of modifying the input array', () => {
      let isOdd = num => num % 2 !== 0;
      let numbers = [1, 2, 3, 4, 5, 6];
      let evens = _.reject(numbers, isOdd);
      expect(evens).to.not.equal(numbers);
    });
  });
  describe('shallowFlatten', () => {
    it('should be a function', () => {
      expect(typeof _.shallowFlatten).to.equal('function');
    });
    it('should return an empty array if passed in an empty array', () => {
      expect(_.shallowFlatten([])).to.eql([]);
    });
    it('can flatten a two dimensional array', () => {
      let nestedArray = [1, [2], [3], 4];
      expect(_.flatten(nestedArray)).to.eql([1,2,3,4]);
    });
  });
  describe('intersection', () => {
    it('should be a function', () => {
      expect(typeof _.intersection).to.equal('function');
    });
    it('should return argument if only one argument is passed in', () => {
      expect(_.intersection([1, 2, 3])).to.eql([1, 2, 3]);
    });
    it('should take the set intersection of two arrays', () => {
      let stooges = ['moe', 'curly', 'larry'];
      let leaders = ['moe', 'groucho'];
      expect(_.intersection(stooges, leaders)).to.eql(['moe']);
    });
    it('should take in an arbitrary amount of arguments', () => {
      let arg = [1, 2];
      let results = _.intersection(arg, arg, arg, arg, arg, arg, arg, arg, arg);
      expect(results).to.eql([1, 2]);
    });
    it('should not modify the argument arrays', () => {
      let arg = [1, 2];
      let arg2 = [1, 2, 3];
      let result = _.intersection(arg, arg2);
      expect(arg).to.eql([1, 2]);
      expect(arg2).to.eql([1, 2, 3]);
    });
  });
  describe('zip', () => {
    it('should be a function', () => {
      expect(typeof _.zip).to.equal('function');
    });
    it('should return original array if only one argument', () => {
      expect(_.zip([1, 2, 3])).to.eql([1, 2, 3]);
    });
    it('should zip together arrays of different lengths', () => {
      let names = ['joe', 'moe', 'doe']
      let ages = [30, 40, 50]
      let leaders = [true];
      expect(_.zip(names, ages, leaders)).to.eql([
        ['joe', 30, true],
        ['moe', 40, undefined],
        ['doe', 50, undefined]
      ]);
    });
    it('should take in an arbitrary amount of arguments', () => {
      let result = _.zip([1], [1], [1], [1], [1]);
      expect(result).to.eql([1, 1, 1, 1, 1]);
    });
  });
  describe('sortedIndex', () => {
    it('should be a function', () => {
      expect(typeof _.sortedIndex).to.equal('function');
    });
    it('should return -1 if not found', () => {
      let arr = [1, 2, 3];
      expect(_.sortedIndex(arr, 5)).to.eql(-1);
    });
    it('should find the right index', () => {
      let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      expect(_.sortedIndex(arr, 5)).to.eql(5);
    });
    it('returns the first index that the target can be found at when there are multiple matches', () => {
      let numbers = [1, 40, 40, 40, 40, 40, 40, 40, 50, 60, 70];
      expect(_.sortedIndex(numbers, 40)).to.equal(1);
    });
  });
});
