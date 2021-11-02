let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
let media;
// Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
// A média aritmética é o resultado da soma de todos os elementos divido pelo número total de elementos.

for (let index = 0; index < numbers.length; index += 1) {
  soma += numbers[index];
  media = soma / (index + 1);
}
console.log(media);
