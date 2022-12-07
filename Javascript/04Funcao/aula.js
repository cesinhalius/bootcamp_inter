/*
Aula sobre como declarar uma função e sobre como ela se comporta em javascript

*/

/*
    Adicionando função para organizar o codigo e tambem para distribuir e deixa-las isoladas 

*/

function calcularIMC(peso, altura) {
  return peso / Math.pow(altura, 2);
}

function classificacarIMC(imc) {
  if (imc <= 18.5) {
    return "Abaixo do Peso";
  } else if (imc >= 18.5 && imc <= 25) {
    return "Peso normal";
  } else if (imc >= 25 && imc <= 30) {
    return "Acima do peso";
  } else if (imc >= 30 && imc <= 40) {
    return "Obeso";
  } else {
    return "Obsidade Grave";
  }
}


(function main() {
  const peso = 69;
  const altura = 1.6;

  const imc = calcularIMC(peso, altura);
  console.log(classificacarIMC(imc))
})();

/*
    com o parentes na frente se torna uma prioritade e tambem nao a necessitade 
    de chama-la ou dar um nome a ela
    
(function main() {
  const peso = 69;
  const altura = 1.6;

  const imc = calcularIMC(peso, altura);
  console.log(classificacarIMC(imc))
})();

*/