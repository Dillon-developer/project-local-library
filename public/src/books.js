//should return the author object when given a particular ID
function findAuthorById(authors, id) {
  return authors.find((author) => author.id === id);
}
//should return the author object when given a particular ID
function findBookById(books, id) {
  return books.find((book) => book.id === id);
}
//should return an array with two arrays: borrowed books and returned books
function partitionBooksByBorrowedStatus(books) {
  const booksBorrowed = books.filter((bookB) => !bookB.borrows[0].returned)
  const booksReturned = books.filter((bookR) => bookR.borrows[0].returned)
  return [booksBorrowed, booksReturned]
}
//should return an array for a book of all borrowers with their information and return status---should limit the list to ten borrowers
function getBorrowersForBook(book, accounts) {
  let arr = [];
  for (let keyB in book.borrows) {
    const bookBorrowobj = accounts.find(account => account.id === book.borrows[keyB].id);
    bookBorrowobj.returned = book.borrows[keyB].returned
    arr.push(bookBorrowobj)
  }
  return arr.slice(0, 10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
