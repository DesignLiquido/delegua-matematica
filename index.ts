import { MatematicaErroEmTempoDeExecucao } from "./excecoes";

//Mediana de uma matriz
export function mediana(a) {
  if (isNaN(a) || a === null)
    throw new MatematicaErroEmTempoDeExecucao(
      this.token,
      "Você deve prover valores para mediana(a)."
    );

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
export function moda(vetor) {
  if (!Array.isArray(vetor))
    throw new MatematicaErroEmTempoDeExecucao(
      this.token,
      "Parâmetro `vetor` deve ser um vetor, em min(vetor)."
    );

  if (vetor.some(isNaN))
    throw new MatematicaErroEmTempoDeExecucao(
      this.token,
      "Todos os elementos de `vetor` deve ser numéricos, em min(vetor)."
    );

  const objectArr = vetor.reduce(
    function (acc, curr) { 
      return acc[curr] ? ++acc[curr] : acc[curr] = 1, acc 
    },
    {}
  )
  const counter = []
  Object.keys(objectArr).filter(function (pos) {
    counter.push(objectArr[pos])
  })
  const max = Math.max.apply(null, counter)
  
  if (max === 1) {
    return []
  }

  return Object.keys(objectArr).filter(function (pos) {
    return objectArr[pos] === max 
      ? objectArr[pos]
      : null
  }).map(item => Number(item))
}
/**
 * Função que sempre returna `nulo`. 
 * Útil para comparações entre outras funções que também retornam nulo.
 * @returns `null` do JavaScript.
 */
export function nula() {
  return null;
};

/**
 * Constante pi.
 * @see https://pt.wikipedia.org/wiki/Pi
 */
export function pi () { return Math.PI }

/**
 * Calcula o valor radiano de um ângulo. O radiano é o comprimento do arco formado 
 * por um ângulo em uma circunferência.
 * @param {inteiro} angulo O ângulo, em graus, do valor radiano desejado.
 * @returns O valor, em radianos, do arco formado pelo ângulo.
 * @see https://pt.wikipedia.org/wiki/Radiano
 */
export function radiano(angulo) {
  if (!Number.isInteger(angulo))
    throw new MatematicaErroEmTempoDeExecucao(
      this.token,
      "Você deve prover um número inteiro para o parâmetro `angulo`, em radiano(angulo)."
    );

  return angulo * (Math.PI / 180);
};

//FUNÇÃO AFIM E QUADRÁTICA
/**
 * Gera valores para abscissa.
 * @param {inteiro} distancia A distância entra dois pontos. 
 * @param {inteiro} valorPontoCentral O ponto central na abscissa.
 * @param {inteiro} numeroPontos Número de pontos a serem gerados (padrão: 7).
 * @returns Um vetor, contendo o número de pontos informado ou definido por padrão em uma abscissa.
 *          Se o número informado é par, um ponto negativo a mais é gerado.
 */
export function gerarPontosAbscissa(distancia, valorPontoCentral, numeroPontos) {
  if (!Number.isInteger(distancia))
    throw new MatematicaErroEmTempoDeExecucao(
      this.token,
      "Você deve prover um valor inteiro para o parâmetro `distancia`, em gerarPontosAbscissa(distancia, valorInicial)."
    );

  if (!Number.isInteger(valorPontoCentral))
    throw new MatematicaErroEmTempoDeExecucao(
      this.token,
      "Você deve prover um valor inteiro para o parâmetro `valorInicial`, em gerarPontosAbscissa(distancia, valorInicial)."
    );

  if (!numeroPontos) {
    numeroPontos = 7;
  }

  const elementoInicial = valorPontoCentral - (((numeroPontos / 2) >> 0) * distancia);
  const x = [];
  for (let i = 0; i < numeroPontos; i++) {
    x.push(elementoInicial + (i * distancia));
  }

  return x;
};

//Raíz da Função Afim
export function fun1R(a, b) {
  if (isNaN(a) || a === null || isNaN(b) || b === null)
    throw new MatematicaErroEmTempoDeExecucao(
      this.token,
      "Você deve prover valores para fun1R(valor1,valor2)."
    );
  return (-1 * b) / a;
};

//Intervalo Preenchido
export function linspace(startValue, stopValue, cardinality) {
  if (
    isNaN(startValue) || startValue === null ||
    isNaN(stopValue) || stopValue === null ||
    isNaN(cardinality) || cardinality === null
  )
    throw new MatematicaErroEmTempoDeExecucao(
      this.token,
      "Você deve prover valores para linspace(valor1,valor2,valor3)."
    );
  const lista = [];
  const step = (stopValue - startValue) / (cardinality - 1);
  for (var i = 0; i < cardinality; i++) {
    lista.push(startValue + (step * i));
  }
  return lista;
};

//Raízes da Função Quadrática
export function fun2R(a, b, c) {
  if (isNaN(a) || a === null)
    throw new MatematicaErroEmTempoDeExecucao(
      this.token,
      "Você deve prover valores para fun2R(a,b,c)."
    );

  const r1 = (-1 * b + Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a);
  const r2 = (-1 * b - Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a);

  const xv = (-1 * b) / (2 * a);
  const yv = (-1 * (Math.pow(b, 2) - (4 * a * c))) / 4 * a;

  return [xv, yv];
};

//Aproximação de valores
export function aprox(x, z) {
  if (isNaN(x) || x === null || isNaN(z) || z === null)
    throw new MatematicaErroEmTempoDeExecucao(
      this.token,
      "Você deve prover valores para aprox(x,z)."
    );
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
export function pontosAleatorios(n) {
  if (isNaN(n) || n === null)
    throw new MatematicaErroEmTempoDeExecucao(
      this.token,
      "Você deve prover valores para pale(n)."
    );
  let ex;
  if (ex == undefined) { ex = 0; }
  const x = [];
  x[0] = 100;
  for (let i = 1; i < n; i++) {
    x[i] = ex + x[i - 1] + Math.random() * 2 - 1;
  }
  const xx = aprox(x, 2);
  return xx;
};


/**
 * Conta quantas vezes um determinado valor aparece em um vetor.
 * @param {qualquer[]} vetor Vetor de elementos
 * @param {qualquer} valor Valor a ser encontrado no vetor
 * @returns Valor inteiro, com o número de vezes que `valor` foi encontrado em `vetor`.
 */
export function numeroOcorrencias(vetor, valor) {
  if (!Array.isArray(vetor))
    throw new MatematicaErroEmTempoDeExecucao(
      this.token,
      "Parâmetro `vetor` deve ser um vetor, em numeroOcorrencias(vetor, valor)."
    );

  return vetor.filter((v) => (v === valor)).length;
};

//Exponencial
export function exp(x) {
  if (isNaN(x) || x === null)
    throw new MatematicaErroEmTempoDeExecucao(
      this.token,
      "Você deve prover valores para exp(x)."
    );

  return Math.exp(x);
};

//Logaritmo natural
export function log(x) {
  if (isNaN(x) || x === null)
    throw new MatematicaErroEmTempoDeExecucao(
      this.token,
      "Você deve prover valores para log(x)."
    );

  return Math.log(x);
};

// Retorna a base elevada ao expoente
export function potencia(base, expoente) {
  if (typeof base !== 'number' || typeof expoente !== 'number') {
    throw new MatematicaErroEmTempoDeExecucao(
      this.token,
      "Os parâmetros devem ser do tipo número."
    );
  }

  return Math.pow(base, expoente);
};

//Raíz quadrada
export function raizq(x) {
  if (isNaN(x) || x === null)
    throw new MatematicaErroEmTempoDeExecucao(
      this.token,
      "Você deve prover valores para raizq(x)."
    );

  return Math.sqrt(x);
};

// Retorna o comprimento de um vetor
export function comp(array) {

  if (!Array.isArray(array)) {
    throw new MatematicaErroEmTempoDeExecucao(
      this.token,
      "O valor passado pra função deve ser um vetor."
    );
  }

  return array.length;
};

// Retorna o menor número inteiro dentre o valor de "value"
export function minaprox(value) {

  if (typeof value !== 'number') {
    throw new MatematicaErroEmTempoDeExecucao(
      this.token,
      "O valor passado pra função deve ser um número."
    );
  }

  return Math.floor(value);
};
