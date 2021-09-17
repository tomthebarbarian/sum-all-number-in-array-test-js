const sumItems = function(array) {
  // Sum all the numbers in the array
  console.log(array);
  if (array.length < 1) {
    return 0;
  } else if (Number.isInteger(array)) {
    return array;
  // Just Array
  } else if (array.length === 1) {
    return sumItems(array[0]);
  // Nested Array
  } else {
    return sumItems(array[0]) + sumItems(array.slice(1));
  }

};

module.exports = sumItems;