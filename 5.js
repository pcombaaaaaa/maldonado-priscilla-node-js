const prompt=require("prompt-sync")({sigint:true});
grados = parseInt(prompt("Ingrese los grados fahrenheit: "))

conv = (grados - 32) * (5 / 9)
console.log("Los grados en celsius es: "+conv);