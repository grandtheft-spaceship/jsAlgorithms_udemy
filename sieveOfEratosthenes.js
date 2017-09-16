function sieveofEratosthenes(num) {
  let primesList = new Array(num + 1); // create initial array
  let squareRoot = Math.floor(Math.sqrt(num)); // length we will iterate up to
  primesList.fill(true); // fill each index with default value 'true'
  primesList[0] = false; // 0 is NOT a prime number
  primesList[1] = false; // 1 is NOT a prime number

  for (let i = 2; i <= squareRoot; i++) { // start at 2 because we already marked 0 and 1 as 'false'
    for (let j = 2; j * i <= num; j++) { // j * i is each multiple of the current index, which is i // increase multiples as long as its < number passed
      // This works because the 'j' continues iterating while i stays at value 2 // when j is complete, then i will increase its value by 1 and iterate through j again
      // console.log("**************")
      // console.log("j: " + j);
      // console.log("i: " + i);
      // console.log("**************")
      primesList[j * i] = false; // mark all multiples as false
    }
  }

  let result = new Array;
  for (let i = 0; i < primesList.length; i++) {
      if (primesList[i]) result.push(i); // if value === true, push i , which === index number, into new result array
  }
  return result; // return result array with all primes numbers...n
};

console.log(sieveofEratosthenes(5));
console.log(sieveofEratosthenes(10));
console.log(sieveofEratosthenes(15));
console.log(sieveofEratosthenes(20));
console.log(sieveofEratosthenes(50));
console.log(sieveofEratosthenes(100));
