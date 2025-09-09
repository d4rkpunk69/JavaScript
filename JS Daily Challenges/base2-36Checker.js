function isValidNumber(n, base) {
  const regex = new RegExp(`[${excludeUpTo(base)}\\s]`, "gi");
  return !regex.test(n);
}

function excludeUpTo(n) {
  let filtered = "";
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (n >= 0 && n <= 9) {
    filtered = [..."0123456789"].filter((d) => +d >= n).join("");
    filtered = filtered + "a-z";
  }
  if (n >= 10 && n <= 36) {
    filtered = alphabet.slice(n - 10);
  }

  console.log(filtered);
  return filtered;
}

console.log(isValidNumber("19", 11));
console.log(isValidNumber("F", 2));
