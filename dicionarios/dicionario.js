//Atividade 1 dos slides, atividade feita sozinho.

const alunos = {};

alunos[105] = "Lucas Eduardo";
alunos[106] = "Tiago Grizzo";
alunos[107] = "Filipe Rufino";


//Ele percorre toda a chave
for(const matricula in alunos){
    console.log(`${matricula} : ${alunos[matricula]}`)
}


//Um de cada vez
console.log(alunos[105]);
console.log(alunos[106]);
console.log(alunos[107]);


//Todos de uma vez através de um console.log
console.log(Object.values(alunos));

//Obter todas as chaves
console.log(Object.keys(alunos));

//Mais uma forma de ver a lista (sem iteração)
console.log(alunos);