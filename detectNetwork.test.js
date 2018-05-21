/*
 * You'll eventually be given instructions how to use this file
 * If you want to use it before then, you'll have to figure it out yourself
 */

// You don't actually want to fill *this* value in on line 9, but you'll see
// other places in this file where you'll replace the FILL_ME_IN with a
// different value.
var FILL_ME_IN = 'Fill this value in';
 
describe('Introduction to Mocha Tests - READ ME FIRST', function() {
  // A Mocha test is just a function!
  // If the function throws an error when run, it fails.
  // If it doesn't throw an error when run, it doesn't fail. 
  // To read more about mocha, visit mochajs.org

  // Once you've read and understood this section, please comment it out. 
  // You will not be able to proceed with a failing test. 

  // it('Throws an error so it fails', function() {
  //   throw new Error('Delete me!');
  // });

  it('Doesn\'t throw an error, so it doesn\'t fail', function() {
    // This test doesn't really test anything at all! It will pass no matter what.
    var even = function(num){
      return num/2 === 0;
    }
    return even(10) === true;
  });

  // In tests, we want to compare the expected behavior to the actual behavior.
  // A test should only fail if the expected behavior doesn't match the actual.
  it('Throws an error when expected behavior does not match actual behavior', function() {
    var even = function(num){
      return num%2 === 0;
    }

    if(even(10) !== true) {
      throw new Error('10 should be even!');
    }
  });
});

