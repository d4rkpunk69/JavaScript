function sumOfSquares(n) {
  let pow = 0;
  while (n) {
    pow += Math.pow(n, 2);
    n--;
  }
  return pow;
}

console.log(sumOfSquares(5));
