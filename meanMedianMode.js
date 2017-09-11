function meanMedianMode(array)  {
  return {
    mean: getMean(array),
    median: getMedian(array),
    mode: getMode(array)
  };
};

function getMean(array) {
  var mean = 0;

  array.forEach(num=> {
    mean += num;
  });
  return mean / array.length;
};

function getMedian(array) {
  array.sort(function(a, b){return a-b});
  var median;

  if (array.length % 2 !== 0) {
    median = array[Math.floor(array.length / 2)];
  }
  else {
    var mid1 = array[(array.length / 2) - 1];
    var mid2 = array[array.length / 2];
    median = (mid1 + mid2) / 2;
  }

  return median;
}

function getMode(array) {
  var modeObj = {};

  // create modeObj
  array.forEach(num => {
    if (!modeObj[num]) modeObj[num] = 0;
    modeObj[num]++;
  });

  // create array of mode/s
  var maxFrequency = 0;
  var modes = [];
  for (var num in modeObj) {
    if (modeObj[num] > maxFrequency) {
      modes = [num];
      maxFrequency = modeObj[num];
    }
    else if (modeObj[num] === maxFrequency) modes.push(num);
  }
  // if every value appears same amount of times
  if (modes.length === Object.keys(modeObj).length) modes = [];
  return modes;
}

// function getMedian(array) {
//   var middleIndex = Math.floor((array.length / 2));
//   var median;
//   console.log("MiddleIndex: " + middleIndex)
//   array.sort();
//   (array.length % 2) === 0 ? median = array[middleIndex] : median = (array[middleIndex] + array[middleIndex + 1]) / 2;
//   console.log(median)
//     return median;
// };


// function getMode(array) {
//   var modeObject = {};
//   var maxFrequency = 0;
//   var modes = new Array;
//
//   array.forEach(num => {
//     !modeObject[num] ? modeObject[num] = 0 : modeObject[num]++;
//   });
//
//   for (var num in modeObject) {
//     if (modeObject[num] > maxFrequency) {
//       modes = [num];
//       maxFrequency = modeObject[num];
//     } else if (modeObject[num] === maxFrequency) {
//       modes.push(num);
//     };
//   };
//   if (modes.length === Object.keys(modeObject).length) modes = [];
//
//   return modes;
// }
