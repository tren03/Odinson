console.log("hello world")
var input = document.getElementById("playerInp");
var button = document.getElementById("play")
var arr = ['rock','paper','scissor']
button.onclick = ()=>{
    const random_index = Math.floor(Math.random() * 3)
    var player = input.value;
    console.log(random_index)
    var computer = arr[random_index]
    console.log("computer input "+ computer)
    if(!player)
    {
        console.log("please input value")
    }
    else
    {
        if(player != 'rock' && player != 'paper' && player != "scissor" )
        {
            alert("you have not entered valid input :(")
        }
        if(player===computer)
        {
            alert("Compter chose "+computer+", Its a draw! play again")
            console.log("draw! play again")
        }
        else if((player === 'rock' && computer === 'scissor') || (player === 'paper' && computer === 'rock') || (player === 'scissor' && computer === 'paper'))    
        {
            alert("Compter chose "+computer+", You Win!!")
            console.log("You Win!!");
        }
        else
        {
            alert("Compter chose "+computer+" You Lose!, Try again")
            console.log("You Lose!, Try again"); 
        }

    }
    
    
    

}