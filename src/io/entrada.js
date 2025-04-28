"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prompt_sync_1 = require("prompt-sync");
var Entrada = /** @class */ (function () {
    function Entrada() {
        this.prompt = (0, prompt_sync_1.default)();
    }
    Entrada.prototype.receberNumero = function (mensagem) {
        var valor = this.prompt(mensagem);
        var numero = new Number(valor);
        return numero.valueOf();
    };
    Entrada.prototype.receberTexto = function (mensagem) {
        var texto = this.prompt(mensagem);
        return texto;
    };
    return Entrada;
}());
exports.default = Entrada;
