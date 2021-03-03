function escopo() {
    const form = document.querySelector('.form');
    const result = document.querySelector('.result');

    let resultado;
    let condicao;

    function calculoImc(evento) {
        evento.preventDefault();

        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        resultado = parseFloat(peso.value) / parseFloat(altura.value) ** 2;

        if (resultado < 18.5) {
            condicao = 'Abaixo do peso';
        } else if (resultado >= 18.5 && resultado <= 24.9) {
            condicao = 'Peso normal';
        } else if (resultado >= 25 && resultado <= 29.9) {
            condicao = 'Sobrepeso';
        } else if (resultado >= 30 && resultado <= 34.9) {
            condicao = 'Obesidade Grau I';
        } else if (resultado >= 35 && resultado <= 39.9) {
            condicao = 'Obesidade Grau II';
        } else if (resultado >= 40) {
            condicao = 'Obesidade Grau III';
        }

        result.innerHTML += `<p>Seu IMC é ${resultado}. Isso quer dizer que sua condição está em ${condicao} </p>`
    }

    form.addEventListener('submit', calculoImc);

}

escopo();