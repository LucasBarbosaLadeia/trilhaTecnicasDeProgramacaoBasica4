
abstract class Pagamento {
    abstract processar(): void;
}


class PagamentoCartao extends Pagamento {
    private numeroCartao: string;

    constructor(numeroCartao: string) {
        super();
        this.numeroCartao = numeroCartao;
    }

    private validarCartao() {
        return this.numeroCartao
       
    }

    processar() {
    console.log(`${this.validarCartao()}`)
          
    }
}


class PagamentoBoleto extends Pagamento {

    constructor(valor: number) {
        super();
    }

    private gerarBoleto(): string {
        return 'BOLETO-123456';
    }
    processar() {
        const codigoBoleto = this.gerarBoleto();
        console.log(`Boleto gerado com sucesso: Código: ${codigoBoleto}`);
    }
}


function processarPagamentos(pagamentos: Pagamento[]): void {
    pagamentos.forEach((pagamento) => {
        pagamento.processar();
    });
}


const pagamentos: Pagamento[] = [
    new PagamentoCartao("1234567812345678"), 
    new PagamentoCartao("12345"), 
    new PagamentoBoleto (200)
  
];

processarPagamentos(pagamentos);

