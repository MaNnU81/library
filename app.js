
import User from "./model/user.js";
import PremiumUser from "./model/premium_user.js";
import Library from "./model/library.js";


import {PhysicalBook, EBook  } from "./model/book.js";


const book1 = new PhysicalBook('123415', 'iliade', 'omero', 'h27');
const book2 = new EBook('456346', 'odissea', 'omero', 'pdf');

const user1 = new User('1', 'andrea');
const user2 = new PremiumUser('2', 'hugo');
user2.extendBorrowLimit(10);

const library = new Library('berio');
library.addBook(book1);
library.addBook(book2);
library.addUser(user1);
library.addUser(user2);
console.log(library.toString());

library.borrowBook(user2, book1);
library.borrowBook(user2, book2);

library.returnBook(user2, book1);

library.listBooks();
library.listUsers();
