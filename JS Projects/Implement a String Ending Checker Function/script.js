const checkBtn = document.getElementById("checkBtn");
const copyBtn = document.getElementById("copyBtn");
const pre = document.querySelector("pre");
const strToCheckVal = document.getElementById("strToCheck");
const strToCheckAgainstVal = document.getElementById("strToCheckAgainst");
const resultOutput = document.getElementById("result");

function confirmEnding(strToCheck, strToCheckAgainst) {
  let sizeOfAgainst = strToCheckAgainst.length;
  console.log(sizeOfAgainst);
  console.log(strToCheck.slice(-sizeOfAgainst));

  if (strToCheck.slice(-sizeOfAgainst) == strToCheckAgainst) {
    return true;
  } else return false;
}

checkBtn.addEventListener("click", function () {
  const strToCheck = strToCheckVal.value;
  const strToCheckAgainst = strToCheckAgainstVal.value;
  console.log("clickCheckBtn");
  const result = confirmEnding(strToCheck, strToCheckAgainst);

  resultOutput.textContent = result
    ? `✓ Yes! "${strToCheck}" ends with "${strToCheckAgainst}"`
    : `✗ No! "${strToCheck}" does NOT end with "${strToCheckAgainst}"`;

  resultOutput.className = result ? "result positive" : "result negative";
});

copyBtn.addEventListener("click", function () {
  const code = pre.textContent;
  navigator.clipboard.writeText(code).then(() => {
    const originalText = this.textContent;
    this.textContent = "Copied!";
    setTimeout(() => {
      this.textContent = originalText;
    }, 2000);
  });
});
