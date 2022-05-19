// Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let counter = 0;

for (let index = 0; index < numbers.length; index += 1) {
    counter += numbers[index] % 2
}

if (counter > 1) {
    console.log ("Foram achados " + counter + " resultados ímpares.")
}

else {
    console.log ("Nenhum valor ímpar encontrado")
}