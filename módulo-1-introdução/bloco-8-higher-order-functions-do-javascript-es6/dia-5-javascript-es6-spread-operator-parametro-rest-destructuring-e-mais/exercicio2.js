// 2 - Crie uma função sum que dado um número variável de elementos retorna a soma desses elementos.
// Dica: use parâmetro rest.

const sum = (...numbers) => numbers.reduce((acc, cur)=> acc + cur, 0)

console.log(sum(10,21))