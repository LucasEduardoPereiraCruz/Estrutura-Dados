//Introdução
class Humano{
    altura; 
    idade;    //ADJETIVOS  //Atributos, propriedades e campos;
    nome;
    andar(){}
    comer(){}  //VERBOS   //Métodos;
    respirar(){}
    constructor(_nome, _idade){
        this.nome = _nome;
        this.idade = _idade
    }
}


//o objeto é o pessoa1
const pessoa1 = new Humano("Lucas Eduardo", 19);  // O new "transforma" classe em objeto;
pessoa1.altura = 1.71;
 

const pessoa2 = new Humano("Ana Beatriz", 19);
pessoa2.altura = 1.58;


console.log(pessoa1);
console.log(pessoa2);


//EXTENDS

class Aluno extends Humano{  //Humano é uma superclass;   //O super chama os métodos - 
                                                          //para chamar os métodos é só usar super.comer();.
    ra;
    estudar(){}
    frequentar(){}
    comer(){super.comer();}
}

const aluno1 = new Aluno();    //Aluno
aluno1.ra = "1234567890";
aluno1.nome = "Márcia Regina";
aluno1.estudar();
console.log(aluno1);