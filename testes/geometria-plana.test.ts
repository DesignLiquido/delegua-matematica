import { areaCirculo, areaLosango, areaQuadrado, areaRetangulo, areaTrapezio, areaTriangulo, distanciaDoisPontos, pontoMedio } from '../geometria-plana';

describe('areaCirculo', () => {
  it('calcula a área do círculo', () => {
    expect(areaCirculo(4)).toEqual(50.26548245743669);
  })
});

describe('areaQuadrado', () => {
  it('calcula a área do quadrado', () => {
    expect(areaQuadrado(4)).toEqual(16);
  })
});

describe('areaRetangulo', () => {
  it('calcula a área do retângulo', () => {
    expect(areaRetangulo(4, 8)).toEqual(32);
  })
});

describe('areaLosango', () => {
  it('calcula a área do losango', () => {
    expect(areaLosango(4, 8)).toEqual(16);
  })
});

describe('areaTrapezio', () => {
  it('calcula a área do trapézio', () => {
    expect(areaTrapezio(8, 4, 7)).toEqual(42);
  })
});

describe('areaTriangulo', () => {
  it('calcula a área do triângulo', () => {
    expect(areaTriangulo(8, 4)).toEqual(16);
  })
});

describe('distanciaDoisPontos', () => {
  it('calcula a distância entre dois pontos', () => {
    expect(distanciaDoisPontos(8, 4, 0, 5)).toEqual(6.4031242374328485);
  })
});

describe('pontoMedio', () => {
  it('calcula o ponto médio', () => {
    expect(pontoMedio(8, 4, 0, 5)).toEqual([6, 2.5]);
  })
});