/**
 * Calcula o juros simples
 * @param {numero} capital Capital inicial.
 * @param {numero} taxaDeJuros Taxa de juros.
 * @param {numero} tempo Tempo da aplicação em meses.
 * @returns O valor do juros.
 */
export function jurosSimples(capital: number, taxaDeJuros: number, tempo: number): number {
  taxaDeJuros = taxaDeJuros / 100;
  const juros = (capital * taxaDeJuros * tempo);
  // const montante = capital + juros;
  return juros;
}

/**
 * Calcula o juros composto
 * @param {numero} capital Capital inicial.
 * @param {numero} taxaDeJuros Taxa de juros.
 * @param {numero} tempo Tempo da aplicação em meses.
 * @returns O valor do juros.
 */
export function jurosCompostos(capital: number, taxaDeJuros: number, tempo: number): number {
  taxaDeJuros = taxaDeJuros / 100;
  const montante = capital * ((1 + taxaDeJuros) ** tempo);
  const juros = montante - capital;
  return juros;
};