/* 1 - Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b , definidas no começo com os valores que serão operados. Faça programas para:
    Adição (a + b)
    Subtração (a - b)
    Multiplicação (a * b)
    Divisão (a / b)
    Módulo (a % b)
*/
function sum (a,b) {
  return a + b;
}
console.log(sum(5,6));

function sub (a,b) {
  return a - b;
}
console.log(sub(6,3));

function mult (a,b) {
  return a * b;
}
console.log(mult(5,2));

function div (a,b) {
  return a / b;
}
console.log(div(7,2));

function mod (a,b) {
  return a % b;  
}
console.log(mod(6,5));

/* 2 - Faça um programa que retorne o maior de dois números. Defina, no começo do programa, duas constantes com os valores que serão comparados.
*/
function higher (firstNumber, secondNumber){
  if (firstNumber > secondNumber) {
    return firstNumber;
  } else {
    return secondNumber; 
  }
}
console.log(higher(7,6));  

/* 3 - Faça um programa que retorne o maior de três números. Defina, no começo do programa, três constantes com os valores que serão comparados.
 */
function higher (firstNumber, secondNumber, thirdNumber) {
  if (firstNumber > secondNumber && firstNumber > thirdNumber) {
    return firstNumber;
  }
  else if (secondNumber > firstNumber && secondNumber > thirdNumber) {
    return secondNumber;
  }
  else {
    return thirdNumber;
  }
}
console.log(higher(10,9,8));

/* 4 - Faça um programa que, dado um valor recebido como parâmetro, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero", caso contrário.
*/
function caseNumber(number) {
  if (number > 0) {
    return ('postive');
  }
  else if (number < 0) {
    return ('negative');
  }
  else
    return ('zero');
}

console.log(caseNumber(1));


/* 5. */
function angles(angle1,angle2,angle3) {
let status;

let sum = angle1 + angle2 + angle3;

if (sum === 180 ) {
  status = 'true';
}
else if (sum > 180 && sum < 180 || sum > 0) {
  status = 'false';
}
else {
  status = 'Angle do not exist!';
}
return status;
}

console.log(angles(50,100,30));

