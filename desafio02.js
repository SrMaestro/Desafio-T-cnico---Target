function fatorial (n){

if(n === 0 || n === 1 ){
    return 1

}else{

    return n * fatorial( n -1 )
}

}


function isPerfectSquare(num) {
    let sqrt = Math.sqrt(num);
    return sqrt === Math.floor(sqrt);
}


function isFibonacci(n) {
    // Calcular as duas expressões
    let expr1 = 5 * n * n + 4;
    let expr2 = 5 * n * n - 4;

    // Verificar se uma das expressões é um quadrado perfeito
    return isPerfectSquare(expr1) || isPerfectSquare(expr2);
}

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite um numero? ", function(numero) {
    
    if (isFibonacci(numero)) {
        console.log(numero + " pertence à sequência de Fibonacci. Seu fatorial e" + fatorial(numero));
    } else {
        console.log(numero + " não pertence à sequência de Fibonacci.");
    }


   


    
    // Fecha a interface após a resposta
    rl.close();
    
});



// console.log(fatorial(5));
