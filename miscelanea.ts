/**
 * Aproximação de valores.
 * @param {number} x Um valor a ser arredondado.
 * @param {number} casasDecimais O número de casas decimais.
 * @returns O arredondamento do valor.
 */
export function aprox(x: any, casasDecimais?: number): any {
  if (casasDecimais == undefined) {
    casasDecimais = 2;
  }
  
  if (typeof x == "number") {
    return x.toFixed(casasDecimais);
  }

  if (x[0].length == undefined) {
    // Vetor de 1 dimensão
    for (let i = 0; i < x.length; i++) {
      x[i] = parseFloat(x[i].toFixed(casasDecimais));
    }
    return x;
  }

  for (let i = 0; i < x.length; i++) {
    // Vetor de 2 dimensões
    for (let j = 0; j < x[0].length; j++) {
      x[i][j] = parseFloat(x[i][j].toFixed(casasDecimais));
    }
  }
  return x;
}

/**
 * Cria um vetor de números aleatórios.
 * @param {numero} numeroPontos O número de pontos aleatórios a ser gerado.
 * @returns O vetor de números aleatórios.
 */
export function pontosAleatorios(numeroPontos: number): any {
  let ex = 0;
  const x = [];
  x[0] = 100;
  for (let i = 1; i < numeroPontos; i++) {
    x[i] = ex + x[i - 1] + Math.random() * 2 - 1;
  }

  return aprox(x, 2);
}

//
/**
 * Arredonda o número passado por parâmetro para baixo.
 * @param {numero} valor O valor a ser arredondado.
 * @returns O valor arredondado para baixo, como um número inteiro.
 */
export function arredondarParaBaixo(valor: number): number {
  return Math.floor(valor);
}
