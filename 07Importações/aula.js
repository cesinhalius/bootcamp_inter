/*
Explicação de como se faz um inportação de uma função
para o projeto principal 
*/

const {gets,print} = require('./funcaoAuxiliar');

const quantidadeAlunos = gets();
let maiorValorEncontrado = 0;

for (let i = 0; i < quantidadeAlunos; i++) {
    const numroSorteado = gets();
    if (numroSorteado > numroSorteado) {
        maiorValorEncontrado = numroSorteado;
    }
    
}
print(maiorValorEncontrado);