console.log(typeof console)

console.log(Math.ceil(6.1))

const obj1 = {}
obj1.nome = 'Bola' //Interessante usar essa forma 
//obj1['nome'] = 'Bola' //Existem duas formas
console.log(obj1.nome)

function Obj (nome){
    this.nome = nome
    this.exec = function (){
        console.log('Exec...')
    }
}

const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Martelo')
console.log(obj2.nome)
console.log(obj3.nome)

obj3.exec()