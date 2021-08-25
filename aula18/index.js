function aluno (nome, nota){
    return {nome: nome, nota: nota};
}

const aluno1 = aluno("Alberto", 9.8);
const aluno2 = aluno("Maria", 6.3);
const aluno3 = aluno("Gohan", 8.0);

console.log(aluno1.nome, aluno1.nota);
console.log(aluno2.nome, aluno2.nota);
console.log(aluno3.nome, aluno3.nota);