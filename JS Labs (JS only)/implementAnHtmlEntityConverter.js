const regexRules = [
  { regex: /&/g, replace: "&amp;" },
  { regex: /</g, replace: "&lt;" },
  { regex: />/g, replace: "&gt;" },
  { regex: /"/g, replace: "&quot;" },
  { regex: /'/g, replace: "&apos;" },
];

const convertHTML = (str) => {
  let converted = str;
  regexRules.forEach((rule) => {
    converted = converted.replace(rule.regex, rule.replace);
  });
  return converted;
};

console.log(convertHTML("Dolce & Gabbana"));
