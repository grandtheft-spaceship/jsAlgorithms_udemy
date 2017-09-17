# Learning Algorithms in JavaScript From Scratch
## Introduction to Algorithms & Course Layout

* In this course, we will learn:
  * **Purpose** of each algorithm and what functionality it accomplishes
  * **How** each algorithm is written out in code and **why** it is built the way it is
  * **Concept, skills,** and **techniques** that you can apply to your own code when building applications and programs
* Some of the skills we will learn are:
  * recursion
  * memoization
  * functional programming
* We will be able to apply these skills and techniques to your own programming, and build your own algorithms

### Fizz Buzz

* Common interview question because it shows that that you are a good problem-solver and that you have a solid grasp on the fundamental, JavaScript concepts
* `fizzBuzz(num)` - function that takes any number as an argument (num) and log out every number from 1..num
  * For each number, if that number is divisible by 3, log `Fizz` instead of the number
  * For each number, if that number is divisible by 5, log `Buzz` instead of the number
  * For each number, if that number is divisible by both 3 and 5, log `FizzBuzz` instead of the numbers

#### Modulus Operator

* `%` returns remainder of number after number has been divided by another number

### Harmless Ransom Note

* Representation of a ransom note made with words cut from various magazines
* `function harmlessRansomNote(noteText, magazineText){};`
  * `noteText` argument which represents the desired note we want to write (as a string)
  * `magazineText`argument which represents the words available to make our note (as a string)
* The point of the algorithm is to determine if the `magazineText` available has enough words to create our `noteText`
  * If the `magazineText` is enough, we will **return true**
  * Else, we will **return false**

### Time Complexity & Big O Notation

* Used to classify how scalable an algorithm is
* Allows you to estimate the *worst-case runtime* of an algorithm
  * Basically, how long it'll take for the algorithm to complete based on its input size
* Big O will let us know *how much slower an algo will run as its input size grows*
* There are different types of runtimes, or *time-complexities*:
  * `0(1)` - constant runtime
  * `0(n)` - linear runtime (*proportional runtime*)
  * `0(n^2)` - exponential runtime (*'O of n squared'*)
  * `O(log n)` - logarithmic runtime

### Harmless Ransom Note - Code Part 1

* For this exercise, we'll assume that both `noteText` and `magazineText` do not contain any punctuation and all the letters are lowercase

### Harmless Ransom Note - Code Part 2
### Harmless Ransom Note - Testing

* The algorithm we wrote has a **linear time complexity - O(n)**
  * Even though we are using *two loops* in our function, they are **not nested**, so our time complexity is **not exponential**
  * The most important part of our algorithm, that determine our time complexity, are the two loops
  * To be even more specific:
    * Because we are looping through two different collections, that are most likely different sizes,
    * We would actually say that our algorithm has an `O(n) + O(m)` time complexity
      * This can be simplified down to `O(n + m)` time complexity, or even just `O(n)`

### Is Palindrome -Intro

* Takes a string as an argument
  * **return true** if string is a palindrome
  * **return false** if string is not a palindrome
* A **palindrome is a word/phrase that is spelled the same both forwards and backwards**
  * When determining a palindrome, we **ignore any punctuation characters**

### Is Palindrome - Code
### Caesar Cipher - Intro

* Takes two arguments, a **string** and a **number**
  * The objective is to **shift every letter in the given string by the number that is passed in**
  * Example:
  ```
    caesarCipher('zoo keeper', 2);
    => 'bbq mggrgt'
  ```
  * NOTE: When getting near the end of the alphabet, you will loop to the beginning of the alphabet
  * This algo can **also handle negative numbers**, meaning that you can **shift letters backwards in the alphabet as well as forward**

### Reverse Words - Intro

* Takes a string and reverse every word in that string
  * returns the new, reversed string
  * Example:
  ```
    reverseWords('this is a string of words');
    => 'siht si a gnirts fo sdrow'
  ```
  * Words are still in the same order, but each word itself has been reversed
  * Do not use the `array.reverse()` method

