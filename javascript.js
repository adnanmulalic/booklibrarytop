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

function resetBookshelf() {
    while (bookShelf.firstChild) {
        bookShelf.removeChild(bookShelf.firstChild);
    }
}

function addBookToLibrary() {
    let newBook = new Book(title.value, author.value, pages.value, hasRead.checked);
    myLibrary.push(newBook);
    resetBookshelf();
    myLibrary.forEach(book => {
    let indexNumber = myLibrary.indexOf(book);
    let newBookOnShelf = document.createElement("div");
    let bookTitle = document.createElement("p");
    bookTitle.innerHTML = book.title;
    let bookAuthor = document.createElement("p");
    bookAuthor.innerHTML = book.author;
    let bookPages = document.createElement("p");
    bookPages.innerHTML = book.pages;
    let hasAlreadyRead = document.createElement("button");
    if (book.read === true) {
        hasAlreadyRead.innerHTML = "Read";
        hasAlreadyRead.classList.add("book-already-read");
    }   else {
        hasAlreadyRead.innerHTML = "Not Read";
        hasAlreadyRead.classList.add("book-not-read");
    }
    hasAlreadyRead.addEventListener("click", () => {
        readStatusIndex = hasAlreadyRead.parentElement.dataset.id;
        if (hasAlreadyRead.className === "book-already-read") {
            hasAlreadyRead.innerHTML = "Not Read";
            hasAlreadyRead.classList.replace("book-already-read", "book-not-read");
            myLibrary[readStatusIndex].read = false;
        } else if (hasAlreadyRead.className === "book-not-read"){
            hasAlreadyRead.innerHTML = "Read";
            hasAlreadyRead.classList.replace("book-not-read", "book-already-read");
            myLibrary[readStatusIndex].read = true;
        }
        console.log("this worked too bossmang")
    })
    let removeBook = document.createElement("button");
    removeBook.innerHTML = "Remove book";
    removeBook.classList.add("remove-book");
    removeBook.addEventListener("click", () => {
        deletedBookIndex = removeBook.parentElement.dataset.id;
        myLibrary.splice(deletedBookIndex, 1);
        removeBook.parentElement.remove();
        console.log("this worked bossmang");
    })
    newBookOnShelf.append(bookTitle, bookAuthor, bookPages, hasAlreadyRead, removeBook);
    newBookOnShelf.setAttribute("data-id", indexNumber);
    newBookOnShelf.classList.add("book");
    bookShelf.appendChild(newBookOnShelf);
    })
}


title.addEventListener("keyup", () => {
    for (let i = 0; i < myLibrary.length; i++) {
        if (myLibrary[i].title === title.value) {
            document.querySelector("#same-book-error").classList.remove("hide-element");
            submitButton.setAttribute("disabled", "true");
            break;
        } else {
            document.querySelector("#same-book-error").classList.add("hide-element");
            submitButton.removeAttribute("disabled", "");
        }   
    }
})

/* bookShelf.querySelectorAll("button").addEventListener("click", () => {
    document.querySelector("") //never do this again!!
}) */

const isTrue = (currentTruth) => currentTruth === true;

addBookButton.addEventListener("click", () => {
    form.classList.replace("form-hide", "form-display");
    //addBookButton.classList.add("hide-element");
    document.querySelector("main").classList.add("blured");
});

cancelButton.addEventListener("click", () => {
    title.value = author.value = pages.value = ""; hasRead.checked = false;
    form.classList.replace("form-display", "form-hide");
    document.querySelector("main").classList.remove("blured");
    document.querySelector("#same-book-error").classList.add("hide-element");
    submitButton.removeAttribute("disabled", "");
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
        document.querySelector("main").classList.remove("blured");
    } else {
        console.log("form not valid bossmang");
    }
})


/* function showBooks(myLibrary) {
    myLibrary.forEach(book => {
        if (book.title === title.value) { 
        }
        newBook.classList.add("book");
        bookShelf.appendChild(newBook);
    });
} */

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

/* function addBookToLibrary() {
    let newBook = new Book(title.value, author.value, pages.value, hasRead.checked);
    myLibrary.push(newBook);
    let newBookOnShelf = document.createElement("div");
    let bookTitle = document.createElement("p");
    bookTitle.innerHTML = newBook.title;
    let bookAuthor = document.createElement("p");
    bookAuthor.innerHTML = newBook.author;
    let bookPages = document.createElement("p");
    bookPages.innerHTML = newBook.pages;
    let hasAlreadyRead = document.createElement("button");
    if (hasRead.checked === true) {
        hasAlreadyRead.innerHTML = "Read";
        hasAlreadyRead.classList.add("book-already-read");
    }   else {
        hasAlreadyRead.innerHTML = "Not Read"
        hasAlreadyRead.classList.add("book-not-read");
    }
    newBookOnShelf.append(bookTitle, bookAuthor, bookPages, hasAlreadyRead);
    newBookOnShelf.classList.add("book");
    bookShelf.appendChild(newBookOnShelf);
    //newBook.appendChild(bookInfo); */