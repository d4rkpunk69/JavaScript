function generateHex(color) {
  const hex = "0123456789ABCDEF";
  const channels = [];
  for (let i = 0; i < 6; i++) {
    // const random1 = Math.floor(Math.random() * hex.length);
    // const random2 = Math.floor(Math.random() * hex.length);
    // channels.push(`${random1}${random2}`);
    channels.push(Math.floor(Math.random() * hex.length));
  }
  channels.sort((b, a) => a - b);
  const high = `${hex[channels[0]]}${hex[channels[1]]}`;
  const insignificant1 = `${hex[channels[2]]}${hex[channels[3]]}`;
  const insignificant2 = `${hex[channels[3]]}${hex[channels[5]]}`;
  // console.log(high, insignificant1, insignificant2)
  switch (color) {
    case "red":
      color = `${high}${insignificant1}${insignificant2}`;
      break;
    case "green":
      color = `${insignificant1}${high}${insignificant2}`;
      break;
    case "blue":
      color = `${insignificant1}${insignificant2}${high}`;
      break;
    default:
      return "Invalid color";
  }
  return color;
}

console.log(generateHex("blue"));
console.log(generateHex("green"));
console.log(generateHex("green"));
