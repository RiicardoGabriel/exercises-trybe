// 2- Agora, desenvolva um algoritmo que é capaz de inverter uma palavra. Por exemplo, a palavra "banana" seria invertida para "ananab". Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.

let word = "Gabriel";

let invertedWord = word.split("").reverse().join("")

console.log (invertedWord)

// A ideia é utiliza o método split, para separar todos os caracteres, seguido do método reverse que fará a inversão do array criado pelo split
// Por fim utilizaremos join, para juntar novamente o array em uma string e entregar ela para nós de forma inversa