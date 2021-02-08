// este é um comentario simples
console.log('comentario simples');

/* este é
    um
    comentario
    composto 
*/

// -------- VARIAVEIS --------------------------------------------

let nome = 'alberto';
let nota = 9;
let media = 8.54;
let bool = true;

console.log('nome:', nome);
console.log('nota:', nota);
console.log('media:', media);
console.log('bool:', bool);

console.log('--------------------------------------------');

console.log(nome, typeof (nome));
console.log(nota, typeof (nota));
console.log(media, typeof (media));
console.log(bool, typeof (bool));

console.log('--------------------------------------------');

// ------- CONSTANTES ------------------------------------------

const PI = 3.1415;
let raio = '2';
let circunferencia = 2 * raio * PI**2;

console.log(circunferencia);

// -------- EXERCICIO: VARIAVEIS E CONSTANTES

const NOME = 'alberto';
const PESO = 79.86;
const IDADE = 21;
const ALTURA = 1.79; //em metros

let imc = PESO / (ALTURA * ALTURA); 
let anoNascimento = 2021 - 22;

console.log('imc:', imc);
console.log('ano de nascimento:', anoNascimento);
