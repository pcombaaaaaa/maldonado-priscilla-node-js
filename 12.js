const prompt=require("prompt-sync")({sigint:true});

num= parseInt(prompt('Ingrese un numero: '))

function primos(num) {
    if (num == 0 || num == 1 || num == 4) return false;
	for (let x = 2; x < num / 2; x++) {
		if (num % x == 0) return false;
	}
	return true;
}
console.log(primos(num));