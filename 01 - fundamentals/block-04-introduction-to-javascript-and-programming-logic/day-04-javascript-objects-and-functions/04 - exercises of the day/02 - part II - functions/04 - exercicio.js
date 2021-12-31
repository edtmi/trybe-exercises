/* 4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']; .
Valor esperado no retorno da função: Fernanda. */

function names(greaterName) {
  let greater = greaterName[0];
  for (let index in greaterName) {
    if (greaterName.length < greaterName[index].length) {
      greater = greaterName[index];
    }
  }
  return greater;
}

let array = ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"];
console.log(names(array));
