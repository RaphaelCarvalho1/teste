const fs = require("fs/promises");

fs.readFile("./faturamentos.json", { encoding: "utf-8", flag: "r" })
  .then((dados) => {
    const faturamentos = JSON.parse(dados);

    let menor_faturamento = null;
    let maior_faturamento = null;

    for(let i = 0; i < faturamentos.length; i++){
        if(!menor_faturamento || faturamentos[i].valor !== 0 && faturamentos[i].valor < menor_faturamento.valor)
            menor_faturamento = faturamentos[i]

        if(!maior_faturamento || faturamentos[i].valor !== 0 && faturamentos[i].valor > maior_faturamento.valor)
            maior_faturamento = faturamentos[i]
    }

    let media = 0;
    let dias_com_faturamento = 0;

    for(let faturamento of faturamentos){
        if(faturamento.valor > 0){
            dias_com_faturamento++;
            media += faturamento.valor;
        }
        
    }

    media /= dias_com_faturamento;

    let contador = 0;
    
    for(let faturamento of faturamentos){
        if(faturamento.valor > media)
            contador++
    }
    
    console.log(`O menor faturamento ocorreu no dia ${menor_faturamento.dia}, e foi de R$${menor_faturamento.valor}.`);
    console.log(`O maior faturamento ocorreu no dia ${maior_faturamento.dia}, e foi de R$${maior_faturamento.valor}.`);
    console.log(`A quantidade de dias em que o faturamento superou a média mensal é de ${contador} dias.`);
})

const faturamentos = [];


