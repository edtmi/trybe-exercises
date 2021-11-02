// 1- Ordene o array numbers em ordem crescente e imprima seus valores;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 1; index < numbers.length; index += 1) {
  for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
    if (numbers[secondIndex] > numbers[index]) {
      let aux = numbers[index];
      numbers[index] = numbers[secondIndex];
      numbers[secondIndex] = aux;
    }
  }   
}
console.log(numbers);
