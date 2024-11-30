var BibliotecaGestao = /** @class */ (function () {
    function BibliotecaGestao(livros) {
        this.livro = livros;
    }
    BibliotecaGestao.prototype.filtrarPorGenero = function (genero) {
        return this.livro.filter(function (livro) { return livro.genero === genero; });
    };
    BibliotecaGestao.prototype.buscarPorAutor = function (autor) {
        return this.livro.filter(function (livros) { return livros.autor === autor; });
    };
    BibliotecaGestao.prototype.obterLivrosDisponiveisOrdenados = function () {
        return this.livro
            .filter(function (livro) { return livro.disponivel; }) // Filtra apenas os livros disponíveis
            .sort(function (a, b) { return a.titulo.localeCompare(b.titulo); }); // Ordena alfabeticamente pelo título
    };
    return BibliotecaGestao;
}());
var livrosExemplo = [
    { titulo: "O Senhor dos Anéis", autor: "J.R.R. Tolkien", genero: "Fantasia", disponivel: true },
    { titulo: "Harry Potter e a Pedra Filosofal", autor: "J.K. Rowling", genero: "Fantasia", disponivel: false },
    { titulo: "A Arte da Guerra", autor: "Sun Tzu", genero: "Estratégia", disponivel: true },
    { titulo: "1984", autor: "George Orwell", genero: "Distopia", disponivel: true }
];
var bibliotec = new BibliotecaGestao(livrosExemplo);
console.log(bibliotec.filtrarPorGenero("Fantasia"));
console.log(bibliotec.buscarPorAutor("J.R.R. Tolkien"));
console.log(bibliotec.obterLivrosDisponiveisOrdenados());
