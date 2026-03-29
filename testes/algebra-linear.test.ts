import { gerarPontosAbscissa, somaElementosMatriz } from "../fontes/algebra-linear";

describe("somaElementosMatriz", () => {
  it("calcula a soma dos elementos da matriz", () => {
    expect(
      somaElementosMatriz(undefined, [
        [1, 2, 3, 4],
        [1, 2, 3, 4],
      ])
    ).toEqual(20);
  });
});

describe("gerarPontosAbscissa", () => {
  it("calcula valores para abcissa", () => {
    expect(gerarPontosAbscissa(undefined, 10, 5, 4)).toEqual([-15, -5, 5, 15]);
  });

  it("calcula valores para abcissa quando omitido terceiro parâmetro", () => {
    // por padrão o terceiro param é igual a 7
    expect(gerarPontosAbscissa(undefined, 10, 5)).toEqual([
      -25, -15, -5, 5, 15, 25, 35,
    ]);
  });
});
