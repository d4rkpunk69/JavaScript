const vowels = /[a|e|io|u]/i;

function repeatVowels(str) {
  let returnString = "";
  let flag = 1;
  for (let i = 0; i < str.length; i++) {
    // console.log(str[i], vowels.test(str[i]));
    if (vowels.test(str[i])) {
      for (let j = 0; j < flag; j++) {
        returnString += j == 0 ? str[i] : str[i].toLowerCase();
      }
      flag++;
      continue;
    }
    returnString += str[i];
  }
  return returnString;
}

// tests
console.log(repeatVowels("hello world"));

console.log(repeatVowels("freeCodeCamp"));

console.log(repeatVowels("I like eating ice cream in Iceland"));

console.log(repeatVowels("AEIOU"));
