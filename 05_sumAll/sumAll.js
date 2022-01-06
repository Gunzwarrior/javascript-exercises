const sumAll = function(firstNumber, lastNumber) {
  let sum = 0;
  let highNumber;
  let lowNumber;
  if (firstNumber < 0 || lastNumber < 0) {
    return "ERROR";
  } else if (firstNumber > lastNumber) {
    highNumber = firstNumber;
    lowNumber = lastNumber;    
  } else {
    highNumber = lastNumber;
    lowNumber = firstNumber;
  }
  for (let i = lowNumber; i <= highNumber; i++) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
