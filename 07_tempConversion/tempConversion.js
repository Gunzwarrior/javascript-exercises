const ftoc = function(temp) {
  return temp = Math.round(((temp - 32) / 1.8) * 10) / 10;
};

const ctof = function(temp) {
  return temp = temp * 1.8 + 32;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
