var ContaBancaria = /** @class */ (function () {
    function ContaBancaria(titular, saldo) {
        this.titular = titular;
        this.saldo = saldo;
    }
    ContaBancaria.prototype.dinheiroAtual = function () {
        console.log("dinheiro atual ".concat(this.saldo));
    };
    ContaBancaria.prototype.sacarDinheiro = function () {
        console.log("dinheiro apos saque ".concat(this.saldo - 100));
    };
    ContaBancaria.prototype.depositarDinheiro = function () {
        console.log("dinheiro apos deposito ".concat(this.saldo + 100));
    };
    return ContaBancaria;
}());
var contaBancaria1 = new ContaBancaria("nome", 200);
contaBancaria1.dinheiroAtual();
contaBancaria1.sacarDinheiro();
contaBancaria1.depositarDinheiro();
