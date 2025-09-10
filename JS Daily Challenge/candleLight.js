function burnCandles(candles, leftoversNeeded) {
  let burned = 0;
  let leftovers = 0;

  while (candles > 0) {
    burned += candles;
    leftovers += candles;
    candles = Math.floor(leftovers / leftoversNeeded);
    leftovers = leftovers % leftoversNeeded;
  }

  return burned;
}
console.log(burnCandles(7, 2));
console.log(burnCandles(20, 3));
console.log(burnCandles(2345, 3));
