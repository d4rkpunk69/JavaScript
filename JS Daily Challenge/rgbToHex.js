function rgbToHex(rgb) {
  const regex = /rgb\((?<hex1>\d+), (?<hex2>\d+), (?<hex3>\d+)\)/gi;
  const hex = "0123456789abcdef";
  let output = "#";
  const grouped = regex.exec(rgb);
  // return hexValues[`${255%16}`];
  for (let i = 1; i <= 3; i++) {
    let temp = Number(grouped[i]);
    let rem = temp % 16;
    temp = Math.floor(temp / 16);
    if (temp === 0) {
      output += `0${hex[rem]}`;
    } else {
      let rem2 = temp % 16;
      output += `${hex[rem2]}${hex[rem]}`;
    }
  }
  return output;
}

console.log(rgbToHex("rgb(255, 255, 255)"));

console.log(rgbToHex("rgb(1, 11, 111)"));

console.log(rgbToHex("rgb(79, 123, 201)"));
