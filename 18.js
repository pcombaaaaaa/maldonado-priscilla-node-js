const prompt=require("prompt-sync")({sigint:true});

num= parseInt(prompt('Ingrese un numero: '))

function breakstatement(num){
    array= [];
    suma= num;
    for (i=0; i<10;i++){
        suma= suma + 2;
        if (suma === i) break;
        else {
            array.push(suma);
        }
    }
    if (i<10) {
        return 'Se interrumpio la ejecucion';
    } else {
        return array;
    }
}
console.log(breakstatement(num));