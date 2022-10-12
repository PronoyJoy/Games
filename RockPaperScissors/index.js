const computerDisplay = document.getElementById('computer')

const userDisplay = document.getElementById('your')

const resultDisplay = document.getElementById('result')

const choices = document.querySelectorAll('button')




const computermarks = document.getElementById('computermarks')

const yourmarks = document.getElementById('yourmarks')

let userChoice
let ComputerChoice
let resultchoice


choices.forEach(choices => choices.addEventListener('click',(e)=>{

    userChoice = e.target.id
    userDisplay.innerHTML = userChoice
    generateComputerChoice() //calling other functions
    getResult()



}))



function generateComputerChoice(params) {

    const randomNumber = Math.floor(Math.random()*3)
    console.log(randomNumber)

    if (randomNumber === 0){

        ComputerChoice = 'rock'

    }

    if (randomNumber === 1){

        ComputerChoice= 'paper'

    }

    if (randomNumber === 2){ 

        ComputerChoice ='scissor'

    }

    computerDisplay.innerHTML = ComputerChoice
    
}
let result
function getResult(){

    if (ComputerChoice === userChoice){
        result = 'Draw'
    }

    if (ComputerChoice === 'rock' &&  userChoice === 'paper'){
        result = 'You Win !'
    }
    if (ComputerChoice === 'paper' &&  userChoice === 'rock'){
        result = 'Lose !'
    }

    if (ComputerChoice === 'paper' &&  userChoice === 'scissor'){
        result = 'Win !'
    }
    if (ComputerChoice === 'scissor' &&  userChoice === 'paper'){
        result = 'You Lose !'
    }

    if (ComputerChoice === 'rock' &&  userChoice === 'scissor'){
        result = 'You Lose !'
    }
    if (ComputerChoice === 'scissor' &&  userChoice === 'rock'){
        result = 'Win !'
    }

    resultDisplay.innerHTML = result


}