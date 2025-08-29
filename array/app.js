const MeuArray = require("./MeuArray");

const minhaLista = new MeuArray();

minhaLista.adicionar("Varrer");
minhaLista.adicionar("Cozinhar");
minhaLista.adicionar("Jogar bola");
minhaLista.adicionar("Estudar");
minhaLista.adicionar("Preparar mochila");

minhaLista.remover();
minhaLista.mostrar();