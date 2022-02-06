const fibonacci = function(number) {
  if (number < 0) return "OOPS";
  if (number === 0) return 0;
  let array = [1, 1];
  let newNumber;
  for (let i = 0; i <= number; i++) {
    if (i > 1) {
      newNumber = array[i - 2] + array[i - 1];
      array.push(newNumber)
    }
  }
  return array[number - 1];
};

// Do not edit below this line
module.exports = fibonacci;
