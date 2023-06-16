const prompt=require("prompt-sync")({sigint:true});

num1 = parseInt(prompt('Ingrese un numero:'))
num2 = parseInt(prompt('Ingrese otro numero:'))

if (num1 > num2) console.log('El numero mayor es '+num1)
    else console.log('El numero mayor es '+num2);