/* Faça um programa para calcular o valor de uma viagem . 

Você tera 3 variaveis. Sendo elas:
1- Preço do combustivel;
2- Gasto médio de combustivel do carro por Km;
3- Distancia em KM da viagem 

*/ 

const precoCombustivel = 5.79;
const kmporLitros = 10;
const distanciaEmKm = 100;

const litrosConsumidos = distanciaEmKm / kmporLitros;
const valorGasto = litrosConsumidos * precoCombustivel;
console.log(valorGasto);