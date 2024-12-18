export abstract class Veiculos {
	private _idVeiculo: number;
	private _tipo: number;
	private _marca: string;
	private _cor: string;
	private _ano: number;
  
	constructor(
	  idVeiculo: number,
	  tipo: number,
	  marca: string,
	  cor: string,
	  ano: number
	) {
	  this._idVeiculo = idVeiculo;
	  this._tipo = tipo;
	  this._marca = marca;
	  this._cor = cor;
	  this._ano = ano;
	}
  
	public get idVeiculo(): number {
	  return this._idVeiculo;
	}
  
	public get tipo(): number {
	  return this._tipo;
	}
  
	public get marca(): string {
	  return this._marca;
	}
  
	public get cor(): string {
	  return this._cor;
	}
  
	public get ano(): number {
	  return this._ano;
	}
  
	public set idVeiculo(value: number) {
	  this._idVeiculo = value;
	}
  
	public set tipo(value: number) {
	  this._tipo = value;
	}
  
	public set marca(value: string) {
	  this._marca = value;
	}
  
	public set cor(value: string) {
	  this._cor = value;
	}
  
	public set ano(value: number) {
	  this._ano = value;
	}
  
	public visualizar(): void {
	  let tipo: string = "";
  
	  switch (this._tipo) {
		case 1:
		  tipo = "Carro";
		  break;
		case 2:
		  tipo = "Moto";
		  break;
		default:
		  tipo = "Tipo desconhecido";
	  }
  
	  console.log("\n\n========================================");
	  console.log("=== Dados do Veículo ===");
	  console.log("=========================================");
	  console.log("Tipo do Veículo: " + tipo);
	  console.log("ID do Veículo: " + this._idVeiculo);
	  console.log("Marca/Modelo: " + this._marca);
	  console.log("Ano: " + this._ano);
	  console.log("Cor: " + this._cor);
	}
  }
  