const meuArray = require("./MeuArray");

const minhaLista = new meuArray();

minhaLista.adicionar("Varrer");
console.table(minhaLista.items);

minhaLista.adicionar("Cozinhar");
minhaLista.adicionar("Jogar bola");
minhaLista.adicionar("Estudar");
minhaLista.adicionar("Preparar mochila");

console.log("Item removido", minhaLista.remover());

console.log("Lista de tarefas: ");
    for(let i = 0; i < minhaLista.tamanhoArray(); i++){
        console.log(minhaLista.obterElemento(i));
    }


console.log(minhaLista.obterElemento(6))