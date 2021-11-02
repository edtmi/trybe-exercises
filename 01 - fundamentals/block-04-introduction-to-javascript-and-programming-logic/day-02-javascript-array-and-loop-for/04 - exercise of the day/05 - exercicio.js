let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let greater = 0;
// 5-Utilizando for , descubra qual o maior valor contido no array e imprima-o;

for (let index = 0; index < numbers.length; index += 1) {
  if (greater < numbers[index]) {
    greater = numbers[index];
  }
}
console.log(greater);
