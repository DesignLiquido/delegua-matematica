import { MatematicaErroEmTempoDeExecucao } from "./excecoes";

/**
 * Retorna a constante de Euler elevada ao valor passado por parâmetro.
 * @param {any} _ O visitante da instrução, normalmente um interpretador.
 * @param {number} valor A potência a elevar a constante e
 * @returns Valor da constante e elevado à potência
 */
export function exp(_: any, valor: number): number {
  return Math.exp(valor);
}

/**
 * Calcula o logaritmo natural.
 * @param {any} _ O visitante da instrução, normalmente um interpretador.
 * @param {number} valor Número a ser calculado.
 * @returns O logaritmo do número.
 */
export function logaritmo(_: any, valor: number): number {
  return Math.log(valor);
}

/**
 * Faz a exponenciação de uma base a determinado expoente.
 * @param {any} _ O visitante da instrução, normalmente um interpretador.
 * @param {number} base O valor da base.
 * @param {number} expoente O valor do expoente.
 * @returns O cálculo da exponenciação.
 */
export function potencia(_: any, base: number, expoente: number): number {
  return Math.pow(base, expoente);
}

/**
 * Gera e retorna um valor aleatório.
 * @returns Valor aleatório
 */
export function aleatorio(): number {
  return Math.random();
}

/**
 * Calcula a raiz quadrada.
 * @param {any} _ O visitante da instrução, normalmente um interpretador.
 * @param {number} valor Um número para aplicar a radiciação.
 * @returns O valor da radiciação.
 */
export function raizQuadrada(_: any, valor: number): number {
  if (valor === null || valor === undefined) {
    throw new MatematicaErroEmTempoDeExecucao(
      undefined,
      `Valor para raizQuadrada() inválido.`
    );
  }
  
  return Math.sqrt(valor);
}
