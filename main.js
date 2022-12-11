const bookCardsSection = document.querySelector(".book-cards-section");
let index = 0;

let submitBtn = document.querySelector("button[type='submit']");
submitBtn.addEventListener('click', function(event){
    event.preventDefault();
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;

    // Clear Input Fields
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('pages').value = '';
    addBookToLibrary(title, author, pages);
    displayBooks(index);
    index += 1;
});

let myLibrary = [];

function Book(title, author, pgs) {
    this.title = title;
    this.author = author;
    this.pages = pgs;
    this.hasRead = false;
}

// Dynamically create card element
function addCard(title, author, pages, id) {
    let card = document.createElement("div");
    card.setAttribute("class", "card");
    card.setAttribute("id", id);
    card.setAttribute("style", "width: 18rem");
    card.setAttribute("data-attr", "1");
    card.innerHTML = `<div class="card-body">
    <h5 class="card-title">${title}</h5>
    <h6 class="card-subtitle mb-2 text-muted">Author: ${author}</h6>
    <p class="pages">Pages: ${pages}</p>
</div>`;
    bookCardsSection.appendChild(card);
}

// title, author, pages, have you read it?, and a submit button
function addBookToLibrary(t, a, p){
    let newBook = new Book(t, a, p);
    myLibrary.push(newBook);
};

function displayBooks(index) {
    addCard(myLibrary[index].title, myLibrary[index].author, myLibrary[index].pages, index);
}

// addBookToLibrary();
// displayBooks();