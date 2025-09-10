/* 
User Stories:

You should create a function named repeatStringNumTimes that takes two parameters: a string and a number.
The function should return the string repeated the specified number of times.
If the number is less than or equal to zero, the function should return an empty string.
*/

function repeatStringNumTimes(str, num) {
  let newString = "";
  while (num > 0) {
    newString = str + newString;
    num--;
  }
  return newString;
}

let checker = repeatStringNumTimes("*", -3);
console.log(checker);
