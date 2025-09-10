function findLongestWordLength(str) {
  str = str.trim();
  let splitted = str.split(/\s+/);
  console.log(splitted);
  let longest = 0;
  for (const word of splitted) {
    console.log(longest);
    if(longest == 0 || word.length > longest ) {
      longest = word.length;
    }
  }
  return longest;
}

let sentence = "The quick brown fox jumped over the lazy dog.    "
let longestWord = findLongestWordLength(sentence);
console.log(`Longest word of "${sentence.trim}" is ${longestWord}`)
