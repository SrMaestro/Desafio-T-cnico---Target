const { log } = require('console');
const dados = require('./dados.json')
import chalk from 'chalk';



// console.log(dados[0].dia)
// console.log(dados[0].valor)

const valores = dados.map(dado => dado.valor);
const menorValor = Math.min(...valores);
let menoresValores = []

for (let index = 0; index < dados.length; index++) {
    // const element = dados[index];

    if (dados[index].valor === menorValor) {
        menoresValores.push(dados[index]);

    } else {
        
    }

}

console.log(menoresValores);


const chalk = require('chalk');

console.log(chalk.blue.bold('--- Menores Valores ---'));

menoresValores.forEach(dado => {
    console.log(chalk.green(`Dia: ${dado.dia}, Valor: ${dado.valor}`));
});