import { potencia, raizQuadrada } from "./funcoes-algebricas";

/**
 * Função da área do círculo.
 * @param {numero} raio Raio do circulo.
 * @returns A área do círculo.
 */
export function areaCirculo(raio: number) : number{
  return ((Math.PI * raio * raio * 100) / 100);
}

/**
 * Função da área do quadrado.
 * @param {numero} lado Lado do quadrado.
 * @returns A área do quadrado.
 */
export function areaQuadrado(lado: number): number {
  return lado * lado;
}

/**
 * Função da área do retângulo.
 * @param {numero} ladoX Lado eixo x do retângulo.
 * @param {numero} ladoY Lado eixo y do retângulo.
 * @returns A área do retângulo.
 */
export function areaRetangulo(ladoX: number,ladoY: number): number {
  return ladoX * ladoY;
}

/**
 * Função da área do losango.
 * @param {numero} diagonalMaior Lado eixo x do losango.
 * @param {numero} diagonalMenor Lado eixo y do losango.
 * @returns A área do losango.
 */
export function areaLosango(diagonalMaior: number, diagonalMenor: number): number {
  return (diagonalMaior * diagonalMenor) / 2;
}

/**
 * Função da área do trapézio.
 * @param {numero} baseMaior Base maior do trapézio.
 * @param {numero} baseMenor Base menor do trapézio.
 * @param {numero} altura Altura do trapézio.
 * @returns A área do trapézio.
 */
export function areaTrapezio(baseMaior: number, baseMenor: number, altura: number): number {
  return ((baseMaior + baseMenor) * altura) / 2;
}

/**
 * Função da área do triângulo.
 * @param {numero} base Base do triângulo.
 * @param {numero} altura Altura do triângulo.
 * @returns A área do triângulo.
 */
export function areaTriangulo(base: number, altura: number): number {
  return (base * altura) / 2;
}

/**
 * Função distância entre 2 pontos.
 * @param {numero} x1 x inicial.
 * @param {numero} x2 x final.
 * @param {numero} y1 y inicial.
 * @param {numero} y2 y final.
 * @returns A distância entre os dois pontos.
 */
export function distanciaDoisPontos(x1: number, x2 : number, y1 : number, y2 : number){
  const x = (potencia(x2, 2)) - 2 * x2 * x1 + (potencia(x1, 2));
  const y = (potencia(y2, 2)) - 2 * y2 * y1 + (potencia(y1, 2));
  return raizQuadrada((x + y));
}

/**
 * Função do ponto médio.
 * @param {numero} x1 x inicial.
 * @param {numero} x2 x final.
 * @param {numero} y1 y inicial.
 * @param {numero} y2 y final.
 * @returns Uma lista contendo o ponto médio de x e y respectivamente.
 */
export function pontoMedio(x1: number, x2 : number, y1 : number, y2 : number): Array<number> {
  const xm = (x2 + x1) / 2;
  const ym = (y2 + y1) / 2;
  return [xm, ym];
}