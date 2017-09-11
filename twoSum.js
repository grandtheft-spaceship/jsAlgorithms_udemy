function twoSum(array, sum) {
  var sumObject = new Array;
  var pairs = new Array;

  // twoSum([1,6,4,5,3,3], 7)
  // 1: 7, 6: 1, 4: 3 ...
  array.forEach(num => {
    var desiredNum = sum - num;
    if (sumObject.indexOf(desiredNum) !== -1) pairs.push([num, desiredNum]);
    sumObject.push(num);
  })
  return pairs;
};
