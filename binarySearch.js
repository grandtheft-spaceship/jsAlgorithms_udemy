function binarySearch(numArray, key) {
  var middleIndex = Math.floor(numArray.length / 2);
  var middleElement = numArray[middleIndex];

  if (middleElement === key) return true;
  else if (middleElement < key && numArray.length > 1) {
    return binarySearch(numArray.splice(middleIndex, numArray.length), key); // recursively call binarySearch() method using the Array.splice() method to search the other half of numArray
  }
  else if (middleElement > key && numArray.length > 1) {
    return binarySearch(numArray.splcie(0, middleIndex), key);
  }
  else return false; // Key is not in numArray
}

console.log(binarySearch([5, 7, 12, 16, 36, 39, 42, 56, 71], 56));
