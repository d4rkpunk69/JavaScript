let year = 2024; //change this to check your year or maybe I'll improve this if I have some time, get the value from user input
function isLeapYear(year) {
  if (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0)) {
    return `${year} is a leap year.`;
  } else {
    return `${year} is not a leap year.`;
  }
}
let result = isLeapYear(year);
console.log(result);
