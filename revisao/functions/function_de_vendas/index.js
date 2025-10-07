// criando uma function de informação da venda
function infoVenda (info, total) {
    console.log("transaçao:  " + info + " preço:  $" + total)
       
}
console.log(infoVenda('aprovado', 180))


// criando uma function de calculo

function percentage38(value) {
    value = value - (value * 38 / 100) // 38% of valor   
    return value
}
console.log(percentage38(500)) // retornando o valor do argumento



