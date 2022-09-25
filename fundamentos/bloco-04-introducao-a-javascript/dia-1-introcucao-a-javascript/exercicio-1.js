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
let number2 = 2;
let number3 = 3;

let oNumeroEPar = false;

if ((number1 % 2 === 0 || number2 % 2 === 0 || number3 % 2 === 0)) {
    oNumeroEPar = true;
}
console.log(oNumeroEPar);

console.log("QUESTÃO 9:");

let number1 = 1;
let number2 = 2;
let number3 = 3;

let oNumeroEImpar = false;

if ((number1 % 3 === 0 || number2 % 3 === 0 || number3 % 3 === 0)) {
    oNumeroEImpar = true;
}
console.log(oNumeroEImpar);

console.log("QUESTÃO 10:");

let valorCusto = 10;
let valorVenda = 30;
let imposto = 1.2;
let valorCustoTotal;
let lucroVenda;

if (valorCusto >= 0 && valorVenda >=0) {
    valorCustoTotal = valorCusto * imposto;
    lucroVenda = (valorVenda - valorCustoTotal) * 1000;
    console.log(lucroVenda);
} else {
    console.log("ERROR: VALORES INVÁLIDOS");
}

console.log("QUESTÃO 11:");

let salarioLiquido;
const salarioBruto = 3250.25;
let salarioBase;
let ir;
let inss;

if (salarioBruto <= 1556.94) {
    inss = salarioBruto * 0.08
} else if (salarioBruto <=  2594.92) {
    inss = salarioBruto * 0.09
} else if (salarioBruto <= 5189.82) {
    inss = salarioBruto * 0.11
} else {
    inss = salarioBruto - 570.88
}

console.log(salarioBase = salarioBruto - inss);

if (salarioBase <= 1903.98) {
    ir = 0;
} else if (salarioBase <= 2826.65) {
    ir = (salarioBase * 0.075) - 142.80
} else if (salarioBase <= 3751.05) {
    ir = (salarioBase * 0.15) - 354.80
} else if (salarioBase <= 4664.68) {
    ir = (salarioBase * 0.225) - 636.13
} else {
    ir = (salarioBase * 0.275) - 869.36
}

console.log(ir);

salarioLiquido = salarioBase - ir;

console.log(salarioLiquido);



console.log(FIMMM);