describe('Diner\'s Club', function() {

  it('has a prefix of 38 and a length of 14', function() { 
    if (detectNetwork('38345678901234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
  });

  it('has a prefix of 39 and a length of 14', function() {
    if (detectNetwork('39345678901234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
  });

});

describe('American Express', function() {
  // It can get annoying to keep typing the if/throw, so here is a
  // helper function to throw an error if the input statement isn't true. 
  var assert = function(isTrue) {
    if(isTrue) {
      throw new Error('Test failed');
    }
  };

  it('has a prefix of 34 and a length of 15', function() {
    assert(detectNetwork('343456789012345') !== 'American Express');
  });

  it('has a prefix of 37 and a length of 15', function() {
    assert(detectNetwork('373456789012345') !== 'American Express');
  });

});

describe('Visa', function() {
  // Chai is an entire library of helper functions for tests!
  // Chai provides an assert that acts the same as our previous assert.
  // Search the documentation to figure out how to access it. 
  //   http://chaijs.com/
  var assert = chai.assert;

  it('has a prefix of 4 and a length of 13', function() {
    assert(detectNetwork('4123456789012') === 'Visa');
  });

  it('has a prefix of 4 and a length of 16', function() {
    assert(detectNetwork('4123456789012345') === 'Visa');
  });

  it('has a prefix of 4 and a length of 19', function() {
    assert(detectNetwork('4123456789012345678') === 'Visa');
  });

});

describe('MasterCard', function() {
  // Chai lets you write more human-readable tests that throw helpful errors.
  // Expect syntax is one way to do this, but there are others. 
  // If you want to know more, check out the documentation. 
  //   http://chaijs.com/api/bdd/
  var should = chai.should();
 
  it('has a prefix of 51 and a length of 16', function() {
    detectNetwork('5112345678901234').should.equal('MasterCard');
  });
 
  it('has a prefix of 52 and a length of 16', function() {
    detectNetwork('5212345678901234').should.equal('MasterCard');
  });
 
  it('has a prefix of 53 and a length of 16', function() {
    detectNetwork('5312345678901234').should.equal('MasterCard');
  });
 

  // You can also use should instead of expect, which changes the style
  // slightly. It really doesn't matter which one you use - check out 
  // http://chaijs.com/guide/styles/ for more info, but it's important
  // to be consistent (unlike in this file, where we use BOTH expect
  // and should, but that's just for learning), so once you've gotten 
  // these tests to pass using should syntax, refactor your tests to 
  // use either expect or should, but not both. 
  let expect = chai.expect;

  it('has a prefix of 54 and a length of 16', function() {
    detectNetwork('5412345678901234').should.equal('MasterCard');
  });
 
  it('has a prefix of 55 and a length of 16', function() {
    detectNetwork('5512345678901234').should.equal('MasterCard');
  });
 
});

describe('Discover', function() {
  // Tests without a function will be marked as "pending" and not run
  // Implement these tests (and others) and make them pass!
  // Discover always has a prefix of 6011, 644-649, or 65, and a length of 16 or 19.
  var should = chai.should();

  it('has a prefix of 65 and a length of 16', function(){
    detectNetwork('6512345678901234').should.equal('Discover');
  });

  it('has a prefix of 65 and a length of 19', function(){
    detectNetwork('6512345678901234567').should.equal('Discover');
  });

  it('has a prefix of 6011 and a length of 16', function(){
    detectNetwork('6011123456789012').should.equal('Discover');
  });

  it('has a prefix of 6011 and a length of 19', function(){
    detectNetwork('6011123456789012345').should.equal('Discover');
  });

  for (var prefix = 644; prefix <= 649; prefix++ ) {
    (function(prefix){
      it('has a prefix of ' + prefix + ' and a length of 16', function(){
        detectNetwork(prefix + '1234567890123').should.equal('Discover');
      });

      it('has a prefix of ' + prefix + ' and a length of 19', function(){
        detectNetwork(prefix + '1234567890123456').should.equal('Discover');
      });
    })(prefix);
  }

});

describe('Maestro', function() {
  let lengthPad = '';
  // Maestro always has a prefix of 5018, 5020, 5038, or 6304, and a length of 12-19.
  // console.log('test Maestro');

  for (let i = 0; i <= 7; i++ ) {
    lengthPad += i;

    (function(i, lengthPad){
      it('has a prefix of 5018 and a length of ' + (12 + i), function(){
        detectNetwork('50181234567' + lengthPad).should.equal('Maestro');
      });

      it('has a prefix of 5020 and a length of ' + (12 + i), function(){
        detectNetwork('50201234567' + lengthPad).should.equal('Maestro');
      });

      it('has a prefix of 5038 and a length of ' + (12 + i), function(){
        detectNetwork('50381234567' + lengthPad).should.equal('Maestro');
      });

      it('has a prefix of 6304 and a length of ' + (12 + i), function(){
        detectNetwork('63041234567' + lengthPad).should.equal('Maestro');
      });

    })(i, lengthPad);
  }

});



describe('China UnionPay',function(){
  var should = chai.should();

  // China UnionPay always has a prefix of 622126-622925, 624-626, or 6282-6288 and a length of 16-19.
  for( let i = 622126; i <= 622925; i++ ){
    let lengthPad = '123456789';
    for( let j = 10; j <= 13; j++ ){
      lengthPad += '0';
      (function(i, lengthPad){
        it('has a prefix of ' + i + ' and a length of ' + (6 + j), function(){
          detectNetwork(i + lengthPad).should.equal('China UnionPay');
        });
      })(i, lengthPad);
    }
  }

  for( let i = 624; i <= 626; i++ ){
    let lengthPad = '123456789012';
    for( let j = 13; j <= 16; j++ ){
      lengthPad += '0';
      (function(i, lengthPad){
        it('has a prefix of ' + i + ' and a length of ' + (3 + j), function(){
          detectNetwork(i + lengthPad).should.equal('China UnionPay');
        });
      })(i, lengthPad);
    }
  }


  for( let i = 6282; i <= 6288; i++ ){
    let lengthPad = '12345678901';
    for( let j = 12; j <= 15; j++ ){
      lengthPad += '0';
      (function(i, lengthPad){
        it('has a prefix of ' + i + ' and a length of ' + (4 + j), function(){
          detectNetwork(i + lengthPad).should.equal('China UnionPay');
        });
      })(i, lengthPad);
    }
  }

});
describe('should support Switch',function(){  
  // Switch always has a prefix of 4903, 4905, 4911, 4936, 564182, 633110, 6333, or 6759 and a length of 16, 18, or 19.
  // Heads up! Switch and Visa seem to have some overlapping card numbers - in any apparent conflict, you should choose the network with the longer prefix.
  var should = chai.should();

  it('has a prefix of 4903 and a length of 16', function(){
    detectNetwork('4903012345678901').should.equal('Switch');
  });

  it('has a prefix of 4903 and a length of 18', function(){
    detectNetwork('490301234567890123').should.equal('Switch');
  });

  it('has a prefix of 4903 and a length of 19', function(){
    detectNetwork('4903012345678901234').should.equal('Switch');
  });

  it('has a prefix of 4905 and a length of 16', function(){
    detectNetwork('4905012345678901').should.equal('Switch');
  });

  it('has a prefix of 4905 and a length of 18', function(){
    detectNetwork('490501234567890123').should.equal('Switch');
  });

  it('has a prefix of 4905 and a length of 19', function(){
    detectNetwork('4905012345678901234').should.equal('Switch');
  });

  it('has a prefix of 4911 and a length of 16', function(){
    detectNetwork('4911012345678901').should.equal('Switch');
  });

  it('has a prefix of 4911 and a length of 18', function(){
    detectNetwork('491101234567890123').should.equal('Switch');
  });

  it('has a prefix of 4911 and a length of 19', function(){
    detectNetwork('4911012345678901234').should.equal('Switch');
  });

  it('has a prefix of 4936 and a length of 16', function(){
    detectNetwork('4936012345678901').should.equal('Switch');
  });

  it('has a prefix of 4936 and a length of 18', function(){
    detectNetwork('493601234567890123').should.equal('Switch');
  });

  it('has a prefix of 4936 and a length of 19', function(){
    detectNetwork('4936012345678901234').should.equal('Switch');
  });

  it('has a prefix of 564182 and a length of 16', function(){
    detectNetwork('5641820123456789').should.equal('Switch');
  });

  it('has a prefix of 564182 and a length of 18', function(){
    detectNetwork('564182012345678901').should.equal('Switch');
  });

  it('has a prefix of 564182 and a length of 19', function(){
    detectNetwork('5641820123456789012').should.equal('Switch');
  });

  it('has a prefix of 633110 and a length of 16', function(){
    detectNetwork('6331100123456789').should.equal('Switch');
  });

  it('has a prefix of 633110 and a length of 18', function(){
    detectNetwork('633110012345678901').should.equal('Switch');
  });

  it('has a prefix of 633110 and a length of 19', function(){
    detectNetwork('6331100123456789012').should.equal('Switch');
  });

  it('has a prefix of 6333 and a length of 16', function(){
    detectNetwork('6333012345678901').should.equal('Switch');
  });

  it('has a prefix of 6333 and a length of 18', function(){
    detectNetwork('633301234567890123').should.equal('Switch');
  });

  it('has a prefix of 6333 and a length of 19', function(){
    detectNetwork('6333012345678901234').should.equal('Switch');
  });

  it('has a prefix of 6759 and a length of 16', function(){
    detectNetwork('6759012345678901').should.equal('Switch');
  });

  it('has a prefix of 6759 and a length of 18', function(){
    detectNetwork('675901234567890123').should.equal('Switch');
  });

  it('has a prefix of 6759 and a length of 19', function(){
    detectNetwork('6759012345678901234').should.equal('Switch');
  });
  
});