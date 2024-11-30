// Classe base abstrata Pagamento
abstract class Pagamento {
    abstract processar(): void;
}

// Subclasse PagamentoCartao
class PagamentoCartao extends Pagamento {
    private numeroCartao: string;

    constructor(numeroCartao: string) {
        super();
        this.numeroCartao = numeroCartao;
    }

    private validarCartao(): boolean {
        // Validação básica: número do cartão com 16 dígitos
        return /^\d{16}$/.test(this.numeroCartao);
    }

    processar(): void {
        if (this.validarCartao()) {
            console.log(`Pagamento por cartão aprovado! Número do cartão: ${this.numeroCartao}`);
        } else {
            console.log(`Pagamento por cartão recusado: Número inválido!`);
        }
    }
}

// Subclasse PagamentoBoleto
class PagamentoBoleto extends Pagamento {
    private valor: number;

    constructor(valor: number) {
        super();
        this.valor = valor;
    }

    private gerarBoleto(): string {
        return 'BOLETO-123456';
    }
    processar() {
        const codigoBoleto = this.gerarBoleto();
        console.log(`Boleto gerado com sucesso: Código: ${codigoBoleto} | Valor: R$${this.valor.toFixed(2)}`);
    }
}

// Função para processar os pagamentos
function processarPagamentos(pagamentos: Pagamento[]): void {
    pagamentos.forEach((pagamento) => {
        pagamento.processar();
    });
}

// Testando o código
const pagamentos: Pagamento[] = [
    new PagamentoCartao("1234567812345678"), 
    new PagamentoCartao("12345"), 
    new PagamentoBoleto(200.5), 
];

processarPagamentos(pagamentos);

calcularSalarioComBonus(funcionarios);