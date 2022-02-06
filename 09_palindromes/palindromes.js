const palindromes = function (phrase) {
  let arrayPhrase = phrase.split("");
  let filteredArrayPhrase = arrayPhrase.filter((element) => {
    if (element === "!" || element === "." || element === ","
        || element === " ") {
          return false;
        } else {
          return true;
        }
  });
  let filteredPhrase = filteredArrayPhrase.join("");
  let reversedArrayPhrase = filteredArrayPhrase.reverse();
  let reversedPhrase = reversedArrayPhrase.join("");
  return filteredPhrase === reversedPhrase ? true : false;
};

// Do not edit below this line
module.exports = palindromes;
