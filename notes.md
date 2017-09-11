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
