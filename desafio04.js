// Dados fornecidos
const dados = [
    { estado: "SP", valor: 67836.43 },
    { estado: "RJ", valor: 36678.66 },
    { estado: "MG", valor: 29229.88 },
    { estado: "ES", valor: 27165.48 },
    { estado: "Outros", valor: 19849.53 }
  ];
  
  // Função para calcular o percentual de cada estado
  function calcularPercentual(dados) {
      // Calcula o valor total
      const valorTotal = dados.reduce((total, estado) => total + estado.valor, 0);
  
      // Calcula o percentual de cada estado em relação ao valor total
      const percentuais = dados.map(estado => {
          const percentual = (estado.valor / valorTotal) * 100;
          return {
              estado: estado.estado,
              percentual: percentual.toFixed(2) // Arredonda para duas casas decimais
          };
      });
  
      return percentuais;
  }
  
  // Chama a função e imprime os resultados
  const resultado = calcularPercentual(dados);
  console.log("Percentual de representação por estado:");
  resultado.forEach(estado => {
      console.log(`${estado.estado}: ${estado.percentual}%`);
  });
  