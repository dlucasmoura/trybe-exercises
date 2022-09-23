let a = 20;
let b = 10;
let c = 30;


console.log("QUESTÃO 1:");

console.log("O resultado da soma é: " + (a + b));

console.log("O resultado da subtração é: " + (a - b));

console.log("O resultado da Multiplicação é: " + (a * b));

console.log("O resultado da Divisão é: " + (a / b));

console.log("O resultado do Módulo é: " + (a % b));

console.log("QUESTÃO 2:");

if (a > b) {
    console.log(a + " é maior que " + b);
} else {
    console.log(b + " é maior que " + a);
}

console.log("QUESTÃO 3:");

if (a > b && a > c) {
    console.log(a + " é maior dos 3 números");
} else if (b > a && b > c ){
    console.log(b + " é maior dos 3 números")
} else {
    console.log(c + " é maior dos 3 números")
}

console.log("QUESTÃO 4:");

if (a > 0) {
    console.log("positive");
} else {
    console.log("negative");
}

console.log("QUESTÃO 5:");
let anguloA = 65;
let anguloB = 100;
let anguloC = 15;

let somaDosAngulos = anguloA + anguloB + anguloC;

let todosAngulosPositivos = anguloA > 0 && anguloB > 0 && anguloC > 0;

if (todosAngulosPositivos) {
    if (somaDosAngulos === 180) {
        console.log(true);
    } else {
        console.log(false);
    }
} else {
    console.log("Erro: ângulo inválido");
}

console.log("QUESTÃO 6:");

let peçaDeXadrez = "Peão"

switch (peçaDeXadrez.toLowerCase()) {
    case "rei":
        console.log("Rei -> Uma casa apenas para qualquer direção.");
        break;
    case "bispo":
        console.log("Bispo -> Diagonal.");
        break;
    case "rainha":
        console.log("Rainha -> Diagonal, horizontal e vertical");
        break;
    case "cavalo":
        console.log("Cavalo -> Em L pode pular sobre as peças.");
        break;
    case "torre":
        console.log("Torre -> Horizontal e vertical.");
        break;
    case "peão":
        console.log("Peão -> Apenas uma casa para frente, no primeior movimento podem ser duas casas.");
        break;
    default:
        console.log("Erro, peça inválida!");
        break;
}

console.log("QUESTÃO 7:");
/* 
Porcentagem >= 90 -> A
Porcentagem >= 80 -> B
Porcentagem >= 70 -> C
Porcentagem >= 60 -> D
Porcentagem >= 50 -> E
Porcentagem < 50 -> F
O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100. */

let nota = 101;

if (nota < 50 && nota > 0) {
    console.log("Sua nota é: F");
} else if (nota >= 50 && nota < 60){
    console.log("Sua nota é: E");
} else if (nota >= 60 && nota < 70) {
    console.log("Sua nota é: D");
} else if (nota >= 70 && nota < 80) {
    console.log("Sua nota é: C");
} else if (nota >= 80 && nota < 90) {
    console.log("Sua nota é: B");
} else if (nota >= 90 && nota < 100) {
    console.log("Sua nota é: A");
} else {
    console.log("ERROR: Nota inválida");
}

console.log("QUESTÃO 8:");

let number1 = 1;
let number2 = 5;
let number3 = 3;

let oNumeroEPar = false;

if ((number1 % 2 === 0 || number2 % 2 === 0 || number3 % 2 === 0)) {
    oNumeroEPar = true;
}
console.log(oNumeroEPar);