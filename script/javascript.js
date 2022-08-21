const game  = document.querySelector('#game')
const heading = document.createElement('h1')
const gameChoice = document.createElement('div')
const playerDisplay = document.createElement('h2')
const computerDisplay = document.createElement('h2')
const resultDisplay = document.createElement('h2')

game.append(heading,gameChoice,playerDisplay,computerDisplay,resultDisplay);

heading.innerHTML = "Welcome to Rock , Paper n Scissors";
let chosen; let generated;

const choices = ['✌️','✋','✊'];
choices.forEach(choice =>{
    const button = document.createElement('button');
    button.innerHTML = choice;
    gameChoice.append(button);
    button.addEventListener('click', e=>{
        chosen = e.target.innerHTML;
        playerDisplay.innerHTML = `player : ${chosen}`;
        genComputerChoice();
        result();
    })

})

let genComputerChoice = ()=> {
    generated = choices[Math.floor(Math.random()*choices.length)]
    computerDisplay.innerHTML = `Computer : ${generated}`;
}


let result = () =>{
    switch(chosen+generated){
        case '✌️✋':
        case '✋✊':
        case '✊✌️':
        resultDisplay.innerHTML=  'You win'
        break

        case '✋✌️':
        case '✊✋':
        case '✌️✊':
        resultDisplay.innerHTML=  'Computer wins'
        break

        case '✌️✌️':
        case '✋✋':
        case '✊✊':
        resultDisplay.innerHTML=  'Tie Match'
        break
    }
}

