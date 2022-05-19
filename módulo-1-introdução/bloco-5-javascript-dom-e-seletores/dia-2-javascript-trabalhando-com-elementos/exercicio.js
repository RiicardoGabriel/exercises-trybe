// Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body ;

var h = document.createElement ('h1');
h.innerText = "Exercício 5.2";
h.className = 'title'
document.getElementById('conteudo').appendChild(h)

// Adicione a tag main com a classe main-content como filho da tag body ;

var main = document.createElement ('main');
main.className = 'main-content';
document.getElementById('conteudo').appendChild(main);

// Adicione a tag section com a classe center-content como filho da tag main criada no passo 2;

var section = document.createElement ('section');
section.className = 'center-content';
document.querySelector('main').appendChild(section)

//Adicione a tag p como filho do section criado no passo 3 e coloque algum texto;

var paragraph = document.createElement ('p');
paragraph.innerText = "Ricardo Gabriel Antônio da Silva"
document.querySelector('section').appendChild(paragraph);

// Adicione a tag section com a classe left-content como filho da tag main criada no passo 2;

var section2 = document.createElement ('section');
section2.className = 'left-content';
document.querySelector('main').appendChild(section2)

// Adicione a tag section com a classe right-content como filho da tag main criada no passo 2;

var section3 = document.createElement ('section');
section3.className = 'right-content';
document.querySelector('main').appendChild(section3)

// Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image . Esse elemento deve ser filho do section criado no passo 5;

var img = document.createElement ('img');
img.src = "https://picsum.photos/200";
img.className = "small-image";
document.querySelector('.left-content').appendChild(img);

// Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um , dois , três , ... como valores da lista. Essa lista deve ser filha do section criado no passo 6;

var lista = document.createElement ('ul');
document.querySelector('.right-content').appendChild(lista);
lista.className = "lista"

for (let i = 1; i <= 8; i += 1) {
    var item = document.createElement ('li');
    document.querySelector('.lista').appendChild(item);
    item.innerHTML = i;
}

// Adicione 3 tags h3 , todas sendo filhas do main criado no passo 2.

function creatTitle (texto) {
    let titulo = document.createElement ('h3')
    titulo.innerText = texto;
    titulo.className = 'description'
    document.querySelector('.main-content').appendChild(titulo)
}
creatTitle ("Ricardo Gabriel");
creatTitle ("Letícia Vitória");
creatTitle ("Vitória");

// Remova a section criado no passo 5 (aquele que possui a classe left-content ). Utilize a função .removeChild() ;

var remover = main.removeChild(section2);

//Centralize a section criado no passo 6 (aquele que possui a classe right-content ). Dica: para centralizar, basta configurar o margin-right: auto da section ;

section3.style.marginRight = 'auto';

// Troque a cor de fundo do elemento pai da section criada no passo 3 (aquela que possui a classe center-content ) para a cor verde;

section.style.backgroundColor = 'gren';