const { somarDoisNumeros } = require('../src/calculadora');
const { expect } = require('chai');

describe('Testes da Função de Soma', function () {
    it('A função deve ser capaz de somar dois números positivos', function() {
        //Coleta o resultado da função
        const resultadoDaSoma = somarDoisNumeros(5, 3);

        //Compara o resultado com o valor que voce espera
        expect(resultadoDaSoma).to.equal(8);
    });

    it('A função deve ser capaz de somar um numero positivo e um negativo', function() {
        //Coleta o resultado da função
        const resultadoDaSoma = somarDoisNumeros(50, -15);

        //Compara o resultado com o valor que voce espera
        expect(resultadoDaSoma).to.equal(35);
    });

    it('A função deve ser capaz de somar dois numeros negativos', function() {
        //Coleta o resultado da função
        const resultadoDaSoma = somarDoisNumeros(-20, -15);

        //Compara o resultado com o valor que voce espera
        expect(resultadoDaSoma).to.equal(-35);
    });

    it('A função deve ser capaz de somar um numero negativo e um positivo', function() {
         //Coleta o resultado da função
        const resultadoDaSoma = somarDoisNumeros(-20, 21);

        //Compara o resultado com o valor que voce espera
        expect(resultadoDaSoma).to.equal(1);
    });
});