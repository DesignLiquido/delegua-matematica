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

//Raíz da Função Afim
export function fun1R(a: number, b: number): number {
  return (-1 * b) / a;
};

//Raízes da Função Quadrática
export function fun2R(a: number, b: number, c: number): Array<number> {

  // const r1 = (-1 * b + Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a);
  // const r2 = (-1 * b - Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a);

  const xv = (-1 * b) / (2 * a);
  const yv = (-1 * (Math.pow(b, 2) - (4 * a * c))) / 4 * a;

  return [xv, yv];
};