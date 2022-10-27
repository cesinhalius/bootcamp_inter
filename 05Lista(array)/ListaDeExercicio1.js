/*
1) Crie um programa que dado um número imprima a sua tabuada.

2) Crie um programa que seja capaz de percorrer uma lista de números e imprima cada número Par encontrado.

3) Faça um programa que dado uma lista de nomes imprima os nomes que começem com a letra "V".

4) Faça um programa que preencha uma lista com todos os números pares contidos no intervalo de 10 a 50;

5) Dado uma lista com as médias tiradas pelos alunos. Imprima todas as médias que ficaram de recuperação (média < 5).
   Ex de lista = [2, 7, 3, 8, 10, 4]

6) Dado uma lista com as notas tiradas pelos alunos. imprima a maior nota.
   Ex de lista de notas = [2, 7, 3, 8, 10, 4]
 */

/* 
1)
   const num = 5;
   for (let i = 1; i <= 10; i++) {
    console.log(i * num);
    
   }

*/

/*
2)
const numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < numeros.length; i++) {
  const numero = numeros[i];
  if (numero % 2 === 0) {
    console.log(numero);
  }
}
*/

// 3)
/*
const nomes = ['valeria', 'j','r'];
    for (let i= 0; i< nomes.length; i++) {
        const nome = nomes[i];
        
          
    } 
*/

/* 
4)
    const numeros = [];
    for (let i = 10; i <= 50; i++) {
      if(i % 2 === 0){
        numeros.push(i);
      }
      
    }
    console.log(numeros);


*/ 

/* 
5)

const medias = [2, 7, 3, 8, 10, 4];
const notas = [];
  for (let i = 0; i < medias.length; i++) {
    if(medias[i] < 5){
      notas.push(medias[i]);
    }
  
 }
 console.log(notas);
*/ 

/* 
6)

const notas = [2, 7, 3, 8, 10, 4];

function myArrayMax(num) {
  return Math.max.apply(null, num);
}

console.log(myArrayMax(notas));

*/ 
