var Texto = /** @class */ (function () {
    function Texto(titulo, conteudo) {
        this.titulo = titulo;
        this.conteudo = conteudo;
    }
    Texto.prototype.exibir = function () {
        return "titulo ".concat(this.titulo, ", conteudo: ").concat(this.conteudo);
    };
    return Texto;
}());
var documento = new Texto("aaaaaaaa", "bbbbbbbb");
documento.exibir();
console.log(documento.exibir());
