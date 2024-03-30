var input = document.getElementById("playerInp");
var button = document.getElementById("play")
var arr = ['rock','paper','scissor']
function getComputerChoice(){
    const random_index = Math.floor(Math.random() * 3);
    var computer = arr[random_index];
    return computer;
}
function getplayerChoice(){
    var player = input.value;
    return player;

}
function playGame(){
    var player = getplayerChoice();
    var computer = getComputerChoice();
    console.log("computer input "+ computer)
    if(!player)
    {
        return("please input value")
        // console.log("please input value")
    }
    else
    {
        if(player != 'rock' && player != 'paper' && player != "scissor" )
        {
            return("you have not entered valid input :(")
            // alert("you have not entered valid input :(")
        }
        if(player===computer)
        {
            return("Compter chose "+computer+", Its a draw! play again")
            // alert("Compter chose "+computer+", Its a draw! play again")
            // console.log("draw! play again")
        }
        else if((player === 'rock' && computer === 'scissor') || (player === 'paper' && computer === 'rock') || (player === 'scissor' && computer === 'paper'))    
        {
            return("Compter chose "+computer+", You Win!!")
            // alert("Compter chose "+computer+", You Win!!")
            // console.log("You Win!!");
        }
        else
        {
            return("Compter chose "+computer+" You Lose!, Try again")
            // alert("Compter chose "+computer+" You Lose!, Try again")
            // console.log("You Lose!, Try again"); 
        }
        
    }

}

button.onclick = ()=>{
    alert(playGame());
}
