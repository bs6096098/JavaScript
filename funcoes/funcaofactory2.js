function criarProduto(nome, preco){
    return{
        nome,
        preco,
        desconto: 0.01
    }

}
console.log(criarProduto('notebook',2199))
console.log(criarProduto('ipad',1899))
