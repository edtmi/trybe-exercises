/* 5. Faça um programa que defina três constantes com os valores dos três 
ângulos internos de um triângulo. Retorne true se os ângulos representarem 
os ângulos de um triângulo e false , caso contrário. Se algum ângulo for 
inválido o programa deve retornar uma mensagem de erro.
- Para os ângulos serem de um triângulo válido, a soma dos três devem ser 
180 graus.
- Um ângulo será considerado inválido se não tiver um valor positivo. */
const angle1 = 50;
const angle2 = 100;
const angle3 = 30;
let message;

let sum = angle1 + angle2 + angle3;

if (sum === 180 ) {
  message = 'true';
}
else if (sum > 180 && sum < 180 || sum > 0) {
  message = 'false';
}
else {
  message = 'Angle do not exist!';
}

console.log(message);
