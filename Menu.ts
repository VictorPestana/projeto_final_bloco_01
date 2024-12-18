import readlinesync = require("readline-sync");
import { colors } from "./util/colors";
import { Carro } from "./src/model/Carro";
import { Moto } from "./src/model/Moto";
import { Controller } from "./src/controller/Controller";
import { Veiculos } from "./src/model/Veiculos";

export function main() {
  let opcao, idVeiculo, ano, cilindradas: number;
  let marca, nomeCliente, placa, cor, tipoCombustivel: string;
  const tiposVeiculos = ["Carro", "Moto"];

  const veiculos = new Controller(); // gerenciamento dos veiculos
  const veiculosAlugados: number[] = [];

  const carro1 = new Carro(1, 1, "Fusca", "Azul", 1985, "Gasolina"); // ID, TIPO (CARRO), MODELO, COR, ANO, TIPOCOMBUSTIVEL
  const carro2 = new Carro(2, 1, "Gol", "Preto", 2015, "Etanol"); // ID, TIPO (CARRO), MODELO, COR, ANO, TIPOCOMBUSTIVEL
  const moto1 = new Moto(3, 2, "Honda", "Vermelha", 2018, 125); // ID, TIPO (MOTO), MODELO< COR, ANO, CILINDRADAS
  const moto2 = new Moto(4, 2, "Yamaha", "Preta", 2020, 200); // ID, TIPO (MOTO), MODELO< COR, ANO, CILINDRADAS

  veiculos.cadastrar(carro1);
  veiculos.cadastrar(carro2);
  veiculos.cadastrar(moto1);
  veiculos.cadastrar(moto2);

  while (true) {
    console.log(colors.bg.black, colors.fg.green);
    console.log("");
    console.log("=====================================================");
    console.log("                                                     ");
    console.log("              AlugaFácil - Locação de Veículos        ");
    console.log("                                                     ");
    console.log("=====================================================");
    console.log("                                                     ");
    console.log("            1 - Cadastrar Veículo                   ");
    console.log("            2 - Listar Veículos                     ");
    console.log("            3 - Alugar Veículo                      ");
    console.log("            4 - Devolver Veículo                    ");
    console.log("            5 - Deletar Veículo                   ");
    console.log("            6 - Lista de Veículo Alugados                      ");
    console.log("            7 - Sair                                ");
    console.log("                                                     ");
    console.log("=====================================================");
    console.log("                                                     ");
    console.log(colors.reset);

    console.log("Entre com a opção desejada: ");
    opcao = readlinesync.questionInt("");

    console.log("");

    switch (opcao) {
      case 1:
        console.log(colors.fg.green);
        console.log("=== Cadastrar Veículo ===");

        console.log("Digite o ID do Veículo: ");
        idVeiculo = readlinesync.questionInt();
        console.log("Digite a Marca/Modelo do Veículo: ");
        marca = readlinesync.question();
        console.log("Digite a Cor do Veículo: ");
        cor = readlinesync.question();
        console.log("Digite o Ano do Veículo: ");
        ano = readlinesync.questionInt();

        let tipo = readlinesync.questionInt(
          "Digite o tipo de veiculo (1 - Carro, 2 - Moto): "
        );

        switch (tipo) {
          case 1:
            console.log(
              "=== Digite o Tipo de Combustível (Ex: Gasolina, Etanol, Diesel): "
            );
            tipoCombustivel = readlinesync.question();
            const carro = new Carro(idVeiculo, tipo, marca, cor, ano, tipoCombustivel);
            veiculos.cadastrar(carro);

            break;
          case 2:
            console.log("=== Quantidade de Cilindradas: ");
            cilindradas = readlinesync.questionInt(
              "Digite a quantidade de cilindradas: "
            );
            const moto = new Moto(idVeiculo, tipo, marca, cor, ano, cilindradas);
            veiculos.cadastrar(moto);
            break;
          default:
            console.log("Opcão inválida, escolha entre 1 - Carro ou 2 - Moto");
        }

        keyPress();
        break;
      case 2:
        console.log(colors.fg.red);
        console.log("=== Listar Veículos ===");
        veiculos.listarTodos();
        keyPress();
        break;
      case 3:
        console.log(colors.fg.green);
        console.log("=== Alugar Veículo ===");

        idVeiculo = readlinesync.questionInt("Digite o ID do veiculo para alugar: ");

        const veiculoParaAlugar = veiculos.buscarNoArray(idVeiculo);

        if (veiculoParaAlugar && !veiculosAlugados.includes(idVeiculo)) {
          veiculosAlugados.push(idVeiculo);
          console.log("Veículo alugado com sucesso!");
        } else if (veiculosAlugados.includes(idVeiculo)) {
          console.log("Este veículo já está alugado!");
        } else {
          console.log("Veículo não encontrado!");
        }

        keyPress();
        break;
      case 4:
        console.log(colors.fg.red);
        console.log("=== Devolver Veículo ===");

        idVeiculo = readlinesync.questionInt("Digite o ID do veiculo para devolver: ");
        const veiculoParaDevolver = veiculos.buscarNoArray(idVeiculo);

        if (veiculoParaDevolver && veiculosAlugados.includes(idVeiculo)) {
          const index = veiculosAlugados.indexOf(idVeiculo); // achar posicao do veiculo consoante ID
          veiculosAlugados.splice(index, 1); // splice para remover veiculo da lista de alugados
          console.log("Veículo devolvido com sucesso!");
        } else if (veiculosAlugados.includes(idVeiculo)) {
          console.log("Este veículo não foi alugado ou já foi devolvido.");
        } else {
          console.log("Veículo não encontrado!");
        }
        keyPress();
        break;

      case 5:
        console.log(colors.fg.red);
        console.log("=== Deleter Veículo ===");

        idVeiculo = readlinesync.questionInt("Digite o ID do veiculo para deletar: ");
        veiculos.deletar(idVeiculo);

        keyPress();
        break;
      case 6:
        console.log(colors.fg.red);
        console.log("=== Listar Veículos Alugados ===");
        veiculos.listarTodosStatus(veiculosAlugados);
        keyPress();
        break;
      case 7:
        console.log(colors.fg.red);
        console.log("=== Sair ===");
        console.log("\nSaindo...\n");
        sobre();
        process.exit(0);
        break;

      default:
        console.log("Opção inválida, digite novamente!");
        break;
    }
  }
}

function keyPress(): void {
  console.log("\nPressione enter para continuar...");
  readlinesync.prompt();
}

export function sobre(): void {
  console.log();
  console.log("=========================================");
  console.log("Projeto Desenvolvido por: ");
  console.log("Victor Pestana - victorpestanavgp@gmail.com");
  console.log("https://github.com/VictorPestana");
  console.log("=========================================");
  console.log();
}

main();
