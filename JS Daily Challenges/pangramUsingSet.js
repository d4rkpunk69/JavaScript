function isPangram(sentence, letters) {
  const cleaned = sentence.replace(/[^a-z]/gi, "").toLowerCase();

  const newSenctence = new Set(cleaned);
  const newLetters = new Set(letters.toLowerCase());

  // console.log(newSenctence);

  for (let each of newSenctence) {
    if (!newLetters.has(each)) return false;
  }
  for (let each of newLetters) {
    if (!newSenctence.has(each)) return false;
  }
  return true;
}

console.log(isPangram("hello", "helo"));

console.log(isPangram("hello world", "helowrd"));

console.log(isPangram("hello world", "helowrde"));

console.log(isPangram("freeCodeCamp", "frcdmp"));
console.log(isPangram("freeCodeCamp", "frcdmp"));
