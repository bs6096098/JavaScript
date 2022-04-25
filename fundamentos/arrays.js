const valores = [7.7, 8.9, 6.3, 9.3]

console.log(valores[0], valores[3])
console.log(valores[4]) // Não definido

console.log(valores.length) // Ve quantos elementos contem no array 

valores.push({id:3}, false, null, 'teste') // Não é boa pratica misturar 
console.log(valores)

console.log(valores.pop()) // exclui elemento do array

delete valores[0] // exclui elemento do array
console.log(valores)

console.log(typeof valores)