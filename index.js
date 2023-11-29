function SomaDivisiveis(numero){
    let soma = 0

    for (let i = 0; i < numero; i++ ){
        if(i % 3 === 0 || i % 5 === 0){
            soma += i
        }
    }

    return soma
}

const numero = 10;
const resultado = SomaDivisiveis(numero);
console.log(`O somatório dos números divisíveis por 3 ou 5 até ${numero} é: ${resultado}`)