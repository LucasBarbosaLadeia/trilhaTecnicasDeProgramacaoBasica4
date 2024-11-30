interface Documento {
    titulo: string;
    conteudo: string
}

class Texto implements Documento{
    titulo: string
    conteudo: string

    constructor(titulo:string , conteudo: string){
        this.titulo = titulo
        this.conteudo = conteudo
    }

    exibir(): string {
        return `titulo ${this.titulo}, conteudo: ${this.conteudo}`
    }
}

const documento = new Texto("aaaaaaaa","bbbbbbbb")
documento.exibir();
console.log(documento.exibir());