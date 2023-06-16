const prompt=require("prompt-sync")({sigint:true});

lado1 = parseInt(prompt('Ingrese el primer lado: '));
lado2 = parseInt(prompt('Ingrese el segundo lado: '));
lado3 = parseInt(prompt('Ingrese el tercer lado: '));

if (lado1+lado2 > lado3) (lado1+lado3 > lado2) & (lado3+lado2 > lado1), console.log("Es un triangulo valido")
    else console.log("No es un triangulo valido");