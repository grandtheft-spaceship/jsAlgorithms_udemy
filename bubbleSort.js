function bubbleSort(array) {
  for (let i = array.length; i > 0; i--) { // This creates an (array.length - 1) number of loops // We start at the end because we will NOT invoke our inner loop on one element shorter on each pass
    for (let j = 0; j < i; j++) { // This loop will handle the comparing of each number to the number to its right // With each pass, it will stop one element shorter than the last // We do this because we know with each pass throught the array, the largest element bubbles up to the top => j < i
      let currentNum = array[j];
      let nextNum = array[j + 1];

      console.log("****************")
      console.log("currentNum: " + currentNum)
      console.log("nextNum: " + nextNum)
      console.log("i: " + i)
      console.log("****************")

      if (currentNum > nextNum) {
        array[j + 1] = currentNum;
        array[j] = nextNum;
      }
    }
  }
  return array;
}

let testArray = [5,3,8,2,1,4]
let test2Array = [20,20,31,56,1,12,12]
let test3Array = [3,-9,-12,-1,-8]
console.log(bubbleSort(test3Array));





// FIRST ITERATION // SELF-MADE
// function bubbleSort(array) {
//   let counter = 0;
//
//   while (counter < (array.length - 1)) { // Could also use for (let i = array.length; i > 0; i--)
//     for (let i = 0; i < array.length; i++ ) {
//       let currentNum = array[i];
//       let nextNum = array[i + 1]
//
//       console.log("****************")
//       console.log("currentNum: " + currentNum)
//       console.log("nextNum: " + nextNum)
//       console.log("i: " + i)
//       console.log("****************")
//
//       if (currentNum > nextNum) {
//         array[i + 1] = currentNum;
//         array[i] = nextNum;
//       }
//     }
//     counter++;
//   }
//   return array;
// };
