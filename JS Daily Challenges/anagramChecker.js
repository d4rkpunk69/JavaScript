function areAnagrams(str1, str2) {
  str1 = str1.toLowerCase().replace(/\s+/g, "");
  str2 = str2.toLowerCase().replace(/\s+/g, "");

  if (str1.length === str2.length) {
    for (let i = 0; i < str1.length; i++) {
      console.log(i, " :: ", str1.length);
      const temp = str1[i];
      const count1 = str1.split(temp).length - 1;
      const count2 = str2.split(temp).length - 1;
      if (count1 === count2) {
        if (i + 1 === str1.length) {
          return true;
        }
        continue;
      } else break;
    }
  }
  return false;
}

console.log(areAnagrams("listen", "silent"));

console.log(areAnagrams("School master", "The classroom"));

console.log(areAnagrams("Hello", "World"));
