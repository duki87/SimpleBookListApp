class Storage {
    static getBooks() {
        let books = [];
        if(localStorage.getItem('books') === null) {
            books = [];
        } else {
            books = JSON.parse(localStorage.getItem('books'));
        }
        return books;
    }

    static addBook(book) {
        const books = this.getBooks();
        books.push(book);
        localStorage.setItem('books', JSON.stringify(books));
    }

    static removeBook(id) {
        const books = Storage.getBooks();
        books.forEach((book, index) => {
            if(book.id == id) {
                books.splice(index, 1);
            }
        });
        localStorage.setItem('books', JSON.stringify(books));
    }

    static lastInsertId() {
        const books = Storage.getBooks();
        const lastInsertId = Math.max(...books.map(o => o.id), 0);
        return lastInsertId;
    }
}