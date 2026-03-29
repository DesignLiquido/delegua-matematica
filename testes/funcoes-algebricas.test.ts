import {
  aleatorio,
  exp,
  logaritmo,
  potencia,
  raizQuadrada,
} from "../fontes/funcoes-algebricas";

describe("exp", () => {
  it("calcula a constante de Euler elevada ao parâmetros", () => {
    expect(exp(undefined, 10)).toEqual(22026.465794806718);
  });
});

describe("logaritmo", () => {
  it("calcula o logarítimo natural", () => {
    expect(logaritmo(undefined, 10)).toEqual(2.302585092994046);
  });
});

describe("potencia", () => {
  it("calcula a potência natural", () => {
    expect(potencia(undefined, 10, 2)).toEqual(100);
  });
});

describe("aleatorio", () => {
  it("testa numero aleatorio", () => {
    expect(typeof aleatorio()).toBe("number");
  });
});

describe("raizQuadrada", () => {
  it("atira exceção se num for nulo", () => {
    expect(() => raizQuadrada(undefined, null as any)).toThrow();
  });

  it("calcula a raiz quadrada de 4", () => {
    expect(raizQuadrada(undefined, 4)).toBe(2);
  });
});
