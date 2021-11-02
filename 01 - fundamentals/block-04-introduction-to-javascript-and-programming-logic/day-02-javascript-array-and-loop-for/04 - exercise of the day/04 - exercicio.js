let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
let media;
let msg;

// 4 - Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: 
// "valor menor ou igual a 20";

for (let index = 0; index < numbers.length; index += 1) {
  soma += numbers[index];
  media = soma / (index + 1);
}
if (media > 20) {
  msg = 'valor maior que 20';
} else {
  msg = 'valor menor ou igual a 20';
}
console.log(msg);
