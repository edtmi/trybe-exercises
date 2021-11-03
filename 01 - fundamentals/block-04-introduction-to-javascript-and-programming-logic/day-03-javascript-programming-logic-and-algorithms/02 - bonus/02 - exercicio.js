// 6- Faça um programa que diz se um número definido numa variável é primo ou não.
// Um número primo é um número que só é divisível por 1 e por ele mesmo, ou seja, a divisão dele com quaisquer outros números dá resto diferente de zero.
// Dica: você vai precisar de fazer um loop que vá de 0 ao número definido; Além disso, vai precisar de fazer uma checagem a cada iteração e armazenar os resultados em algum lugar.

let numberCheck = 13;
let cont = 0;

for (let index = 0; index <= numberCheck; index += 1) {
  if (numberCheck % index === 0) {
    cont += 1;
  }
}

if (cont === 2 ) {
  console.log('é primo');
} else {
  console.log('não é primo!');
}
