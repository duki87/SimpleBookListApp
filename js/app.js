var lastBookId = Storage.lastInsertId();

function * idGen(){
    let i = lastBookId;
    while (true) {
      yield ++i;
    }
}

const myIdGen = idGen();

//Event: display books
document.addEventListener('DOMContentLoaded', UI.displayBooks);

//Event: add a book
document.querySelector('#add-book').addEventListener('submit', (e) => {
    //prevent submitting
    e.preventDefault();
    //Get form values
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const publisher = document.querySelector('#publisher').value;
    const isbn = document.querySelector('#isbn').value;

    //validation
    if(title === '' || author === '' || publisher === '' || isbn === '') {
        UI.showAlert('Please fill in the form!', 'danger');   
    } else {
        const book = new Book(title, author, publisher, isbn, myIdGen.next().value);
        console.log(book);

        //Store book to localstorage
        Storage.addBook(book);
        
        //add book to UI
        UI.addBookToList(book);

        UI.showAlert('Book added successfuly!', 'success');
        document.querySelector('#add-book').reset();
    }

});

//event: remove a book
function deleteBook(id) {
    UI.deleteBook(id);
    Storage.removeBook(id);
    UI.showAlert('Book deleted successfuly!', 'success');
}
