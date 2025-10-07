// formatando os valores para 2 casas decimais, e arredondando os valores.
function formatMoney(value) {
    value = Math.ceil(value * 100) / 100
    value = value.toFixed(2)
    return value + ' $'
}
// adicionando plural nas strings
function formatSplit(value) {
    if (value == 1) return value + ' person'
    return value + ' people'
    

    
}

function update() {
    let bill = Number(document.getElementById('yourBill').value) // conta
    let tipPercent = document.getElementById('tipInput').value // porcetagem da gorjeta
    let split = document.getElementById('splitInput').value // dividir
 

    let tipValue =   bill * (tipPercent / 100 ) 
    let billTotal =  bill + tipValue
    let tipValuePerson = tipValue / split
    let billEach = billTotal / split

    document.getElementById('tipPercent').innerHTML = tipPercent + ' %' // mostrando a porcetagem 
    document.getElementById('tipValue').innerHTML = formatMoney(tipValue) // mostrando a gorjeta
    document.getElementById('tipValuePerson').innerHTML = formatMoney(tipValuePerson) // gorjeta para cada pessoa
    document.getElementById('totalWithTip').innerHTML = formatMoney(billTotal) // mostrando o valor total
    document.getElementById('splitValue').innerHTML = formatSplit(split)// mostrando a divisão
    document.getElementById('billEach').innerHTML = formatMoney(billEach) // valor total com a divisão
}
