const computerDisplay = document.getElementById('computer')

const userDisplay = document.getElementById('your')

const resultDisplay = document.getElementById('result')

const choices= document.querySelectorAll('button')

let userChoice

choices.forEach(choices => choices.addEventListener('click',(e)=>{

    userChoice = e.target.id
    userDisplay.innerHTML = userChoice
    generateComputerChoice() //calling other functions
    


}))