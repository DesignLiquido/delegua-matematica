import { limite } from "../calculo-diferencial-integral";

describe('limite', () => {
  it('testa quando o valor é maior que o máximo', () => {
    expect(limite(200, 0, 1)).toBe(1);
  })

  it('testa quando o valor é menor que o mínimo', () => {
    expect(limite(0, 1, 2)).toBe(1);
  })

  it('testa quando o valor é maior que o mínimo e maior que o máximo', () => {
    expect(limite(2, 1, 3)).toBe(2);
  })
})