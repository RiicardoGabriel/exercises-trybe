function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();

  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

  for (let index = 0; index < dezDaysList.length; index += 1) {
    let diasContados = document.createElement ('li');
    diasContados.innerHTML = dezDaysList[index];
    diasContados.className = 'day';
    document.getElementById('days').appendChild(diasContados);
  }

  let feriados = document.getElementsByClassName('day');
    feriados[25].classList.add("holiday");
    feriados[26].classList.add("holiday");
    feriados[32].classList.add("holiday");

  let itsFriday = document.getElementsByClassName('day');
  itsFriday[5].classList.add("friday");
  itsFriday[12].classList.add("friday");
  itsFriday[19].classList.add("friday");
  itsFriday[26].classList.add("friday");

function diasFeriados (texto){
    let btnFeriados = document.createElement ('button');
    btnFeriados.innerText = texto;
    btnFeriados.id = 'btn-holiday';
    document.querySelector('.buttons-container').appendChild(btnFeriados);
}
diasFeriados('Feriados')
