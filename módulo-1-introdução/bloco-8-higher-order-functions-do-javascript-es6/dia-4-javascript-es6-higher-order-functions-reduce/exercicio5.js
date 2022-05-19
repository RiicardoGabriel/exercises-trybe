// 🚀 5- Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.

const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
  ];
  
  function containsA() {
      let palavrasComecamComA = 0;
        names.forEach((item) => {
          if (item.startsWith('A')) {
            palavrasComecamComA += 1;
          }
      })
      return palavrasComecamComA
  }
  
  console.log(containsA());