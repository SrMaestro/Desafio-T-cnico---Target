function reverterStringManual(str) {
    let revertido = ''; // String para armazenar o resultado

    // Loop para percorrer a string de trás para frente
    for (let i = str.length - 1; i >= 0; i--) {
        revertido += str[i]; // Adiciona o caractere atual ao resultado
    }

    return revertido; // Retorna a string revertida
}

// Exemplo de uso
const original = "banana";
const resultado = reverterStringManual(original);
console.log(resultado); // Saída: "fedcba"
