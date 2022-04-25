function Pessoa (){
    this.idade = 0

    const self = this //Criando a constante consigo acessar o atributo

    setInterval(function(){ //Cpm bind eu consigo pegar o valor do this
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/, 1000) 
}

new Pessoa