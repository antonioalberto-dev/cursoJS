//function formateZero(num) {
//    return num >= 10 ? num : `0${num}`;
//}
//
//function formateDay(num) {
//    switch (num) {
//        case 0:
//            return 'Domingo'
//            break;
//
//        case 1:
//            return 'Segunda-feira';
//            break;
//
//        case 2:
//            return 'Terça-feira';
//            break;
//
//        case 3:
//            return 'Quarta-feira';
//            break;
//
//        case 4:
//            return 'Quinta-feira';
//            break;
//
//        case 5:
//            return 'Sexta-feira';
//            break;
//
//        case 6:
//            return 'Sábado';
//            break;
//
//        default:
//            return 'Dados inconsistentes!';
//            break;
//    }
//}
//
//function formateMonth(num) {
//    switch (num) {
//        case 0:
//            return 'Janeiro'
//            break;
//
//        case 1:
//            return 'Fevereiro';
//            break;
//
//        case 2:
//            return 'Março';
//            break;
//
//        case 3:
//            return 'Abril';
//            break;
//
//        case 4:
//            return 'Maio';
//            break;
//
//        case 5:
//            return 'Junho';
//            break;
//
//        case 6:
//            return 'Julho';
//            break;
//
//        case 7:
//            return 'Agosto';
//            break;
//
//        case 8:
//            return 'Setembro';
//            break;
//
//        case 9:
//            return 'Outubro';
//            break;
//
//        case 10:
//            return 'Novembro';
//            break;
//
//        case 11:
//            return 'Dezembro';
//            break;
//
//        default:
//            return 'Dados inconsistentes!';
//    }
//}
//
//function escopo() {
//
//    const result = document.querySelector('.container h1');
//
//    const data = new Date();
//
//    const diaSemana = formateDay(data.getDay());
//
//    const dia = data.getDate();
//    const mes = formateMonth(data.getMonth());
//    const ano = data.getFullYear();
//
//    const horas = formateZero(data.getHours());
//    const min = formateZero(data.getMinutes());
//    const seg = formateZero(data.getSeconds());
//
//    result.innerHTML = `${diaSemana}, ${dia} de ${mes} de ${ano} <br> ${horas}:${min}:${seg}`;
//
//}
//escopo();

// --------------------------- resolução 2 ------------------------------------------------------

//const result = document.querySelector('.container h1');
//const data = new Date();
//
//result.innerHTML = `${data.toLocaleDateString('pt-BR', {dateStyle: 'full'})} <br> ${data.toLocaleTimeString('pt-BR', {timeStyle: 'short'})}`;

// --------------------------- resolução 3 -----------------------------------------------------

function formateZero(num) {
    return num >= 10 ? num : `0${num}`;
}

function formateDay(num) {
    const day = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'];
    return day[num];
}

function formateMonth(num) {
    const mount = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho',
        'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    return mount[num];
}

const result = document.querySelector('.container h1');
const data = new Date();

result.innerHTML =
    `${formateDay(data.getDay())}, ${formateZero(data.getDate())} de ${formateMonth(data.getMonth())} de ${data.getFullYear()}`
    + `<br> ${data.getHours()}:${data.getMinutes()}`
    ;