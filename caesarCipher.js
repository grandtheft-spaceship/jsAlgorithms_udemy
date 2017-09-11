function caesarCipher(string, num) {
  num = num % 26; // Handling edge cases where -26 < num > 26
  var lowerCaseString = string.toLowerCase(); // Convert string to lowercase letters
  var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split(''); // We will use this to reference when shifting each letter
  var newString = ''; // Container for the new string we will be making

  for (var i = 0; i < lowerCaseString.length; i++) {
    var currentLetter = lowerCaseString[i]; // Current letter we are iterating on
    if (currentLetter === ' ') { // Check if currentLetter is an 'empty space'
      newString += currentLetter; // Push currentLetter into our newString
      continue; // Keyword that will move us along to the next iteration in the 'FOR LOOP' without running the rest of the code below this line
    }
    var currentIndex = alphabet.indexOf(currentLetter); // Get the index of currentLetter in alphabet array
    var newIndex = currentIndex + num; // New index of desired letter in alphabet array
    if (newIndex > 25) newIndex = newIndex - 26; // For the cases where we reach the end of the alphabet array, we will loop back to the start of alphabet array
    if (newIndex < 0) newIndex = 26 + newIndex; // For the cases where we pass in a negative number in algo and our index ends up less than 0
    if (string[i] === string[i].toUpperCase()) { // Check for letters that are uppercase
      newString += alphabet[newIndex].toUpperCase();
    }
    else newString += alphabet[newIndex];
  }
  return newString;
};
