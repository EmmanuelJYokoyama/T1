import Cliente from "../modelo/cliente";
import Listagem from "./listagem";

export default class ListagemClientes extends Listagem {
    private clientes: Array<Cliente>
    constructor(clientes: Array<Cliente>) {
        super();
        this.clientes = clientes;
    }

    public listar(): void {
        console.log(`\nLista de todos os clientes:`);
        this.clientes.forEach(cliente => {
            console.log(`Nome: ` + cliente.nome);
            console.log(`Nome social: ` + cliente.nomeSocial);
            console.log(`CPF: ` + cliente.getCpf.getValor);
            console.log(`--------------------------------------`);
        });
        console.log(`\n`);
    }

	public listarMaisConsumiram(): void {
		console.log(`\nLista dos 10 clientes que mais consumiram:`);

		this.clientes.sort((a, b) => {
			const consumoTotalA = a.getProdutosConsumidos.length + a.getServicosConsumidos.length;
			const consumoTotalB = b.getProdutosConsumidos.length + b.getServicosConsumidos.length;
			return consumoTotalB - consumoTotalA;
		});

		const top10Clientes = this.clientes.slice(0, 10);

		top10Clientes.forEach((cliente, index) => {
			console.log(`${index + 1}. Nome: ${cliente.nome}`);
			const consumoTotal = cliente.getProdutosConsumidos.length + cliente.getServicosConsumidos.length;
			console.log(`   Consumo total: ${consumoTotal} itens`);
			console.log(`--------------------------------------`);
		});
        console.log(`\n`);
	}

	public listarMenosConsumiram(): void {
		console.log(`\nLista dos 10 clientes que menos consumiram:`);

		this.clientes.sort((a, b) => {
			const consumoTotalA = a.getProdutosConsumidos.length + a.getServicosConsumidos.length;
			const consumoTotalB = b.getProdutosConsumidos.length + b.getServicosConsumidos.length;
			return consumoTotalA - consumoTotalB;
		});

        const bottom10Clientes = this.clientes.slice(0, 10);

        bottom10Clientes.forEach((cliente, index) => {
			console.log(`${index + 1}. Nome: ${cliente.nome}`);
			const consumoTotal = cliente.getProdutosConsumidos.length + cliente.getServicosConsumidos.length;
			console.log(`   Consumo total: ${consumoTotal} itens`);
			console.log(`--------------------------------------`);
		});
        console.log(`\n`);
	}

	public listarMaisConsumiramEmValor(): void {
        console.log(`\nLista dos 5 clientes que mais consumiram em valor:`);

        this.clientes.sort((a, b) => {
            const clvA = this.calcularCLV(a);
            const clvB = this.calcularCLV(b);
            return clvB - clvA;
        });

        const top5Clientes = this.clientes.slice(0, 5);

        top5Clientes.forEach((cliente, index) => {
            console.log(`${index + 1}. Nome: ${cliente.nome}`);
            console.log(`   CLV: R$${this.calcularCLV(cliente)}`);
            console.log(`--------------------------------------`);
        });

        console.log(`\n`);
    }

	private calcularCLV(cliente: Cliente): number {
        let clv = 0;
		cliente.getProdutosConsumidos.forEach((servico) => {
            clv += servico.getValor;
        });
        cliente.getProdutosConsumidos.forEach((produto) => {
            clv += produto.getValor;
        });
        return clv;
    }

	public listarPorGenero(): void {
		console.log(`\nLista de todos os clientes por gênero:`);

        const clientesPorGenero = this.agruparPorGenero();

        clientesPorGenero.forEach((clientes, genero) => {
            console.log(`Gênero: ${genero}`);
            clientes.forEach((cliente) => {
                console.log(`  Nome: ${cliente.nome}`);
                console.log(`  Nome social: ${cliente.nomeSocial}`);
                console.log(`  CPF: ${cliente.getCpf.getValor}`);
                console.log(`--------------------------------------`);
            });
        });

        console.log(`\n`);
	}

	private agruparPorGenero(): Map<string, Array<Cliente>> {
        const clientesPorGenero = new Map<string, Array<Cliente>>();

        this.clientes.forEach((cliente) => {
            const genero = cliente.getGenero;
            if (!clientesPorGenero.has(genero)) {
                clientesPorGenero.set(genero, []);
            }
            clientesPorGenero.get(genero)?.push(cliente);
        });

        return clientesPorGenero;
    }

	listarConsumoPorGenero(): void {
		console.log(`\nProdutos e serviços mais consumidos por gênero:`);

        const consumoPorGenero = new Map<string, Map<string, number>>();

        this.clientes.forEach((cliente) => {
            const genero = cliente.getGenero;
            if (!consumoPorGenero.has(genero)) {
                consumoPorGenero.set(genero, new Map<string, number>());
            }
            const produtosPorGenero = consumoPorGenero.get(genero)!;
            cliente.getProdutosConsumidos.forEach((produto) => {
                produtosPorGenero.set(produto.getNome, (produtosPorGenero.get(produto.getNome) || 0) + 1);
            });
        });

        consumoPorGenero.forEach((produtosPorGenero, genero) => {
            console.log(`Gênero: ${genero}`);
            produtosPorGenero.forEach((quantidade, nomeProduto) => {
                console.log(`  Produto/Serviço: ${nomeProduto} - Quantidade consumida: ${quantidade}`);
            });
        });

        console.log(`\n`);
	}

}