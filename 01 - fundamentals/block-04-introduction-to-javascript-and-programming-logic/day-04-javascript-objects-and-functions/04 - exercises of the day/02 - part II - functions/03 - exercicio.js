/* 3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
Array de teste: [2, 4, 6, 7, 10, 0, -3]; .
Valor esperado no retorno da função: 6. */

function gressArray(gressNumber) {
  let gressPosition = gressNumber[0];
  for (let index in gressNumber) {
    if (gressPosition > gressNumber[index]) {
      gressPosition = index;
    }
  }
  return gressPosition;
}

let array = [2, 4, 6, 7, 10, 0, -3];
console.log(gressArray(array));
