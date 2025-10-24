//Exemplo de uso

const Grafo = require('./grafo.js')

const meuGrafo = new Grafo();
meuGrafo.adicionarVertice(1);
meuGrafo.adicionarVertice(2);
meuGrafo.adicionarVertice(3);
meuGrafo.adicionarVertice(4);
meuGrafo.adicionarAresta(1, 2);
meuGrafo.adicionarAresta(1, 3);
meuGrafo.adicionarAresta(2, 4);
console.log("Antes de remover o vértice 2:");
meuGrafo.imprimirGrafo();


meuGrafo.removerVertice(2);
console.log("\nDepois de remover o vértice 2:");
meuGrafo.imprimirGrafo();

