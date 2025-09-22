// for in, percorrendo dentro do objeto

const pc = {
    placaVideo: "RTX3060",
    memoriaRam: "16gb",
    ssd: 500 
}

for (let i in pc) 
    console.log(i, pc[i])

// for of, busca diretamente o valor do conteudo

let frequencia = ['samuel', 'martha', 'max']

for (let i of frequencia) {
    console.log(i)
}