const BinaryTree = require ('./BinaryTree');

const tree = new BinaryTree();
tree.insert(15);
tree.insert(10);
tree.insert(20);
tree.insert(8);
tree.insert(12);
tree.insert(18);
tree.insert(25);

console.log("Percurso em-ordem: ");
tree.inOrder();

console.log("Buscar valor 18: ");
console.log(tree.search(18) ? "Encontrado" : "Não encontrado");

console.log("Remover o valor 10: ");
tree.remove(10);
tree.inOrder();