function fibonacciSequence(startSequence, length) {
  let ret = startSequence;
  if (length <= 1) return ret.slice(0, length);

  for (let i = 2; i < length; i++) {
    ret.push(ret[i - 1] + ret[i - 2]);
  }
  return ret;
}

// console.log(fibonacciSequence([0, 1], 20));
console.log(fibonacciSequence([21, 32], 1));
