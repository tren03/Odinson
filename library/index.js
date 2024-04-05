function Book(author, title, pages, status) {
    //constructor function to create new objects of same type
    (this.author = author),
        (this.title = title),
        (this.pages = pages),
        (this.status = status);
}

let book1 = new Book("mark", "CoolFirstBook", 234, "unread");
let book2 = new Book("mark", "CoolFirstBook", 234, "unread");

popUp = document.getElementById("popupForm")

const mylib = [book1, book2]; // array to store the books

//function to push book into library
function addBookToLibrary(book) {
    mylib.push(book);
}

const button = document.getElementById("add");

let book3 = new Book("thesdk", "adkflkj", 235, "adsflk");

button.addEventListener("click", () => {
    popUp.style.display = "block" //shows the popup
    document.getElementById("btn").addEventListener("click",()=>{
        var book = new Book(document.getElementById("author").value,document.getElementById("title").value,document.getElementById("pages").value,document.getElementById("status").value)
        addBookToLibrary(book);
        addRow(book)
        closeForm()

    })
});

// dynamically adding rows to existing table via js

function addRow(book) {
    var table = document.getElementById("table");
    var row = table.insertRow();

    var cellData = [book.author,book.title,book.pages,book.status]

    cellData.forEach((data)=>{
        var cell = document.createElement("td")
        cell.innerHTML= data;
        row.appendChild(cell)  

    })


}

// close_button = document.getElementById("close_button")

// close_button.addEventListener("click",()=>{
//     popUp.style.display = "none"
// })

function closeForm()
{
    popUp.style.display = "none"
}
