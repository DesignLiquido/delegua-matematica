/**
 * Calcula o limite.
 * @param {numero} valor Valor numérico.
 * @param {numero} min Valor mínimo.
 * @param {numero} max Valor máximo.
 * @returns O cálculo do limite.
 */
export function limite(valor: number, min: number, max: number): number {
  return valor < min ? min : (valor > max ? max : valor);
}