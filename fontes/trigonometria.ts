import { MatematicaErroEmTempoDeExecucao } from "./excecoes";

/**
 * Constante pi.
 * @see https://pt.wikipedia.org/wiki/Pi
 */
export function pi(): number {
  return Math.PI;
}

/**
 * Converte radiano para graus.
 * @param {any} _ O visitante da instrução, normalmente um interpretador.
 * @param {number} angulo Ângulo em radianos.
 * @returns O ângulo em graus.
 */
export function graus(_: any, angulo: number): number {
  if (angulo === null || angulo === undefined) {
    throw new MatematicaErroEmTempoDeExecucao(
      undefined,
      `Ângulo para graus() inválido.`
    );
  }

  return angulo * (180 / Math.PI);
}

/**
 * Calcula o valor do seno de um ângulo.
 * @param {any} _ O visitante da instrução, normalmente um interpretador.
 * @param {number} angulo Ângulo em radiano.
 * @returns O seno do ângulo.
 */
export function seno(_: any, angulo: number): number {
  if (angulo === null || angulo === undefined) {
    throw new MatematicaErroEmTempoDeExecucao(
      undefined,
      `Ângulo para seno() inválido.`
    );
  }

  return Math.sin(angulo);
}

/**
 * Calcula o valor do cosseno de um ângulo.
 * @param {any} _ O visitante da instrução, normalmente um interpretador.
 * @param {number} angulo Ângulo em radiano.
 * @returns O cosseno do ângulo.
 */
export function cosseno(_: any, angulo: number): number {
  if (angulo === null || angulo === undefined) {
    throw new MatematicaErroEmTempoDeExecucao(
      undefined,
      `Ângulo para cosseno() inválido.`
    );
  }

  return Math.cos(angulo);
}

/**
 * Calcula o valor da tangente de um ângulo.
 * @param {any} _ O visitante da instrução, normalmente um interpretador.
 * @param {number} angulo Ângulo em radiano.
 * @returns A tangente do ângulo.
 */
export function tangente(_: any, angulo: number): number {
  if (angulo === null || angulo === undefined) {
    throw new MatematicaErroEmTempoDeExecucao(
      undefined,
      `Ângulo para tangente() inválido.`
    );
  }

  return Math.tan(angulo);
}

/**
 * Calcula o arco cosseno de um número.
 * @param {any} _ O visitante da instrução, normalmente um interpretador.
 * @param {number} valor Um valor.
 * @returns O arco cosseno.
 */
export function arcoCosseno(_: any, valor: number): number {
  if (valor === null || valor === undefined) {
    throw new MatematicaErroEmTempoDeExecucao(
      undefined,
      `Argumento para arcoCosseno() inválido.`
    );
  }

  return Math.acos(valor);
}

/**
 * Calcula o arco seno de um número.
 * @param {any} _ O visitante da instrução, normalmente um interpretador.
 * @param {number} valor Um valor.
 * @returns O arco seno.
 */
export function arcoSeno(_: any, valor: number): number {
  if (valor === null || valor === undefined) {
    throw new MatematicaErroEmTempoDeExecucao(
      undefined,
      `Argumento para arcoSeno() inválido.`
    );
  }

  return Math.asin(valor);
}

/**
 * Calcula o arco tangente de um número.
 * @param {any} _ O visitante da instrução, normalmente um interpretador.
 * @param {number} valor Um valor.
 * @returns O arco tangente.
 */
export function arcoTangente(_: any, valor: number): number {
  if (valor === null || valor === undefined) {
    throw new MatematicaErroEmTempoDeExecucao(
      undefined,
      `Argumento para arcoTangente() inválido.`
    );
  }

  return Math.atan(valor);
}

/**
 * Calcula o valor radiano de um ângulo. O radiano é o comprimento do arco formado
 * por um ângulo em uma circunferência.
 * @param {any} _ O visitante da instrução, normalmente um interpretador.
 * @param {inteiro} angulo O ângulo, em graus, do valor radiano desejado.
 * @returns O valor, em radianos, do arco formado pelo ângulo.
 * @see https://pt.wikipedia.org/wiki/Radiano
 */
export function radiano(_: any, angulo: number): number {
  if (angulo === null || angulo === undefined) {
    throw new MatematicaErroEmTempoDeExecucao(
      undefined,
      `Argumento para radiano() inválido.`
    );
  }

  return angulo * (Math.PI / 180);
}
