function squaresWithThree(n) {
  let strike3 = 0;
  while (n) {
    const answer = Math.pow(n, 2);
    if (String(answer).split("3").length - 1 > 0) {
      strike3++;
    }
    n--;
  }
  return strike3;
}

console.log(squaresWithThree(100));
