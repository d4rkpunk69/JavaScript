const books = [
  {
    title: "A life of a stupid boy",
    authorName: "Jose Tuling",
    releaseYear: 2026,
  },
  {
    title: "Being named Jose",
    authorName: "Jose Rizz",
    releaseYear: 2006,
  },
  {
    title: "Apples Best Friend",
    authorName: "Isaac King Neutron",
    releaseYear: 1906,
  },
  {
    title: "Skibidy Neutral",
    authorName: "Some Genz's",
    releaseYear: 2026,
  },
  {
    title: "Thought Shalt",
    authorName: "Religious Perzian",
    releaseYear: 1926,
  },
  {
    title: "I donnu this book",
    authorName: "Baby Boomers",
    releaseYear: 1916,
  },
];

const sortByYear = (book1, book2) => {
  if (book1.releaseYear < book2.releaseYear) {
    return -1;
  } else if (book1.releaseYear > book2.releaseYear) {
    return 1;
  } else return 0;
};

const filteredBooks = books.filter((book) => book.releaseYear <= 1950);

filteredBooks.sort(sortByYear);

filteredBooks.forEach((book) => {
  console.log(
    `${book.title} by ${book.authorName}, Year: ${book.releaseYear}\n`
  );
});

books.forEach((book) => {
  console.log(`${book.title}`);
});
