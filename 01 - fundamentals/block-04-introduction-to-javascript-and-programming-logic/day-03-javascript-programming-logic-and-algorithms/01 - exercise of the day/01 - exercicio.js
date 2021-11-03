// 1- Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , 
// imprima na tela um quadrado feito de asteriscos de lado de tamanho n . Por exemplo:

let number = 5;
let astherisc = '*';
let line = '';

for (let index = 1 ; index <= number; index += 1 ){
  line += astherisc;  
} 

for (let secondIndex = 1; secondIndex <= number; secondIndex += 1) {
  console.log(line);
} 
