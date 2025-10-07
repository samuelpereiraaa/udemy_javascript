const colors = ['blue', 'red', 'purple', 'green', 'pink', 'black', 'blue'] // array de cores
const btn = document.getElementById('btn') // armazenando o botao em uma variavel
const nameColors = document.getElementById('nameColor') // pegando o nome da cor 

// gerando numeros randomicos baseado no tamanho da array
function getRandomColor () {
    return Math.floor (Math.random() * colors.length) 
}

// ao escutar um click execute a funçao
btn.addEventListener('click', function(){

    const randomColor = getRandomColor() // armazenando a funçao dentro de uma variavel

    const corSorteada = colors[randomColor] // armazenando a array junto com a funçao 

    document.body.style.background = corSorteada // cor do body, baseado no indice da array
    
    nameColors.textContent = corSorteada// exibindo o nome das cores no html
})
    
