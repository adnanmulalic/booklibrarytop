const addBookButton = document.querySelector("#addBookButton");
const submitButton = document.querySelector("#submitButton");
const form = document.querySelector("#form");

function Book (title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function showBooks(books) {
    books.forEach(book => {
        console.log(book);
    });
}

addBookButton.addEventListener("click", () => {
    form.classList.replace("form-hide", "form-display");
});

submitButton.addEventListener("click", () => {
    form.classList.replace("form-display", "form-hide");
})

let myLibrary = [{title: "A song of ice and fire", author: "George R.R. Martin", pages: 500, read: true}];

function addBookToLibrary() {
    
}


