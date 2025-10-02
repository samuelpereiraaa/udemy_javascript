// criando um array

/*let nomesAlunos = ['samuel', 'pedro', 'matheus']
nomesAlunos[1] = 'alex'
console.log(nomesAlunos[1])*/

// manipulando dados dentro da array

/*let numbers = [4 ,5 ,6]

numbers.push(8,9,10) // add ao final da array

numbers.unshift(1,2,3) // add no inicio da array

numbers.splice(6, 0, 7) // index, delete, inserir

console.log(numbers) */

// array de referencia 

/*const games = [
    {id: 1, gamesName: 'Death strangind'},
    {id: 2, gamesName: 'God of war'},
    {id: 3, gamesName: 'Detroit became human'}
]

console.log(games.find(function(games){
    return games.gamesName == 'Detroit became human'
}))*/

// arrow functions

/*const games = [
    {id: 1, gamesName: 'Lol'},
    {id: 2, gamesName: 'God of war'},
    {id: 3, gamesName: 'Detroit became human'}
]

console.log(games.find(games => 
    games.gamesName == 'Lol'))*/


 // removendo itens
 
/*let num = [1 ,2 ,3,4,5]
num.pop()
num.shift()
num.splice(1, 1)
console.log(num)*/

// esvaziando uma array de forma pratica

/*let num = [1, 2, 3]

num.splice(0, num.length)

console.log(num)
*/

// concat arrays

/*let numbers = [1, 2, 3, 4]
let letters = ['a','b', 'c', 'd']

all = numbers.concat(letters)
newArray = all.slice(1, 4)


console.log(all)
console.log(newArray)
*/

// Join e metodo sort ()
/*
let listaNomes = ['alex', 'samuel', 'bruno', 'gabriel']

// let addItens = listaNomes.join(', ')

listaNomes.sort()
console.log(listaNomes)
*/

// verificando elementos com o every

/*
let temperaturaBrasil = [-13, -34, -23, -19]

let temperaturaPositiva = temperaturaBrasil.every(function(valor) {
    return valor < 0
}) // metodo que verifica todos os elementos da array

console.log(temperaturaPositiva)
*/

// filtrando elementos com o filter e usando arrow function
/*
let tempBrasil = [-13, -34, -23, -19, 20, 10, 3, 0, 7]

let tempPositiva = tempBrasil.filter(valor =>  valor < 0) 

console.log(tempPositiva)
*/