const pessoa = {
    saudacao: "Bom dia",
    falar(){
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() //Conflito entre paradgimas

const falarDePessoa = pessoa.falar.bind(pessoa)//Amarra um determinado objeto
falarDePessoa();

const falar2 = pessoa.falar
falar2() //Assim tambem nao pega o valor de saudacao