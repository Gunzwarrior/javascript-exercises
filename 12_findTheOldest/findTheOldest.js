const findTheOldest = function(array) {
  let aAge;
  let bAge;
  let oldest = array.sort((a, b) => {
    if (a.yearOfDeath) {
      aAge = a.yearOfDeath - a.yearOfBirth;
    } else {
      aAge = (new Date().getFullYear()) - a.yearOfBirth;
    };
    if (b.yearOfDeath) {
      bAge = b.yearOfDeath - b.yearOfBirth;
    } else {
      bAge = (new Date().getFullYear()) - b.yearOfBirth;
    }
    if (aAge < bAge) {
      return 1;
    } else {
      return -1;
    }
  });

  return oldest[0];
};

// Do not edit below this line
module.exports = findTheOldest;
