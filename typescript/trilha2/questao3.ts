class Produto {
    private nome: string;
    private preco: number;
    private quantidade: number;

    constructor(nome: string, preco: number, quantidade: number) {
        this.nome = nome
        this.preco = preco
        this.quantidade = quantidade
    }

    calcularEstoque(){
        console.log(`total: ${this.quantidade * this.preco}`)
    }

}
const produto1 = new Produto("nome", 3, 20)
produto1.calcularEstoque();