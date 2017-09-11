function reverseWords(string) {
  var words = string.split(' ');
  var reversedWords = new Array;
  var reversed;

  words.forEach(word => {
      reversedWords.push(reverseString(word));
  })
  return reversedWords.join(' ');
};

function reverseString(string) {
  var switchValue;
  var switchIndex = string.length - 1;
  var stringArray = string.split("");
  var switchLength = Math.floor(string.length / 2)

  for (var i = 0; i < switchLength; i++) {
    switchValue = stringArray[i];
    stringArray[i] = stringArray[switchIndex];
    stringArray[switchIndex] = switchValue;
    switchIndex--;
  }
  return stringArray.join("");
};

console.log(reverseWords("hello, world"));
