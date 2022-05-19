// Crie uma função que receba um número e retorne seu fatorial.

const fatorial = n => {
    if (n > 1) {
        return n * fatorial(n - 1)
    }
    return n
}

console.log(fatorial(5))

// Crie uma função que receba uma frase e retorne qual a maior palavra.

const longestWord = (frase) => {
    var palavras = frase.split(' ');
    let maior = palavras [0];
    for (let i = 0; i < palavras.length; i += 1){
        maior = palavras[i].length > maior.length ? palavras[i] : maior;
    }
    return maior
}


console.log(longestWord('Antônio foi no banheiro e não sabemos o que aconteceu.'));