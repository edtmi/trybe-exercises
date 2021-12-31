/* 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
Array de teste: [2, 3, 6, 7, 10, 1]; .
Valor esperado no retorno da função: 4. */

function higher(higherNumber) {
  let greater = higherNumber[0];
  for (let index in higherNumber) {
    if (greater < higherNumber[index]) {
      greater = index;
    }
  }
  return greater;
}

let higherArray = [2, 3, 6, 7, 10, 1];
console.log(higher(higherArray));
