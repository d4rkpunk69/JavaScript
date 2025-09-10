let classScores = [92, 88, 12, 77, 57, 100, 67, 38, 97, 89];
let studentScore = 100;

const getAverage = function (arrTestScores) {
  let average = 0;

  for (const total of arrTestScores) {
    average += total;
  }
  return average / arrTestScores.length;
};

const getGrade = function (studentScore) {
  let letterGrade = ["A+", "A", "B", "C", "D", "F"];
  if (studentScore < 60 && studentScore >= 0) {
    return letterGrade[5];
  } else if (studentScore < 70 && studentScore > 59) {
    return letterGrade[4];
  } else if (studentScore < 80 && studentScore > 69) {
    return letterGrade[3];
  } else if (studentScore < 90 && studentScore > 79) {
    return letterGrade[2];
  } else if (studentScore < 100 && studentScore > 89) {
    return letterGrade[1];
  } else if (studentScore === 100) {
    return letterGrade[0];
  } else {
    return undefined;
  }
};

const hasPassingGrade = (score) => getGrade(score) !== "F";

const studentMsg = function (arrScores, studentScore) {
  const average = getAverage(arrScores);
  const grade = getGrade(studentScore);

  const status = hasPassingGrade(studentScore) ? "passed" : "failed";

  return `Class average: ${average}. Your grade: ${grade}. You ${status} the course.`;
};

console.log(studentMsg(classScores, studentScore));
