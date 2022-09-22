/**
 * Calcula a soma de todos os elementos da matriz
 * @param {numero[]} matriz Matriz de N dimensões
 * @returns {numero} Retorna o valor da soma dos elementos da matriz
 */
export function somaElementosMatriz(matriz: Array<number | number[]>): number {
  const vetor = matriz.flatMap((n) => n)
  const soma = vetor.reduce((acc, curr) => acc + curr);

  return soma;
}

//FUNÇÃO AFIM E QUADRÁTICA
/**
 * Gera valores para abscissa.
 * @param {inteiro} distancia A distância entra dois pontos. 
 * @param {inteiro} valorPontoCentral O ponto central na abscissa.
 * @param {inteiro} numeroPontos Número de pontos a serem gerados (padrão: 7).
 * @returns Um vetor, contendo o número de pontos informado ou definido por padrão em uma abscissa.
 *          Se o número informado é par, um ponto negativo a mais é gerado.
 */
 export function gerarPontosAbscissa(distancia: number, valorPontoCentral: number, numeroPontos?: number): Array<number> {
  if (!numeroPontos) {
    numeroPontos = 7;
  }

  const elementoInicial = valorPontoCentral - (((numeroPontos / 2) >> 0) * distancia);
  const vetor = [];
  for (let i = 0; i < numeroPontos; i++) {
    vetor.push(elementoInicial + (i * distancia));
  }

  return vetor;
};
