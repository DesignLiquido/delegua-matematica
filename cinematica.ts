/**
 * Calcula a velocidade média.
 * @param {numero} intervaloDeslocamento Valor do intervalo de deslocamento.
 * @param {numero} intervaloTempo Valor do intervalo de tempo.
 * @returns A velocidade média.
 */
export function velocidadeMedia(intervaloDeslocamento: number, intervaloTempo: number): number {
  return intervaloDeslocamento / intervaloTempo;
}

/**
 * Calcula o espaço percorrido.
 * @param {number} s0 Valor de s0. 
 * @param {number} s  Valor de s.
 * @returns O espaço percorrido.
 */
export function deltaS(s0: number, s: number): number {
  const ds = s - s0;
  return ds;
}

/**
 * Calcula o tempo percorrido.
 * @param {number} t0 Valor de t0.
 * @param {number} t Valor de t.
 * @returns O tempo percorrido.
 */
export function deltaT(t0: number, t: number): number {
  const dt = t - t;
  return dt;
}

// Cálculo de aceleração
/**
 * Calcula a aceleração.
 * @param {numero} velocidadeFinal Valor da velocidade final.
 * @param {numero} velocidadeInicial Valor da velocidade inicial.
 * @param {numero} tempoFinal Valor do tempo final.
 * @param {numero} tempoInicial Valor do tempo inicial.
 * @returns 
 */
export function aceleracao(
  velocidadeFinal: number,
  velocidadeInicial: number,
  tempoFinal: number,
  tempoInicial: number
): number {
  return (velocidadeFinal - velocidadeInicial) / (tempoFinal - tempoInicial);
}

/**
 * Calcula a função horária da posição (M.R.U).
 * @param {numero} s0 Valor de s0.
 * @param {numero} v Valor de v.
 * @param {numero} t Valor de t.
 * @returns O resultado da função horária da posição.
 */
export function mrufh(s0: number, v: number, t: number): Array<string> {
  t = t + 1;
  const s = new Array();
  let index = 0;
  for (var i = 0; i < t; i++) {
    s[index] = s0 + v * i;
    index++;
  }

  return ["Função: " + s0 + "+(" + v + ")*t" + "<br>" + "Posições: " + s];
}

/**
 * Calcula o Movimento Retilíneo Uniformemente Variado.
 * @param {number} s0 Valor de s0.
 * @param {number} s Valor de s.
 * @param {number} a Valor de a.
 * @returns O valor do M.R.U.V.
 */
export function mruv(s0: number, s: number, a: number): Array<any> {
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
