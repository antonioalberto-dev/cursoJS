const hours = 3;

if(hours < 12 && hours > 6){
    console.log('bom dia!');
}else if(hours === 12){
    console.log('bom almoço!');
}else if(hours > 12 && hours < 18){
    console.log('boa tarde!');
}else if(hours > 18 && hours < 24){
    console.log('boa noite!');
}else if(hours >= 0 && hours < 6){
    console.log('boa madrugada!');
}