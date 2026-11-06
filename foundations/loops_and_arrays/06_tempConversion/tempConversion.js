const convertToCelsius = function (fDegree) {
  return Math.round((fDegree - 32) * (5 / 9) * 10) / 10;
};

const convertToFahrenheit = function (cDegree) {
  return Math.round((cDegree * (9 / 5) + 32) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
