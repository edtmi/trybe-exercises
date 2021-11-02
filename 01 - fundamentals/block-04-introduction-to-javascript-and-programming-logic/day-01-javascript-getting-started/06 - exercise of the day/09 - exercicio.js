/* 9. Escreva um programa que defina três números em constantes e retorne 
true se pelo menos uma das três for ímpar. Caso contrário, ele retorna 
false .
- Bonus: use somente um if .*/

const num1 = 10;
const num2 = 30;
const num3 = 13;

let odd = false

if (num1 % 2 === 1 || num2 % 2 === 1 || num3 % 2 === 1) { 
  odd = 'true';
} 

console.log(odd);
