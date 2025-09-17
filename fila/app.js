const Fila = require('./fila.js')

const atendimento = new Fila();

atendimento.enqueue("Cliente 1");
atendimento.enqueue("Cliente 2");
atendimento.enqueue("Cliente 3");
atendimento.enqueue("Cliente 4");

//Cliente 1 - atendido e removido da fila
console.log(atendimento.front());
console.log(atendimento.dequeue());

//Cliente 2 - atendido e removido da fila 
console.log(atendimento.front());
console.log(atendimento.dequeue());

atendimento.enqueue("Cliente 5");

console.log(atendimento.tamanho());
console.log(atendimento.front());



//Aprendendo/testando setTimeout.
setTimeout(() => {
  console.log("Rodou depois de 2 segundos!");
}, 2000);


setTimeout(() => {
  const cliente = atendimento.dequeue();
  console.log(`Atendendo: ${cliente}`);
}, 2000);
