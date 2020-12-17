//should return the total number of books in the array---should return zero if the array is empty
function totalBooksCount(books) {
  return books.length;
}
//should return the total number of accounts in the array---should return zero if the array is empty
function totalAccountsCount(accounts) {
  return accounts.length;
}
//should return the total number of books that are currently borrowed
function booksBorrowedCount(books) {
  let totalBooks = 0;//we need a number to add to
  for (let index in books) {
    //for in loop lets you access borrows in the object
    const borrowedBooks = books[index].borrows.filter(book => book.returned === false).length;
    totalBooks += borrowedBooks;
  }
  return totalBooks;
}
//should return an ordered list of most common genres---should limit the list to the top five
function mostCommonGenres(books) {
  let genreArr = [];
  const finalArr = [];
  genreArr = books.map(book => book.genre);
  const newGenreArr = [];
  for (let keyG in genreArr) {
    newGenreArr.push(genreArr.filter(genreElement => genreElement === genreArr[keyG])) //adds up like genres
  }
  const currentGenreArr = [];
  for (let newKeyG in newGenreArr) {
    if (!currentGenreArr.some(newGenreElement => newGenreElement === newGenreArr[newKeyG][0])) {
      currentGenreArr.push(newGenreArr[newKeyG][0]);
      finalArr.push({ name: newGenreArr[newKeyG][0], count: newGenreArr[newKeyG].length })
    }
  }
  return finalArr.sort((genreOne, genreTwo) => genreTwo.count < genreOne.count ? -1 : 1).slice(0, 5);
}
//should return an ordered list of most popular books---should limit the list to the top five
function mostPopularBooks(books) {
  let book = helperForBook(books);
  return book;
}

function helperForBook(books) {
  let objArr = [];
  for (let keyB in books) {
    const popular = books[keyB].borrows.length;
    const titles = books[keyB].title;
    objArr.push({ name: titles, count: popular })
  }
  return objArr.sort((listA, listB) => listA.count > listB.count ? -1 : 1).slice(0, 5);
}
//should return an ordered list of most popular authors---should limit the list to the top five
function mostPopularAuthors(books, authors) {
  let objArr = [];
  for (let keyA in authors) {
    const popularAuthor = authors[keyA];
    const authorId = authors[keyA].id;
    const number = books.filter((book) => book.authorId === authorId).reduce((acc, book) => acc + book.borrows.length, 0);
    objArr.push({ name: `${popularAuthor.name.first} ${popularAuthor.name.last}`, count: number });
  }

  return objArr.sort((listAuthorA, listAuthorB) => listAuthorA.count > listAuthorB.count ? -1 : 1).slice(0, 5);
}

module.exports = {
  totalBooksCount,
  totalAccountsCount,
  booksBorrowedCount,
  mostCommonGenres,
  mostPopularBooks,
  mostPopularAuthors,
};
