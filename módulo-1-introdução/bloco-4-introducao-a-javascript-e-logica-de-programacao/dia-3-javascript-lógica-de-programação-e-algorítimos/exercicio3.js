// 3- Considere o array de strings abaixo: Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra.

let array = ['javascript', 'java', 'python', 'html', 'css'];

let maiorPalavra = array[0];
let menorPalavra = array[0];

for (let index = 0; index < array.length; index += 1) {
    if (array[index].length > maiorPalavra.length) {
        maiorPalavra = array[index]
    }
}

for (let index = 0; index <array.length; index += 1) {
    if (array[index].length < menorPalavra.length) {
        menorPalavra = array[index]
    }
}

console.log ("A menor palavra é: " + maiorPalavra)
console.log ("A maior palavra é: " + menorPalavra)