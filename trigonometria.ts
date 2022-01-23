/*TRIGONOMETRIA*/

import { MatematicaErroEmTempoDeExecucao } from "./excecoes";

/**
 * Constante pi.
 * @see https://pt.wikipedia.org/wiki/Pi
 */
export function pi(): number { return Math.PI }

export function graus(angle: any) {
  if (isNaN(angle) || angle === null)
    throw new MatematicaErroEmTempoDeExecucao(
      this.token,
      "Você deve prover um número para mat.graus(ângulo)."
    );

  return angle * (180 / Math.PI);
}

//Seno de um número
export function seno(x: any) {
  if (isNaN(x) || x === null)
    throw new MatematicaErroEmTempoDeExecucao(
      this.token,
      "Você deve prover valores para sen(x)."
    );

  return Math.sin(x);
}

//Cosseno de um número
export function cosseno(x: any) {
  if (isNaN(x) || x === null)
    throw new MatematicaErroEmTempoDeExecucao(
      this.token,
      "Você deve prover valores para cos(x)."
    );

  return Math.cos(x);
}

//Tangente de um número
export function tan(x: any) {
  if (isNaN(x) || x === null)
    throw new MatematicaErroEmTempoDeExecucao(
      this.token,
      "Você deve prover valores para tan(x)."
    );

  return Math.tan(x);
}

//Arco cosseno de um número
export function arcos(x: any) {
  if (isNaN(x) || x === null)
    throw new MatematicaErroEmTempoDeExecucao(
      this.token,
      "Você deve prover valores para arcos(x)."
    );

  return Math.acos(x);
}

//Arco seno de um número
export function arsen(x: any) {
  if (isNaN(x) || x === null)
    throw new MatematicaErroEmTempoDeExecucao(
      this.token,
      "Você deve prover valores para arsen(x)."
    );

  return Math.asin(x);
}

//Arco tangente de um número
export function artan(x: any) {
  if (isNaN(x) || x === null)
    throw new MatematicaErroEmTempoDeExecucao(
      this.token,
      "Você deve prover valores para artan(x)."
    );

  return Math.atan(x);
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
