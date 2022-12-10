let myLibrary = [];

function Book(title, author, pgs, read) {
    this.title = title;
    this.author = author;
    this.pages = pgs;
    this.hasRead = read;
}

// title, author, pages, have you read it?, and a submit button
function addBookToLibrary(){
    let title = prompt("What is the title?: ");
    let author = prompt("What is the auhtor?: ");
    let pages = prompt("How many page?: ");
    let hasRead = prompt("Have you read it?: ");
    if(hasRead.toLowerCase() == 'yes') {
        hasRead = true;
    } else {
        hasRead = false;
    }

    let newBook = new Book(title, author, pages, hasRead);
    myLibrary.push(newBook);
};

function displayBooks() {
    myLibrary.forEach(book => {
        console.log(book.title);
        console.log(book.author);
        console.log(book.pages);
        console.log(book.hasRead);
    });
}

addBookToLibrary();
displayBooks();