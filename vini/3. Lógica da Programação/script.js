// ================================
// 1. VARIÁVEIS
// ================================

let idade = 28; // number inteiro
let nome = "Vinicius"; // string
let aprovado = true; //boleano

console.log("Meu nome é: " + nome + " e minha idade é: " + idade);

// ================================
// 2. FUNÇÕES
// ================================

function soma(n1, n2) {
  return (resultado = n1 + n2);
}

function subtrair(n1, n2) {
  return (resultado = n1 - n2);
}

function dividir(n1, n2) {
  return (resultado = n1 / n2);
}

function multiplicar(n1, n2) {
  return (resultado = n1 * n2);
}

console.log("Resultado da soma:", soma(10, 5));
console.log("Resultado da subtração:", subtrair(10, 5));
console.log("Resultado da divisão:", dividir(10, 5));
console.log("Resultado da multiplicação:", multiplicar(10, 5));

// ================================
// 3. CONTROLE DE FLUXO
// ================================

if (idade >= 18) {
  console.log("Pode entrar");
} else {
  console.log("Não pode entrar");
}

if (nome == "Vinicius") {
  console.log("Engenheiro de software");
} else if (nome == "Victor") {
  console.log("Sistemas de Informação");
} else {
  console.log("Pau no seu cu");
}

switch (idade) {
  case 28:
    console.log("Grande");
    break;

  case 18:
    console.log("Grandinho");
    break;

  default:
    console.log("Não existe");
}

// ================================
// 4. LOOPS
// ================================

let contador = 1;

while (contador <= 5) {
  console.log(contador);
  contador++;
}

console.log("----------------------------------------")

let numero = 1;

do {
  console.log(numero);
  numero++;
} while (numero <= 3);

console.log("----------------------------------------")

for (let i = 1; i <= 5; i++) {
  console.log(i);
}