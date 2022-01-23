import { aprox, raizQuadrada } from '../index';

describe('aprox', () => {
  it('atira exceção se num for nulo', () => {
    expect(() => aprox(null)).toThrow();
  })

  it('arredonda um número', () => {
    expect(aprox(2.9999999999, 0)).toBe("3");
  })
})

describe('raizQuadrada', () => {
  it.skip('atira exceção se num for nulo', () => {
    expect(() => raizQuadrada(null)).toThrow();
  })

  it('calcula a raiz quadrada', () => {
    expect(raizQuadrada(4)).toBe(2);
  })
})
