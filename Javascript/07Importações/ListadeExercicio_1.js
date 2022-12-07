/*
1) Faça um programa que receba um número e escreva a sua respectiva tabuada.

2) Faça um programa que receba a quantidade de números e seus respectivos valores. 
Imprima o maior e o menor número deste conjunto.

3) Faça um programa que receba a quantidade de números e seus respectivos valores.
Imprima todos os números pares.
 */

/* 
1)
    const num = 3;
    let total;
    for(let i = 1; i <= 10; i++){
        total = num * i;
        console.log(`${num} * ${i} = ${total}`);
    }
*/ 

/* 
2)
    const lista = [4,100,150,90,200];
    function MenorValor(valor){
        return Math.min.apply(null, valor);
    }
    function MaiorValor(valor){
        return Math.max.apply(null, valor);
    }
    
    console.log( 'Maior número:' + MaiorValor(lista));
    console.log( 'Menor número:' + MenorValor(lista));
*/ 

/*
3)

const numeros = [5,1,3,9,10,12];
const numPares = [];

for(let i = 0; i < numeros.length; i++){
    if(numeros[i] % 2 === 0){
        numPares.push(numeros[i]);
    }
}
console.log('Números Pares:' + numPares);
 */ 
