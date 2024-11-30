interface ProdutoLoja {
    codigo: number;
    nome: string
}

class Loja {
   produtos: ProdutoLoja[]

 constructor(produtos: ProdutoLoja[]){
    this.produtos = produtos;
 }
 buscarProdutoPorCodigo(codigo:number): ProdutoLoja|undefined{
    return this.produtos.find(produto => produto.codigo === codigo);
 }
    
    }
    const produto1: ProdutoLoja = { codigo: 1, nome: "Camiseta" };
    const produto2: ProdutoLoja = { codigo: 2, nome: "Calça" };

    const loja = new Loja([produto1,produto2])
    const produtoBuscado = loja.buscarProdutoPorCodigo(1); 
console.log(produtoBuscado); 

const produtoInexistente = loja.buscarProdutoPorCodigo(3); 
console.log(produtoInexistente);