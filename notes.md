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
