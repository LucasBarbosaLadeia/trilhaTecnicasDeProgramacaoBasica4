var Livro = /** @class */ (function () {
    function Livro(titulo, paginas) {
        this.titulo = titulo;
        this.paginas = paginas;
    }
    Livro.prototype.livro = function () {
        console.log("TITULO: ".concat(this.titulo, ", paginas: ").concat(this.paginas));
    };
    Livro.prototype.verificarLivro = function () {
        console.log("lido");
    };
    return Livro;
}());
var livro1 = new Livro("livro", 256);
livro1.livro();
livro1.verificarLivro();
