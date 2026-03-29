import { potencia, raizQuadrada } from "./funcoes-algebricas";

/**
 * Função da área do círculo.
 * @param {any} _ O visitante da instrução, normalmente um interpretador.
 * @param {number} raio Raio do circulo.
 * @returns A área do círculo.
 */
export function areaCirculo(_: any, raio: number): number {
  return (Math.PI * raio * raio * 100) / 100;
}

/**
 * Função da área do quadrado.
 * @param {any} _ O visitante da instrução, normalmente um interpretador.
 * @param {number} lado Lado do quadrado.
 * @returns A área do quadrado.
 */
export function areaQuadrado(_: any, lado: number): number {
  return lado * lado;
}

/**
 * Função da área do retângulo.
 * @param {any} _ O visitante da instrução, normalmente um interpretador.
 * @param {number} ladoX Lado eixo x do retângulo.
 * @param {number} ladoY Lado eixo y do retângulo.
 * @returns A área do retângulo.
 */
export function areaRetangulo(_: any, ladoX: number, ladoY: number): number {
  return ladoX * ladoY;
}

/**
 * Função da área do losango.
 * @param {any} _ O visitante da instrução, normalmente um interpretador.
 * @param {number} diagonalMaior Lado eixo x do losango.
 * @param {number} diagonalMenor Lado eixo y do losango.
 * @returns A área do losango.
 */
export function areaLosango(
  _: any,
  diagonalMaior: number,
  diagonalMenor: number
): number {
  return (diagonalMaior * diagonalMenor) / 2;
}

/**
 * Função da área do trapézio.
 * @param {any} _ O visitante da instrução, normalmente um interpretador.
 * @param {number} baseMaior Base maior do trapézio.
 * @param {number} baseMenor Base menor do trapézio.
 * @param {number} altura Altura do trapézio.
 * @returns A área do trapézio.
 */
export function areaTrapezio(
  _: any,
  baseMaior: number,
  baseMenor: number,
  altura: number
): number {
  return ((baseMaior + baseMenor) * altura) / 2;
}

/**
 * Função da área do triângulo.
 * @param {any} _ O visitante da instrução, normalmente um interpretador.
 * @param {number} base Base do triângulo.
 * @param {number} altura Altura do triângulo.
 * @returns A área do triângulo.
 */
export function areaTriangulo(_: any, base: number, altura: number): number {
  return (base * altura) / 2;
}

/**
 * Função distância entre 2 pontos.
 * @param {any} _ O visitante da instrução, normalmente um interpretador.
 * @param {number} x1 x inicial.
 * @param {number} x2 x final.
 * @param {number} y1 y inicial.
 * @param {number} y2 y final.
 * @returns A distância entre os dois pontos.
 */
export function distanciaDoisPontos(
  _: any,
  x1: number,
  x2: number,
  y1: number,
  y2: number
) {
  const x = potencia(_, x2, 2) - 2 * x2 * x1 + potencia(_, x1, 2);
  const y = potencia(_, y2, 2) - 2 * y2 * y1 + potencia(_, y1, 2);
  return raizQuadrada(_, x + y);
}

/**
 * Função do ponto médio.
 * @param {any} _ O visitante da instrução, normalmente um interpretador.
 * @param {number} x1 x inicial.
 * @param {number} x2 x final.
 * @param {number} y1 y inicial.
 * @param {number} y2 y final.
 * @returns Uma lista contendo o ponto médio de x e y respectivamente.
 */
export function pontoMedio(
  _: any,
  x1: number,
  x2: number,
  y1: number,
  y2: number
): Array<number> {
  const xm = (x2 + x1) / 2;
  const ym = (y2 + y1) / 2;
  return [xm, ym];
}
