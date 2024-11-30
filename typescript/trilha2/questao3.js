var Produto = /** @class */ (function () {
    function Produto(nome, preco, quantidade) {
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
    }
    Produto.prototype.calcularEstoque = function () {
        console.log("total: ".concat(this.quantidade * this.preco));
    };
    return Produto;
}());
var produto1 = new Produto("nome", 3, 20);
produto1.calcularEstoque();
