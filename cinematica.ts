//Velocidade média
export function velocidadeMedia(intervaloDeslocamento: number, intervaloTempo: number): number {
  return intervaloDeslocamento / intervaloTempo;
}

//Espaço percorrido
export function deltaS(s0: number, s: number): number {
  const ds = s - s0;
  return ds;
}

//Tempo Percorrido
export function deltaT(t0: number, t: number): number {
  const dt = t - t;
  return dt;
}

// Cálculo de aceleração
export function aceleracao(
  velocidadeFinal: number,
  velocidadeInicial: number,
  tempoFinal: number,
  tempoInicial: number
): number {
  return (velocidadeFinal - velocidadeInicial) / (tempoFinal - tempoInicial);
}

//Função Horária da Posição (M.R.U)
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

//Gráfico da velocidade (M.R.U.V)
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
