const ftoc = function(temperature_fahre) {
  let temp = (temperature_fahre-32)*(5/9);
  return Math.round(temp * 10) / 10;
};

const ctof = function(temperature_cel) {
  let temp = (temperature_cel*(9/5)) + 32; 
  return Math.round(temp * 10) / 10;
};

module.exports = {
  ftoc,
  ctof
};
