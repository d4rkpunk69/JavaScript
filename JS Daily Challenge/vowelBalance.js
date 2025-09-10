const vowels = /(?<vowels>a|e|i|o|u)/gi;

function isBalanced(s) {
  let half = s.length / 2;
  const firstHalf = (s.slice(0, Math.floor(half)).match(vowels) || []).length;
  const secondHalf = (s.slice(Math.ceil(half)).match(vowels) || []).length;
  return firstHalf === secondHalf;
}

console.log(isBalanced(" "));
