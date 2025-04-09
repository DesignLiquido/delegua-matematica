/**
 * Calcula juros simples.
 * @param {any} _ O visitante da instrução, normalmente um interpretador.
 * @param {number} capital Capital inicial.
 * @param {number} taxaDeJuros Taxa de juros.
 * @param {number} tempo Tempo da aplicação em meses.
 * @returns O valor dos juros.
 */
export function jurosSimples(
  _: any,
  capital: number,
  taxaDeJuros: number,
  tempo: number
): number {
  taxaDeJuros = taxaDeJuros / 100;
  const juros = capital * taxaDeJuros * tempo;
  return juros;
}

/**
 * Calcula juros compostos.
 * @param {any} _ O visitante da instrução, normalmente um interpretador.
 * @param {number} capital Capital inicial.
 * @param {number} taxaDeJuros Taxa de juros.
 * @param {number} tempo Tempo da aplicação em meses.
 * @returns O valor dos juros.
 */
export function jurosCompostos(
  _: any,
  capital: number,
  taxaDeJuros: number,
  tempo: number
): number {
  taxaDeJuros = taxaDeJuros / 100;
  const montante = capital * (1 + taxaDeJuros) ** tempo;
  const juros = montante - capital;
  return juros;
}
