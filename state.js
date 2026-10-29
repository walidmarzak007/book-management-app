let books =[];

export const addBook = (book) =>{
    books.push(book);
    saveBooks();
}; 

export const getBooks = () =>{
    return books;
};

export const saveBooks =() =>{
    localStorage.setItem("books",JSON.stringify(books));
};

export const loadBooks = ()=>{
const savedBooks = localStorage.getItem("books");
if(savedBooks !== null){
books = JSON.parse(savedBooks);
}};
