interface LivroBiblioteca {
    titulo: string
    autor: string
    genero: string
    disponivel: boolean
}

class BibliotecaGestao {
    livro: LivroBiblioteca[]

    constructor(livros: LivroBiblioteca[]){
        this.livro = livros
    }

    filtrarPorGenero(genero: string): LivroBiblioteca[] {
        return this.livro.filter(livro => livro.genero === genero);
    }

    buscarPorAutor(autor: string): LivroBiblioteca[] {
        return this.livro.filter(livros => livros.autor === autor);
    }


    obterLivrosDisponiveisOrdenados(): LivroBiblioteca[] {
        return this.livro
            .filter(livro => livro.disponivel) 
            .sort((a, b) => a.titulo.localeCompare(b.titulo)); 
    }




}

const livrosExemplo: LivroBiblioteca[] = [
    { titulo: "O Senhor dos Anéis", autor: "J.R.R. Tolkien", genero: "Fantasia", disponivel: true },
    { titulo: "Harry Potter e a Pedra Filosofal", autor: "J.K. Rowling", genero: "Fantasia", disponivel: false },
    { titulo: "A Arte da Guerra", autor: "Sun Tzu", genero: "Estratégia", disponivel: true },
    { titulo: "1984", autor: "George Orwell", genero: "Distopia", disponivel: true }
];

const bibliotec = new BibliotecaGestao(livrosExemplo);

console.log(bibliotec.filtrarPorGenero("Fantasia"));


console.log(bibliotec.buscarPorAutor("J.R.R. Tolkien"));


console.log(bibliotec.obterLivrosDisponiveisOrdenados());