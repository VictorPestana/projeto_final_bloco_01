import { Veiculos } from "../model/Veiculos";

export interface Repository {
	procurarPorID(numero: number): void;
	listarTodos(): void;
	cadastrar(veiculo: Veiculos): void; 
	atualizar(veiculo: Veiculos): void; 
	deletar(numero: number): void;
}
