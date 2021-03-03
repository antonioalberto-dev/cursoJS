function formZero(num){
//         (condição)?(true):(false)
    return num >= 10 ? num : `0${num}`;
}

function dateBr(data){
    const dia = formZero(data.getDate());
    const mes = formZero(data.getMonth() + 1);
    const ano = formZero(data.getFullYear());

    return `${dia}/${mes}/${ano}`;
}


const data = new Date();
console.log(dateBr(data));