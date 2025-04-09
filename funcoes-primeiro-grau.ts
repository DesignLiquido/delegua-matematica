import { raizQuadrada } from "./funcoes-algebricas";

/**
 * Retorna o desenho da função afim.
 * @param {any} _ O visitante da instrução, normalmente um interpretador.
 * @param {number} a O valor de a.
 * @param {number} b O valor de b.
 * @returns O desenho da função afim.
 */
export function fun1(_: any, a: number, b: number) {
  const x = [b - 4, b - 3, b - 2, b - 1, b, b + 1, b + 2, b + 3, b + 4];
  const f = x.map(function (x) {
    return x * a + b;
  });

  return ["f(x) =" + f];
}

/**
 * Calcula a raiz da função afim.
 * @param {any} _ O visitante da instrução, normalmente um interpretador.
 * @param {number} a O valor de a.
 * @param {number} b O valor de b.
 * @returns A raiz da função afim.
 */
export function fun1R(_: any, a: number, b: number): number {
  return (-1 * b) / a;
}

/**
 * Retorna o desenho da função quadrática.
 * @param {any} _ O visitante da instrução, normalmente um interpretador.
 * @param {number} a O valor de a.
 * @param {number} b O valor de b.
 * @param {number} c O valor de c.
 * @returns O desenho da função quadrática.
 */
export function fun2(_: any, a: number, b: number, c: number) {
  const n = 2.5;
  var vetor = [];
  var passo = (n - -n) / (n - 1);
  for (var i = 0; i < n; i = i + 0.01) {
    vetor.push(-n - 1.945 + passo * i);
  }
  const x = vetor;
  const f = x.map(function (x) {
    return x * x * a + b * x + c;
  });

  return f;
}

/**
 * Calcula x do vértice.
 * @param {any} _ O visitante da instrução, normalmente um interpretador.
 * @param {number} a O valor de a.
 * @param {number} b O valor de b.
 * @param {number} c O valor de c.
 * @returns As raízes da função quadrática.
 */
export function xVertice(_: any, a: number, b: number, c: number): number {
  const xVertice = (-1 * b) / (2 * a);
  return xVertice;
}

/**
 * Calcula y do vértice.
 * @param {any} _ O visitante da instrução, normalmente um interpretador.
 * @param {number} a O valor de a.
 * @param {number} b O valor de b.
 * @param {number} c O valor de c.
 * @returns As raízes da função quadrática.
 */
export function yVertice(_: any, a: number, b: number, c: number): number {
  const yVertice = ((-1 * (Math.pow(b, 2) - 4 * a * c)) / 4) * a;

  return yVertice;
}

/**
 * Calcula as raízes da função quadrática.
 * @param {any} _ O visitante da instrução, normalmente um interpretador.
 * @param {number} a O valor de a.
 * @param {number} b O valor de b.
 * @param {number} c O valor de c.
 * @returns As raizes da função quadrática.
 */
export function fun2R(_: any, a: number, b: number, c: number) {
  const r1 = (-1 * b + raizQuadrada(_, b ** 2 - 4 * a * c)) / (2 * a);
  const r2 = (-1 * b - raizQuadrada(_, b ** 2 - 4 * a * c)) / (2 * a);

  return [r1, r2];
}

/**
 * Preenche um intervalo entre dois números dada uma cardinalidade.
 * @param {any} _ O visitante da instrução, normalmente um interpretador.
 * @param {number} valorInicial O valor inicial.
 * @param {number} valorDeParada O valor de parada.
 * @param {number} cardinalidade A cardinalidade.
 * @returns
 */
export function linspace(
  _: any,
  valorInicial: number,
  valorDeParada: number,
  cardinalidade: number
): Array<number> {
  const lista = [];
  const passo = (valorDeParada - valorInicial) / (cardinalidade - 1);
  for (var i = 0; i < cardinalidade; i++) {
    lista.push(valorInicial + passo * i);
  }
  
  return lista;
}
