let userChoiceDisplay = document.getElementById('user-Choice')
let computerChoiceDisplay = document.getElementById('computer-Choice')
let result = document.getElementById('result-display')
let possibleChoices = document.querySelectorAll('button')

let userChoice


possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e)=>{
    userChoice = e.target.id
    userChoiceDisplay.innerHTML= userChoice
    generatecomputerChoice()
    generateResult()
}))

function generatecomputerChoice(){
    let random = Math.floor(Math.random()*possibleChoices.length)
    randomChoice = random === 0? "rock" :
                   random === 1? "paper":
                   "scissor";
    computerChoiceDisplay.innerHTML = randomChoice
}

function generateResult(){
    let con= userChoice===randomChoice?'Its a tie':
    userChoice==='rock'&&randomChoice==='paper'? 'computer wins':
    userChoice==='paper'&&randomChoice==='scissor'? 'computer wins':
    userChoice==='scissor'&&randomChoice==='rock'? 'computer wins':
    'You win';
    result.innerHTML= con
}
