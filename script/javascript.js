let playGame = confirm('Shall we play Rock, Paper or Scissor')
if (playGame){
    let playerChoice = prompt('Choose: Rock, Paper or Scissor')
    if(playerChoice){
        let playerOne = playerChoice.toLowerCase()
        if (playerOne === 'rock'||playerOne ==='paper'||playerOne ==='scissor')
        {    
          let computerSelect = Math.floor(Math.random()*3+1)
          let computer =
            computerSelect===1?'rock':
            computerSelect===2?'paper':
          'scissor';
          let result = 
            playerOne === computer ?"It's a tie":
            playerOne==='rock'&& computer==='paper'? `player: ${playerChoice} and computer: ${computer} \nComputer wins`:
            playerOne==='paper'&& computer==='scissor'? `player: ${playerChoice} and computer: ${computer} \nComputer wins`:
            playerOne==='scissor'&& computer==='rock'? `player: ${playerChoice} and computer: ${computer} \nComputer wins`:
            `player: ${playerChoice} and computer: ${computer} \nYou win`;
            alert(result)
          let playAgain = confirm("Play another Round ?")?location.reload() :
            alert('Thank you for playing with us');
            
        }else{
            alert("Please choose correctly")
            location.reload();
        }
        
    }else{
        alert('Change of mind!, maybe next time then.')
    }
}else{
    alert ('Maybe next time then.')
}

// function getComputerChoice (){
//   let computer = Math.floor(Math.random()*3+1)
  
// }
