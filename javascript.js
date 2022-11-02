const addBookButton = document.querySelector("#addBookButton");
const submitButton = document.querySelector("#submitButton");
const form = document.querySelector("#form");
const title = document.querySelector("#title");
const sameBookError = document.querySelector("#same-book-error");
const author = document.querySelector("#author");
const pages = document.querySelector("#pages");
const hasRead = document.querySelector("#read");
const bookShelf = document.querySelector("#book-shelf");
const cancelButton = document.querySelector("#cancel");
const inputs = document.querySelectorAll(".inputs");
// {title: "A song of ice and fire", author: "George R.R. Martin", pages: 500, read: true}
let myLibrary = [];

function Book (title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {
    let newBook = new Book(title.value, author.value, pages.value, hasRead.checked);
    myLibrary.push(newBook);
    let newBookOnShelf = document.createElement("div");
    let bookTitle = document.createElement("p");
    bookTitle.innerHTML = newBook.title;
    let bookAuthor = document.createElement("p");
    bookAuthor.innerHTML = newBook.author;
    let bookPages = document.createElement("p");
    bookPages.innerHTML = newBook.pages;
    newBookOnShelf.append(bookTitle, bookAuthor, bookPages);
    newBookOnShelf.classList.add("book");
    bookShelf.appendChild(newBookOnShelf);
    //newBook.appendChild(bookInfo); */
}


title.addEventListener("change", () => {
    myLibrary.forEach(book => {
        if (book.title === title.value) {
            sameBookError.setAttribute("hidden", "false");
        } 
    });
})

function showBooks(myLibrary) {
    myLibrary.forEach(book => {
        if (book.title === title.value) { 
        }
        newBook.classList.add("book");
        bookShelf.appendChild(newBook);
    });
}

const isTrue = (currentTruth) => currentTruth === true;

addBookButton.addEventListener("click", () => {
    form.classList.replace("form-hide", "form-display");
    addBookButton.classList.add("hide-button");
});

cancelButton.addEventListener("click", () => {
    title.value = author.value = pages.value = ""; hasRead.checked = false;
    form.classList.replace("form-display", "form-hide");
    addBookButton.classList.remove("hide-button");
})

submitButton.addEventListener("click", () => {
    let arrayOfTruths = [];
    inputs.forEach(input => {
        arrayOfTruths.push(input.validity.valid);
    });
    if (arrayOfTruths.every(isTrue)) {
        addBookToLibrary();
        title.value = "";
        author.value = "";
        pages.value = "";
        hasRead.checked = false;
        form.classList.replace("form-display", "form-hide");
        addBookButton.classList.remove("hide-button");
    } else {
        console.log("form not valid bossmang");
    }
})

/* submitButton.addEventListener("click", () => {
    let arrayOfTruths = [];
    inputs.forEach(input => {
        arrayOfTruths.push(input.validity.valid);
    });
    if (arrayOfTruths.every(isTrue)) {
        addBookToLibrary();
        title.value = "";
        author.value = "";
        pages.value = "";
        hasRead.checked = false;
        form.classList.replace("form-display", "form-hide");
        addBookButton.classList.remove("hide-button");
    } else {
        console.log("form not valid bossmang");
    }
}) */

//if (inputs.forEach(input => {input.validity.valid}).every(isTrue)) was trying something