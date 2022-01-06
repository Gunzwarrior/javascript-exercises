const removeFromArray = function(array, itemRemoved) {
  const argLength = arguments.length;
  for (i = 1; i <=argLength - 1; i++) {
    if (array.indexOf(arguments[i]) !== -1) {
      array.splice(array.indexOf(arguments[i]), 1);
    }
  }
  
  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
