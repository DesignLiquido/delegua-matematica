import { raizQuadrada } from "./funcoes-algebricas";

/**
 * Retorna o desenho da função afim.
 * @param {number} a O valor de a. 
 * @param {number} b O valor de b.
 * @returns O desenho da função afim.
 */
export function fun1(a: number,b: number){
  const x = [b-4,b-3,b-2,b-1,b,b+1,b+2,b+3,b+4];
  const f = x.map(function(x) { return ((x * a)+b); });
  return ['f(x) ='+f];
}

/**
 * Calcula a raíz da função afim.
 * @param {number} a O valor de a. 
 * @param {number} b O valor de b.
 * @returns A raiz da função afim.
 */
 export function fun1R(a: number, b: number): number {
  return (-1 * b) / a;
};

/**
 * Retorna o desenho da função quadrática.
 * @param {number} a O valor de a. 
 * @param {number} b O valor de b.
 * @param {number} c O valor de c.
 * @returns O desenho da função quadrática.
 */
export function fun2(a: number, b: number, c: number) { //Passar funções para arquivos corretos
  const n = 2.5;
  var arr = [];
  var step = (n - (-n)) / (n- 1);
  for (var i = 0; i < n; i=i+0.01) {
      arr.push(((-n-1.945) + (step * i)));
  }
  const x = arr;
  const f = x.map(function(x) { return ((x * x * a)+(b * x)+c); });
  return f;
}

/**
 * Calcula x do vértice.
 * @param {number} a O valor de a. 
 * @param {number} b O valor de b.
 * @param {number} c O valor de c.
 * @returns As raizes da função quadrática.
 */
 export function xVertice(a: number, b: number, c: number): number {
  const xv = (-1 * b) / (2 * a);

  return xv;
};

/**
 * Calcula y do vértice.
 * @param {number} a O valor de a. 
 * @param {number} b O valor de b.
 * @param {number} c O valor de c.
 * @returns As raizes da função quadrática.
 */
 export function yVertice(a: number, b: number, c: number): number {
  const yv = (-1 * (Math.pow(b, 2) - (4 * a * c))) / 4 * a;

  return yv;
};

/**
 * Calcula as raízes da função quadrática.
 * @param {number} a O valor de a. 
 * @param {number} b O valor de b.
 * @param {number} c O valor de c.
 * @returns As raizes da função quadrática.
 */
export function fun2R(a: number, b: number, c: number) {
  const r1 = ((-1 * b) + raizQuadrada((b ** 2) - (4 * a * c))) / (2 * a);
  const r2 = ((-1 * b) - raizQuadrada((b ** 2) - (4 * a * c))) / (2 * a);

  return [r1, r2];
};

/**
 * Preenche um intervalo entre dois números dada uma cardinalidade.
 * @param {numero} valorInicial O valor inicial.
 * @param {numero} valorDeParada O valor de parada.
 * @param {numero} cardinalidade A cardinalidade.
 * @returns 
 */
 export function linspace(valorInicial: number, valorDeParada: number, cardinalidade: number): Array<number> {
  const lista = [];
  const passo = (valorDeParada - valorInicial) / (cardinalidade - 1);
  for (var i = 0; i < cardinalidade; i++) {
    lista.push(valorInicial + (passo * i));
  }
  return lista;
};