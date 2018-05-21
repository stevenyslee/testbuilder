// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.
  let firstChar = cardNumber.slice(0, 1);
  let firstTwoChar = cardNumber.slice(0, 2);
  let firstThreeChar = cardNumber.slice(0, 3);
  let firstFourChar = cardNumber.slice(0, 4);
  let firstSixChar = cardNumber.slice(0, 6);

  //Diner's Club
  if( (firstTwoChar === '38' && cardNumber.length === 14) || (firstTwoChar === '39' && cardNumber.length === 14) ){
  	return "Diner's Club";
  }
  //American Express
  if( (firstTwoChar === '34' && cardNumber.length === 15) || (firstTwoChar === '37' && cardNumber.length === 15) ){
  	return "American Express";
  }

// Visa always has a prefix of 4 and a length of 13, 16, or 19.
// Switch always has a prefix of 4903, 4905, 4911, 4936, 564182, 633110, 6333, or 6759 and a length of 16, 18, or 19.
// Heads up! Switch and Visa seem to have some overlapping card numbers - in any apparent conflict, you should choose the network with the longer prefix.
  if( firstChar === '4' ){
  	if( (firstFourChar === '4903' || firstFourChar === '4905' || firstFourChar === '4911' || firstFourChar === '4935' || firstSixChar === '564182' || firstSixChar === '633110' || firstFourChar === '6333' || firstFourChar === '6759') && (cardNumber.length === 16 || cardNumber.length === 18 || cardNumber.length === 19) ){
  		return "Switch";
  	} else if( cardNumber.length === 13 || cardNumber.length === 16 || cardNumber.length === 19 ){
  		return "Visa";
  	}
  }

// MasterCard always has a prefix of 51, 52, 53, 54, or 55 and a length of 16.
  if( (firstTwoChar === '51' || firstTwoChar === '52' || firstTwoChar === '53' || firstTwoChar === '54' || firstTwoChar === '55') && (cardNumber.length === 16) ){
  	return "MasterCard";
  }
// Discover always has a prefix of 6011, 644-649, or 65, and a length of 16 or 19.
// Maestro always has a prefix of 5018, 5020, 5038, or 6304, and a length of 12-19.
	if( (firstFourChar === '6011' || firstThreeChar === '644' || firstThreeChar === '645' || firstThreeChar === '646' || firstThreeChar === '647' || firstThreeChar === '648' || firstThreeChar === '649' || firstTwoChar === '65') && (cardNumber.length === 16 || cardNumber.length === 19) ){
		return "Discover";
	}
	if( (firstFourChar === '5018' || firstFourChar === '5020' || firstFourChar === '5038' || firstFourChar === '6304') && ( cardNumber.length >= 12 && cardNumber.length <= 19) ){
		return 'Maestro';
	}
// China UnionPay always has a prefix of 622126-622925, 624-626, or 6282-6288 and a length of 16-19.
	if( ((firstSixChar >= 622126 && firstSixChar <= 622925) || (firstThreeChar >= 624 && firstThreeChar <= 626) || (firstFourChar >= 6282 && firstFourChar <= 6288)) && (cardNumber.length >= 16 && cardNumber.length <= 19) ){
		return "China UnionPay";
	}

};


