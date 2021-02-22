let pessoa = {
    nome: 'Sarah',
    idade: 28,

    fala() {
        console.log(`Meu nome é ${this.nome} e tenho ${this.idade} anos`);
    },
};

pessoa.fala();