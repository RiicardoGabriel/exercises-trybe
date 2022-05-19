// 5 - Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: 'Tio Patinhas', 'Christmas on Bear Mountain, Dell's Four Color Comics #178', 'O último MacPatinhas', 'Sim'. Então, imprima os valores de cada objeto juntos de acordo com cada uma das chaves. Valor esperado no console:
// Margarida e Tio Patinhas
// Pato Donald e Christmas on Bear Mountain, Dell's Four Color Comics #178
// Namorada do personagem principal nos quadrinhos do Pato Donald e O último MacPatinhas
// Ambos recorrentes // Atenção para essa última linha!

let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim'
};

let info2 = {
    personagem: 'Tio Patinhas',
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: 'O último MacPatinhas',
    recorrente: 'Sim'
}

function person (pers1, pers2) {
    return pers1 + " e " + pers2
}

function orig (or1, or2) {
    return or1 + " e " + or2
}

function not (no1, no2) {
    return no1 + " e " + no2
}

function recorr (recor1, recor2) {
    return recor1 + " e " + recor2
}

console.log(person(info['personagem'],info2['personagem']))
console.log(orig(info['origem'],info2['origem']))
console.log(not(info['nota'],info2['nota']))
console.log(recorr(info['recorrente'],info2['recorrente']))