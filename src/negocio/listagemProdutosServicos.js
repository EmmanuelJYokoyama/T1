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
var ListagemProdutosServicos = /** @class */ (function (_super) {
    __extends(ListagemProdutosServicos, _super);
    function ListagemProdutosServicos(servicos, produtos) {
        var _this = _super.call(this) || this;
        _this.servicos = servicos;
        _this.produtos = produtos;
        return _this;
    }
    ListagemProdutosServicos.prototype.listar = function () {
        console.log("\nLista de todos os servi\u00E7os:");
        this.servicos.forEach(function (servico) {
            console.log("  Nome do servi\u00E7o: ".concat(servico.getNome));
        });
        console.log("\nLista de todos os produtos:");
        this.produtos.forEach(function (produto) {
            console.log("  Nome do produto: ".concat(produto.getNome));
        });
        console.log("\n");
    };
    ListagemProdutosServicos.prototype.listarMaisConsumidos = function () {
        console.log("\nLista de servi\u00E7os e produtos mais consumidos:");
        var servicosPorConsumo = this.agruparPorConsumo(this.servicos);
        var produtosPorConsumo = this.agruparPorConsumo(this.produtos);
        this.exibirConsumo("Serviços", servicosPorConsumo);
        this.exibirConsumo("Produtos", produtosPorConsumo);
        console.log("\n");
    };
    ListagemProdutosServicos.prototype.agruparPorConsumo = function (itens) {
        var consumoPorItem = new Map();
        itens.forEach(function (item) {
            var nome = item.getNome;
            if (!consumoPorItem.has(nome)) {
                consumoPorItem.set(nome, 0);
            }
            consumoPorItem.set(nome, consumoPorItem.get(nome) + 1);
        });
        return consumoPorItem;
    };
    ListagemProdutosServicos.prototype.exibirConsumo = function (tipo, consumoPorItem) {
        console.log("".concat(tipo, ":"));
        consumoPorItem.forEach(function (quantidade, nome) {
            console.log("  ".concat(nome, ": ").concat(quantidade, " vezes consumido"));
        });
    };
    return ListagemProdutosServicos;
}(listagem_1.default));
exports.default = ListagemProdutosServicos;
