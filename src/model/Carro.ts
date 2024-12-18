import { Veiculos } from "./Veiculos";

export class Carro extends Veiculos {
  private _tipoCombustivel: string;

  constructor(
    idVeiculo: number,
	tipo: number,
    marca: string,
    cor: string,
    ano: number,
    tipoCombustivel: string,
  ) {
    super(idVeiculo, 1, marca, cor, ano); // 1 = carro
    this._tipoCombustivel = tipoCombustivel;
  }

	public get tipoCombustivel(): string {
		return this._tipoCombustivel;
	}

	public set tipoCombustivel(value: string) {
		this._tipoCombustivel = value;
	}

	public visualizar(): void {
		super.visualizar();
		console.log(`Tipo de Combustível: ${this._tipoCombustivel}`)
	}

}
