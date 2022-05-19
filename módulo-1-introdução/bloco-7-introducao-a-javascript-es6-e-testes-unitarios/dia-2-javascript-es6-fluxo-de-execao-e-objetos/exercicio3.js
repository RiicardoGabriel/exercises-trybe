const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

//   Crie uma função para adicionar o turno da noite na lesson2. Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.

function addTurn (lesson2, turno, noite) {
    turno = 'turno';
    noite = 'noite';
    lesson2.turno = noite;
    console.log(lesson2);
  }

addTurn(lesson2);

// Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.

function keysObj (lesson1) {
    console.log(Object.keys(lesson1))
}

keysObj(lesson1);

// Crie uma função para mostrar o tamanho de um objeto.

function lengthObj (lesson3) {
    const tamObj = Object.keys(lesson3).length;
    console.log(tamObj)
}

lengthObj(lesson3);

// Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.

function valuesObj (lesson1) {
    console.log(Object.values(lesson1))
}

valuesObj(lesson1)

// Crie um objeto de nome allLessons, que deve agrupar todas as aulas através do Object.assign. Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1, lesson2 e lesson3. Ao executar o comando console.log(allLessons), a saída deverá ser a seguinte: