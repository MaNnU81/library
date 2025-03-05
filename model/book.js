export  class Book {
    constructor(isbn, title, author) {
        this.author = author;
        this.title = title;
        this.isbn = isbn;
    }

    toString(){
        return `ISBN: ${this.isbn}\n` +
               `Titolo: ${this.title}\n` +
               `Author: ${this.author}`
    }

}




export  class PhysicalBook extends Book {

    constructor(isbn, title, author, shelfLocation) {
        super(isbn, title, author);
        this.shelfLocation = shelfLocation;
        this.isBorrowed = false;
    }

    toString(){
        return super.toString() + '\n' +
               `Shelf: ${this.shelfLocation}\n` +
               `Is borrowed: ${this.isBorrowed}\n`
    }

}

export   class EBook extends Book {

    constructor(isbn, title, author, fileFormat) {
        super(isbn, title, author);
        this.fileFormat = fileFormat;
    }

    toString(){
        return super.toString() + '\n' +
               `Format: ${this.fileFormat}`
    }

}

//export default  {Book, EBook, PhysicalBook};  meteodo 2 piu chiaro e tutto in default