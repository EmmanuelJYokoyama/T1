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
var listagem_1 = require("./listagem");
var ListagemClientes = /** @class */ (function (_super) {
    __extends(ListagemClientes, _super);
    function ListagemClientes(clientes) {
        var _this = _super.call(this) || this;
        _this.clientes = clientes;
        return _this;
    }
    ListagemClientes.prototype.listar = function () {
        console.log("\nLista de todos os clientes:");
        this.clientes.forEach(function (cliente) {
            console.log("Nome: " + cliente.nome);
            console.log("Nome social: " + cliente.nomeSocial);
            console.log("CPF: " + cliente.getCpf.getValor);
            console.log("--------------------------------------");
        });
        console.log("\n");
    };
    ListagemClientes.prototype.maiorConsumo = function () {
        console.log("\nLista dos 10 clientes que mais consumiram:");
        this.clientes.sort(function (a, b) {
            var consumoTotalA = a.getProdutosConsumidos.length + a.getServicosConsumidos.length;
            var consumoTotalB = b.getProdutosConsumidos.length + b.getServicosConsumidos.length;
            return consumoTotalB - consumoTotalA;
        });
        var top10Clientes = this.clientes.slice(0, 10);
        top10Clientes.forEach(function (cliente, index) {
            console.log("".concat(index + 1, ". Nome: ").concat(cliente.nome));
            var consumoTotal = cliente.getProdutosConsumidos.length + cliente.getServicosConsumidos.length;
            console.log("   Consumo total: ".concat(consumoTotal, " itens"));
            console.log("--------------------------------------");
        });
        console.log("\n");
    };
    ListagemClientes.prototype.menorConsumo = function () {
        console.log("\nLista dos 10 clientes que menos consumiram:");
        this.clientes.sort(function (a, b) {
            var consumoTotalA = a.getProdutosConsumidos.length + a.getServicosConsumidos.length;
            var consumoTotalB = b.getProdutosConsumidos.length + b.getServicosConsumidos.length;
            return consumoTotalA - consumoTotalB;
        });
        var bottom10Clientes = this.clientes.slice(0, 10);
        bottom10Clientes.forEach(function (cliente, index) {
            console.log("".concat(index + 1, ". Nome: ").concat(cliente.nome));
            var consumoTotal = cliente.getProdutosConsumidos.length + cliente.getServicosConsumidos.length;
            console.log("   Consumo total: ".concat(consumoTotal, " itens"));
            console.log("--------------------------------------");
        });
        console.log("\n");
    };
    ListagemClientes.prototype.maiorConsumoEmValor = function () {
        var _this = this;
        console.log("\nLista dos 5 clientes que mais consumiram em valor:");
        this.clientes.sort(function (a, b) {
            var valTotA = _this.calcularValorTot(a);
            var valTotB = _this.calcularValorTot(b);
            return valTotB - valTotA;
        });
        var top5Clientes = this.clientes.slice(0, 5);
        top5Clientes.forEach(function (cliente, index) {
            console.log("".concat(index + 1, ". Nome: ").concat(cliente.nome));
            console.log("   Valor Total: R$".concat(_this.calcularValorTot(cliente)));
            console.log("--------------------------------------");
        });
        console.log("\n");
    };
    ListagemClientes.prototype.calcularValorTot = function (cliente) {
        var clv = 0;
        cliente.getProdutosConsumidos.forEach(function (servico) {
            clv += servico.getValor;
        });
        cliente.getProdutosConsumidos.forEach(function (produto) {
            clv += produto.getValor;
        });
        return clv;
    };
    ListagemClientes.prototype.clientesByGenero = function () {
        console.log("\nLista de todos os clientes por g\u00EAnero:");
        var clientesPorGenero = this.agrupaGenero();
        clientesPorGenero.forEach(function (clientes, genero) {
            console.log("G\u00EAnero: ".concat(genero));
            clientes.forEach(function (cliente) {
                console.log("  Nome: ".concat(cliente.nome));
                console.log("  Nome social: ".concat(cliente.nomeSocial));
                console.log("  CPF: ".concat(cliente.getCpf.getValor));
                console.log("--------------------------------------");
            });
        });
        console.log("\n");
    };
    ListagemClientes.prototype.agrupaGenero = function () {
        var clientesPorGenero = new Map();
        this.clientes.forEach(function (cliente) {
            var _a;
            var genero = cliente.getGenero;
            if (!clientesPorGenero.has(genero)) {
                clientesPorGenero.set(genero, []);
            }
            (_a = clientesPorGenero.get(genero)) === null || _a === void 0 ? void 0 : _a.push(cliente);
        });
        return clientesPorGenero;
    };
    ListagemClientes.prototype.prodServByGenero = function () {
        console.log("\nProdutos e servi\u00E7os mais consumidos por g\u00EAnero:");
        var consumoPorGenero = new Map();
        this.clientes.forEach(function (cliente) {
            var genero = cliente.getGenero;
            if (!consumoPorGenero.has(genero)) {
                consumoPorGenero.set(genero, new Map());
            }
            var produtosPorGenero = consumoPorGenero.get(genero);
            cliente.getProdutosConsumidos.forEach(function (produto) {
                produtosPorGenero.set(produto.getNome, (produtosPorGenero.get(produto.getNome) || 0) + 1);
            });
        });
        consumoPorGenero.forEach(function (produtosPorGenero, genero) {
            console.log("G\u00EAnero: ".concat(genero));
            produtosPorGenero.forEach(function (quantidade, nomeProduto) {
                console.log("  Produto/Servi\u00E7o: ".concat(nomeProduto, " - Quantidade consumida: ").concat(quantidade));
            });
        });
        console.log("\n");
    };
    return ListagemClientes;
}(listagem_1.default));
exports.default = ListagemClientes;
