let valorProduto = Number(prompt('digite o valor aqui: '))
let resultado = document.getElementById('resultado')

if (valorProduto < 20) {
    resultado.innerHTML = "Reprovado" 
}else if (valorProduto >= 20){
    resultado.innerHTML = "Aprovado"
}