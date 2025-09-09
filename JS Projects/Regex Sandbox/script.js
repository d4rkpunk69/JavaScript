const regexPattern = document.getElementById("pattern");
const stringToTest = document.getElementById("test-string");
const testButton = document.getElementById("test-btn");
const testResult = document.getElementById("result");
const caseInsensitiveFlag = document.getElementById("i");
const globalFlag = document.getElementById("g");

const getFlags = () => {
  let ret = "";
  switch (caseInsensitiveFlag.checked) {
    case true:
      ret += "i";
      break;
    default:
      break;
  }
  switch (globalFlag.checked) {
    case true:
      ret += "g";
      break;
    default:
      break;
  }
  return ret;
};

const regexIt = (regex = /.*/, text = stringToTest.textContent) => {
  console.log(regex, text);
  let toReturn = "";
  let arrOfReg = "";
  // let reg = text.match(regex)!= null ? text.match(regex) : "";
  let reg = text.match(regex) || [];
  // let len = reg.length > 0 ? Number(reg.length): "0";
  let len = reg.length;
  toReturn = text.replace(regex, `<span class="highlight">$&</span>`);

  for (let i = 0; i < len; i++) {
    arrOfReg += `${reg[i]}`;
    if (i < len - 1) {
      arrOfReg += `, `;
    }
  }
  console.log(toReturn);
  stringToTest.innerHTML = toReturn;

  if (arrOfReg.length === 0) {
    testResult.innerText = "no match";
  } else testResult.innerText = arrOfReg;
};

testButton.addEventListener("click", () => {
  const regex = new RegExp(regexPattern.value, getFlags());
  const text = stringToTest.textContent;
  regexIt(regex, text);
  testButton.style.display = "none";
});

stringToTest.addEventListener("input", () => {
  testButton.style.display = "flex";
});
