const convertToCelsius = function(farenheit) {
  celsius = ((farenheit - 32) * 5/9);
  return celsius % 1 !== 0 ? parseFloat(celsius.toFixed(1)) : parseFloat(celsius.toFixed(0));
};

const convertToFahrenheit = function(celsius) {
  farenheit =((celsius * 9/5) + 32);
  return farenheit % 1 !== 0 ? parseFloat(farenheit.toFixed(1)) : parseFloat(farenheit.toFixed(0));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
