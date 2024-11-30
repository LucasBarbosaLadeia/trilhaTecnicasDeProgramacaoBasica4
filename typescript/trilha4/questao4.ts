interface Livro {
    titulo:string
    autor: string 
    disponivel: boolean
}

class Biblioteca {
    livro: Livro[]

    constructor(livros: Livro[]) {
        this.livro = livros;}

    buscarLivrosDisponiveis() {
        return this.livro.filter(livro => livro.disponivel === true);
      }

}


const livro1: Livro = {titulo:"senhor dos aneis", autor:"tolkien",disponivel: true}

const biblioteca = new Biblioteca([livro1])
const livrosDisponiveis = biblioteca.buscarLivrosDisponiveis();
console.log(livrosDisponiveis);