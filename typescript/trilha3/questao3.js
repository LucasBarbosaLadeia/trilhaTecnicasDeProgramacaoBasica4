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
// Classe base abstrata Pagamento
var Pagamento = /** @class */ (function () {
    function Pagamento() {
    }
    return Pagamento;
}());
// Subclasse PagamentoCartao
var PagamentoCartao = /** @class */ (function (_super) {
    __extends(PagamentoCartao, _super);
    function PagamentoCartao(numeroCartao) {
        var _this = _super.call(this) || this;
        _this.numeroCartao = numeroCartao;
        return _this;
    }
    PagamentoCartao.prototype.validarCartao = function () {
        // Validação básica: número do cartão com 16 dígitos
        return /^\d{16}$/.test(this.numeroCartao);
    };
    PagamentoCartao.prototype.processar = function () {
        if (this.validarCartao()) {
            console.log("Pagamento por cart\u00E3o aprovado! N\u00FAmero do cart\u00E3o: ".concat(this.numeroCartao));
        }
        else {
            console.log("Pagamento por cart\u00E3o recusado: N\u00FAmero inv\u00E1lido!");
        }
    };
    return PagamentoCartao;
}(Pagamento));
// Subclasse PagamentoBoleto
var PagamentoBoleto = /** @class */ (function (_super) {
    __extends(PagamentoBoleto, _super);
    function PagamentoBoleto(valor) {
        var _this = _super.call(this) || this;
        _this.valor = valor;
        return _this;
    }
    PagamentoBoleto.prototype.gerarBoleto = function () {
        return 'BOLETO-123456';
    };
    PagamentoBoleto.prototype.processar = function () {
        var codigoBoleto = this.gerarBoleto();
        console.log("Boleto gerado com sucesso: C\u00F3digo: ".concat(codigoBoleto, " | Valor: R$").concat(this.valor.toFixed(2)));
    };
    return PagamentoBoleto;
}(Pagamento));
// Função para processar os pagamentos
function processarPagamentos(pagamentos) {
    pagamentos.forEach(function (pagamento) {
        pagamento.processar();
    });
}
// Testando o código
var pagamentos = [
    new PagamentoCartao("1234567812345678"),
    new PagamentoCartao("12345"),
    new PagamentoBoleto(200.5),
];
processarPagamentos(pagamentos);
