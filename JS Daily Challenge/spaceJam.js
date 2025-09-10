const space = "/[s]/g";

function spaceJam(s) {
  s = s.replace(/[\s]/g, "").toUpperCase();
  let ret = "";
  // s.push("34")
  for (let each of s) {
    ret += each + "  ";
  }
  return ret.trim();
}

console.log(spaceJam("free Code Camp"));
