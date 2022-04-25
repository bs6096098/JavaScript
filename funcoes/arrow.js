let dobro = function (a){
    return 2 * a
}

dobro = (a) => { //Arrow
    return 2 * a
}

dobro = a => 2 * a //Posso tirar os parenteses quando tiver só uma variavel

console.log(dobro(Math.PI))

let ola = function (){
    return 'Ola'
}

ola = () => 'ola' //Arrow - forma padrao melhor de se usar
ola = _ => 'ola' //Arrow tmb

console.log(ola())
