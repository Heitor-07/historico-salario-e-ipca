import entradaDados from 'readline-sync';

/* Escolha uma das alternativas: 
1 - Listar os salários mínimos de 2010 à 2020
2 - Listar o índice IPCA de 2010 à 2020
3 - Comparação entre o percentual de aumento salarial e o IPCA
*/

/* -- Coleção de salários -- */
let salarioMinino = [
    {ano: 2010, salario: 510.00},
    {ano: 2011, salario: 545.00},
    {ano: 2012, salario: 622.00},
    {ano: 2013, salario: 678.00},
    {ano: 2014, salario: 724.00},
    {ano: 2015, salario: 788.00},
    {ano: 2016, salario: 880.00},
    {ano: 2017, salario: 937.00},
    {ano: 2018, salario: 954.00},
    {ano: 2019, salario: 998.00},
    {ano: 2020, salario: 1045.00}
];

let inflacao = [
    {ano: 2010, ipca: 5.91},
    {ano: 2011, ipca: 6.50},
    {ano: 2012, ipca: 5.84},
    {ano: 2013, ipca: 5.91},
    {ano: 2014, ipca: 6.41},
    {ano: 2015, ipca: 10.67},
    {ano: 2016, ipca: 6.29},
    {ano: 2017, ipca: 2.95},
    {ano: 2018, ipca: 3.75},
    {ano: 2019, ipca: 4.31},
    {ano: 2020, ipca: 4.52}
];

console.log("1 - Listar os salário mínimos de 2010 à 2020");
console.log("2 - Listar o índice IPCA de 2010 à 2020");
console.log("3 - Comparação entre o percentual de aumento salarial e o IPCA")
let opcao = entradaDados.question("Digite o numero da sua escolha: ");

console.log("Opção escolhida: " + opcao);

if(opcao == 1){
    for(let salarios of salarioMinino){
        let salarioAno = salarios.ano;
        let salarioValor = salarios.salario.toFixed(2).replace(".", ",");
        console.log("Ano: ".padEnd(30, ".") + salarioAno);
        console.log("Salário mínimo: ".padEnd(30, ".") + "R$ " + salarioValor);
        console.log("\n")
    }
    
} else if(opcao == 2){
    for(let inflacoes of inflacao){
        let inflacaoAno = inflacoes.ano;
        let ipcaAno = inflacoes.ipca.toFixed(2).replace(".", ",");
        console.log("Ano:".padEnd(30, ".") + inflacaoAno);
        console.log("IPCA:".padEnd(30, ".") + ipcaAno + "%");
        console.log("\n");
    }
} else if(opcao == 3){
    for(let i = 0; i <= salarioMinino.length-1; i++){
        let ano = salarioMinino[i].ano;
        let salario = salarioMinino[i].salario;
        let ipca = inflacao[i].ipca.toFixed(2).replace(".", ",");
        let percentualSalarial;
        let percentualFormatado;
        let salarioFormatado = salario.toFixed(2).replace(".", ",");
        
        if(i > 0){
            let diferenca = salario - salarioMinino[i-1].salario;
            percentualSalarial = (diferenca / salarioMinino[i-1].salario) * 100;
            percentualFormatado = percentualSalarial.toFixed(2).replace(".", ",")+"%";
        } else{
            percentualFormatado = "-";
        }
        console.log("Ano:".padEnd(30, ".") + "R$ " + ano);
        console.log("Salário mínimo: ".padEnd(30, ".") + "R$ " + salarioFormatado);
        console.log("Crescimento Salarial:".padEnd(30, ".") + percentualFormatado);
        console.log("Inflação IPCA: ".padEnd(30, ".") + ipca+"%");
        console.log("\n");
    }
} else{
    console.log("Opção inválida!");
}    








