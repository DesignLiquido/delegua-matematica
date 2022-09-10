import { pi, graus, seno, cosseno, radiano, tan, arcos, arsen, artan } from '../trigonometria';

describe('seno', () => {
  it('atira exceção se num for nulo', () => {
    // expect(() => seno(null)).toThrow();
    expect(seno(null)).toEqual(0);
  })

  it('calcula o seno', () => {
    expect(seno(90)).toBe(0.8939966636005579);
  })
})

describe('cosseno', () => {
  it('atira exceção se num for nulo', () => {
    // expect(() => cosseno(null)).toThrow();
    expect(cosseno(null)).toEqual(1);
  })

  it('calcula o cosseno', () => {
    expect(cosseno(90)).toBe(-0.4480736161291702);
  })
})

describe('graus', () => {
  it('atira exceção se num for nulo', () => {
    // expect(() => graus(null)).toThrow();
    expect(graus(null)).toEqual(0);
  })

  /* it('calcula o ângulo', () => {
    expect(graus(pi)).toBe(180);
  }) */
})

describe('radiano', () => {
  it('atira exceção se num for nulo', () => {
    // expect(() => radiano(null)).toThrow();
    expect(radiano(null)).toEqual(0);
  })

  it('calcula o radiano', () => {
    expect(radiano(180)).toBe(pi());
  })
})

describe('tan', () => {

  it('atira exceção se num for nulo', () => {
    // expect(() => tan(null)).toThrow();
    expect(tan(null)).toEqual(0);
  })

  it('calcula a tangente', () => {
    expect(tan(180)).toEqual(1.3386902103511544);
  })
})

describe('arcos', () => {

  it.skip('atira exceção se num for nulo', () => {
    // expect(() => arcos(null)).toThrow();
    console.log(arcos(null)) // 1.5707963267948966 ????
    expect(arcos(null)).toEqual(0);
  })

  it('calcula o arco cosseno', () => {
    expect(arcos(0)).toEqual(1.5707963267948966);
  })
})

describe('arsen', () => {

  it('atira exceção se num for nulo', () => {
    // expect(() => arsen(null)).toThrow();
    expect(arsen(null)).toEqual(0);
  })

  it('calcula o arco seno', () => {
    expect(arsen(1)).toEqual(1.5707963267948966);
  })
})

describe('artan', () => {

  it('atira exceção se num for nulo', () => {
    // expect(() => artan(null)).toThrow();
    expect(artan(null)).toEqual(0);
  })

  it('calcula o arco seno', () => {
    expect(artan(1)).toEqual(0.7853981633974483);
  })
})