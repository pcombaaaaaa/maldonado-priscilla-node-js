const prompt=require("prompt-sync")({sigint:true});

const sumArray = (array, numero) => {
    const size = array.length; 
    for (let i = 0; i < size; i++) {
      const a = array[i];
      for (let j = 0; j < size; j++) {
        if (i === j) continue;
        const b = array[j];
        if (a + b === numero) return true;
      }
    }
    return false;
  };

console.log(sumArray([1,2,3,4,5], 8));
console.log(sumArray([1,2,3,4,5], 24));
console.log(sumArray([2,5,7,10,11,15,20], 13));
console.log(sumArray([2,5,7,10,11,15,20], 14));