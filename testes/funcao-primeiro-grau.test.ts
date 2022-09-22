import { fun1R, linspace, fun2R, fun1, fun2, xVertice, yVertice } from '../funcao-primeiro-grau';

describe('linspace', () => {
  it('intervalo preenchido', () => {
    expect(linspace(10, 15, 5)).toEqual([ 10, 11.25, 12.5, 13.75, 15 ])
  })
})

describe('fun1', () => {
  it('testa o desenho da função afim', () => {
    expect(fun1(10, 5)).toEqual(["f(x) =15,25,35,45,55,65,75,85,95"]);
  })
})

describe('fun1R', () => {
  it('calula a raiz da função afim', () => {
    expect(fun1R(10, 5)).toEqual(-0.5);
  })
})

describe('fun2', () => {
  it('testa o desenho da função quadrática', () => {
    expect(fun2(10, 5, 3).length).toEqual(251);
  })
})

describe('fun2R', () => {
  it('calula as raizes da função quadrática', () => {
    expect(fun2R(2, 5, 3)).toEqual([ -1, -1.5 ]);
  })
})

describe('xVertice', () => {
  it('calula x do vértice', () => {
    expect(xVertice(10, 5, 3)).toEqual(-0.25);
  })
})

describe('yVertice', () => {
  it('calula y do vértice', () => {
    expect(yVertice(10, 5, 3)).toEqual(237.5);
  })
})
