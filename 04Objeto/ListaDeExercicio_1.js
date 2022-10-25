/*
1) Crie uma classe para representar carros. 
Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê o valor 
gasto em reais para realizar este percurso.
 */

class Carro{
    marca;
    cor;
    gastodecombustivelEmKm;
    
    
    constructor(marca, cor, gastodecombustivelEmKm){
        this.marca = marca;
        this.cor = cor;
        this.gastodecombustivelEmKm = gastodecombustivelEmKm;
    }

    calcularGastoDePercurso(distanciaEmKM, precoCombustivel){
        return distanciaEmKM * this.gastodecombustivelEmKm * precoCombustivel;
    }
}

const uno = new Carro('Fiat', 'prata', 1 / 12);
console.log(uno.calcularGastoDePercurso(70, 5).toFixed(2));