function jbelmu(text) {
  let arr = [];
  let words = text.split(" ");
  console.log(words);
  for (let word of words) {
    if (word.length > 1) {
      let middle = word.slice(1, -1).split("").sort().join("");
      arr.push(word[0] + middle + word[word.length - 1]);
    } else arr.push(word);
  }
  return arr.join(" ");
}

console.log(jbelmu("hello a of world"));

console.log(jbelmu("freecodecamp is my favorite place to learn to code"));
 