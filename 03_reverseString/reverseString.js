const reverseString = function(str) {
  let strArray = [];
  const strLength = str.length;
  for (i = 0; i < strLength; i++) {
    const currentChar = str.charAt(i);
    strArray.push(currentChar);
  }
  const strArrayReversed = strArray.reverse();
  const strReversed = strArrayReversed.join("");
  return strReversed;
};

// Do not edit below this line
module.exports = reverseString;
