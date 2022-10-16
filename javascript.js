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

const addBookButton = document.querySelector("#addBookButton");
const form = document.querySelector("#form");

addBookButton.addEventListener("click", ()=> {
    console.log(form.getAttribute("hidden"));
})

let myLibrary = [];

function Book() {
    
}

function addBookToLibrary() {
    
}
