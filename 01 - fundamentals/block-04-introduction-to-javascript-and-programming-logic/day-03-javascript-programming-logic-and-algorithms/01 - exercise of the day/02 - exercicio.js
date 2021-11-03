// 2-2- Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos 
// de base. Por exemplo:


let number = 5;
let astherisc = '*';
let line = '';

for (let index = 1; index <= number; index += 1) {
  console.log(line += astherisc);
}