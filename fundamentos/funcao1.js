//Funcao sem retorno 

function imprimirSoma(a, b){
    console.log(a + b)
}
imprimirSoma(2,3)
imprimirSoma(2)
imprimirSoma(2,3,4) // Pega os dois primeiros e ignora o resto


function soma(a, b = 0){
        return a+b;
}

console.log(soma(2,3))
console.log(soma(2))// Aqui ele pega a como 2 e o b é 0 como foi definido


