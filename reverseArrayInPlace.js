function reverseArrayInPlace(array) {
  var switchIndex = array.length - 1;
  var switchLength = array.length / 2;
  var switchElement;

  for (var i = 0; i < switchLength; i++ ) {
    switchElement = array[i];
    array[i] = array[switchIndex];
    array[switchIndex] = switchElement;
    switchIndex--;
  }
  return array;
};

console.log(reverseArrayInPlace([1,2,3,4]))
