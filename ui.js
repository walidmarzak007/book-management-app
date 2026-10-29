import { getBooks } from "./state.js";

const bookList = document.querySelector("#book-list");
console.log("book list element:", bookList);

export const displayBook = (book) =>{
console.log("display book function running");

const bookCard = document.createElement("div");
bookCard.classList.add("book-card");

const title = document.createElement("h3");
title.textContent = book.title;

const author = document.createElement("p");
author.textContent = `Author:${book.author}`;

const year = document.createElement("p");
year.textContent = `publication year:${book.year}`;

const genre = document.createElement("p");
genre.textContent = `Genre: ${book.genre}`;

bookCard.append(title, author, year, genre);
bookList.append(bookCard);
console.log("book card created:", bookCard);
console.log("book list html:", bookList.innerHTML);
};

export const displayBooks = (searchText = "") => {
bookList.innerHTML = "";

const books = getBooks();
console.log("books to display:", books);
const filteredBooks = books.filter((book) =>{
    return(
        book.title.toLowerCase().includes(searchText.toLocaleLowerCase())||
        book.author.toLowerCase().includes(searchText.toLocaleLowerCase())
    );
});

filteredBooks.forEach((book)=>{      
displayBook(book);
});
};