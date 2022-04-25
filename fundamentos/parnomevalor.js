//par nome/valor 

const saudacao = 'Opa' // contexto léxico

function exec(){
    const saudacao = 'Falaa' //Contexto léxico 2
    return saudacao 
}


//Objetos sao grupos alinhados de pares nome/valor
const cliente = {
    nome:'Pedro',
    idade: 32,
    peso: 90,
    endereco:{
        logradouro:'Rua muito legal',
        numero:123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)
