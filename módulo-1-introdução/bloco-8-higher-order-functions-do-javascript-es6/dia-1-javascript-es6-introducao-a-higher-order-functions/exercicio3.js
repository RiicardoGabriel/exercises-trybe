// 3 - Crie uma HOF que receberá três parâmetros. O primeiro será um array de respostas corretas (Gabarito), o segundo será um array de respostas a serem verificadas (respostas da pessoa estudante) e o terceiro é uma função que checa se as respostas estão corretas e faz a contagem da pontuação final recebida pela pessoa estudante. Ao final a HOF deve retornar o total da contagem de respostas certas.
// Quando a resposta for correta a contagem sobe 1 ponto, quando for incorreta desce 0.5 pontos, e quando não houver resposta ("N.A") não altera-se a contagem.

const correctCount = (answersCorect, studentResposts) => {
    let totalCorretas = 0;
    for (let i = 0; i < 10; i += 1) {
        const rightAnswers = answersCorect[i];
        const studentAnswers = studentResposts[i]
        if (rightAnswers === studentAnswers) {
            totalCorretas += 1;
        }
        else if (studentAnswers === 'N.A') {
            totalCorretas += 0;
        }
        else if (rightAnswers !== studentAnswers) {
            totalCorretas -= 0.5;
        }
        
    }
    return totalCorretas;
}
console.log(correctCount(['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'], ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B']));
