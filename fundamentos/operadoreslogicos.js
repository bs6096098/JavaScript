function Compras(trabalho1, trabalho2){
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTV = trabalho1 && trabalho2
    const comprarVideo = trabalho1 != trabalho2
    const mantersaudavel = !comprarSorvete

    return { comprarSorvete, comprarTV, comprarVideo, mantersaudavel}
    // const comprarVideo = !!(trabalho1 ^ trabalho2)
}

console.log(Compras(true,true))