const dados = require('./dados.json');

function encontrarMenoresValores(dados) {
    // Mapeia os valores dos dados
    const valores = dados.map(dado => dado.valor);

    // Encontra o menor valor
    const menorValor = Math.min(...valores);

    // Cria uma lista para armazenar os menores valores
    let menoresValores = [];

    // Percorre os dados e armazena aqueles que têm o menor valor
    for (let index = 0; index < dados.length; index++) {
        if (dados[index].valor === menorValor) {
            menoresValores.push(dados[index]);
        }
    }

    return menoresValores;  // Retorna a lista de menores valores
}

// Chama a função e imprime o resultado
const resultadoMenorValor = encontrarMenoresValores(dados);
console.log(resultadoMenorValor);



function encontrarMaioresValores(dados) {
    // Mapeia os valores dos dados
    const valores = dados.map(dado => dado.valor);

    // Encontra o maior valor
    const maiorValor = Math.max(...valores);

    // Cria uma lista para armazenar os maiores valores
    let maioresValores = [];

    // Percorre os dados e armazena aqueles que têm o maior valor
    for (let index = 0; index < dados.length; index++) {
        if (dados[index].valor === maiorValor) {
            maioresValores.push(dados[index]);
        }else{
            null
        }
    }

    return maioresValores;  // Retorna a lista de maiores valores
}

// Chama a função e imprime o resultado
const resultadoMaiorValor = encontrarMaioresValores(dados);
console.log(resultadoMaiorValor);



function diasAcimaDaMedia(dados) {
    // Filtra os dias que têm faturamento maior que 0
    const diasComFaturamento = dados.filter(dado => dado.valor > 0);

    // Calcula a soma dos valores de faturamento
    const somaFaturamento = diasComFaturamento.reduce((soma, dado) => soma + dado.valor, 0);
    
    // Calcula a média mensal
    const mediaMensal = somaFaturamento / diasComFaturamento.length;
    
    // Filtra os dias com faturamento superior à média
    const diasAcimaMedia = diasComFaturamento.filter(dado => dado.valor > mediaMensal);
    
    // Retorna o número de dias acima da média
    return diasAcimaMedia.length;
}



// Chama a função e imprime o resultado
const resultado = diasAcimaDaMedia(dados);
console.log(`Número de dias com faturamento acima da média mensal: ${resultado}`);
