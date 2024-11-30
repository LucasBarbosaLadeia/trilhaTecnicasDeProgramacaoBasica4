var Biblioteca = /** @class */ (function () {
    function Biblioteca(livros) {
        this.livro = livros;
    }
    Biblioteca.prototype.buscarLivrosDisponiveis = function () {
        return this.livro.filter(function (livro) { return livro.disponivel === true; });
    };
    return Biblioteca;
}());
var livro1 = { titulo: "senhor dos aneis", autor: "tolkien", disponivel: true };
var biblioteca = new Biblioteca([livro1]);
var livrosDisponiveis = biblioteca.buscarLivrosDisponiveis();
console.log(livrosDisponiveis);
