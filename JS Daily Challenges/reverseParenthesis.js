const regex = /(?<captured>\([^()]+\))/;
const parenthesis = { str: /[\(|\)]+/g, replace: "" };

function decode(s) {
  let ret = s.split(regex);
  // const matchRegex = .match(regex);
  let flag = ret.length - 1;
  while (flag >= 0) {
    // console.log(ret[flag])
    // console.log("Matched:", regex.test(ret[flag]))
    if (regex.test(ret[flag])) {
      ret[flag] = ret[flag].split("").reverse().join("");
      ret[flag] = ret[flag].replace(parenthesis.str, parenthesis.replace);
      // console.log(ret[flag]);
      ret = ret.join("").split(regex);
      // console.log(ret);
    } else flag--;
  }

  return ret.join("");
}

console.log(decode("((is?)(a(t d)h)e(n y( uo)r)aC)"));
console.log(decode("(f(b(dc)e)a)"));
console.log(decode("f(Ce(re))o((e(aC)m)d)p"));
