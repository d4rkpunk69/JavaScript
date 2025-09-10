const currentDate = new Date();
const currentDateFormat = `Current Date and Time: ${currentDate}`;

console.log(currentDateFormat);
console.log();

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

// const formatDateMMDDYYYY = (currDate) => `Formatted Date (MM/DD/YYYY): ${currDate.getMonth()}/${currDate.getDate()}/${currDate.getFullYear()} `;

function formatDateMMDDYYYY(currDate) {
  const options = {
    month: "numeric",
    day: "numeric",
    year: "numeric",
  };
  const data = currDate.toLocaleDateString("en-US", options);
  return `Formatted Date (MM/DD/YYYY): ${data}`;
}

const formatDateLong = (currDate) =>
  `Formatted Date (Month Day, Year): ${
    monthNames[currDate.getMonth()]
  } ${currDate.getDate()}, ${currDate.getFullYear()}`;

console.log(formatDateMMDDYYYY(currentDate));
console.log();
console.log(formatDateLong(currentDate));
