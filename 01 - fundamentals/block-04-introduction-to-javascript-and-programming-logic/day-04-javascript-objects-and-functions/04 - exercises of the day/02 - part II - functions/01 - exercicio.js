/* 1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.
Exemplo de palíndromo: arara .
verificaPalindrome('arara') ;
Retorno esperado: true
verificaPalindrome('desenvolvimento') ;
Retorno esperado: false */

function palindrome(name) {
  let reverseWord = name.split("").reverse().join("");
  if (name === reverseWord) {
    return true;
  } else {
    return false;
  }
}

let word = "desenvolvimento";
console.log(palindrome(word));
