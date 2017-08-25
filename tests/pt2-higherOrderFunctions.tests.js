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

      _.each(letters, function(letter, index, collection) {
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
      _.each(obj, prop => {
        results.push([prop, key]);
      });
      expect(results).to.eql([['apple', 'a'], ['banana', 'b'], ['carrots', 'c']]);
    });
    it('should iterate over object and should have access to the collection', () => {
      let obj = {a: 'apple', b: 'banana', c: 'carrots'};
      let results = [];
      _.each(obj, prop => {
        results.push([prop, key]);
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
    
  })



























});

// each
// map
// reduce
// mapReduce
// sort
// pluck
// merge
// remove
// unique
// indexOf
// letterCount
// duplicates
// filter
// every
// some
// reject
// shallowFlatten
// intersection
// zip
// sortedIndex

