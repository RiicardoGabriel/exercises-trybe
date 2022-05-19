const string1 = 'Tryber x aqui!'

const initial = (string) => {
    return string.indexOf("x") >= 0 ?
    string.replace('x', 'Marivaldo'):
    'não tem palavra x'
}

const stringRetornada = (initial(string1));

const habs = ['Javascript', 'HTML', 'CSS', 'React', 'SQL'];

const func2 = () => `${stringRetornada}
Minhas cinco principais habilitades são:
${habs[0]}
${habs[1]}
${habs[2]}
${habs[3]}
${habs[4]}
#goTrybe"`;


console.log(func2())