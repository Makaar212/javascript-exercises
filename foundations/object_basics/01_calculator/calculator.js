const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (arr) {
  return arr.reduce((agg, curr) => {
    return agg + curr;
  }, 0);
};

const multiply = function (arr) {
  return arr.reduce((agg, curr) => {
    return agg * curr;
  }, 1);
};

const power = function (base, exponent) {
  let res = base;
  for (let i = 1; i < exponent; i++) {
    res *= base;
  }
  return res;
};

const factorial = function (factorial) {
  let res = 1;
  for (let i = 1; i <= factorial; i++) {
    res *= i;
  }
  return res;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
