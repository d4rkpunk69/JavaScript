// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// let random = num[Math.floor(Math.random() * num.length)];
let num = 5;

function factorialCalculator(num) {
  let factorial = 1;
  while (num) {
    factorial *= num;
    num--;
    if (num === 0) {
      break;
    }
  }

  return factorial;
}
let factorial = factorialCalculator(num);
let resultMsg = `Factorial of ${num} is ${factorial}`;
console.log(resultMsg);

//some of the functions calls are repeated to satisfy the task completion
