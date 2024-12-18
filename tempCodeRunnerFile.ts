import readlinesync = require("readline-sync");
import { colors } from "./util/colors";

export function main() {
  let opcao, idVeiculo, ano, cilindradas: number;
  let marca, nomeCLiente, placa, cor, tipoCombustivel: string;
  const tiposVeiculos = ["Carro", "Moto"];

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
    console.log("            5 - Sair                                ");
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

        idVeiculo = readlinesync.questionInt("Digite o ID do Veículo: ");
        marca = readlinesync.question("Digite a Marca/Modelo do Veículo: ");
        cor = readlinesync.question("Digite a Cor do Veículo: ");
        ano = readlinesync.questionInt("Digite o Ano do Veículo: ");

        let tipo = readlinesync.questionInt(
          "Digite o tipo de veículo (1 - Carro, 2 - Moto): "
        );

        switch (tipo) {
          case 1:
            console.log(
              "=== Digite o Tipo de Combustível (Ex: Gasolina, Etanol, Diesel): "
            );
            tipoCombustivel = readlinesync.question("Tipo de Combustível: ");
            break;
          case 2:
            console.log("=== Digite a Quantidade de Cilindradas: ");
            cilindradas = readlinesync.questionInt(
              "Digite a quantidade de cilindradas: "
            );
            break;
        }

        keyPress();
        break;
      case 2:
        console.log(colors.fg.red);
        console.log("=== Listar Veículos ===");

        keyPress();
        break;
      case 3:
        console.log(colors.fg.green);
        console.log("=== Alugar Veículo ===");

        idVeiculo = readlinesync.questionInt("Digite o ID do veículo para alugar: ");
        keyPress();
        break;
      case 4:
        console.log(colors.fg.red);
        console.log("=== Devolver Veículo ===");

        idVeiculo = readlinesync.questionInt("Digite o ID do veículo para devolver: ");

        keyPress();
        break;
      case 5:
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
