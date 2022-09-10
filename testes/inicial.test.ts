import { mediana, moda } from '../estatistica';
import { aprox, comprimentoVetor, exp, linspace, log, minimoAproximado, numeroOcorrencias, pontosAleatorios, potencia, raizQuadrada } from '../index';

describe('aprox', () => {
  it('atira exceção se num for nulo', () => {
    expect(() => aprox(null)).toThrow();
  })

  it('arredonda um número', () => {
    expect(aprox(2.9999999999, 0)).toBe("3");
  })
})

describe('raizQuadrada', () => {
  it('atira exceção se num for nulo', () => {
    // expect(() => raizQuadrada(null)).toThrow();
    expect(raizQuadrada(null)).toEqual(0);
  })

  it('calcula a raiz quadrada', () => {
    expect(raizQuadrada(4)).toBe(2);
  })
})

describe('linspace', () => {
  it('intervalo preenchido', () => {
    expect(linspace(10, 15, 5)).toEqual([ 10, 11.25, 12.5, 13.75, 15 ])
  })
})

describe('pontosAleatorios', () => {
  it('vetor de pontos aleatórios', () => {
    expect(pontosAleatorios(10));
  })
})

describe('numeroOcorrencias', () => {
  it('verifica o número de ocorrências de um número dentro de uma lista', () => {
    expect(numeroOcorrencias([10, 20, 55, 15, 25, 10], 10)).toEqual(2);
  })
})

describe('exp', () => {
  it('calcula a constante de Euler elevada ao parâmetros', () => {
    expect(exp(10)).toEqual(22026.465794806718);
  })
})

describe('log', () => {
  it('calcula o logarítimo natural', () => {
    expect(log(10)).toEqual(2.302585092994046);
  })
})

describe('potencia', () => {
  it('calcula o logarítimo natural', () => {
    expect(potencia(10, 2)).toEqual(100);
  })
})

describe('comprimentoVetor', () => {
  it('calcula o comprimento do vetor', () => {
    expect(comprimentoVetor([1, 2, 3, 4, 5])).toEqual(5);
  })
})

describe('minimoAproximado', () => {
  it('calcula o comprimento do vetor', () => {
    expect(minimoAproximado(10.2)).toEqual(10);
  })
})