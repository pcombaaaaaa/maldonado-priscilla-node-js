const prompt=require("prompt-sync")({sigint:true});

function moverZero(array){
    a= array.filter(numero => numero!==0);
    b= array.filter(numero => numero===0);
    return [...a,...b]
}

console.log(moverZero(['false', 1,0,1,2,0,1,3,'a']));