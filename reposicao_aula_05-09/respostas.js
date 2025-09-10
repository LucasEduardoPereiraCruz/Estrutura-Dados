/*JUSTIFICANDO A RESPOSTA*/

// 1. Ele retorna o valor 0, pelo fato de eu ter criado um array vazio e 
// defifnir o tamanho inicial dele como 0, e como eu não adicionei nenhum elemento, ele dá esse resultado.

// 2. O resultado é 2. Precisamos primeiramente, adicionar as funções adicionar(elemento) e remover(),
// onde o adicionar ele aumenta o tamanho do array e o remover a gente define que se for igual a 0, ele retornará 
//undefined, e fazemos também uma constante de ultimo item, para o ultimo item da lista seja removido, e quando 
//ele é removido, ele diminiui e reajusta o tamanho. O resultado é 2 porque temos os elementos 10, 20 e 30
//e após remover o ultimo deles, o tamanho fica 2.

// 3. A saída será o elemento 'b'. No javascript o índice começa do número 0, e no obterElemento, ele quer o item do índice 1
//que é o segundo item do meuArray1.adicionar(), no exemplo sendo a letra 'b'.

// 4. Ele retorna undefined. As primeiras linha da função remover(), são exatamente para verificar isso, e quando o array 
//está vazio, ele retorna undefined porque não existe nada, é igual a zero.

// 5. São chamados de campos de classe privados e eles só podem ser usados dentro da classe, quando tentamos acessar eles fora
//ele gera um erro de sintaxe. O propósito dela é o encapsulamento e permite que apenas 
//os métodos da classe acessem e modifiquem os atributos privados.

// 6. O resultado final fica [25, 35]. O motivo disso, é que a função limpar() está zerando o array e o tamanho dele,
//assim, limpando o número 5 e 15, fazendo com que ele reinicie a contagem, resete o array, assim 25 e 35 seriam novos elementos
//inseridos.

// 7. Será banana. O último item sempre será removido e ao chamar o console.log(itemRemovido), ele irá imprimir
//banana, que foi o item removido. OBS: a const itemRemovido guarda o valor retornado pelo método.

// 8. Os resultados são 100, undefined e undefined. Isso ocorre porque no método obterElemento, 
//se o índice for menor que 0 ou maior/igual ao tamanho, ele retorna undefined, e no nosso caso ele vai até o indice 1 e tamanho 2,
//então ele pega o valor 100 que está no índice 0, e o valor 200 está no índice 1, mas no obterElemento ele procura
//o indice 2, que não existe e o -1 que não existe também.

// 9. É o conceito de encapsulamento, ela protege seus dados de código externo e só pode ser alterada através dos métodos públicos dentro da classe,
//os atributos com # são privados e não podem ser acessados fora da classe, garantindo proteção dos dados.

// 10. ESSA QUESTÃO ESTÁ NO ARQUIVO app1.js!!!!!