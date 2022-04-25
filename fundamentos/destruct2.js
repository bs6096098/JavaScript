// usando array

const [a] = [10] //No array o operador de desestruturação é representado por colchetes
console.log(a)

const [n1, ,n3, , n5,n6 = 0] = [10, 7, 9, 8] //Se atentar as posições para entender
console.log(n1, n3, n5, n6)

const [, [, nota]] = [[,8,8], [9,6,8]] //nesse exemplo existem 2 arrays declaradoss
console.log(nota)