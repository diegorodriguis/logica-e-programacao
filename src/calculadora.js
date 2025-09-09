function somarDoisNumeros(valor1, valor2){
    const resultado = valor1 + valor2;
    return resultado;
}

function calcularMediaDeDoisNumeros(valor1, valor2){
    const soma = somarDoisNumeros(valor1, valor2)
    const mediaDeDoisValores = soma / 2;
    return mediaDeDoisValores
}

module.exports = {
    somarDoisNumeros
}