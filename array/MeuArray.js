class MeuArray {
    constructor()
    {
        this.items = [];

        this.tamanho = 0; 
    }

    adicionar(elemento)
    {
        this.items[this.tamanho] = elemento; 

        this.tamanho++;
    }

    mostrar()
    {
        console.log(this.items);
    }

    remover()
    {
        if(this.tamanho === 0){
            return undefined;
        }

        const ultimoItem = this.items[this.tamanho - 1];
        delete this.items[this.tamanho - 1 ];

        this.tamanho--;

        return ultimoItem;
    }

    obterElemento(indice){
        if (indice < 0 || indice>=this.tamanho){
            return undefined;
        }
        return this.items[indice];
    }

    tamanhoArray(){
        return this.tamanho
    }
}



module.exports = MeuArray;