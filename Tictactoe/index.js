gameboard = {
    board: [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
    ],
};

function Player(symbol) {
    return { symbol };
}

function display(gameboard) {
    console.log(gameboard.board[0]);
    console.log(gameboard.board[1]);
    console.log(gameboard.board[2]);
}

var button = document.getElementById("button");
button.addEventListener("click", () => {
    var p1 = prompt("enter player 1 symbol (x or o) : ");
    while (p1 != "x" && p1 != "o") {
        p1 = prompt("enter player 1 symbol (x or o) : ");
    }
    console.log(p1);
    if (p1 == "x") {
        var player1 = Player("x");
        var player2 = Player("o");
    } else {
        var player1 = Player("o");
        var player2 = Player("x");
    }
    game(player1, player2);
    button.style.display = "none";
    var reset = (document.getElementById("reset").style.display = "block");
});




function handle(rowIndex,cellIndex)
{
    return [rowIndex,cellIndex]
}

function win(gameboard, symbol) {
    var row_count = 0;
    var col_count = 0;
    var diag_count = 0;
    
    // Check rows and columns
    for (var i = 0; i < 3; i++) {
        row_count = 0;
        col_count = 0;
        for (var j = 0; j < 3; j++) {
            if (gameboard.board[i][j] == symbol) {
                row_count++;
            }
            if (gameboard.board[j][i] == symbol) {
                col_count++;
            }
        }
        if (row_count === 3 || col_count === 3) {
            console.log(symbol, "WINS");
            return true; 
        }
    }

    // Check diagonals
    diag_count = 0;
    for (var i = 0; i < 3; i++) {
        if (gameboard.board[i][i] == symbol) {
            diag_count++;
        }
    }
    if (diag_count === 3) {
        console.log(symbol, "WINS");
        return true; 
    }

    diag_count = 0;
    for (var i = 0; i < 3; i++) {
        if (gameboard.board[i][2 - i] == symbol) {
            diag_count++;
        }
    }
    if (diag_count === 3) {
        console.log(symbol, "WINS");
        return true; 
    }

    return false;
}

function game(player1, player2) {
    var table = (document.getElementById("table").style.display = "table");

    //adds event listners to all the cells and allows us to change value of the cells
    var cells = document.querySelectorAll("#table td");
    for (var i = 0; i < cells.length; i++) {
        cells[i].addEventListener("click", function () {
            var rowIndex = this.parentNode.rowIndex; // Index of the row
            var cellIndex = this.cellIndex;
            handle(rowIndex,cellIndex) // returns object
        });
    }
    
    
}

// updates the contents on the frontend to the board object here to do operations
function update(){

    for (let i = 0; i < 3; i++) {
        const row = document.getElementsByTagName("tr");
        const cells = row[i].getElementsByTagName("td");
        for (let j = 0; j < 3; j++) {
            gameboard.board[i][j] = cells[j].textContent;
        }
    }
}







// for (var i = 0; i < cells.length; i++) {
//     cells[i].addEventListener("click", function () {
//         var rowIndex = this.parentNode.rowIndex; // Index of the row
//         var cellIndex = this.cellIndex;

        
//         // console.log("row : ",rowIndex);
//         // console.log("col : ",cellIndex);
//         // if (this.textContent == "x") {
//         //     this.textContent = "o";
//         // } else {
//         //     this.textContent = "x";
//         // }
//         // gameboard.board[rowIndex][cellIndex] = this.textContent;
//         // display(gameboard);
//     });
// }