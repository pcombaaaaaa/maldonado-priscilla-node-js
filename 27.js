const prompt=require("prompt-sync")({sigint:true});


let balancesUltimoSemestre = [
    { mes: "julio", ganancia: 50 }, 
    { mes: "agosto", ganancia: -12 }, 
    { mes: "septiembre", ganancia: 1000 }, 
    { mes: "octubre", ganancia: 300 }, 
    { mes:  "noviembre", ganancia: 200 }, 
    { mes: "diciembre", ganancia: 0 }
  ];

function gananciaTotal(balancesUltimoSemestre){
    let suma = 0
    suma= suma + balancesUltimoSemestre[0].ganancia
    suma= suma + balancesUltimoSemestre[1].ganancia
    suma= suma + balancesUltimoSemestre[2].ganancia
    suma= suma + balancesUltimoSemestre[3].ganancia
    suma= suma + balancesUltimoSemestre[4].ganancia
    suma= suma + balancesUltimoSemestre[5].ganancia
    return suma;
}

console.log(gananciaTotal(balancesUltimoSemestre));