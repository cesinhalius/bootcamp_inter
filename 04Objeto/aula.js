/*
    Explicação de orienteção de objeto e classe em javascript
 */

    /*
    Objeto e composto por metodos e atributos  
    */

    class Pessoa {
        nome;
        idade;
        anoDeNascimento;



        constructor(nome, idade) {
            this.nome = nome;
            this.idade = idade;
            this.anoDeNascimento = 2022 - idade;
        }

        descrever(){
            console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
        }
    }


    function compararPessoas(p1, p2){
        if(p1.idade > p2.idade){
            console.log(`${p1.nome} é mais velho que ${p2.nome}`);
        } else if(p2.idade > p1.idade){
            console.log(`${p2.nome} é mais velho que ${p1.nome}`);
        }else{
            console.log(`${p1.nome} é mais velho que ${p2.nome}`);
        }
    }
    const cesar = new Pessoa('Cesar', 40);
    const simone = new Pessoa('Simone', 38);

    compararPessoas(cesar,simone);

  