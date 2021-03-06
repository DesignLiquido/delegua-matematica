import { aprox } from ".";
import { MatematicaErroEmTempoDeExecucao } from "./excecoes";

/**
 * Encontra o elemento máximo em um vetor.
 * @param {inteiro[]} vetor Um vetor de números inteiros.
 * @returns O maior número encontrado em um vetor.
 */
export function max(vetor: Array<number>): any {
  return Math.max.apply(null, vetor);
}

/**
 * Encontra o elemento mínimo em um vetor.
 * @param {inteiro[]} vetor Um vetor de números inteiros.
 * @returns O menor número encontrado em um vetor.
 */
export function min(vetor: Array<any>): any {
  return Math.min.apply(null, vetor);
}

//Soma de determinada matriz
export function smtr(a: Array<any>): any {
  let z = 0;
  if (a.length == 1) {
    // a is a 1D row array
    for (let j = 0; j < a[0].length; j++) {
      z = z + a[0][j];
    }
  } else if (a[0].length == 1) {
    // a is a 1D column array
    for (let i = 0; i < a.length; i++) {
      z = z + a[i][0];
    }
  } else {
    for (let j = 0; j < a.length; j++) {
      z = z + a[j];
    }
  }

  return aprox(z, 2);
}

// Retorna a média de um vetor de números
export function media() {
  const argumentsLength = Object.keys(arguments).length;

  if (argumentsLength <= 0) {
    throw new MatematicaErroEmTempoDeExecucao(
      null, //this.token,
      "Você deve fornecer um parâmetro para a função."
    );
  }

  if (argumentsLength > 1) {
    throw new MatematicaErroEmTempoDeExecucao(
      null, //this.token,
      "A função recebe apenas um parâmetro."
    );
  }

  // Pega o primeiro argumento do objeto de argumentos
  const args = arguments["0"];

  if (!Array.isArray(args)) {
    throw new MatematicaErroEmTempoDeExecucao(
      null, //this.token,
      "Você deve fornecer um parâmetro do tipo vetor."
    );
  }

  // Valida se o array está vazio.
  if (!args.length) {
    throw new MatematicaErroEmTempoDeExecucao(
      null, //this.token,
      "Vetor vazio. Você deve fornecer ao menos um valor ao vetor."
    );
  }

  // Valida se o array contém apenas valores do tipo número.
  args.forEach((item) => {
    if (typeof item !== "number") {
      throw new MatematicaErroEmTempoDeExecucao(
        null, //this.token,
        "Você deve fornecer um vetor contendo apenas valores do tipo número."
      );
    }
  });

  // Soma todos os itens.
  const valoresSomados = args.reduce(
    (acumulador, itemAtual) => acumulador + itemAtual,
    0
  );

  // Faz o cáculo da média em si e retorna.
  return valoresSomados / args.length;
}

//Média aritmética de uma matriz
export function ve(vetor: Array<any>): any {
  if (vetor.length == 1) {
    return aprox(smtr(vetor) / vetor[0].length, 4);
  } // a is a row array
  if (vetor[0].length == 1) {
    return aprox(smtr(vetor) / vetor.length, 4);
  } // a is a column array
  if (vetor[0].length == undefined) {
    return aprox(smtr(vetor) / vetor.length, 4);
  }
}

//Covariância de duas matrizes
export function covar(array1: Array<any>, array2: Array<any>): any {
  var u = ve(array1);
  var v = ve(array2);
  var arr1Len = array1.length;
  var sq_dev = new Array(arr1Len);
  for (var i = 0; i < arr1Len; i++)
    sq_dev[i] = (array1[i] - u) * (array2[i] - v);
  return smtr(sq_dev) / (arr1Len - 1);
}
