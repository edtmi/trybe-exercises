/* 1. Crie uma variável para armazenar o estado da pessoa candidata no 
processo seletivo, que pode ser: 'aprovada' , 'lista' ou 'reprovada' ; */
let status = 'approved'

/* 2. Crie uma estrutura condicional com o switch/case que irá imprimir 
as mensagens do exercício anterior se o estado da pessoa candidata 
for 'aprovada' , 'lista' ou 'reprovada' . Como default , imprima a 
mensagem de 'não se aplica' .*/
switch (status) {
  case 'approved':
    console.log('approved');
    break;

  case 'list':
    console.log('list');
    break;
  
  case 'failed':
    console.log('failed');
    break;

  default:
    console.log('not applicable');
}
