/*
    estudo sobre array e vetor 
*/

// como declarar um array

const notas = [];

// Adicionando na lista
notas.push(10);
notas.push(5);
notas.push(8);


let soma;

for (let i = 0; i < notas.length; i++) {
    const nota = notas[i];
    soma = soma + nota;
    
}

const media = soma / notas.length;
console.log(media);