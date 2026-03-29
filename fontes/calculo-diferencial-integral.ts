/**
 * Calcula o limite.
 * @param {any} _ O visitante da instrução, normalmente um interpretador.
 * @param {number} valor Valor numérico.
 * @param {number} min Valor mínimo.
 * @param {number} max Valor máximo.
 * @returns O cálculo do limite.
 */
export function limite(
  _: any,
  valor: number,
  min: number,
  max: number
): number {
  return valor < min ? min : valor > max ? max : valor;
}
