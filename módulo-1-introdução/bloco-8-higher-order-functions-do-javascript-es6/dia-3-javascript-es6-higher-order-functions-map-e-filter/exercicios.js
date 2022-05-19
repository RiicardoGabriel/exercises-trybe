const books = [
    {
      id: 1,
      name: 'As Crônicas de Gelo e Fogo',
      genre: 'Fantasia',
      author: {
        name: 'George R. R. Martin',
        birthYear: 1948,
      },
      releaseYear: 1991,
    },
    {
      id: 2,
      name: 'O Senhor dos Anéis',
      genre: 'Fantasia',
      author: {
        name: 'J. R. R. Tolkien',
        birthYear: 1892,
      },
      releaseYear: 1954,
    },
    {
      id: 3,
      name: 'Fundação',
      genre: 'Ficção Científica',
      author: {
        name: 'Isaac Asimov',
        birthYear: 1920,
      },
      releaseYear: 1951,
    },
    {
      id: 4,
      name: 'Duna',
      genre: 'Ficção Científica',
      author: {
        name: 'Frank Herbert',
        birthYear: 1920,
      },
      releaseYear: 1965,
    },
    {
      id: 5,
      name: 'A Coisa',
      genre: 'Terror',
      author: {
        name: 'Stephen King',
        birthYear: 1947,
      },
      releaseYear: 1986,
    },
    {
      id: 6,
      name: 'O Chamado de Cthulhu',
      genre: 'Terror',
      author: {
        name: 'H. P. Lovecraft',
        birthYear: 1890,
      },
      releaseYear: 1928,
    },
  ];
  
//   🚀 1 - Crie um array com strings no formato NOME_DO_LIVRO - GÊNERO_DO_LIVRO - NOME_DA_PESSOA_AUTORA
//   Dica: Use a função map

  const stringsLivros = () => {
      return books.map((item) => {
          return `${item.name} - ${item.genre} - ${item.author.name}`;
      })
  }

//   🚀 2 - Construa um array de objetos a partir do array de livros. Cada objeto deve conter uma propriedade author, com o nome da pessoa autora do livro, e uma propriedade age com a idade dessa pessoa quando o livro foi lançado. O array deve ser ordenado por idade, ou seja, da pessoa mais jovem para a mais velha considerando suas idades quando o livro foi lançado.
//   Dica: use as funções map, sort

const stringsAuthors = (array) => {
    const arr = array.map( (item) => {
        return newObj = {
            age: item.releaseYear - item.author.birthYear,
            author: item.author.name,
        }
})
    return arr.sort(function (a,b) {
            if (a.age > b.age) {
                return 1;
              }
              if (a.age < b.age) {
                return -1;
              }
              return 0;
            })
}

// 🚀 3 - Crie um array com todos os objetos que possuem gênero ficção científica ou fantasia.
// Dica: use a função filter;

const stringsGenere = () => {
    return books.filter((item) => {
        if (item.genre === 'Fantasia' || item.genre === 'Ficção Científica') {
            return item;
        };
    })
}

// 🚀 4 - Crie um array ordenado pelos livros com mais de 60 anos de publicação e ordene-o pelo livro mais velho.
// Dica: use as funções filter e sort

const stringsYear = (array) => {
    const arr = array.filter((item) => {
        return item.releaseYear < 1962;
    })
    return arr.sort(function (a,b) {
            if (a.releaseYear > b.releaseYear) {
                return 1;
              }
              if (a.releaseYear < b.releaseYear) {
                return -1;
              }
              return 0;
            })
}

// 🚀 5 - Crie um array em ordem alfabética apenas com os nomes de todas as pessoas autoras de ficção científica ou fantasia.

const names = (array) => {
    const arr = array.filter((item) => {
        if (item.genre === 'Fantasia' || item.genre === 'Ficção Científica') {
            return item;}
        });
        const names = arr.map((item2) => {
            return item2.author.name;
    })
    return names.sort()
}

// 🚀 6 - Crie um array com o nome de todos os livros com mais de 60 anos de publicação.

const livros = (array) => {
    const arr = array.filter((item) => {
        return item.releaseYear < 1962;
    })
        return arr.map((item2) => {
            return item2.name;
    })
}

// 🚀 7 - Encontre o nome do livro escrito pela pessoa cujo nome registrado começa com três iniciais.
// Dica: cada inicial termina com um ponto.

function authorWith3DotsOnName() {
    return books.filter((book) => (
      book.author.name[1] === '.'
      && book.author.name[4] === '.'
      && book.author.name[7] === '.'
    ))[0].name;
  }