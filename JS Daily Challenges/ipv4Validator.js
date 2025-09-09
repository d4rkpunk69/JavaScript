const validator = /^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/;
const tester = /^0(.+?)/;

const isValidIPv4 = (ipv4) => (validator.test(ipv4) ? isValid(ipv4) : false);

function isValid(num) {
  let returnVal = true;
  const match = num.match(validator);
  const octets = match.slice(1);
  for (const each of octets) {
    tester.test(each)
      ? (returnVal = !returnVal)
      : Number(each) >= 0 && Number(each) < 256
      ? returnVal
      : (returnVal = !returnVal);
  }
  return returnVal;
}

console.log(isValidIPv4("192.168.1.1"));
console.log(isValidIPv4("0.0.0.0"));
console.log(isValidIPv4("255.01.50.111"));
console.log(isValidIPv4("255.00.50.111"));
console.log(isValidIPv4("256.101.50."));
console.log(isValidIPv4("192.168.101.25"));
console.log(isValidIPv4("192168145213"));
