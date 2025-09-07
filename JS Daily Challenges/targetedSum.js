function findTarget(arr, target) {
  let ret = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      // console.log(Number(arr[i])+Number(arr[j]));
      if (Number(arr[i]) + Number(arr[j]) === Number(target)) {
        ret.push(i);
        ret.push(j);
        return ret;
      }
    }
  }
  return "Target not found";
}

console.log(findTarget([2, 7, 11, 15], 9));
console.log(findTarget([1, 3, 5, 7], 14));
