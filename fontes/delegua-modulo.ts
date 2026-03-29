import { gerarPontosAbscissa, somaElementosMatriz } from './algebra-linear';
import { limite } from './calculo-diferencial-integral';
import { jurosCompostos, jurosSimples } from './financeira';
import { aleatorio, exp, logaritmo, potencia, raizQuadrada } from './funcoes-algebricas';
import { fun1, fun1R, fun2, fun2R, linspace, xVertice, yVertice } from './funcoes-primeiro-grau';
import { areaCirculo, areaLosango, areaQuadrado, areaRetangulo, areaTrapezio, areaTriangulo, distanciaDoisPontos, pontoMedio } from './geometria-plana';
import { aprox, arredondarParaBaixo, pontosAleatorios } from './miscelanea';
import { arcoCosseno, arcoSeno, arcoTangente, cosseno, graus, pi, radiano, seno, tangente } from './trigonometria';
import { comprimentoVetor, numeroOcorrencias } from './vetores';

export const DeleguaModuloMatematica = {
    // Álgebra Linear
    somaElementosMatriz: {
        tipoRetorno: 'número',
        funcao: somaElementosMatriz,
        argumentos: [
            { nome: 'matriz', tipo: 'vetor' }
        ]
    },
    gerarPontosAbscissa: {
        tipoRetorno: 'vetor',
        funcao: gerarPontosAbscissa,
        argumentos: [
            { nome: 'distancia', tipo: 'número' },
            { nome: 'valorPontoCentral', tipo: 'número' },
            { nome: 'numeroPontos', tipo: 'número' }
        ]
    },

    // Cálculo Diferencial e Integral
    limite: {
        tipoRetorno: 'número',
        funcao: limite,
        argumentos: [
            { nome: 'valor', tipo: 'número' },
            { nome: 'min', tipo: 'número' },
            { nome: 'max', tipo: 'número' }
        ]
    },

    // Financeira
    jurosSimples: {
        tipoRetorno: 'número',
        funcao: jurosSimples,
        argumentos: [
            { nome: 'capital', tipo: 'número' },
            { nome: 'taxaDeJuros', tipo: 'número' },
            { nome: 'tempo', tipo: 'número' }
        ]
    },
    jurosCompostos: {
        tipoRetorno: 'número',
        funcao: jurosCompostos,
        argumentos: [
            { nome: 'capital', tipo: 'número' },
            { nome: 'taxaDeJuros', tipo: 'número' },
            { nome: 'tempo', tipo: 'número' }
        ]
    },

    // Funções Algébricas
    aleatorio: {
        tipoRetorno: 'número',
        funcao: aleatorio,
        argumentos: []
    },
    exp: {
        tipoRetorno: 'número',
        funcao: exp,
        argumentos: [
            { nome: 'valor', tipo: 'número' }
        ]
    },
    logaritmo: {
        tipoRetorno: 'número',
        funcao: logaritmo,
        argumentos: [
            { nome: 'valor', tipo: 'número' }
        ]
    },
    potencia: {
        tipoRetorno: 'número',
        funcao: potencia,
        argumentos: [
            { nome: 'base', tipo: 'número' },
            { nome: 'expoente', tipo: 'número' }
        ]
    },
    raizQuadrada: {
        tipoRetorno: 'número',
        funcao: raizQuadrada,
        argumentos: [
            { nome: 'valor', tipo: 'número' }
        ]
    },

    // Funções de Primeiro e Segundo Grau
    fun1: {
        tipoRetorno: 'vetor',
        funcao: fun1,
        argumentos: [
            { nome: 'a', tipo: 'número' },
            { nome: 'b', tipo: 'número' }
        ]
    },
    fun1R: {
        tipoRetorno: 'número',
        funcao: fun1R,
        argumentos: [
            { nome: 'a', tipo: 'número' },
            { nome: 'b', tipo: 'número' }
        ]
    },
    fun2: {
        tipoRetorno: 'vetor',
        funcao: fun2,
        argumentos: [
            { nome: 'a', tipo: 'número' },
            { nome: 'b', tipo: 'número' },
            { nome: 'c', tipo: 'número' }
        ]
    },
    fun2R: {
        tipoRetorno: 'vetor',
        funcao: fun2R,
        argumentos: [
            { nome: 'a', tipo: 'número' },
            { nome: 'b', tipo: 'número' },
            { nome: 'c', tipo: 'número' }
        ]
    },
    xVertice: {
        tipoRetorno: 'número',
        funcao: xVertice,
        argumentos: [
            { nome: 'a', tipo: 'número' },
            { nome: 'b', tipo: 'número' },
            { nome: 'c', tipo: 'número' }
        ]
    },
    yVertice: {
        tipoRetorno: 'número',
        funcao: yVertice,
        argumentos: [
            { nome: 'a', tipo: 'número' },
            { nome: 'b', tipo: 'número' },
            { nome: 'c', tipo: 'número' }
        ]
    },
    linspace: {
        tipoRetorno: 'vetor',
        funcao: linspace,
        argumentos: [
            { nome: 'valorInicial', tipo: 'número' },
            { nome: 'valorDeParada', tipo: 'número' },
            { nome: 'cardinalidade', tipo: 'número' }
        ]
    },

    // Geometria Plana
    areaCirculo: {
        tipoRetorno: 'número',
        funcao: areaCirculo,
        argumentos: [
            { nome: 'raio', tipo: 'número' }
        ]
    },
    areaQuadrado: {
        tipoRetorno: 'número',
        funcao: areaQuadrado,
        argumentos: [
            { nome: 'lado', tipo: 'número' }
        ]
    },
    areaRetangulo: {
        tipoRetorno: 'número',
        funcao: areaRetangulo,
        argumentos: [
            { nome: 'ladoX', tipo: 'número' },
            { nome: 'ladoY', tipo: 'número' }
        ]
    },
    areaLosango: {
        tipoRetorno: 'número',
        funcao: areaLosango,
        argumentos: [
            { nome: 'diagonalMaior', tipo: 'número' },
            { nome: 'diagonalMenor', tipo: 'número' }
        ]
    },
    areaTrapezio: {
        tipoRetorno: 'número',
        funcao: areaTrapezio,
        argumentos: [
            { nome: 'baseMaior', tipo: 'número' },
            { nome: 'baseMenor', tipo: 'número' },
            { nome: 'altura', tipo: 'número' }
        ]
    },
    areaTriangulo: {
        tipoRetorno: 'número',
        funcao: areaTriangulo,
        argumentos: [
            { nome: 'base', tipo: 'número' },
            { nome: 'altura', tipo: 'número' }
        ]
    },
    distanciaDoisPontos: {
        tipoRetorno: 'número',
        funcao: distanciaDoisPontos,
        argumentos: [
            { nome: 'x1', tipo: 'número' },
            { nome: 'x2', tipo: 'número' },
            { nome: 'y1', tipo: 'número' },
            { nome: 'y2', tipo: 'número' }
        ]
    },
    pontoMedio: {
        tipoRetorno: 'vetor',
        funcao: pontoMedio,
        argumentos: [
            { nome: 'x1', tipo: 'número' },
            { nome: 'x2', tipo: 'número' },
            { nome: 'y1', tipo: 'número' },
            { nome: 'y2', tipo: 'número' }
        ]
    },

    // Miscelânea
    aprox: {
        tipoRetorno: 'qualquer',
        funcao: aprox,
        argumentos: [
            { nome: 'x', tipo: 'qualquer' },
            { nome: 'casasDecimais', tipo: 'número' }
        ]
    },
    arredondarParaBaixo: {
        tipoRetorno: 'número',
        funcao: arredondarParaBaixo,
        argumentos: [
            { nome: 'valor', tipo: 'número' }
        ]
    },
    pontosAleatorios: {
        tipoRetorno: 'vetor',
        funcao: pontosAleatorios,
        argumentos: [
            { nome: 'numeroPontos', tipo: 'número' }
        ]
    },

    // Trigonometria
    pi: {
        tipoRetorno: 'número',
        funcao: pi,
        argumentos: []
    },
    graus: {
        tipoRetorno: 'número',
        funcao: graus,
        argumentos: [
            { nome: 'angulo', tipo: 'número' }
        ]
    },
    radiano: {
        tipoRetorno: 'número',
        funcao: radiano,
        argumentos: [
            { nome: 'angulo', tipo: 'número' }
        ]
    },
    seno: {
        tipoRetorno: 'número',
        funcao: seno,
        argumentos: [
            { nome: 'angulo', tipo: 'número' }
        ]
    },
    cosseno: {
        tipoRetorno: 'número',
        funcao: cosseno,
        argumentos: [
            { nome: 'angulo', tipo: 'número' }
        ]
    },
    tangente: {
        tipoRetorno: 'número',
        funcao: tangente,
        argumentos: [
            { nome: 'angulo', tipo: 'número' }
        ]
    },
    arcoCosseno: {
        tipoRetorno: 'número',
        funcao: arcoCosseno,
        argumentos: [
            { nome: 'valor', tipo: 'número' }
        ]
    },
    arcoSeno: {
        tipoRetorno: 'número',
        funcao: arcoSeno,
        argumentos: [
            { nome: 'valor', tipo: 'número' }
        ]
    },
    arcoTangente: {
        tipoRetorno: 'número',
        funcao: arcoTangente,
        argumentos: [
            { nome: 'valor', tipo: 'número' }
        ]
    },

    // Vetores
    comprimentoVetor: {
        tipoRetorno: 'número',
        funcao: comprimentoVetor,
        argumentos: [
            { nome: 'vetor', tipo: 'vetor' }
        ]
    },
    numeroOcorrencias: {
        tipoRetorno: 'número',
        funcao: numeroOcorrencias,
        argumentos: [
            { nome: 'vetor', tipo: 'vetor' },
            { nome: 'valor', tipo: 'qualquer' }
        ]
    }
}
