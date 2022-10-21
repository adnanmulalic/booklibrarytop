const addBookButton = document.querySelector("#addBookButton");
const submitButton = document.querySelector("#submitButton");
const form = document.querySelector("#form");
let title = document.querySelector("#title");
let author = document.querySelector("#author");
let pages = document.querySelector("#pages");
let hasRead = document.querySelector("#read");

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
    addBookButton.classList.add("form-hide");
});

submitButton.addEventListener("click", () => {
    addBookToLibrary();
    title.value = author.value = pages.value = ""; hasRead.checked = false;
    form.classList.replace("form-display", "form-hide");
    addBookButton.classList.remove("form-hide");
})

let myLibrary = [{title: "A song of ice and fire", author: "George R.R. Martin", pages: 500, read: true}];

function addBookToLibrary() {
    myLibrary.push(new Book(title.value, author.value, pages.value, hasRead.checked));
}


