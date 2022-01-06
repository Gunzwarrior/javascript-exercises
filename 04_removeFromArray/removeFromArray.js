const removeFromArray = function(array, itemRemoved) {
  array.splice(array.indexOf(itemRemoved), 1);
  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