### Reverse Array In Place - Intro

* Take an array, reverses the same array, and returns that reversed array
* We will be manipulating the array that is passed in
* DO NOT push elements into a new array and return that array
* DO NOT use `array.reverse()` method

### Mean Median Mode - Intro

* Take an array, filled with only numbers return an object with 3 properties: the **mean**, **median**, and **mode** values
* We will create 4 separate functions for this algo
  * `getMean(array)`
    * *mean* - average of all the numbers // add them all up and divide by the number of numbers
  * `getMedian(array)`
  * `getMode(array)`
  * `meanMedianMode(array)`
    * This last function will call the other 3 functions and return the object with the 3 desired properties
* **Functional Programming** is the practice of breaking down algos/code into separate functions that can be reused in multiple places

### Two Sum - Intro

* Takes 2 arguments, an array and a sum
  * Returns every pair of numbers from the array that add up to the sum
  * Example:
  ```
    twoSum([1,6,4,5,3,3], 7)
    => result = [[1, 6], [3,4], [3,4]]
  ```
* Result should be an array of arrays
* Any number in the array can be used in multiple pairs
* Multiple ways of accomplishing result:
  * `O(n^2)` time complexity -> *occurs when using nested loops*
  * `O(n)` time complexity -> *occurs when using a hash table*

### Binary Search - Intro

* Search for a given value inside of a list
* List should be **sorted**
* An essential algorithm to know because of it's wide-use range, popularity in interviews, and performance
* Runs in `O(log n)` runtime, very performant
* Can be written as a **recursive** function

### Introduction to Recursion & the Call Stack

* **Recursion** is when a function calls itself
* Must have a **base case** and a **recursive case**

### Fibonacci - Intro

* A special sequence of numbers, called **the fibonacci sequence**
* The sequence begins with `1, 1`
  * Every number after that is the sum of the previous two numbers
  * `1,1,2,3,5,8,13,21,34...`
* A great practice for *recursion*
* We will be **given a number, position, and we want to return the number at that position in the sequence***
* Example:
```
  fibonacci(4)
  => 3
```
* Hint:
  * DOES NOT require a lot of code
* NOTE:
  * Recursive solution has a BAD time complexity - `O(2^n)` *O of 2 to the nth power*
    * This is an **exponential time complexity**
  * This is because every time we initially invoke the function, we end up invoking it twice more

### Memoized Fibonacci - Intro

```
function fibMemo(position, cache) {}
```
* `position` - position of target number in fibonacci sequence
* `cache` - an array used as memory
* **Memoization**
  * Check to see if number already exists in `cache`
  * If number IS in `cache`, use that number
  * If number IS NOT in `cache`, calculate it and put it in `cache` so it can be used in the future
* Using this technique, our algorithm will have an `O(n)` *linear runtime*

### Sieve of Eratosthenes - Intro

* Returns all prime numbers up to the given number
  * NOTE: *A Prime Number can be divided evenly only by 1, or itself. And it must be a whole number greater than 1.*
* Example:
  ```
  fuction sieveofEratosthenes(20)
  => [2,3,5,7,11,13,17,19]
  ```
* To start, we begin with an array of numbers from `0..num`
  * We then, **initially mark every number as a prime number**
  * We will use the **indices of the array as num, and fill the array with** `true` **at the given index**
  ```
        [true, true, true, true, true...]
  INDEX:   0     1     2     3     4
  ```
  * We will then iterate through the array and check if each number, *index*, is actually prime
    * If the number is not actually prime, we will change it's value to `false`
    ```
          [false, false, true, true, true...]
    INDEX:   0     1     2     3     4
    ```
  * First, we will mark `0` and `1` as false, because we already know they are not prime numbers
  * As we continue to iterate through the array, **every number we mark as** `false`**, we will then mark all of its multiples as** `false` **as well**
    * We know that **any multiple of a number cannot be prime**
