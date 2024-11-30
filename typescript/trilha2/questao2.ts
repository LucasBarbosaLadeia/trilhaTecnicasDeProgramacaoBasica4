class Livro {
    private titulo: string;
    private paginas: number;
    
    constructor(titulo: string, paginas:number){
        this.titulo = titulo
        this.paginas = paginas
    }
        livro(){
            console.log(`TITULO: ${this.titulo}, paginas: ${this.paginas}`)
        }
        verificarLivro(){
            console.log("lido")
        }
    }
    const livro1 = new Livro ("livro", 256)
    livro1.livro();
    livro1.verificarLivro();
    