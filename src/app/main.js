"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var entrada_1 = require("../io/entrada");
var empresa_1 = require("../modelo/empresa");
var cadastroCliente_1 = require("../negocio/cadastroCliente");
var listagemClientes_1 = require("../negocio/listagemClientes");
var listagemProdutosServicos_1 = require("../negocio/listagemProdutosServicos");
var cadastroProduto_1 = require("../negocio/cadastroProduto");
var cadastroServico_1 = require("../negocio/cadastroServico");
console.log("Bem-vindo ao cadastro de clientes World Beauty");
var empresa = new empresa_1.default();
var execucao = true;
while (execucao) {
    console.log("Op\u00E7\u00F5es:");
    console.log("1 - Cadastrar cliente");
    console.log("2 - Cadastrar O produto");
    console.log("3 - Cadastrar servi\u00E7o");
    console.log("4 - Listar todos os clientes");
    console.log("5 - Listar os 10 clientes que mais consumiram em quantidade");
    console.log("6 - Listar os 10 clientes que menos consumiram em quantidade");
    console.log("7 - Listar os 5 clientes que mais consumiram em valor");
    console.log("8 - Listar todos os clientes por g\u00EAnero");
    console.log("9 - Listar os produtos/servi\u00E7os mais consumidos por g\u00EAnero");
    console.log("10 - Listar todos os produtos/servi\u00E7os");
    console.log("11 - Listar os produtos/servi\u00E7os mais consumidos");
    console.log("12 - Associar produto a cliente");
    console.log("13 - Associar servi\u00E7o a cliente");
    console.log("0 - Sair");
    var entrada = new entrada_1.default();
    var opcao = entrada.receberNumero("Por favor, escolha uma op\u00E7\u00E3o: ");
    switch (opcao) {
        case 1:
            var cadastro = new cadastroCliente_1.default(empresa.getClientes, empresa.getProdutos, empresa.getServicos);
            cadastro.cadastrar();
            break;
        case 2:
            var cadastroProduto = new cadastroProduto_1.default(empresa.getProdutos);
            cadastroProduto.cadastrar();
            break;
        case 3:
            var cadastroServico = new cadastroServico_1.default(empresa.getServicos);
            cadastroServico.cadastrar();
            break;
        case 4:
            var listagem = new listagemClientes_1.default(empresa.getClientes);
            listagem.listar();
            break;
        case 5:
            var listagemTop10 = new listagemClientes_1.default(empresa.getClientes);
            listagemTop10.maiorConsumo();
            break;
        case 6:
            var listagemBottom10 = new listagemClientes_1.default(empresa.getClientes);
            listagemBottom10.menorConsumo();
            break;
        case 7:
            var listagemTop5 = new listagemClientes_1.default(empresa.getClientes);
            listagemTop5.maiorConsumoEmValor();
            break;
        case 8:
            var listagemGenero = new listagemClientes_1.default(empresa.getClientes);
            listagemGenero.clientesByGenero();
            break;
        case 9:
            var listagemConsumoGenero = new listagemClientes_1.default(empresa.getClientes);
            listagemConsumoGenero.prodServByGenero();
            break;
        case 10:
            var listagemProdutosServicos = new listagemProdutosServicos_1.default(empresa.getServicos, empresa.getProdutos);
            listagemProdutosServicos.listar();
            break;
        case 11:
            var listagemTopProdutosServicos = new listagemProdutosServicos_1.default(empresa.getServicos, empresa.getProdutos);
            listagemTopProdutosServicos.listarMaisConsumidos();
            break;
        case 12:
            var associarProduto = new cadastroCliente_1.default(empresa.getClientes, empresa.getProdutos, empresa.getServicos);
            associarProduto.ProdAssociadoCli();
            break;
        case 13:
            var associarServico = new cadastroCliente_1.default(empresa.getClientes, empresa.getProdutos, empresa.getServicos);
            associarServico.ServAssociadoCli();
            break;
        case 0:
            execucao = false;
            console.log("Volte Sempre");
            break;
        default:
            console.log("Opera\u00E7\u00E3o n\u00E3o entendida :(");
    }
}
