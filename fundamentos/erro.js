

function tratarErroLancar(erro){
    // throw new Error ('...')
    // throw 10

    throw{
        nome:erro.name,
        msg: erro.message,
        date: new Date
    }
}

function Imprimirnomegritado(obj){
    try{
        console.log(obj.name.toUpperCase() + '!!!')
    } catch(e){
        tratarErroLancar(e)
    } finally {
        console.log('final')
    }

}

const obj = { name: 'Roberto'}
Imprimirnomegritado(obj)