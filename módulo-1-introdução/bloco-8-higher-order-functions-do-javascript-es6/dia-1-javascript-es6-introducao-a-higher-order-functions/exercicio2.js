// 2 - Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").

const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

const checkSort = (numberSort) => {
    const numeroSorteado = getRandomIntInclusive(1,5);
    if (numeroSorteado === numberSort) {
        console.log(`O número sorteado foi: ${numeroSorteado}. Parabéns você ganhou!`);
    } else {
        console.log(`O número sorteado foi: ${numeroSorteado}. Você apostou no número ${numberSort}. Tente novamente, quem sabe na próxima!`);
    }
  }

checkSort(4);