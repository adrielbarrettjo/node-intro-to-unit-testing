const should = require('chai').should();

const fizzbuzz = require('../fizzBuzzer');

describe('fizzBuzzer', function() {
	it('should return fizz-buzz/buzz/fizz if divisible by 15/5/3', function() {
		const normalCases = [
			{num: 30, expected: 'fizz=buzz'},
			{num: 5, expected:'buzz'},
			{num: 3, expected: 'fizz'},
			{num: 7, expected: 7}
		];

	normalCases.forEach(function(input) {
      const answer = fizzbuzz(num);
      answer.should.equal(input.expected);


	})
});

describe('fizzBuzzer', function() {
	it('should raise error if args not numbers', function() {
  // range of bad inputs where not both are numbers
  const badInputs = [
    ['a'],
    ['1'],
    [false]
  ];
  // prove that an error is raised for bad inputs
  badInputs.forEach(function(input) {
    (function() {
        fizzbuzz(input)
    }).should.throw(Error);
  });
});


})