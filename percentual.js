const faturamentos_por_estado = [
    {estado: "SP", valor: 67836.43},
    {estado: "RJ", valor: 36678.66},
    {estado: "MG", valor: 29229.88},
    {estado: "ES", valor: 27165.48},
    {estado: "Outros", valor: 19849.53}
]

const total = faturamentos_por_estado.reduce((acumulador, atual) => acumulador + atual.valor, 0);

for (let faturamento of faturamentos_por_estado){
    console.log(`O percentual do estado ${faturamento.estado} é de ${faturamento.valor/total * 100} %.`);
}
