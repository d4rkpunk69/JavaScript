function findDuplicates(arr) {
  let ret = [];
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    let popped = arr.shift();
    if (arr.includes(popped) && !ret.includes(popped)) {
      ret.push(popped);
    }
  }
  console.log(ret);
  return ret.sort((a, b) => a - b);
}

console.log(findDuplicates([1, 2, 3, 4, 1, 2]));

console.log(
  findDuplicates([
    2, 34, 0, 1, -6, 23, 5, 3, 2, 5, 67, -6, 23, 2, 43, 2, 12, 0, 2, 4, 4,
  ])
);
