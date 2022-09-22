/**
 * Retorna a constante de Euler elevada ao valor passado por parâmetro
 * @param {numero} valor A potência a elevar a constante e
 * @returns Valor da constante e elevado à potência
 */
 export function exp(valor: number): number {
  return Math.exp(valor);
};

/**
 * Calcula o logarítimo natural.
 * @param {number} valor Número a ser calculado.
 * @returns O logarítimo do número.
 */
 export function logaritmo(valor: number): number {
  return Math.log(valor);
};

/**
 * Faz a exponenciação de uma base a determinado expoente.
 * @param {number} base O valor da base.
 * @param {number} expoente O valor do expoente.
 * @returns O cálculo da exponenciação.
 */
 export function potencia(base: number, expoente: number): number {
  return Math.pow(base, expoente);
};

/**
 * Gera e retorna um valor aleatório.
 * @returns Valor aleatório
 */
//Funçao que gera um valor aleatório
export function aleatorio(): number {
	return Math.random();
};

/**
 * Calcula a raíz quadrada.
 * @param {number} valor Um número para aplicar a radiciação.
 * @returns O valor da radiciação.
 */
export function raizQuadrada(valor: number): number {
  return Math.sqrt(valor);
};