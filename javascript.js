const addBookButton = document.querySelector("#addBookButton");
const submitButton = document.querySelector("#submitButton");
const form = document.querySelector("#form");

addBookButton.addEventListener("click", () => {
    form.classList.replace("form-hide", "form-display");
});

submitButton.addEventListener("click", () => {
    form.classList.replace("form-display", "form-hide");
})

let myLibrary = [];

function Book (title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        if (read === false) {
            return (`${title} by ${author}, ${pages}, not read yet`);
        } else {
            return (`${title} by ${author}, ${pages}, already read`);
        }
    }
}

function addBookToLibrary() {
    
}
