function isPalindrome(string) {
  string = string.toLowerCase(); // First, we want to turn every letter in our string to lowercase
  var charactersArray = string.split(''); // Split our string into separated characters stored in an array
  var validCharacters = 'abcdefghijklmnopqrstuvwxyz'.split(''); // To ignore special characters, we will use this array of valid characters
  var letters = []; // this is where we will store only the letters from the charactersArray

  charactersArray.forEach(char => {
    if (validCharacters.indexOf(char) > -1) letters.push(char); // if char is in validCharacters array, push char into letters array
  });
  if (letters.join('') === letters.reverse().join('')) return true; // RETURN TRUE if letters array is same forwards as backwards
  else return false; // RETURN FALSE if letters array is NOT same forwards as backwards
};
