//should return the account object when given a particular ID
function findAccountById(accounts, id) {
  return accounts.find((account) => account.id === id);
  //.find checks the account id with the id given
}
//should return the list of accounts ordered by last name
function sortAccountsByLastName(accounts) {
  return accounts.sort((nameOne, nameTwo) => nameOne.name.last > nameTwo.name.last ? 1 : -1);
  //.sort arranges the order of the last names 
}
//should return the number of times an account has created a 'borrow' record
function numberOfBorrows(account, books) {
  let total = 0;
  for (let index in books) {
    //the for in loop allows us to access the borrows object
    const borrowed = books[index].borrows.filter(book => book.id === account.id).length;
    //filtering out the id from borrows object
    total += borrowed;
  }
  return total;
}
//should return all of the books taken out by an account with the author embedded
function booksInPossession(account, books, authors) {
  let arr = [];
  for (let index in books) {
    let booksOut = books[index].borrows.some(book => book.id === account.id && book.returned === false);
    //checking if Id's match and returned status
    if (booksOut) {
      let bookIndex = books[index];
      bookIndex.author = authors.find(authorFound => authorFound.id === bookIndex.authorId);
      //find the author that matches the ID in borrows
      arr.push(bookIndex);
      //adding the old array with the author embedded to the new array
    }
  }
  return arr;
}


module.exports = {
  findAccountById,
  sortAccountsByLastName,
  numberOfBorrows,
  booksInPossession,
};
