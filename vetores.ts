/**
 * Retorna o comprimento de um vetor.
 * @param {any} _ O visitante da instrução, normalmente um interpretador.
 * @param {any[]} vetor Um vetor de itens quaisquer.
 * @returns O comprimento do vetor.
 */
export function comprimentoVetor(_: any, vetor: Array<any>): number {
  return vetor.length;
}

/**
 * Conta quantas vezes um determinado valor aparece em um vetor.
 * @param {any} _ O visitante da instrução, normalmente um interpretador.
 * @param {qualquer[]} vetor Vetor de elementos
 * @param {qualquer} valor Valor a ser encontrado no vetor
 * @returns Valor inteiro, com o número de vezes que `valor` foi encontrado em `vetor`.
 */
export function numeroOcorrencias(
  _: any,
  vetor: Array<any>,
  valor: number
): number {
  return vetor.filter((v) => v === valor).length;
}
