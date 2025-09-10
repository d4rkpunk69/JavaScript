function findElement(arr, func) {
  for (const element of arr) {
    // console.log(element); // this logs every element as the loop runs
    if (func(element)) {
      return element;
    } else continue;
  }
  return undefined;
}

let checker = findElement([1, 3, 5, 8, 9, 10], function (num) {
  return num % 2 === 0;
});
let checker2 = findElement([1, 3, 5, 9], function (num) {
  return num % 2 === 0;
});
let checker3 = findElement([1, 2, 3, 4], function (num) {
  return num > 2;
});
let checker4 = findElement(["hello", "world", "javascript"], function (str) {
  return str.length > 5;
});

console.log(checker);
console.log(checker2);
console.log(checker3);
console.log(checker4);
