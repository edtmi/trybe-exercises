/* 1 - Crie um arquivo *JavaScript* com o nome de "script.js" na pasta e coloque seus conhecimentos de `getElementBy` e `querySelector` em prática.*/

const getBody = document.body;
getBody.style.backgroundColor = 'rgb(74, 130, 109)';

const getH1 = document.getElementsByTagName('h1')[0];
getH1.style.color = 'blue';

const getFirstAndSecondH3 = document.getElementsByClassName('messageSerious');
  for (let index = 0; index < getFirstAndSecondH3.length; index += 1) {
    getFirstAndSecondH3[index].style.backgroundColor = 'red';  
  }

const getThirdH3 = document.querySelector('.messageLittleSerious');
getThirdH3.style.backgroundColor = 'yellow';

const getFourthH3 = document.querySelector('.messageNotDangerous');
getFourthH3.style.backgroundColor = 'green';

const getFooter = document.getElementById('footer-container');
getFooter.style.backgroundColor = 'green';

const getH3Text = document.querySelectorAll('h3');
  for (let index = 0; index < getH3Text.length; index += 1) {
    getH3Text[index].style.color = 'black';  
  }
