const prompt=require("prompt-sync")({sigint:true});

let balancesUltimoSemestre = [
    { mes: "julio", ganancia: 50 }, 
    { mes: "agosto", ganancia: -12 }, 
    { mes: "septiembre", ganancia: 1000 }, 
    { mes: "octubre", ganancia: 300 }, 
    { mes:  "noviembre", ganancia: 200 }, 
    { mes: "diciembre", ganancia: 0 }
  ];

function balancesPositivos(balancesUltimoSemestre) {
    cantidad = 0
    for (balance of balancesUltimoSemestre){
        cantidad= cantidad + ((balance.ganancia) > 0)
    }
    return cantidad;
}
console.log(balancesPositivos(balancesUltimoSemestre));