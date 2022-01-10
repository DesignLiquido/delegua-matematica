/*TRIGONOMETRIA*/

import { MatematicaErroEmTempoDeExecucao } from "./excecoes";

export function graus(angle) {
  if (isNaN(angle) || angle === null)
    throw new MatematicaErroEmTempoDeExecucao(
      this.token,
      "Você deve prover um número para mat.graus(ângulo)."
    );

  return angle * (180 / Math.PI);
}

//Seno de um número
export function sen(x) {
  if (isNaN(x) || x === null)
    throw new MatematicaErroEmTempoDeExecucao(
      this.token,
      "Você deve prover valores para sen(x)."
    );

  return Math.sin(x);
}

//Cosseno de um número
export function cos(x) {
  if (isNaN(x) || x === null)
    throw new MatematicaErroEmTempoDeExecucao(
      this.token,
      "Você deve prover valores para cos(x)."
    );

  return Math.cos(x);
}

//Tangente de um número
export function tan(x) {
  if (isNaN(x) || x === null)
    throw new MatematicaErroEmTempoDeExecucao(
      this.token,
      "Você deve prover valores para tan(x)."
    );

  return Math.tan(x);
}

//Arco cosseno de um número
export function arcos(x) {
  if (isNaN(x) || x === null)
    throw new MatematicaErroEmTempoDeExecucao(
      this.token,
      "Você deve prover valores para arcos(x)."
    );

  return Math.acos(x);
}

//Arco seno de um número
export function arsen(x) {
  if (isNaN(x) || x === null)
    throw new MatematicaErroEmTempoDeExecucao(
      this.token,
      "Você deve prover valores para arsen(x)."
    );

  return Math.asin(x);
}

//Arco tangente de um número
export function artan(x) {
  if (isNaN(x) || x === null)
    throw new MatematicaErroEmTempoDeExecucao(
      this.token,
      "Você deve prover valores para artan(x)."
    );

  return Math.atan(x);
}
