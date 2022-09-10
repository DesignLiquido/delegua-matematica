/*TRIGONOMETRIA*/

/**
 * Constante pi.
 * @see https://pt.wikipedia.org/wiki/Pi
 */
export function pi(): number { return Math.PI }

/**
 * Converte radiano para graus.
 * @param {numero} angulo Ângulo em radianos 
 * @returns O ângulo em graus
 */
export function graus(angulo: number): number {
  return angulo * (180 / Math.PI);
}

/**
 * Calcula o valor do seno de um ângulo.
 * @param {numero} angulo Ângulo em radiano.
 * @returns O seno do ângulo.
 */
export function seno(angulo: number): number {
  return Math.sin(angulo);
}

/**
 * Calcula o valor do cosseno de um ângulo.
 * @param {numero} angulo Ângulo em radiano.
 * @returns O cosseno do ângulo.
 */
export function cosseno(angulo: number): number {
  return Math.cos(angulo);
}

/**
 * Calcula o valor da tangente de um ângulo.
 * @param {numero} angulo Ângulo em radiano.
 * @returns A tangente do ângulo.
 */
export function tan(angulo: number): number {
  return Math.tan(angulo);
}

/**
 * Calcula o arco cosseno de um número.
 * @param {numero} valor Um valor.
 * @returns O arco cosseno.
 */
export function arcos(valor: number): number {
  return Math.acos(valor);
}

/**
 * Calcula o arco seno de um número.
 * @param {numero} valor Um valor.
 * @returns O arco seno.
 */
export function arsen(valor: number): number {
  return Math.asin(valor);
}

/**
 * Calcula o arco tangente de um número.
 * @param {numero} valor Um valor.
 * @returns O arco tangente.
 */
export function artan(valor: number): number {
  return Math.atan(valor);
}

/**
 * Calcula o valor radiano de um ângulo. O radiano é o comprimento do arco formado 
 * por um ângulo em uma circunferência.
 * @param {inteiro} angulo O ângulo, em graus, do valor radiano desejado.
 * @returns O valor, em radianos, do arco formado pelo ângulo.
 * @see https://pt.wikipedia.org/wiki/Radiano
 */
 export function radiano(angulo: number): number {
  return angulo * (Math.PI / 180);
}
