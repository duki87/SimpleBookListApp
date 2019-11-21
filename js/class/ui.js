class UI {
    static displayBooks() {
        const books = Storage.getBooks();
        books.forEach((book) => UI.addBookToList(book));
    }

    static deleteBook(id) {
        document.querySelector('#book_'+id).parentElement.parentElement.remove();
    }

    static showAlert(message, alertType) {       
        document.querySelector('#alert').parentElement.classList = '';
        document.querySelector('#alert').parentElement.classList.remove('d-none');
        document.querySelector('#alert').innerHTML = message;
        document.querySelector('#alert').parentElement.classList.add('alert', 'fade', 'show', 'alert-'+alertType);
        //Fade out in 3 sec
        setTimeout(() => {
            document.querySelector('#alert').parentElement.classList.add('d-none');
        }, 3000);
    }

    static addBookToList(book) {
        const list = document.querySelector('#book-table');
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.publisher}</td>
            <td>${book.isbn}</td>
            <td><a href="#" class="btn btn-danger delete" id="book_${book.id}" onclick="deleteBook(${book.id})"><i class="fa fa-trash-o"></i></a></td>
        `;
        list.appendChild(row);
    }
}