let email = "apple.pie@example.com";

function maskEmail(email) {
  let asterisk = "*";
  let index = email.indexOf("@");
  // console.log(index);
  let firstLetter = email.slice(0, 1);
  // console.log(firstLetter);
  let lastLetter = email.slice(index - 1, index);
  // console.log(lastLetter);
  let hide = asterisk.repeat(index - 2);
  // console.log(hide);
  let domain = email.slice(index, Infinity);
  // console.log(domain);
  return firstLetter + hide + lastLetter + domain;
}

console.log(maskEmail(email));
