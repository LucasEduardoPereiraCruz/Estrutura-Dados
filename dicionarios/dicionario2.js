//Atividade 4 dos slides, metade sozinho, metade com instruções de IA 

const dicionario = {
    Cor : "Verde, amarelo e azul",
    Escrita : "Ordem e Progresso",
    Curiosidade : "27 estrelas, são os estados mais o Distrito Federal do Brasil",
    Tamanho : undefined,
    Data_criacao : undefined 
};

//Removendo chaves com valor null ou undefined
for(const chave in dicionario){
    if(dicionario[chave] === null || dicionario[chave] === undefined){
        delete dicionario[chave];
    }
}

console.log(dicionario);