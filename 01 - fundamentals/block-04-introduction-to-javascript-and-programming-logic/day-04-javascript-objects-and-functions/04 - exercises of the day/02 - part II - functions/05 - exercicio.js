/* 5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
Array de teste: [2, 3, 2, 5, 8, 2, 3]; .
Valor esperado no retorno da função: 2. */

function repeatNumber(numbers) {
  let countRepeat = 0;
  let numberRepeat = 0;

  for (let index in numbers) {
    let count = 0;
    for (let secondIndex in numbers) {
      if (numbers[index] === numbers[secondIndex]) {
        count += 1;
      }
    }
    if (count > countRepeat) {
      countRepeat = count;
      numberRepeat = index;
    }
  }
  return numbers[numberRepeat];
}

let teste = [2, 3, 2, 5, 8, 2, 3];
console.log(repeatNumber(teste));
