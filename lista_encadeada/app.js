const LinkedList = require('./linkedlist.js');

const lista = new LinkedList();

console.log("\n--------------------");
console.log('\x1b[35m%s\x1b[0m', 'Lista Inicial');
lista.isEmpty() ? console.log("A lista está vazia.") : console.log("A lista não está vazia.");

//Adicinando itens
console.log("\n--------------------");
console.log('\x1b[35m%s\x1b[0m', 'Inserindo no início:');
lista.insertAtBeginning("Caverna");
lista.toString();
lista.insertAtBeginning("Mirante");
lista.toString();
lista.insertAtBeginning("Estátua");
lista.toString();

console.log(`Tamanho da lista: ${lista.size()}`);

//Exibir lista
console.log("\n--------------------");
console.log('\x1b[35m%s\x1b[0m', 'Exibindo Lista: ');
lista.toString();

//Removendo item
console.log("\n--------------------");
console.log('\x1b[35m%s\x1b[0m', 'Removendo Itens: ');
lista.removeByValue("Mirante");
lista.toString();

//Percorrendo a lista
console.log("\n--------------------");
console.log('\x1b[35m%s\x1b[0m', 'Procurando um valor: ');
let node = lista.find("Caverna");
console.log(node ? `Valor encontrado ${node.value}` : "Valor não encontrado")