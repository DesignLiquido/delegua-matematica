/**
 * Preenche um intervalo entre dois números dada uma cardinalidade.
 * @param {numero} valorInicial O valor inicial.
 * @param {numero} valorDeParada O valor de parada.
 * @param {numero} cardinalidade A cardinalidade.
 * @returns 
 */
export function linspace(valorInicial: number, valorDeParada: number, cardinalidade: number): Array<number> {
  const lista = [];
  const passo = (valorDeParada - valorInicial) / (cardinalidade - 1);
  for (var i = 0; i < cardinalidade; i++) {
    lista.push(valorInicial + (passo * i));
  }
  return lista;
};

/**
 * Aproximação d valores.
 * @param {number} x Um valor a ser arredondado.
 * @param {number} z O número de casas decimais.
 * @returns O arredondamento do valor.
 */
export function aprox(x: any, z?: number): any {
  if (z == undefined) { z = 2; }
  if (typeof (x) == "number") { x = x.toFixed(z) }
  else if (x[0].length == undefined) { // 1D array
    for (let i = 0; i < x.length; i++) {
      x[i] = parseFloat(x[i].toFixed(z));
    }
  } else
    for (let i = 0; i < x.length; i++) { // 2D array
      for (let j = 0; j < x[0].length; j++) {
        x[i][j] = parseFloat(x[i][j].toFixed(z));
      }
    }
  return x;
};

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
};

/**
 * Conta quantas vezes um determinado valor aparece em um vetor.
 * @param {qualquer[]} vetor Vetor de elementos
 * @param {qualquer} valor Valor a ser encontrado no vetor
 * @returns Valor inteiro, com o número de vezes que `valor` foi encontrado em `vetor`.
 */
export function numeroOcorrencias(vetor: Array<any>, valor: number): number {
  return vetor.filter((v) => (v === valor)).length;
};

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
export function log(valor: number): number {
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
 * Calcula a raíz quadrada.
 * @param {number} valor Um número para aplicar a radiciação.
 * @returns O valor da radiciação.
 */
export function raizQuadrada(valor: number): number {
  return Math.sqrt(valor);
};

/**
 * Retorna o comprimento de um vetor.
 * @param {numero[]} vetor Um vetor de itens aleatórios. 
 * @returns O comprimento do vetor.
 */
export function comprimentoVetor(vetor: Array<any>): number {
  return vetor.length;
};

// Retorna o menor número inteiro dentre o valor de "value"
/**
 * Arredonda o número para seu menor inteiro aproximado.
 * @param {numero} value um valor a ser arredondado. 
 * @returns O valor arredondado.
 */
export function minimoAproximado(value: number): number {
  return Math.floor(value);
};
