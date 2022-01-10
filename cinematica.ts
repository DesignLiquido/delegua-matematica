import { MatematicaErroEmTempoDeExecucao } from "./excecoes";

//Velocidade média
export function velocidadeMedia(s, t) {
  if (isNaN(s) || s === null || isNaN(t) || t === null)
    throw new MatematicaErroEmTempoDeExecucao(
      this.token,
      "Você deve prover valores para velocidadeMedia(d,t)."
    );

  return s / t;
}

//Espaço percorrido
export function deltaS(s0, s) {
  if (isNaN(s0) || s0 === null || isNaN(s) || s === null)
    throw new MatematicaErroEmTempoDeExecucao(
      this.token,
      "Você deve prover valores para deltas(e0,e1)."
    );
  const ds = s - s0;
  return ds;
}

//Tempo Percorrido
export function deltaT(t0, t) {
  if (isNaN(t0) || t0 === null || isNaN(t) || t === null)
    throw new MatematicaErroEmTempoDeExecucao(
      this.token,
      "Você deve prover valores para deltat(t0,t1)."
    );
  const dt = t - t;
  return dt;
}

// Cálculo de aceleração
export function aceleracao(
  velocidadeFinal,
  velocidadeInicial,
  tempoFinal,
  tempoInicial
) {
  if (
    velocidadeFinal === null ||
    velocidadeInicial === null ||
    tempoFinal === null ||
    tempoInicial === null
  ) {
    throw new MatematicaErroEmTempoDeExecucao(
      this.token,
      "Devem ser fornecidos quatro parâmetros obrigatórios."
    );
  }

  if (
    typeof velocidadeFinal !== "number" ||
    typeof velocidadeInicial !== "number" ||
    typeof tempoFinal !== "number" ||
    typeof tempoInicial !== "number"
  ) {
    throw new MatematicaErroEmTempoDeExecucao(
      this.token,
      "Todos os parâmetros devem ser do tipo número."
    );
  }

  return (velocidadeFinal - velocidadeInicial) / (tempoFinal - tempoInicial);
}

//Função Horária da Posição (M.R.U)
export function mrufh(s0, v, t) {
  if (isNaN(s0) || s0 === null)
    throw new MatematicaErroEmTempoDeExecucao(
      this.token,
      "Você deve prover valores para mrufh(s0,v,t)."
    );
  t = t + 1;
  const s = new Array();
  let index = 0;
  for (var i = 0; i < t; i++) {
    s[index] = s0 + v * i;
    index++;
  }

  return ["Função: " + s0 + "+(" + v + ")*t" + "<br>" + "Posições: " + s];
}

//Gráfico da velocidade (M.R.U.V)
export function mruv(s0, s, a) {
  if (
    isNaN(s0) ||
    s0 === null ||
    isNaN(s) ||
    s === null ||
    isNaN(a) ||
    a === null
  )
    throw new MatematicaErroEmTempoDeExecucao(
      this.token,
      "Você deve prover valores para mruv(Pi, Vf, A)."
    );
  const vf = new Array();
  const x = new Array();
  let v = new Array();
  let index = 0;
  for (var i = 0; i < s; i++) {
    const v = index;
    vf[index] = Math.sqrt(2 * a * (index - s0));
    x[index] = i;
    index++;
  }

  return vf;
}
