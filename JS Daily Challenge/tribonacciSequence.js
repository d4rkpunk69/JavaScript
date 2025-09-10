function tribonacciSequence(startSequence, length) {
  let sequence = [];
  if (length >= 1) sequence.push(startSequence[0]);
  if (length >= 2) sequence.push(startSequence[1]);
  if (length >= 3) sequence.push(startSequence[2]);
  if (length > 3) {
    for (let i = 2; i < length - 1; i++) {
      sequence.push(sequence[i - 2] + sequence[i - 1] + sequence[i]);
    }
  }
  return sequence;
}

console.log(tribonacciSequence([0, 0, 1], 20));
