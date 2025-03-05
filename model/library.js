
import { PhysicalBook } from "./book.js";



export default class Library {

    constructor(name, books = [], users = []) {
        this.name = name;
        this.books = books;
        this.users = users;
    }

    get booksNumber(){
        return this.books.length;
    }

    get usersNumber(){
        return this.users.length;
    }

    addBook(book){
        this.books.push(book);
    }

    removeBook(bookToRemove){
        this.books = this.books.filter(book => book.isbn !== bookToRemove.isbn);
    }

    isBookAvailable(isbn){
        const book = this.books.find(book => book.isbn === isbn);
        if(!book){
            return false;
        } else {
            if (!book.isBorrowed) {
                return true;
            } else {
                return false;
            }
        }
    }

    addUser(user){
        this.users.push(user);
    }

    removeUser(userToRemove){
        this.users = this.users.filter(user => user.id !== userToRemove.id);
    }

    listBooks(){
        this.books.forEach(book => console.log(book.toString()));
    }

    listUsers(){
        for (const user of this.users) {
            console.log(user.toString());
        }
    }

    borrowBook(user, book){
        const isAvailable = this.isBookAvailable(book.isbn);
        if(!isAvailable){
            console.log('libro non disponibile')
        } else {
            user.borrowBook(book);
            const isPhysical = book instanceof PhysicalBook;
            if (isPhysical) {
                book.isBorrowed = true;
            }
        }
    }

    returnBook(user, book){
        user.returnBook(book);
        const isPhysical = book instanceof PhysicalBook;
        if (isPhysical) {
            book.isBorrowed = false;
        }
    }

    toString(){
        return `Name: ${this.name}\n` +
               `Books number: ${this.booksNumber}\n` +
               `User number: ${this.usersNumber}`
    }

}
