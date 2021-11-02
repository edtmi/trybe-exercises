/* 6. Escreva um programa que receba o nome de uma peça de xadrez e retorne 
os movimentos que ela faz.
- Como desafio, faça o programa funcionar tanto se receber o nome de uma 
peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a 
quantidade de condicionais.
- Como dica, você pode pesquisar uma função que faz uma string ficar com 
todas as letras minúsculas (lower case) .
- Se a peça passada for inválida, o programa deve retornar uma mensagem 
de erro.
- Exemplo: bishop (bispo) -> diagonals (diagonais) */

const chessPiece = 'knight';

switch (chessPiece.toLowerCase()) {
  case 'king':
    console.log('King -> Move em todas posições sendo uma casa para cada vez.');
    break;
  case 'queen':
    console.log('Queen -> Horizontal, vertical e diagonais.');
    break;
  case 'bishop':
    console.log('Bishop -> Só em diagonal.');
    break;  
  case 'knight':
    console.log('Knight -> Pode pular outras peças, sendo movimento em L.');
    break;
  case 'rook':
    console.log('Rock -> Vertical ou horizontal.');
    break;
  case 'pawn':
    console.log("Pawn -> Uma casa para frente, estando no primerio movimento pode pular 2 casa.");
    break;
  default:
    console.log('Error! Piece do not exist!');
    break;
};
