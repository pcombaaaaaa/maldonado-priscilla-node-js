const prompt=require("prompt-sync")({sigint:true});
num = parseInt(prompt('Ingresar un numero: '));
if (num % 5 === 0) console.log('Es divisible por 5')
    else console.log("no es divisible por 5");