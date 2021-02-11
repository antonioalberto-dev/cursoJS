let x = 2.34512;
let y = 94;

console.log(x, y);
console.log(x.toFixed(2)); //numeros apos a virgula
console.log(y.toString(2)); //numeros binarios
console.log(Number.isInteger(y)); //verifica se é um inteiro

let a = 0.8;
let b = 0.2;

a += b;
a = parseFloat(a.toFixed(2)); // uma das maneiras de "acabar" com a imprecisão das operações entre números
console.log(a);
console.log(Number.isInteger(a));

console.log('');

// --------- UTILIZANDO MATH -------------------

let num1 = 9.4821;

console.log(Math.floor(num1)); // arredondamento para baixo
console.log(Math.ceil(num1)); // arredondamento para cima
console.log(Math.round(num1)); // arredondamento para o mais proximo
console.log(Math.max(4, 8, 1, 45, 23)); // verifica qual o maior numero
console.log(Math.min(4, 8, 1, 45, 23)); // verifica qual o menor numero da sequencia
console.log(Math.random()); // gera um numero aleatorio com casas decimais
console.log(Math.random() * (10)); // numero aleatorio entre 1 - 10
console.log(Math.sqrt(16));

console.log('---------- exercicio ------------');

let num = 55.8972362763;

console.log(Math.sqrt(num));
console.log(Number.isInteger(num));
console.log(Number.isNaN(num));
console.log(Math.floor(num));
console.log(Math.ceil(num));
console.log(num.toFixed(2));