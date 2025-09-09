function battle(myArmy, opposingArmy) {
  const azLowerCase = "abcdefghijklmnopqrstuvwxyz";
  const azUpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (myArmy.length > opposingArmy.length) {
    return "Opponent retreated";
  } else if (myArmy.length < opposingArmy.length) {
    return "We retreated";
  } else {
    let myScore = [];
    let enemyScore = [];
    for (const each of myArmy) {
      if (/^[a-zA-Z]/.test(each)) {
        myScore.push(
          azLowerCase.indexOf(each) !== -1
            ? azLowerCase.indexOf(each) + 1
            : azUpperCase.indexOf(each) + 27
        );
      } else if (/^[\d]/.test(each)) {
        myScore.push(Number(each));
      } else myScore.push(Number("0"));
      // console.log(each, azLowerCase.indexOf(each)!==-1?azLowerCase.indexOf(each)+1:azUpperCase.indexOf(each)+27);
    }
    for (const each of opposingArmy) {
      if (/^[a-zA-Z]/.test(each)) {
        enemyScore.push(
          azLowerCase.indexOf(each) !== -1
            ? azLowerCase.indexOf(each) + 1
            : azUpperCase.indexOf(each) + 27
        );
      } else if (/^[\d]/.test(each)) {
        enemyScore.push(Number(each));
      } else enemyScore.push(Number("0"));
      // console.log(each, azLowerCase.indexOf(each)!==-1?azLowerCase.indexOf(each)+1:azUpperCase.indexOf(each)+27);
    }
    // console.log(myScore, enemyScore)
    let iWin = 0;
    for (let i = 0; i < myScore.length; i++) {
      if (myScore[i] > enemyScore[i]) iWin++;
      else if (myScore[i] < enemyScore[i]) iWin--;
      else iWin;
      // console.log(myScore[i], enemyScore[i], iWin);
    }
    // console.log(iWin);
    if (iWin === 0) return "It was a tie";
    return iWin > 0 ? "We won" : "We lost";
  }
}

console.log(battle("HelA9", "World"));

console.log(battle("Wizards", "Dragons"));
console.log(battle("AA", "WW"));

console.log(battle("Mr. Smith", "Dr. Jones"));

console.log(battle("C@T5", "D0G$"));
