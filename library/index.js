function Book(author, title, pages, status) { //constructor function to create new objects of same type
    (this.author = author),
    (this.title = title),
    (this.pages = pages),
    (this.status = status);
}

let book1 = new Book("mark", "CoolFirstBook", 234, "unread");
let book2 = new Book("mark", "CoolFirstBook", 234, "unread");

const mylib = [book1, book2]; // array to store the books 

//function to push book into library
function addBookToLibrary(book) {
    mylib.push(book);
}

const button = document.getElementById("add");

let book3 = new Book("thesdk", "adkflkj", 235, "adsflk");

button.addEventListener("click",()=>{
    addBookToLibrary(book3);
    console.log(mylib.length)
})





