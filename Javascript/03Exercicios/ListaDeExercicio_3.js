/*
    3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal da etqueta
    e a escolha da condição de pagamento.
        Utilize os codigos da tabela a seguir para ler qual a condição de pagamento escolhido e efetuar o calculo
        adequado.
    
    Codigo Condição de pagamento:
    - A vista Debito, recebe 10% de desconto;
    - A vista no Dineheiro ou PIX, recebe 15% de desconto;
    - Em duas vezes, preço normal de etiqueta sem juros;
    - Acima de duas vezes, preço normal de etiqueta mais juros de 10%; 
 */

const precoEtiqueta = 100;
const FormaDePagamento = 4;

if(FormaDePagamento === 1){
    console.log(precoEtiqueta - (precoEtiqueta * 0.1));
}else if(FormaDePagamento === 2){
    console.log(precoEtiqueta - (precoEtiqueta * 0.15));   
}else if(FormaDePagamento === 3){
    console.log(precoEtiqueta);   
}else{
    
    console.log(precoEtiqueta + (precoEtiqueta * 0.1));
}