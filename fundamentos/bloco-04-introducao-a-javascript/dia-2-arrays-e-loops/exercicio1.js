/* QUESTAO1 */

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 0; index < numbers.length; index += 1) {
    console.log(numbers[index]);
}
console.log("------------");
/* QUESTAO2 */

let sum = 0;

for (let index = 0; index < numbers.length; index += 1) {
    sum += numbers[index]    
}
console.log(sum);
console.log("------------");
/* QUESTAO3 */

let media;
for (let index = 0; index < numbers.length; index += 1) {
    media = sum / numbers.length    
}
console.log(media);
console.log("------------");
/* QUESTAO4 */

    if (media > 20) {
        console.log("valor maior que 20");
    } else {
        console.log("valor menor ou igual a 20");
    }
    console.log("------------");
/* QUESTA05 */

let numeroMaior = numbers[0];

for (let index = 1; index < numbers.length; index += 1) {
  if (numbers[index] > numeroMaior) {
    numeroMaior = numbers[index];
  }
}

console.log(numeroMaior);
console.log("------------");

/* QUESTAO06 */

/* let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]; */

let odd = 0;

for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] % 2 !== 0) {
        odd += 1
    } 
}

if (odd === 0) {
    console.log("nenhum valor ímpar encontradoo");
} else {
    console.log(odd);
}
console.log("------------");
/* QUESTAO07 */

/* let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]; */

let menorNumero = numbers[0];

for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] < menorNumero) {
        menorNumero = numbers[index];
    }    
}
console.log(menorNumero);

console.log("------------");
/* QUESTAO08 */

let novoArray = [];

for (let index = 1; index <= 25; index += 1) {
    novoArray.push(index);
}
console.log(novoArray);

console.log("------------");
/* QUESTAO09 */

for (let index = 0; index < novoArray.length; index += 1) {
    console.log(novoArray[index] / 2);
}

console.log("------------");
