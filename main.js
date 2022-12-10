
let submitBtn = document.querySelector("button[type='submit']");
submitBtn.addEventListener('click', function(event){
    event.preventDefault();
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;
    addBookToLibrary(title, author, pages);
    displayBooks();
});

let myLibrary = [];

function Book(title, author, pgs) {
    this.title = title;
    this.author = author;
    this.pages = pgs;
    this.hasRead = false;
}

// title, author, pages, have you read it?, and a submit button
function addBookToLibrary(t, a, p){
    let newBook = new Book(t, a, p);
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

// addBookToLibrary();
// displayBooks();