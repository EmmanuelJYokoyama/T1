"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var entrada_1 = require("../io/entrada");
var cliente_1 = require("../modelo/cliente");
var cpf_1 = require("../modelo/cpf");
var cadastro_1 = require("./cadastro");
var CadastroCliente = /** @class */ (function (_super) {
    __extends(CadastroCliente, _super);
    function CadastroCliente(clientes, produtos, servicos) {
        var _this = _super.call(this) || this;
        _this.clientes = clientes;
        _this.produtos = produtos;
        _this.servicos = servicos;
        _this.entrada = new entrada_1.default();
        return _this;
    }
    CadastroCliente.prototype.cadastrar = function () {
        console.log("\nIn\u00EDcio do cadastro do cliente");
        var nome = this.entrada.receberTexto("Por favor informe o nome do cliente: ");
        var nomeSocial = this.entrada.receberTexto("Por favor informe o nome social do cliente: ");
        var valor = this.entrada.receberTexto("Por favor informe o n\u00FAmero do cpf: ");
        var data = this.entrada.receberTexto("Por favor informe a data de emiss\u00E3o do cpf, no padr\u00E3o dd/mm/yyyy: ");
        var genero = this.entrada.receberTexto("Por favor informe o g\u00EAnero do cliente (M-F): ");
        do {
            genero = this.entrada.receberTexto("Por favor informe o g\u00EAnero do cliente corretamente! (M-F): ");
        } while (genero.toUpperCase() !== 'M' && genero.toUpperCase() !== 'F');
        var splitData = data.split('/');
        var ano = new Number(splitData[2].valueOf()).valueOf();
        var mes = new Number(splitData[1].valueOf()).valueOf();
        var dia = new Number(splitData[0].valueOf()).valueOf();
        var dataEmissao = new Date(ano, mes, dia);
        var cpf = new cpf_1.default(valor, dataEmissao);
        var cliente = new cliente_1.default(nome, nomeSocial, cpf, genero);
        this.clientes.push(cliente);
        console.log("\nCadastro conclu\u00EDdo :)\n");
    };
    CadastroCliente.prototype.ProdAssociadoCli = function () {
        var cpfCliente = this.entrada.receberTexto("Informe o CPF do cliente: ");
        var cliente = this.clientes.find(function (cliente) { return cliente.getCpf.getValor === cpfCliente; });
        if (cliente) {
            var produtoNome_1 = this.entrada.receberTexto("Informe o nome do produto a ser associado: ");
            var produto = this.produtos.find(function (produto) { return produto.getNome === produtoNome_1; });
            if (produto) {
                cliente.addProduct(produto);
                console.log("Produto associado com sucesso!");
            }
            else {
                console.log("Produto n\u00E3o encontrado!");
            }
        }
        else {
            console.log("Cliente n\u00E3o encontrado!");
        }
    };
    CadastroCliente.prototype.ServAssociadoCli = function () {
        var cpfCliente = this.entrada.receberTexto("Informe o CPF do cliente: ");
        var cliente = this.clientes.find(function (cliente) { return cliente.getCpf.getValor === cpfCliente; });
        if (cliente) {
            var servicoNome_1 = this.entrada.receberTexto("Informe o nome do servi\u00E7o a ser associado: ");
            var servico = this.servicos.find(function (servico) { return servico.getNome === servicoNome_1; });
            if (servico) {
                cliente.addService(servico);
                console.log("Servi\u00E7o associado com sucesso!");
            }
            else {
                console.log("Servi\u00E7o n\u00E3o encontrado!");
            }
        }
        else {
            console.log("Cliente n\u00E3o encontrado!");
        }
    };
    return CadastroCliente;
}(cadastro_1.default));
exports.default = CadastroCliente;
