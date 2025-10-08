let computerNumber // variavel para armazenar os numeros randomicos 
let userNumbers = [] // array para guardar os palpites
let attempts = 0

function init() {
    computerNumber = Math.floor((Math.random() * 100 + 1))
    
    // function para gerar numeros aleatorios de 0 ate 100
}

function compareNumbers() {
    
    const userNumber = Number(document.getElementById('inputBox').value)
    userNumbers.push(' ' + userNumber)
    document.getElementById('guesses').innerHTML = userNumbers  
    // mostrando os numeros do usuario no html e armazenando em uma array

    if(attempts < 10){ // limitando as tentativas

    // comparando computer e userNumber
    if (computerNumber > userNumber) { 
        document.getElementById('textOutput').innerHTML = 'Your guess: low' 
        document.getElementById('inputBox').value = '' // limpando o campo digitado
        attempts++ // adicionando 1 tentativa
        document.getElementById('attempts').innerHTML = attempts // mostrando no html
    } 
    else if (computerNumber < userNumber){
        document.getElementById('textOutput').innerHTML = 'Your guess: high'
        document.getElementById('inputBox').value = ''
        attempts++
        document.getElementById('attempts').innerHTML = attempts 
        }
        
    else {
       document.getElementById('textOutput').innerHTML = 'Your guess is correct!!!'
       attempts++
       document.getElementById('attempts').innerHTML = attempts
        document.getElementById('inputBox').setAttribute('Readonly', 'Readonly') // metodo para nao digitar
    }
}else {
    document.getElementById('textOutput').innerHTML = 'You LOSE! Its number was ' + computerNumber
    document.getElementById('attempts').innerHTML = 'Efforts expired, restart the game'
    document.getElementById('inputBox').setAttribute('Readonly', 'Readonly')
}

}


