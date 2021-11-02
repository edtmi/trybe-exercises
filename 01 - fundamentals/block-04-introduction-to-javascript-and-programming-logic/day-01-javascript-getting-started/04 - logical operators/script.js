//OPERADOR AND

/* 1.Crie uma constante chamada "currentHour" que recebe um número 
entre 4 e 24 de sua escolha, para representar as horas do dia.*/
const currentHour = 21;

/* 2. Crie uma variável chamada "message" que, inicialmente, é uma 
string vazia.*/
let message = "";

/* 3. Implemente condicionais para que: 
    Se o horário for maior ou igual a 22, insira 
"Não deveríamos comer nada, é hora de dormir" na variável "message".
    Se o horário for maior ou igual a 18 e menor que 22, insira 
"Rango da noite, vamos jantar :D" na variável "message".
    Se o horário for maior ou igual a 14 e menor que 18, insira 
"Vamos fazer um bolo pro café da tarde?" na variável "message".
    Se o horário estiver entre 11 e 14, insira 
"Hora do almoço!!!" na variável "message".
    Se o horário estiver entre 4 e 11, insira 
"Hmmm, cheiro de café recém passado" na variável "message". */
if (currentHour >= 22) {
  message = 'Não deveríamos comer nada, é hora de dormir';
}
else if (currentHour >= 18 && currentHour < 22) {
  message = 'Rango da noite, vamos jantar :D';
}
else if (currentHour >= 14 && currentHour < 18) {
  message = 'Vamos fazer um bolo pro café da tarde?';
}
else if (currentHour >= 11 && currentHour < 14) {
  message = 'Hora do almoço!!!';
}
else {
  message = 'Hmmm, cheiro de café recém passado';
}

/* 4. Agora imprima a variável message fora das suas condições.*/
console.log(message);

//OPERADOR OR

/* 1. Crie uma variável chamada "weekDay" que recebe a string 
"quarta-feira". */
let weedDay = 'domingo';

/* 2. Implemente condicionais para que:
 - Se nossa variável "weekDay" for "segunda-feira", "terça-feira", 
 "quarta-feira", "quinta-feira" ou "sexta-feira", 
 imprima "Oba, mais um dia de aprendizado na Trybe >:D".
 - Se for algum dia de fim de semana, imprima "FINALMENTE, 
 descanso merecido UwU" */
if (weedDay === 'segunda-feira' || weedDay === 'terça-feira' || weedDay === 'quarta-feira' || weedDay === 'quinta-feira' || weedDay === 'sexta-feira') {
  console.log('Oba, mais um dia de aprendizado na Trybe >:D');
}
else {
  console.log('FINALMENTE, descanso merecido UwU');
}
