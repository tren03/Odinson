
gameboard = {
    board : [[0,0,0],[0,0,0],[0,0,0]]
}

function Player(name,symbol){

    return {name,symbol}
}

function display(gameboard)
{
    console.log(gameboard.board[0])
    console.log(gameboard.board[1])
    console.log(gameboard.board[2])
}

let b = document.getElementById('b')
b.addEventListener('click',()=>{
    let a = prompt("input here : ")
    console.log(first)
})





for(let i = 0;i<3;i++)
{
    const row = document.getElementsByTagName('tr')
    const cells = row[i].getElementsByTagName('td')
    for(let j = 0;j<3;j++)
    {
        gameboard.board[i][j] = cells[j].textContent
    }


}
// console.log(gameboard.board)


//converting 1d to 2d

var cells = document.querySelectorAll("#table td")
for (var i = 0; i < cells.length; i++) {
    cells[i].addEventListener("click", function() {
        var rowIndex = this.parentNode.rowIndex; // Index of the row
        var cellIndex = this.cellIndex;
        // console.log("row : ",rowIndex);
        // console.log("col : ",cellIndex);    
        if(this.textContent=='x')
        {
            
            
          this.textContent = 'o'
        }
        else
        {
          this.textContent = 'x'
        }   
        gameboard.board[rowIndex][cellIndex] = this.textContent 
        display(gameboard)
        
    });
  }









