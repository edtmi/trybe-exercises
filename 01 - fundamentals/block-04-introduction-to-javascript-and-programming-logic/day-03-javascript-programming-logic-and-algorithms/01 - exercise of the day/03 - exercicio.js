// 3- Agora inverta o lado do triângulo. Por exemplo:

let n = 5;
let line = '';

for (let indexLine = 0; indexLine < n; indexLine += 1) {
  for (let indexColumn = 0; indexColumn < n; indexColumn += 1) {
    if (indexColumn < n - (indexLine + 1)) {
      line += ' ';
    } else {
      line += '*';
    }
  }
  console.log(line);
  line = '';
}
