const sumAll = function (x, y) {
  if (!Number.isInteger(x) || !Number.isInteger(y) || x < 0 || y < 0) {
    return "ERROR";
  }
  res = 0;
  if (x > y) {
    [x, y] = [y, x];
  }

  for (let i = x; i <= y; i++) {
    res += i;
  }
  return res;
};

// Do not edit below this line
module.exports = sumAll;
