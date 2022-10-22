const addBookButton = document.querySelector("#addBookButton");
const submitButton = document.querySelector("#submitButton");
const form = document.querySelector("#form");
const title = document.querySelector("#title");
const author = document.querySelector("#author");
const pages = document.querySelector("#pages");
const hasRead = document.querySelector("#read");
const bookShelf = document.querySelector("#book-shelf");
// {title: "A song of ice and fire", author: "George R.R. Martin", pages: 500, read: true}
let myLibrary = [];

function Book (title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {
    myLibrary.push(new Book(title.value, author.value, pages.value, hasRead.checked));
}

function showBooks(books) {
    books.forEach(book => {
        console.log(book);
        let newBook = document.createElement("div");
        let bookTitle = document.createElement("p");
        bookTitle.innerHTML = book.title;
        let bookAuthor = document.createElement("p");
        bookAuthor.innerHTML = book.author;
        let bookPages = document.createElement("p");
        bookPages.innerHTML = book.pages;
        //newBook.appendChild(bookInfo);
        newBook.append(bookTitle, bookAuthor, bookPages);
        newBook.classList.add("book");
        bookShelf.appendChild(newBook);
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