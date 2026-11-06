const removeFromArray = function (arr, ...theArgs) {
  res = [];
  for (item of arr) {
    if (!theArgs.includes(item)) {
      res.push(item);
    }
  }
  return res;
};

// Do not edit below this line
module.exports = removeFromArray;
