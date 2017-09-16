function mergeSort(array) {
  if (array.length < 2) return array; // Acts as BASE CASE for RECURSION
  let middleIndex = Math.floor(array.length / 2);
  let firstHalf = array.slice(0, middleIndex);
  let secondHalf = array.slice(middleIndex);

  return merge(mergeSort(firstHalf), mergeSort(secondHalf));
}

function merge(array1, array2) {
  // console.log('array1: ' + array1);
  // console.log('array2: ' + array2);
  let result = new Array; // The final array we will be returning
  while (array1.length && array2.length) { // This is saying while array1 AND array2 are NOT empty
    let minElem;

    if (array1[0] < array2[0]) minElem = array1.shift(); // shift() method will pull the first element out of array1 and sets the value of minElem var to that first element
    else minElem = array2.shift();

    result.push(minElem);
  } // At the end of the while loop, we will be left with 1, EMPTY array and another array with AT LEAST 1 element in it
  if (array1.length) result = result.concat(array1); // add the values in array1 to result array // concat is NOT destructive
  else result = result.concat(array2);

  return result;
}

console.log(mergeSort([11, 7, 4, 1, 15, 12, 3]));
console.log(mergeSort([6000, 34, 203, 3, 746, 200, 984, 198, 764, 1, 9, 1]));
