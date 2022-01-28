//Mediana de uma matriz
export function mediana(a: Array<any>): any {
  a.sort(function (a, b) { return a - b; });
  const mid = a.length / 2;
  return mid % 1 ? a[mid - 0.5] : (a[mid - 1] + a[mid]) / 2;
};

/**
 * Calcula a moda de um vetor. A moda é o valor, ou valores, que mais são 
 * presentes em um conjunto.
 * @param {inteiro[]} vetor O conjunto a ser avaliado.
 * @returns O novo conjunto com os valores da moda.
 * @see https://pt.wikipedia.org/wiki/Moda_(estat%C3%ADstica)
 */
export function moda(vetor: Array<number>): any {
  const vetorDeObjetos = vetor.reduce(
    function (acc, curr) {
      return acc[curr] ? ++acc[curr] : acc[curr] = 1, acc
    },
    {}
  )
  const counter = []
  Object.keys(vetorDeObjetos).filter(function (posicao) {
    counter.push(vetorDeObjetos[posicao])
  })
  const max = Math.max.apply(null, counter)

  if (max === 1) {
    return []
  }

  return Object.keys(vetorDeObjetos).filter(function (posicao) {
    return vetorDeObjetos[posicao] === max
      ? vetorDeObjetos[posicao]
      : null
  }).map(item => Number(item))
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
export function gerarPontosAbscissa(distancia: number, valorPontoCentral: number, numeroPontos?: number) {
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

//Intervalo Preenchido
export function linspace(valorInicial: number, valorDeParada: number, cardinalidade: number): Array<number> {
  const lista = [];
  const passo = (valorDeParada - valorInicial) / (cardinalidade - 1);
  for (var i = 0; i < cardinalidade; i++) {
    lista.push(valorInicial + (passo * i));
  }
  return lista;
};

//Raízes da Função Quadrática
export function fun2R(a: number, b: number, c: number): Array<number> {

  // const r1 = (-1 * b + Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a);
  // const r2 = (-1 * b - Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a);

  const xv = (-1 * b) / (2 * a);
  const yv = (-1 * (Math.pow(b, 2) - (4 * a * c))) / 4 * a;

  return [xv, yv];
};

//Aproximação de valores
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

//Vetor de pontos aleatórios
export function pontosAleatorios(valor: number): any {
  let ex;
  if (ex == undefined) { ex = 0; }
  const x = [];
  x[0] = 100;
  for (let i = 1; i < valor; i++) {
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

//Exponencial
export function exp(valor: number): number {
  return Math.exp(valor);
};

//Logaritmo natural
export function log(valor: number): number {
  return Math.log(valor);
};

// Retorna a base elevada ao expoente
export function potencia(base: number, expoente: number): number {
  return Math.pow(base, expoente);
};

//Raíz quadrada
export function raizQuadrada(valor: number): number {
  return Math.sqrt(valor);
};

// Retorna o comprimento de um vetor
export function comprimentoVetor(vetor: Array<any>): number {
  return vetor.length;
};

// Retorna o menor número inteiro dentre o valor de "value"
export function minimoAproximado(value: number): number {
  return Math.floor(value);
};
