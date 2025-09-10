function evaluate(numbers, operators) {
  let opFlag = 0;
  let result = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    result = eval(`${result}${operators[opFlag]}${numbers[i]}`);
    operators[opFlag + 1] == undefined ? (opFlag = 0) : opFlag++;
  }
  return eval(result);
}

console.log(evaluate([5, 6, 7, 8, 9], ["+", "-"]));
console.log(evaluate([17, 61, 40, 24, 38, 14], ["+", "%"])); //
console.log(evaluate([20, 2, 4, 24, 12, 3], ["*", "/"]));
console.log(evaluate([11, 4, 10, 17, 2], ["*", "*", "%"]));
console.log(evaluate([33, 11, 29, 13], ["/", "-"])); //
