const form = document.querySelector('#formulario');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);
    console.log(peso, altura);

    const imc = getImc(peso, altura);

    const validate = validateParameters(peso, altura);
    console.log(validate);

    setResultado(getResultado(imc, validate));
});

function validateParameters(peso, altura) {
    if (!isNaN(peso) && !isNaN(altura)) {
        return true;
    }else{
        return false;
    }
}

function getResultado(imc) {
    if (imc < 18.5) {
        return 'Abaixo do peso';
    } else if (imc > 18, 5 && imc < 24.9) {
        return 'Peso normal';
    } else if (imc > 25 && imc < 29.9) {
        return 'Sobrepeso';
    } else if (imc > 30 && imc < 34.9) {
        return 'Obesidade grau 1';
    } else if (imc > 35 && imc < 40) {
        return 'Obesidade grau 2';
    } else if (imc > 40) {
        return 'Obesidade grau 3';
    }
}

function getImc(peso, altura) {
    return (peso / altura ** 2).toFixed(2);
}

function criaP() {
    const p = document.createElement('p');
    return p;
}

function setResultado(mensagem, validate) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';

    const p = criaP();
    p.innerHTML = mensagem;
    p.classList.add('paragrafoResultado');

    resultado.appendChild(p);
}