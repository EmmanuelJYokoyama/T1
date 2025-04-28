const promptSync = require("prompt-sync");
export default class Entrada {
    private prompt: any;

    constructor() {
        this.prompt = promptSync();
    }

    public receberNumero(mensagem: string): number {
        const valor = this.prompt(mensagem);
        const numero = Number(valor);
        return numero;
    }

    public receberTexto(mensagem: string): string {
        const texto = this.prompt(mensagem);
        return texto;
    }
}
