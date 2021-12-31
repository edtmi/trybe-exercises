/* 7 - Crie uma função que receba uma string word e outra string ending. Verifique se a string ending é o final da string word . Considere que a string ending sempre será menor que a string word.
  Valor de teste: 'trybe' e 'be'
  Valor esperado no retorno da função: true
  verificaFimPalavra('trybe', 'be') ;
  Retorno esperado: true
  verificaFimPalavra('joaofernando', 'fernan') ;
  Retorno esperado: false */

function verificaFimPalavra(stringWord, stringEnd) {
  let stringtWordReverse = stringWord.split('').reverse().join('');
  let stringtEndReverse = stringEnd.split('').reverse().join('');
  let result;
  for (let index = 0; index < stringtEndReverse.length; index += 1) {
    if (stringtWordReverse[index] !== stringtEndReverse[index]) {
      result = false;
      break;
    } else {
      result = true;
    }
  }  
  return result;
}

console.log(verificaFimPalavra('trybe', 'be'));
console.log(verificaFimPalavra('joaofernando', 'fernan'));
