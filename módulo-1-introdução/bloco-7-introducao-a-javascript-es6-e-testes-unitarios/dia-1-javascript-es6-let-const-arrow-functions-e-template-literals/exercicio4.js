let counter = document.querySelector('#contador')
let btn = document.querySelector('#btn')

var clickCount = 0;

btn.addEventListener('click', () => {
    clickCount++;
    counter.innerHTML = `${clickCount} cliques`;
})