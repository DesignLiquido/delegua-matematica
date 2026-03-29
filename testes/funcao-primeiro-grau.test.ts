import {
  fun1R,
  linspace,
  fun2R,
  fun1,
  fun2,
  xVertice,
  yVertice,
} from "../fontes/funcoes-primeiro-grau";

describe("linspace", () => {
  it("intervalo preenchido", () => {
    expect(linspace(undefined, 10, 15, 5)).toEqual([
      10, 11.25, 12.5, 13.75, 15,
    ]);
  });
});

describe("fun1", () => {
  it("testa o desenho da função afim", () => {
    expect(fun1(undefined, 10, 5)).toEqual([
      "f(x) =15,25,35,45,55,65,75,85,95",
    ]);
  });
});

describe("fun1R", () => {
  it("calcula a raiz da função afim", () => {
    expect(fun1R(undefined, 10, 5)).toEqual(-0.5);
  });
});

describe("fun2", () => {
  it("testa o desenho da função quadrática", () => {
    expect(fun2(undefined, 10, 5, 3).length).toEqual(251);
  });
});

describe("fun2R", () => {
  it("calcula as raizes da função quadrática", () => {
    expect(fun2R(undefined, 2, 5, 3)).toEqual([-1, -1.5]);
  });
});

describe("xVertice", () => {
  it("calcula x do vértice", () => {
    expect(xVertice(undefined, 10, 5, 3)).toEqual(-0.25);
  });
});

describe("yVertice", () => {
  it("calcula y do vértice", () => {
    expect(yVertice(undefined, 10, 5, 3)).toEqual(237.5);
  });
});
