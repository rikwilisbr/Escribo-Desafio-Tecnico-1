function SomaDivisiveis(num){
    let soma = 0

    for (let i = 0; i < num; i++ ){
        if(i % 3 === 0 || i % 5 === 0){
            soma += i
        }
    }

    return soma
}

const numero = 11;
const parseIntNumero = parseInt(numero)

if(parseIntNumero < 0){
    console.log('O número deve ser positivo')
} else {
    const resultado = SomaDivisiveis(numero);
    console.log(`O somatório dos números divisíveis por 3 ou 5 até ${parseIntNumero} é: ${resultado}`)
}
