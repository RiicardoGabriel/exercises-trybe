const {sum, myRemove, myFizzBuzz} = require ('./sum.js');

describe('Testes função de soma', () => {

test('Soma de 4 e 5 deve ser 9', () => {
    expect(sum(4,5)).toEqual(9);
})

test('Soma de 0 e 0 deve ser 0', () => {
    expect(sum(0,0)).toEqual(0);
})

// test('Teste se sum lança um erro quando os parâmetros são 4 e "5"(string 5)', () => {
//     expect(() => sum(4, '5')).toThrowError('parameters must be numbers');
// })
})
describe('Testes função remover item do array', () => {

test('A chamada myRemove([1, 2, 3, 4], 3) deve retornar o array [1, 2, 4]', () => {
      expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
})

test('A chamada myRemove([1, 2, 3, 4], 3) não deve retornar o array [1, 2, 3, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
})

test('A chamada myRemove([1, 2, 3, 4], 5) retorna o array [1, 2, 3, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
})
})

describe('Testes função números divisíveis por 3 e 5', () => {
    test('Teste com um número divisivel por 3 e 5 ao mesmo tempo', () => {
        expect(myFizzBuzz(15)).toEqual('fizzbuzz');
    })

    test('Teste com um número divisivel por 3', () => {
        expect(myFizzBuzz(9)).toEqual('fizz');
    })

    test('Teste com um número divisivel por 5', () => {
        expect(myFizzBuzz(20)).toEqual('buzz');
    })

    test('Teste com um número divisivel que não é divísivel por 3 ou 5', () => {
        expect(myFizzBuzz(7)).not.toEqual('false');
    })

    test('Teste com um parâmetro que não seja um número', () => {
        expect(myFizzBuzz('Olá')).not.toEqual('false');
    })
})