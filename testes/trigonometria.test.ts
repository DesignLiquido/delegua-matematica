import { pi, graus, seno, cosseno, radiano } from '../trigonometria';

describe('seno', () => {
  it('atira exceção se num for nulo', () => {
    expect(() => seno(null)).toThrow();
  })

  it('atira exceção se num é NaN', () => {
    expect(() => seno('egua')).toThrow();
  })

  it('calcula o seno', () => {
    expect(seno(90)).toBe(0.8939966636005579);
  })
})

describe('cosseno', () => {
  it('atira exceção se num for nulo', () => {
    expect(() => cosseno(null)).toThrow();
  })

  it('atira exceção se num é NaN', () => {
    expect(() => cosseno('egua')).toThrow();
  })

  it('calcula o cosseno', () => {
    expect(cosseno(90)).toBe(-0.4480736161291702);
  })
})

describe('graus', () => {
  it('atira exceção se num for nulo', () => {
    expect(() => graus(null)).toThrow();
  })

  it('atira exceção se num é NaN', () => {
    expect(() => graus('egua')).toThrow();
  })

  /* it('calcula o ângulo', () => {
    expect(graus(pi)).toBe(180);
  }) */
})

describe('radiano', () => {
  it('atira exceção se num for nulo', () => {
    expect(() => radiano(null)).toThrow();
  })

  it('calcula o radiano', () => {
    expect(radiano(180)).toBe(pi());
  })
})
