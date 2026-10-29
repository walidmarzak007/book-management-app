import{addBook, loadBooks} from "./state.js";
import{displayBooks} from "./ui.js";
import{isTitleValid, isAuthorValid} from "./utils.js";
console.log("Book Management App is ready!");
loadBooks();
displayBooks();
const bookForm = document.querySelector("#book-form");
const searchInput = document.querySelector("#search-books");
const titleInput = document.querySelector("#title");
const authorInput = document.querySelector("#author");
const yearInput = document.querySelector("#year");
const genreInput = document.querySelector("#genre");
const descriptionInput= document.querySelector("#description");
const statusInput = document.querySelector("#status");


bookForm.addEventListener ("submit",(Event)=>{
    console.log("the form was submitted!");
    Event.preventDefault();
    const title = titleInput.value.trim();
    const author = authorInput.value.trim();

    if (!isTitleValid(title)|| !isAuthorValid(author)){
        alert("please enter both a book title and an author");
        return;
    }
    console.log("validation passed!");
    const book = {
        title:title,
        author:author,
        year:yearInput.value,
        genre:genreInput.value,
       description:descriptionInput.value.trim(),
       status: statusInput.value
    };
addBook(book);
console.log("book added to state:", book);

displayBooks();
console.log("display function called!");
bookForm.reset();
});
searchInput.addEventListener("input",() =>{
    displayBooks(searchInput.value);
});
