const button = document.getElementById("check-btn");
const textBox = document.getElementById("text-input");
let resultString = document.getElementById("result");
const resultContainer = document.getElementById("result-container");

const isNot = " is not a palindrome.";
const isPal = " is " + isNot.slice(7);
const nonCharRegex = /[\W|\s|_]*/gi;

const palindrome = (text) => {
  const newString = text.replace(nonCharRegex, "").toLowerCase();
  console.log(newString);
  const lengthOfNewString = newString.length - 1;
  let flag = 0;
  let ceil = Math.ceil(lengthOfNewString / 2) + 1;
  for (const each of newString) {
    debugger;
    console.log(ceil);
    const last = newString[lengthOfNewString - newString.indexOf(each)];
    if (each === last) {
      console.log(`${each} :: ${last}`);
      flag++;
      console.log(flag);
    } else {
      return false;
    }
    if (flag >= ceil) {
      return true;
    } else continue;
  }
};

button.addEventListener("click", () => {
  resultContainer.style.backgroundColor = "rgb(56, 130, 56)";
  // console.log(textBox.value);

  !palindrome(textBox.value)
    ? (resultString.textContent = textBox.value + isNot)
    : (resultString.textContent = textBox.value + isPal);
  if (textBox.value === "") {
    resultContainer.style.display = "none";
    alert("Please input a value");
  } else {
    resultContainer.style.display = "flex";
    textBox.value = "";
  }
});

textBox.addEventListener("input", () => {
  resultContainer.style.display = "none";
});
