/* 
  Faça um programa para calcular o valor de uma viagem . 
     Você tera 5 variaveis. Sendo elas:
         1- Preço do combustivel;
         2- Gasto médio de combustivel do carro por Km;
         3- Distancia em KM da viagem;
         4- preço do Etanol;
         5- preço da gasolina;

    Imprima no console o valor que sera gasto para realizar esta viagem.
*/
const precoEtanol = 5.79;
const precoGasolina = 6.66; 
const kmporLitros = 10;
const distanciaEmKm = 100;
const tipoCombustivel = 'gasolina';


const litrosConsumidos = distanciaEmKm / kmporLitros;


if(tipoCombustivel==='gasolina'){
    const valorGasto = litrosConsumidos * precoGasolina;
    console.log(valorGasto);
}else{
    const valorGasto = litrosConsumidos * precoEtanol;
    console.log(valorGasto);
}



