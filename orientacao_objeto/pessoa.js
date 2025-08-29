//Atividade
class Pessoa{
    constructor(_nome, _idade){
        this.nome = _nome;
        this.idade = _idade;
        
        }
        apresentar(){
            console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
        }
    }  



//module.exports também pode ser usado!
export default Pessoa; 