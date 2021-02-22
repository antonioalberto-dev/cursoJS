function escopo() {

    //selecionando o local especifico do documento onde vou pegar os dados
    const form = document.querySelector('.form');

    // onde irá escrever os dados
    const result = document.querySelector('.result');

    // array de pessoas para armazenar os dados heterogeneos referente a pessoa
    const pessoas = [];

    //capturando os dados pelas 'querys'
    function recebeEvento(evento) {
        /* impede que o evento padrao ocorra. Nesse caso, se viesse a ocorrer, o onSubmit iria
        atualizar a pagina e perderiamos os dados. Como o exercicio pede para usar imediatamente 
        os dados informados no formulario, então faz-se necessario o uso do 'preventDefault()' */
        evento.preventDefault(); 

        const nome = form.querySelector('.nome');
        const idade = form.querySelector('.idade');
        const altura = form.querySelector('.altura');
        const peso = form.querySelector('.altura');

        pessoas.push({
            nome: nome.value,
            idade: idade.value,
            altura: altura.value,
            peso: peso.value
        });

        result.innerHTML += `<p>Nome: ${nome.value} <br> Idade: ${idade.value} <br> Altura: ${altura.value} <br> Peso: ${peso.value}<br></p>`;
    }

    form.addEventListener('submit', recebeEvento);
}

escopo();