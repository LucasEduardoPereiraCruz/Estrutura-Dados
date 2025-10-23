class Fila {
    #items = [];
    #inicio = 0;
    #fim = 0;

    enqueue(elemento){
        this.#items[this.#fim] = elemento;

        this.#fim++;
    }

    dequeue(){
        if(this.estaVazia()){
            return undefined;
        }

        const item = this.#items[this.#inicio];

        delete this.#items[this.#inicio];

        this.#inicio++;

        if(this.#inicio === this.#fim){
            this.#inicio = 0;
            this.#fim = 0; 
        }

        return item;
    }

    search(value) {
        for (let i = this.#inicio; i < this.#fim; i++) {
            if (this.#items[i] === value) return true;
        }
        return false;
    }


    front(){
        if(this.estaVazia()){
            return undefined;
        }
        
        return this.#items[this.#inicio];
    }

    estaVazia = () => this.#fim === this.#inicio;

    tamanho = () => this.#fim - this.#inicio;
}

module.exports = Fila;