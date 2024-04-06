function Book(author, title, pages, status) {
  //constructor function to create new objects of same type
  (this.author = author),
    (this.title = title),
    (this.pages = pages),
    (this.status = status);
}


popUp = document.getElementById("popupForm");


const mylib = []; // array to store the books


//function to push book into library
function addBookToLibrary(book) {
  if(book.author != "" && book.title != "" && book.pages != "" && book.status!= "" )
  {
    mylib.push(book);
  }
  console.log("please enter the details")
  
}

const button = document.getElementById("add");

let book3 = new Book("thesdk", "adkflkj", 235, "adsflk");


//adding new book using the button

button.addEventListener("click", () => {
  popUp.style.display = "block"; //shows the popup
  document.getElementById("btn").addEventListener("click", () => {
    var book = new Book(
      document.getElementById("author").value,
      document.getElementById("title").value,
      document.getElementById("pages").value,
      document.getElementById("status").value
    );
    addBookToLibrary(book);
    constructRows(mylib);
    closeForm();
  });
  document.getElementById("close_button").addEventListener("click", () => {
    closeForm();
  });
});

// dynamically adding rows to existing table via js

function constructRows(mylib) {
  console.log(mylib)
  var table = document.getElementById("table");
  for (let i = table.rows.length - 1; i > 0; i--) {
    table.deleteRow(i);
  }


  mylib.forEach((book) => {
    var row = table.insertRow();

    var cellData = [book.author, book.title, book.pages, book.status];

    cellData.forEach((data) => {
      var cell = document.createElement("td");
      cell.innerHTML = data;
      row.appendChild(cell);
    });
  });

}

// close_button = document.getElementById("close_button")

// close_button.addEventListener("click",()=>{
//     popUp.style.display = "none"
// })

function closeForm() {
  popUp.style.display = "none";
  document.getElementById("author").value = "";
  document.getElementById("title").value = "";
  document.getElementById("pages").value = "";
  document.getElementById("status").value = "";
}
