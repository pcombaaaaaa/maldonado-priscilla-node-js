const prompt=require("prompt-sync")({sigint:true});

año = parseInt(prompt('Ingrese un año:'))

if (año % 4 == 0) (año % 100 != 0) & (año % 400 == 0), console.log('El año ingresado es bisiesto')
    else console.log('El año ingresado NO es bisiesto')