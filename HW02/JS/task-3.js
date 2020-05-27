const findLongestWord = function (string) {
  const arrayWords = string.split(' ');
  let biggestWord;
  for (let i = 0; i < arrayWords.length; i += 1) {
    if (i === 0) {
      biggestWord = arrayWords[i];
    }
    if (arrayWords[i].length > biggestWord.length) biggestWord = arrayWords[i];
  }
  return biggestWord;
};

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));

console.log(findLongestWord("Google do a roll"));

console.log(findLongestWord("May the force be with you"));