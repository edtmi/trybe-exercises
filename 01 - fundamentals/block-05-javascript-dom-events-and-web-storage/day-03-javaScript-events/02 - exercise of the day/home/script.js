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

// Escreva seu código abaixo.
//Exercicio 1
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];;

function createDays() {
  const getDays = document.querySelector('#days');
  for (let index = 0; index < dezDaysList.length; index += 1) {
    const days = dezDaysList[index];
    days.id = 'days';
    const listDays = document.createElement('li');
    if (days === 24 || days === 25 || days === 31) {
      listDays.classList.add('day-holiday');
      listDays.innerText = days;
    }
    if (days === 4 || days === 11 || days === 18 || days === 25) {
      listDays.classList.add('day-friday');
      listDays.innerText = days;
    } else {
      listDays.classList.add('day');
      listDays.innerText = days;
    }
    getDays.appendChild(listDays);
  }
}
createDays();

//Exercicio 2
function createHolidayButton(string) {
  const buttonContainer = document.querySelector('.buttons-container');
  const button = document.createElement('button');

  button.id = 'btn-holiday';
  button.innerText = string;
  buttonContainer.appendChild(button);
}
createHolidayButton('Feriados');

//Exercicio 3
function changeHolidayBackground() {
  let getHolidayButton = document.querySelector('#btn-holiday');
  let getHolidays = document.querySelectorAll('.day-holiday');

  getHolidayButton.addEventListener('click', function () {
    for (let index = 0; index < getHolidays.length; index += 1) {
      if (getHolidays[index].style.backgroundColor === 'white') {
        getHolidays[index].style.backgroundColor = 'unset';
      } else {
        getHolidays[index].style.backgroundColor = 'white';
      }
    }
  })
}
changeHolidayBackground();

//Exercicio 4
function createFriday(string) {
  const fridayButton = document.createElement('button');
  const getButtonContainer = document.querySelector('.buttons-container');

  fridayButton.id = 'btn-friday';
  //friday.Button.setAtribute('id', 'brn-friday');
  fridayButton.innerText = string;
  getButtonContainer.appendChild(fridayButton);
}
createFriday('Sexta-feira');

//Exercicio 5
function changeFridayText() {
  const fridayButton = document.querySelector('#btn-friday');
  const fridayDayList = document.querySelectorAll('.day-friday');
  const fridayText = '#Sextouu!';
  const fridaysArray = [];

  for (let index = 0; index < fridayDayList.length; index += 1) {
    fridaysArray.push(fridayDayList[index].innerText);
  }
  fridayButton.addEventListener('click', function () {
    for (let index = 0; index < fridayDayList.length; index += 1) {
      if (fridayDayList[index].innerText === fridayText) {
        fridayDayList[index].innerText = fridaysArray[index];
      } else {
        fridayDayList[index].innerText = fridayText;
      }
    }
  })
}
changeFridayText();
