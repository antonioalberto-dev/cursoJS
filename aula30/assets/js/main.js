let data = new Date();

const dias = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
const day = data.getDate();
const year = data.getFullYear();
const hours = data.getHours();
const minutes = data.getMinutes();
const seconds = data.getSeconds();

//alert(`Hoje é ${dias[data.getDay()]}, ${day} do ${meses[data.getMonth()]} de ${year}, às ${hours}:${minutes}`);

const paragrafo = document.querySelector('p');
paragrafo.innerHTML = `Hoje é ${dias[data.getDay()]}, ${day} do ${meses[data.getMonth()]} de ${year}, às ${hours}:${minutes}:${seconds}`;
