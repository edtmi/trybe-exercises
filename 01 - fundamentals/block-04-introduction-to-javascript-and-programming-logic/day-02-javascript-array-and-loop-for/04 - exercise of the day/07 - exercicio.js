let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let lower;

// 7- Utilizando for , descubra qual o menor valor contido no array e imprima-o;

for (let index = 0; index < numbers.length; index += 1) {
  if (index === 0) {
    lower = numbers[index];
  }
  if (lower > numbers[index]) {
    lower = numbers[index];
  }
}
console.log(lower);
