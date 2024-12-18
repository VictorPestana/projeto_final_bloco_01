import { Veiculos } from "./Veiculos";

export class Moto extends Veiculos {
  private _cilindrada: number;

  constructor(
    idVeiculo: number,
	tipo: number,
    marca: string,
    cor: string,
    ano: number,
    cilindrada: number
  ) {
    super(idVeiculo, 2, marca, cor, ano); // 2 = moto
    this._cilindrada = cilindrada;
  }

  public get cilindrada(): number {
    return this._cilindrada;
  }

  public set cilindrada(value: number) {
    this._cilindrada = value;
  }

  public visualizar(): void {
    super.visualizar();
    console.log(`Cilindrada: ${this._cilindrada}`);
  }
}
