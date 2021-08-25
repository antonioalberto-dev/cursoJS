let input = prompt("Digite o seu nome completo:");
document.body.innerHTML += `Seu nome é: ${input} </br>`;
document.body.innerHTML += `Seu nome tem ${input.length} letras </br>`;
document.body.innerHTML += `A segunda letra do seu nome é ${input.charAt(1)} </br>`
document.body.innerHTML += `O primeiro índice da letra 'n' no seu nome é: ${input.indexOf('n')} </br>`;
document.body.innerHTML += `As últimas três letras do seu nome são: ${input.slice(-3, input.length)} </br>`;
document.body.innerHTML += `Seu nome com letras maiusculas: ${input.toUpperCase()} </br>`
document.body.innerHTML += `Seu nome com letras minusculas: ${input.toLowerCase()} </br>`