let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let cont = 0;

// 6- Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] % 2 === 1 ) {
    cont += 1;
  } else if (cont === 0) {
    console.log('no odd values ​​found');
  }
}
console.log(cont);
