gameboard = {
    board: [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
    ],
};

function Player(symbol,turn) {
    return { symbol,turn };
}

function display(gameboard) {
    console.log(gameboard.board[0]);
    console.log(gameboard.board[1]);
    console.log(gameboard.board[2]);
}
let player1, player2

var button = document.getElementById("button");
button.addEventListener("click", () => {
    var p1 = prompt("enter player 1 symbol (x or o) : ");
    while (p1 != "x" && p1 != "o") {
        p1 = prompt("enter player 1 symbol (x or o) : ");
    }
    console.log(p1);
    if (p1 == "x") {
        player1 = Player("x",true);
        player2 = Player("o",false);
    } else {
        player1 = Player("o",true);
        player2 = Player("x",false);
    }
    game(player1, player2);
    button.style.display = "none";
    var reset = (document.getElementById("reset").style.display = "block");
});






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

function handle(rowIndex, cellIndex, cell) {
    if (player1.turn == true && cell.textContent == "") {
        cell.textContent = player1.symbol
        
        update()
        if (win(gameboard, player1.symbol)) {
            console.log("Player 1 wins!");
            handle_win(player1)
        }
        player1.turn = false
        player2.turn = true
        
    }

    if (player2.turn == true && cell.textContent == "") {
        cell.textContent = player2.symbol
        update()
        if (win(gameboard, player2.symbol)) {
            console.log("Player 2 Wins!")
            handle_win(player2)
        }
        player2.turn = false
        player1.turn = true
        
    }
    setTimeout(check_draw,100)
   

    
    display(gameboard);
}

function check_draw(){
    var cells = document.querySelectorAll("#table td");
    let i = 0
    cells.forEach((cell)=>{
    if(cell.textContent != "")
        {
            i++
        }
        

    })
    if((!win(gameboard,player1.symbol) && i==9) && (!win(gameboard,player2.symbol) && i==9))
    {
        alert("DRAW")
    }
}

function handle_win(player) {
    setTimeout(function() {
        alert(player.symbol + " WINS!");
    }, 100); // Delayed for 100 milliseconds to allow other operations to finish
}




function game(player1, player2) {
    var table = (document.getElementById("table").style.display = "table");

    //adds event listners to all the cells and allows us to change value of the cells
    var cells = document.querySelectorAll("#table td");
    for (var i = 0; i < cells.length; i++) {
        cells[i].addEventListener("click", function () {
            var rowIndex = this.parentNode.rowIndex; // Index of the row
            var cellIndex = this.cellIndex;
            handle(rowIndex,cellIndex,this) // index
            
            
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