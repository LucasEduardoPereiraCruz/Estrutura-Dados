//Atividade 6 dos slides, atividade feita com ajuda de IA 

const texto = "AAAaaBBbbbCcC"

const frequencia = new Map();

//Percorre caractere da string
for(const letra of texto){
    //Verifica se já existe no Map
    if(frequencia.has(letra)){
        frequencia.set(letra, frequencia.get(letra) + 1); 
    } else { 
        frequencia.set (letra, 1); 
    }
}

//Exibe o resultado
for (const [letra, contagem] of frequencia){
    console.log(`${letra} : ${contagem}`);
}
