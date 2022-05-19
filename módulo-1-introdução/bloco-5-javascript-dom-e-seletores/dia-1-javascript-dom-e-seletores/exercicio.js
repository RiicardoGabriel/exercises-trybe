
//         Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
//         - document.getElementById()
//         - document.getElementsByClassName()
//         - document.getElementsByTagName()
//  Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício) ok
//  Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
//  Crie uma função que mude a cor do quadrado vermelho para branco.
//  Crie uma função que corrija o texto da tag <h1>.
//  Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
//  Crie uma função que exiba o conteúdo de todas as tags <p> no console.

function mudarTexto (texto) {
    document.querySelector("p").innerText = texto;
  }
let exercicio1 = mudarTexto ("Trabalhando na área de programação e casado com Letícia");

  function mudarCor (cor){
    document.querySelector(".main-content").style.backgroundColor = cor;
   }
   let exercicio2 = mudarCor ('rgb(76,164,109)');

   function mudarCor2 (cor){
    document.querySelector(".main-content .center-content").style.backgroundColor = cor;
   }
   let exercicio3 = mudarCor2 ('white');

   function corrigeTexto (texto) {
    document.querySelector("h1").innerText = texto;
  }
  let exercicio4 = corrigeTexto ("Exercício 5.1 - JavaScript");

  function maiusculoTexto () {
    let allUpper = document.getElementsByTagName("p")[0];
    allUpper.innerHTML = allUpper.innerHTML.toUpperCase()

}
maiusculoTexto()

function exibirTagP () {
    let exibir = document.getElementsByTagName("p");
    console.log (exibir)
    }

    exibirTagP()