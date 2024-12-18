import { Veiculos } from "../model/Veiculos";
import { Repository } from "../repository/Repository";

export class Controller implements Repository {
  private listaVeiculos = new Array<Veiculos>();

  procurarPorID(numero: number): void {
    const buscaVeiculo = this.buscarNoArray(numero);
    if (buscaVeiculo !== null) {
      buscaVeiculo.visualizar();
    } else {
      console.log(`\nO veículo com ID: ${numero} não foi encontrado!`);
    }
  }

  listarTodos(): void {
    if (this.listaVeiculos.length === 0) {
      console.log("\nNenhum veículo cadastrado!");
    } else {
      this.listaVeiculos.forEach((veiculo) => {
        veiculo.visualizar();
      });
    }
  }

  cadastrar(veiculo: Veiculos): void {
    this.listaVeiculos.push(veiculo);
    console.log("\nVeículo cadastrado com sucesso!");
  }

  atualizar(veiculo: Veiculos): void {
    const index = this.listaVeiculos.findIndex((v) => v.idVeiculo === veiculo.idVeiculo);
    if (index !== -1) {
      this.listaVeiculos[index] = veiculo;
      console.log(`\nO Veículo com ID: ${veiculo.idVeiculo} foi atualizado com sucesso!`);
    } else {
      console.log(`\nO Veículo com ID: ${veiculo.idVeiculo} não foi encontrado.`);
    }
  }

  deletar(numero: number): void {
    const index = this.listaVeiculos.findIndex((v) => v.idVeiculo === numero);
    if (index !== -1) {
      this.listaVeiculos.splice(index, 1);
      console.log("\nVeículo deletado com sucesso!");
    } else {
      console.log(`\nVeículo com ID ${numero} não encontrado para exclusão!`);
    }
  }

  public buscarNoArray(numero: number): Veiculos | null {
    return this.listaVeiculos.find((veiculo) => veiculo.idVeiculo === numero) || null;
  }
}
