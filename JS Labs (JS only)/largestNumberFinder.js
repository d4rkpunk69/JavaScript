function largestOfAll(arrNum) {
  let newArr = [];
  // console.log(arrNum.length);

  for (const num of arrNum) {
    // console.log(num);
    let largeTemp = num[0];
    for (const eachNum of num) {
      // console.log(eachNum);
      if (eachNum > largeTemp) {
        console.log(largeTemp);
        largeTemp = eachNum;
        continue;
      }
    }
    newArr.push(largeTemp);
  }
  return newArr;
}

let checker = largestOfAll([
  [17, 23, 25, 12],
  [25, 7, 34, 48],
  [4, -10, 18, 21],
  [-72, -3, -17, -10],
]);

console.log(checker);
