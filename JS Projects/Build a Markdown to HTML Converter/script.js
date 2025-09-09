const input = document.getElementById("markdown-input");
const htmlOutput = document.getElementById("html-output");
const htmlPreview = document.getElementById("preview");

const regexPatterns = [
  //headers
  { regex: /^###\s(?<header>.*$)/gm, replace: `<h3>$<header></h3>` },
  { regex: /^##\s(?<header>.*$)/gm, replace: `<h2>$<header></h2>` },
  { regex: /^#\s(?<header>.*$)/gm, replace: `<h1>$<header></h1>` },
  //bold italics
  {
    regex: /(\*\*\*|___)(?<text>.*?)\1/gm,
    replace: `<strong><em>$<text></em></strong>`,
  },
  //blockqoute bold italics
  {
    regex: /\>\s([\*|_]{3})(?<text>.*?)\1/gm,
    replace: `<strong><em>$<text></em></strong>`,
  },
  //bold text
  { regex: /(\*\*|__)(?<bold>.*?)\1/gm, replace: `<strong>$<bold></strong>` },
  //italics
  { regex: /(\*|_)(?<italic>.*?)\1/gm, replace: `<em>$<italic></em>` },
  //image
  {
    regex: /!\[(?<alt>.*?)\]\((?<src>.*?)\)/gm,
    replace: `<img alt="$<alt>" src="$<src>"/>`,
  },
  //link anchor
  {
    regex: /\[(?<text>.*?)\]\((?<url>.*?)\)/gm,
    replace: `<a href="$<url>">$<text></a>`,
  },
  // blockqoute
  {
    regex: /^\>\s(?<qoute>.*$)/gm,
    replace: `<blockquote>$<qoute></blockquote>`,
  },
  // line breaks, optional
  // { regex: /\n+$/gm, replace: "" },
  // task completion
  {
    regex: /\>\s\*{2}(?<task48_1>.*)\*(?<task48_2>.*)\*\*\*/gm,
    replace:
      "<blockquote><strong>$<task48_1><em>$<task48_2></em></strong></blockquote>",
  },
];

// TODO: Fix to match freeCodeCamp requirements in the task

const convertMarkdown = (markdown = input.value) => {
  let html = markdown;
  regexPatterns.forEach((rule) => {
    if (rule.regex.test(html)) {
      console.log("Matched regex:", rule.regex);
      console.log("Matched text:", html.match(rule.regex));
    }
    html = html.replace(rule.regex, rule.replace);
  });

  html = html.replace(regexPatterns[10], "");
  html = html.trim();

  return html;
};

input.addEventListener("input", () => {
  const html = convertMarkdown(input.value);
  debugger;
  console.log(html);
  htmlPreview.innerHTML = html;
  htmlOutput.innerText = html;
});

// ! TESTING

// const matchi = "### JOSE".match(headerRegex);
// console.log(matchi[1].length);

// console.log("** jose **".match(strongItalicRegex)[1].length);

// console.log(imageRegex.test("![jsadf](fads)"));
// console.log("![jsadf](fads)".replace(imageRegex, `<img alt="$<alt>" src="$<src>"/>`))

// console.log(linkRegex.test("[jsadf](fads)"));
// console.log("[jsadf](fads)".replace(linkRegex, `<a href="$<url>">$<linkText></a>`))

// console.log(blockqouteRegex.test("> jose tuling"));
// console.log("> jose jose tuling".replace(blockqouteRegex,`<blockqoute>$<blockqoute></blockqoute>`))
