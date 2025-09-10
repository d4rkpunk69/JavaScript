const regex = /[\W|\_|\s]+/g;
// console.log(regex.test("-"))
function toCamelCase(s) {
  s = s.toLowerCase();
  let words = [];
  words = s.split(regex);
  let temp = words[0];
  for (let i = 1; i < words.length; i++) {
    for (let j = 0; j < words[i].length; j++) {
      j == 0 ? (temp += words[i][j].toUpperCase()) : (temp += words[i][j]);
    }
    debugger;
  }

  return temp;
}

console.log(toCamelCase("Hello world yeah"));
console.log(toCamelCase("secret agent-X"));
console.log(
  toCamelCase(
    "ye old-_-sea  faring_buccaneer_-_with a - peg__leg----and a_parrot_ _named- _squawk"
  )
);
