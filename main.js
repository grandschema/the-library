const bookCardsSection = document.querySelector(".book-cards-section");

// Dynamically create card element
{/* <div class="card" style="width: 18rem;" data-attr="1">
    <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="card-link">Card link</a>
        <a href="#" class="card-link">Another link</a>
    </div>
</div> */}
function addCard() {
    let card = document.createElement("div");
    card.setAttribute("class", "card");
    card.setAttribute("style", "width: 18rem");
    card.setAttribute("data-attr", "1");
    card.innerHTML = `<div class="card-body">
    <h5 class="card-title">Card title</h5>
    <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
</div>`;
    bookCardsSection.appendChild(card);
}

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

addCard();
// addBookToLibrary();
// displayBooks();