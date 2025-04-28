"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var promptSync = require("prompt-sync");
var Entrada = /** @class */ (function () {
    function Entrada() {
        this.prompt = promptSync();
    }
    Entrada.prototype.receberNumero = function (mensagem) {
        var valor = this.prompt(mensagem);
        var numero = Number(valor);
        return numero;
    };
    Entrada.prototype.receberTexto = function (mensagem) {
        var texto = this.prompt(mensagem);
        return texto;
    };
    return Entrada;
}());
exports.default = Entrada;
