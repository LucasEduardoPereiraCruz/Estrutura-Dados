
// Importando as classes necessárias para o benchmark
const BinaryTree = require('../arvore_binaria/BinaryTree.js');
const LinkedList = require('../lista_encadeada/linkedlist.js');
const DoublyLinkedList = require('../lista_duplamente_encadeada/DoublyLinkedList.js');
const Fila = require('../fila/fila.js');
const Pilha = require('../pilha/pilha.js');
const AVLTree = require('../arvore_binaria_AVL/AVLTree.js');
const MeuArray = require('../array/MeuArray.js');



// Instanciando as classes
const tree = new BinaryTree();
const list = new LinkedList();
const doublyList = new DoublyLinkedList();
const queue = new Fila();
const stack = new Pilha();
const avl = new AVLTree();
const meuArray = new MeuArray;

// Função para gerar um número inteiro aleatório dentro de um intervalo
function getRandomIntRange(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Tamanho do teste
const size = 1000000;
const nome = "Lucas Eduardo Pereira da Cruz"

console.log("\x1b[33m%s\x1b[0m", "INTERSEÇÃO");

// Testando a Fila
console.time("timerFila");
for (let i = 0; i < size; i++) 
{
    queue.enqueue(getRandomIntRange(i, size));
}
console.timeEnd("timerFila");


// Testando a Pilha
console.time("timerPilha");
for (let i = 0; i < size; i++) 
{
    stack.adicionar(getRandomIntRange(i, size));
}
console.timeEnd("timerPilha");

console.time("timerMeuArray");
for (let i = 0; i < size; i++) 
{
    list.insertAtBeginning(getRandomIntRange(i, size));
}
console.timeEnd("timerMeuArray");

// Testando a LinkedList
console.time("timerLinkedList");
for (let i = 0; i < size; i++) 
{
    list.insertAtBeginning(getRandomIntRange(i, size));
}
console.timeEnd("timerLinkedList");


// Testando a DoublyLinkedList
console.time("timerDoublyLinkedList");
for (let i = 0; i < size; i++) 
{
    doublyList.append(getRandomIntRange(i, size));
}
console.timeEnd("timerDoublyLinkedList");


// Testando a BinaryTree
console.time("timerBinaryTree");
for (let i = 0; i < size; i++) 
{
    tree.insert(getRandomIntRange(i, size));
}
console.timeEnd("timerBinaryTree");

console.time("timerAVLTree");
for (let i = 0; i < size; i++){
    avl.insert(getRandomIntRange(i, size));
}
console.timeEnd("timerAVLTree");



console.log("\x1b[33m%s\x1b[0m", "BUSCAS");

console.time("searchFila");
queue.enqueue(nome); // adiciona o nome ao final
queue.search(nome);  // busca o nome
console.timeEnd("searchFila");


console.time("searchPilha");
stack.adicionar(nome);
stack.search(nome);
console.timeEnd("searchPilha");

console.time("searchMeuArray");
meuArray.adicionar(nome);
meuArray.search(nome);
console.timeEnd("searchMeuArray");


console.time("searchLinkedList");
list.insertAtBeginning(nome);
list.search(nome);
console.timeEnd("searchLinkedList");


console.time("searchDoublyLinkedList");
doublyList.append(nome);
doublyList.search(nome);
console.timeEnd("searchDoublyLinkedList");


console.time("searchBinaryTree");
tree.insert(nome);
tree.search(nome);
console.timeEnd("searchBinaryTree");


console.time("searchAVLTree");
avl.insert(nome);
avl.search(nome);
console.timeEnd("searchAVLTree");