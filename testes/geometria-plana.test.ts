import {
  areaCirculo,
  areaLosango,
  areaQuadrado,
  areaRetangulo,
  areaTrapezio,
  areaTriangulo,
  distanciaDoisPontos,
  pontoMedio,
} from "../fontes/geometria-plana";

describe("areaCirculo", () => {
  it("calcula a área do círculo", () => {
    expect(areaCirculo(undefined, 4)).toEqual(50.26548245743669);
  });
});

describe("areaQuadrado", () => {
  it("calcula a área do quadrado", () => {
    expect(areaQuadrado(undefined, 4)).toEqual(16);
  });
});

describe("areaRetangulo", () => {
  it("calcula a área do retângulo", () => {
    expect(areaRetangulo(undefined, 4, 8)).toEqual(32);
  });
});

describe("areaLosango", () => {
  it("calcula a área do losango", () => {
    expect(areaLosango(undefined, 4, 8)).toEqual(16);
  });
});

describe("areaTrapezio", () => {
  it("calcula a área do trapézio", () => {
    expect(areaTrapezio(undefined, 8, 4, 7)).toEqual(42);
  });
});

describe("areaTriangulo", () => {
  it("calcula a área do triângulo", () => {
    expect(areaTriangulo(undefined, 8, 4)).toEqual(16);
  });
});

describe("distanciaDoisPontos", () => {
  it("calcula a distância entre dois pontos", () => {
    expect(distanciaDoisPontos(undefined, 8, 4, 0, 5)).toEqual(
      6.4031242374328485
    );
  });
});

describe("pontoMedio", () => {
  it("calcula o ponto médio", () => {
    expect(pontoMedio(undefined, 8, 4, 0, 5)).toEqual([6, 2.5]);
  });
});
