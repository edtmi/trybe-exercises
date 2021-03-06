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

//Exercicio 6
function changeTextSize() {
  const dayList = document.querySelectorAll('#days');

  for (let index = 0; index < dayList.length; index += 1) {
    dayList[index].addEventListener('mouseover', function (event) {
      event.target.style.fontSize = '30px';
    })
    dayList[index].addEventListener('mouseout', function (event) {
      event.target.style.fontSize = '20px'; //unset
    })
  }
}
changeTextSize();

//Exercicio 7
function createAssignment(string) {
  const selectTask = document.querySelector('.my-tasks');
  const createSpan = document.createElement('span');
  createSpan.innerText = string;
  selectTask.appendChild(createSpan);
}
createAssignment('Cozinhar');

//Exercício 8
function createSubtitleByColor(color) {
  const createDiv = document.createElement('div');

  createDiv.className = 'task';
  createDiv.style.backgroundColor = color;
  const selectTask = document.querySelector('.my-tasks');
  selectTask.appendChild(createDiv);
}
createSubtitleByColor('green');

//Exercicio 9
/* Implemente uma função que adiciona um evento que, ao clicar no elemento com a tag <div> referente a cor da sua 
tarefa, atribua a este elemento a classe task selected , ou seja, quando sua tarefa possuir a classe task selected , 
ela estará selecionada.
Ao clicar novamente no elemento, a sua classe deverá voltar a ser somente task , ou seja, esta tarefa está deixando de 
ser uma tarefa selecionada.*/
function changeClass() {
  // recupera a classe task contendo a string task
  //   let selectedTask = document.getElementsByClassName('task selected');
  //   let selectClass = document.querySelector('.task');

  //   selectClass.addEventListener('click', function(event){
  //     if (selectedTask.length === 0) {
  //       event.target.className = 'task selected';
  //     } else {
  //       event.target.className = 'task';
  //     }
  //   })
  // }
  let tasks = document.querySelector('.task');
  tasks.addEventListener('click', function (event) {
    // event.target.classList.toggle('selected');
    if (event.target.classList.length === 1) {
      event.target.classList.add('selected');
    } else {
      event.target.classList.remove('selected');
    }
  })
}
changeClass();

//Exercício 10
function changeColorDay() {
  //   const selectDays = document.querySelectorAll('#days');
  //   let selectTask = document.querySelector('.task');
  //   let getColor = selectTask.style.backgroundColor;
  //   let validate = true;
  //   for (let index = 0; index < selectDays.length; index += 1) {
  //     selectDays[index].addEventListener('click', function(event) {
  //     if (validate === true) {
  //       event.target.style.color = getColor;
  //       validate = false
  //     } else
  //     if (validate === false){  
  //       event.target.style.color = 'rgb(119,119,119)';
  //       validate = true;
  //     }
  //   })
  // }  
  const days = document.querySelectorAll('#days');

  for (let index = 0; index < days.length; index += 1) {
    days[index].addEventListener('click', function (event) {
      const selectedTask = document.querySelector('.selected');
      const color = selectedTask.style.backgroundColor;
      if (event.target.style.color === color) {
        event.target.style.color = 'rgb(119,119,119)';
      } else {
        event.target.style.color = color;
      }
    })
  }
}
changeColorDay();

/*Bônus:
Vamos adicionar compromissos ao seu calendário? Implemente uma função que, ao digitar um compromisso na caixa de texto 
"COMPROMISSOS", adiciona o item à lista "MEUS COMPROMISSOS" ao clicar no botão "ADICIONAR".
Se nenhum caractere for inserido no campo input , a função deve retornar um alert com uma mensagem de erro ao clicar 
em "ADICIONAR".
Ao pressionar a tecla "enter" o evento também deverá ser disparado.
Dica - Propriedade: keyCode . */
function addEventProgram(event) {
  const text = document.querySelector('#task-input');
  if (event.keyCode === 13 || event.type === 'click') {
    if (text.value.length === 0) {
      alert('Erro!');
    } else {
      let getList = document.querySelector('.task-list');
      let listItem = document.createElement('li');
      listItem.innerText = text.value;
      getList.appendChild(listItem);
      text.value = '';
    }
  }
}

function alertButton() {
  const button = document.querySelector('#btn-add');
  button.addEventListener('click', addEventProgram);
  const inputText = document.querySelector('#task-input');
  inputText.addEventListener('keyup', addEventProgram);
}
alertButton();
