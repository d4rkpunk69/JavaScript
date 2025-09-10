let stringToReverse = "hellof";

function reverseString(str) {
  console.log(str.length);
  if (str.length > 0) {
    let reversed = str.split("").reverse().join("");
    return reversed;
  } else {
    console.log("str is empty");
  }
}

console.log(reverseString(stringToReverse));
