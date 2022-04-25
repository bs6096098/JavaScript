const pilotos = ['Vettel', 'Alonso',"Senna" , 'Massa']

pilotos.pop() // pop retira o ultimo elemento do array
console.log(pilotos)

pilotos.push('Verstappen') // Add um novo elemento no ultimo id do array
console.log(pilotos)

pilotos.shift() // Remove o primeiro elemento de um array
console.log(pilotos)

pilotos.unshift('Hamilton')
console.log(pilotos)

//Adicionar elementos
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

//remover elementos
pilotos.splice(3,1) //Primeiro elemento é o indice, segundo é a quantidade que vou remover
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) //O slice cria um novo array, nesse exemplo ele esta criando um array a partir do indice 2 do array pilotos
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1,4) //Indice 4 não entra, pega só do elemento 1 ao 3
console.log(algunsPilotos2)