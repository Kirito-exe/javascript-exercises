const add = function(a,b) {
	return a+b
};

const subtract = function(a,b) {
	return a-b
};

const sum = function(arr) {
  return arr.reduce((sum,current)=> sum+current,0)
};

const multiply = function(arr) {
  return arr.reduce((sum,current)=> sum*current,1)
};

const power = function(a,b) {
	return a**b
};

const factorial = function(n) {
	let product = 1;
  for (let i = n; i > 0; i--) {
    product *= i;
  }
  return product;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
