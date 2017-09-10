function harmlessRansomeNote(noteText, magazineText) {
  var noteArray = noteText.split(' '); // Split the entire note text into an array of words
  var magazineArray = magazineText.split(' '); // Split the entire magazine text into an array of words
  var magObj = {}; // We will utilize a HASH TABLE / Each word from magazineArray will be the key and it's value will be the # of times it is present in the array

  magazineArray.forEach(function(word) {
    if (!magObj[word]) magObj[word] = 0; // Check if word is already present in magObj object / if not, insert it with a value of 0
    magObj[word]++; // Increase its value by 1
  });

  var noteIsPossible = true; // boolean to check if we can make the desired note / It will change to FALSE if we don't have all the necessary words
  noteArray.forEach(function(word) {
    if (magObj[word]) { // if word is present in magObj
      magObj[word]--; // subtract value by 1
      if (magObj[word] < 0) noteIsPossible = false; // if word is present, we need to check if we have enough 'copies' of that word to make our note
    }
    else noteIsPossible = false; // if word is not present, change noteIsPossible to false
  })
  return noteIsPossible;
};

harmlessRansomeNote("i am really from oakland though", "oakland feels like i am really home though")