* For optimization:
  * Instead of looping through every number in the array and marking their multiples as false, we can **stop looping at the square root of** `n` **because all non-prime numbers after the square root would have already been marked as false**
* Lastly, we want to **return all prime numbers in an array**

### Bubble Sort - Intro

* Well-known sorting algorithm and is widely-used in technical interviews
* Takes in an **array of numbers and returns the array sorted, from least to greatest**
* Example:
```
  let nums = [5,3,8,2,1,4];
  bubbleSort(nums);
  => [1,2,3,4,5,8]
```
* The algorithm works by starting at the beginning of the array and looping through the entire array
  * As we loop through the array, we compare each current number to the number to its right
  * If the pairs are NOT in the correct order, we switch them around
* It is called *bubble sort*, because the **larger numbers bubble up to the top of the array**
* After the first loop-through, we will continually loop through the given array until it is completely sorted
  * With each iteration, we can deduce that the last pairs are sorted according to the number of iterations
    ```
      first iteration: [3,5,2,1,4,8] // largest number bubbles to the end // Last element is sorted
      second iteration: [3,2,1,4,5,8] // don't need to compare 5 and 8 // Last 2 elements are sorted
      third iteration: [2,1,3,4,5,8] // don't need to compare 4 and 5 // Last 3 elements are sorted // the 4th element, 3, is sorted by chance, but we still need to check it
      fourth iteration: [1,2,3,4,5,8] // don't need to compare 3 and 4 // Last 4 elements are sorted
      fifth iteration: [1,2,3,4,5,8] // don't need to compare 2 and 3 // Last 5 elements are sorted // This is a final check to make sure all elements are sorted
    ```
* The **number of passes needed to complete sort an array is** `array.length - 1`

### Merge Sort - Intro

* Another widely-known algo and is heavily-used in technical interviews
* **Take two, sorted arrays and combine them into one, sorted array**
  * We will compare the first element of each array, and store the lesser value into a new array
* Then, we will iterate up one array, while comparing the same, current value of the other array to the iterating values
* Example:
```
  var a = [3,5,8,20]
  var b = [1,2,12,17]
  => [1,2,3,5,8,17,20]
```
* However, this works ONLY **if you start with two, sorted arrays**
* In practice, we will **start with one, unsorted array**
  * We will **break down the one, unsorted array, into multiple arrays that each have only 1 element**
    * We do this because we know that **an array of 1 element is already sorted**
  * We `mergeSort` our arrays of 1 element, so we are then left with arrays of 2 elements
  * We continue `mergeSort()` until we are left with 1, sorted array
* Our algo will be compromised of **two functions**
  * `mergeSort(array)`
    * Takes a single, unsorted array as its argument
    * Splits the array into two halves
  * `merge(array1, array2)`
    * takes in 2, sorted arrays as parameters
    * merges those sorted arrays into 1, sorted array
    * returns the sorted array
* NOTE: `mergeSort()` will be *recursively* calling itself
* NOTE: **The splice() method returns the removed item(s) in an array and slice() method returns the selected element(s) in an array, as a new array object.**

### Max Stock Profit - Intro

* Takes an **array of prices** as its argument
  * The array **represents the price of a single stock throughout the day**
  * The algorithm will **determine what the max profit could have been made on that stock throughout the day**
    * To do this, we will need to determine what was the **best price to buy** the stock at and what was the **best price to sell** the stock at
    * Example:
    ```
      let prices = [32,46,26,38,40,48,42]
      let buyPrice = 26
      let sellPrice = 48
      let result = sellPrice - buyPrice = 22
    ```
    * If NO profit is possible, `return -1`
    * The `sellPrice` must happen AFTER the buyPrice
      * *You can't sell the stock before you buy it ;)*
    * A max profit of `0` is treated as any other max profit
* Very useful algorithm to know because it is common to see this algo/variations of this algo on technical interviews
