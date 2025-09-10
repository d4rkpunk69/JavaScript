const textAreaSelector = document.getElementById("text-input");
const counter = document.getElementById("counter");

const charCount = document.getElementById("char-count");
const maxLength = 50;

textAreaSelector.addEventListener("input", () => {
  if (textAreaSelector.value.length >= maxLength) {
    textAreaSelector.value = textAreaSelector.value.slice(0, maxLength);

    charCount.style.color = "red";
  } else charCount.style.color = "black";

  const count = textAreaSelector.value.length;
  counter.textContent = count;
  console.log(count);
});

//I promise no more cheating

//still not passed??
