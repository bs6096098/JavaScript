// recurso introduzido em 2015

const pessoa = {
    nome:'ana',
    idade: 5,
    endereco:{
        logradouro: 'Rua AB',
        numero: 1000
    }
}

const { nome, idade } = pessoa
console.log('pegando uma variavel separada do objeto',nome, idade)

//Maneira pra renomear a variavel
const { nome: n, idade: i } = pessoa
console.log('pegando uma variavel separada do objeto mudando o nome da variavel',n, i)


const{sobrenome, bemHumorado = true} = pessoa
console.log(sobrenome, bemHumorado)

//Aqui eu acesso as variaveis dentro de endereco 
const { endereco: { logradouro, numero, cep} } = pessoa
console.log(logradouro, numero, cep)

