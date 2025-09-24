// criando um objeto e chamando uma funcao dentro dele
/*const livro = {
    autor: 'samuel', 
    ano: 1998,
    capitulos: {
        cap1: 'introducao',
        cap2: 'ferramentas'
    },
    imprimirLivro() {
        console.log('imprimindo...')
    }
}
livro.imprimirLivro()*/

// criando uma factory
/*function criarLivros (autor,ano) {
    const livro = {
    autor: autor, 
    ano: ano,
    imprimirLivro() {
        console.log('imprimindo...')
    }
}
    return livro
}

const livro1 = criarLivros('king', 1996)
livro1.cor = 'dourado'
const livro2 = criarLivros('rico', 2014)
console.log(livro1)*/

// constructor 

function CriarLivros (autor,ano,cor) {
    this.autor = autor; 
    this.ano = ano;
    this.cor = cor
}

const livro1 = new CriarLivros('king', 1996, 'amarela')
console.log(livro1)

