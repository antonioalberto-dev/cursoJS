// ---------- STRING ----------------------------------------

let texto = 'alguma coisa'

console.log(texto.charAt(5)); // strings são indexadas

console.log(texto.concat(' estava aqui')); //concatenação de string
console.log(texto);
texto += ' estava aqui'
console.log(texto);
console.log(`${texto} mas não está aqui`);
console.log(texto.replace('coisa', 'ferramenta')); //substitui a 1ª instancia pela 2ª
console.log(texto.search(/i/g)); //pesquisa algo dentro da string
console.log(texto.length); //verifica o tamanho da string
console.log(texto.slice(0,6)); //pega somente uma fatia da string
console.log(texto.slice(-4));
//console.log(texto.substring(texto.length - 4));
console.log(texto.split('a')); //retira a instancia da string e retorna os resultados
console.log(texto.toUpperCase);

