import { jurosCompostos, jurosSimples } from "../financeira";

describe('jurosSimples', () => {
  it('testa o valor do juros simples', () => {
    expect(jurosSimples(2000, 1.9, 7)).toEqual(266);
  })
});


describe('jurosCompostos', () => {
  it('testa o valor do juros compostos', () => {
    expect(jurosCompostos(2000, 1.9, 7)).toEqual(281.65135712658684);
  })
});