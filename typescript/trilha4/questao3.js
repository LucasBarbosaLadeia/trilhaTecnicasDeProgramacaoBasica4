var Loja = /** @class */ (function () {
    function Loja(produtos) {
        this.produtos = produtos;
    }
    Loja.prototype.buscarProdutoPorCodigo = function (codigo) {
        return this.produtos.find(function (produto) { return produto.codigo === codigo; });
    };
    return Loja;
}());
var produto3 = { codigo: 1, nome: "Camiseta" };
var produto2 = { codigo: 2, nome: "Calça" };
var loja = new Loja([produto3, produto2]);
var produtoBuscado = loja.buscarProdutoPorCodigo(1);
console.log(produtoBuscado);
var produtoInexistente = loja.buscarProdutoPorCodigo(3);
console.log(produtoInexistente);
