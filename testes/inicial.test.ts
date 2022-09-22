import { aprox, comprimentoVetor,  minimoAproximado, numeroOcorrencias, pontosAleatorios } from '../index';

describe('aprox', () => {
  it('atira exceção se num for nulo', () => {
    expect(() => aprox(null)).toThrow();
  })

  it('arredonda um número', () => {
    expect(aprox(2.9999999999, 0)).toBe("3");
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