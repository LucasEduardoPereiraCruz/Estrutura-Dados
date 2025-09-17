const minhaPilha = require('./pilha.js');

const magia = new minhaPilha();

magia.adicionar("Poção de fúria")
magia.adicionar("Bola de fogo");
magia.adicionar("Poção de cura");


console.log(magia.topo());
console.log(magia.remover());
console.log(magia.topo());
console.log(magia.tamanhoPilha());