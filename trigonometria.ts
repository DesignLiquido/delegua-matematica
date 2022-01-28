/*TRIGONOMETRIA*/

/**
 * Constante pi.
 * @see https://pt.wikipedia.org/wiki/Pi
 */
export function pi(): number { return Math.PI }

export function graus(angle: number): number {
  return angle * (180 / Math.PI);
}

//Seno de um número
export function seno(valor: number): number {
  return Math.sin(valor);
}

//Cosseno de um número
export function cosseno(valor: number): number {
  return Math.cos(valor);
}

//Tangente de um número
export function tan(valor: number): number {
  return Math.tan(valor);
}

//Arco cosseno de um número
export function arcos(valor: number): number {
  return Math.acos(valor);
}

//Arco seno de um número
export function arsen(valor: number): number {
  return Math.asin(valor);
}

//Arco tangente de um número
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
