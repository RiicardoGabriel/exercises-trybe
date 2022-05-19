// 1 - Dada uma matriz, transforme em um array.

const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
  ];
  
  function flatten(accumulator, number) {
    return accumulator + number;
  }

const arraysMatriz = arrays.reduce(flatten, []);
console.log(arraysMatriz);