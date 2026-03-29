import {
  pi,
  graus,
  seno,
  cosseno,
  radiano,
  tangente,
  arcoCosseno,
  arcoSeno,
  arcoTangente,
} from "../fontes/trigonometria";

describe("seno", () => {
  it("atira exceção se num for nulo", () => {
    expect(() => seno(undefined, null as any)).toThrow();
  });

  it("calcula o seno de 90 graus", () => {
    expect(seno(undefined, 90)).toBe(0.8939966636005579);
  });
});

describe("cosseno", () => {
  it("atira exceção se num for nulo", () => {
    expect(() => cosseno(undefined, null as any)).toThrow();
  });

  it("calcula o cosseno de 90 graus", () => {
    expect(cosseno(undefined, 90)).toBe(-0.4480736161291702);
  });
});

describe("graus", () => {
  it("atira exceção se num for nulo", () => {
    expect(() => graus(undefined, null as any)).toThrow();
  });

  it("calcula o ângulo de pi", () => {
    expect(graus(undefined, Math.PI)).toBe(180);
  });
});

describe("radiano", () => {
  it("atira exceção se num for nulo", () => {
    expect(() => radiano(undefined, null as any)).toThrow();
  });

  it("calcula o radiano de 180 graus", () => {
    expect(radiano(undefined, 180)).toBe(Math.PI);
  });
});

describe("tangente", () => {
  it("atira exceção se num for nulo", () => {
    expect(() => tangente(undefined, null as any)).toThrow();
  });

  it("calcula a tangente", () => {
    expect(tangente(undefined, 180)).toEqual(1.3386902103511544);
  });
});

describe("arcoCosseno", () => {
  it("atira exceção se num for nulo", () => {
    expect(() => arcoCosseno(undefined, null as any)).toThrow();
  });

  it("calcula o arco cosseno de zero", () => {
    expect(arcoCosseno(undefined, 0)).toEqual(1.5707963267948966);
  });
});

describe("arcoSeno", () => {
  it("atira exceção se num for nulo", () => {
    expect(() => arcoSeno(undefined, null as any)).toThrow();
  });

  it("calcula o arco seno de 1", () => {
    expect(arcoSeno(undefined, 1)).toEqual(1.5707963267948966);
  });
});

describe("arcoTangente", () => {
  it("atira exceção se num for nulo", () => {
    expect(() => arcoTangente(undefined, null as any)).toThrow();
  });

  it("calcula o arco seno", () => {
    expect(arcoTangente(undefined, 1)).toEqual(0.7853981633974483);
  });
});
