class ContaBancaria {
    private titular: string;
    protected saldo: number;

constructor(titular:string, saldo: number){
    this.titular = titular;
    this.saldo = saldo
}
    dinheiroAtual(){
        console.log(`dinheiro atual ${this.saldo}`)
    }

    sacarDinheiro(){
        console.log(`dinheiro apos saque ${this.saldo - 100}`)
    }
        
    

    depositarDinheiro(){
        console.log(`dinheiro apos deposito ${this.saldo + 100}`)
    }
}

const contaBancaria1 = new ContaBancaria  ("nome", 200)
contaBancaria1.dinheiroAtual();
contaBancaria1.sacarDinheiro();
contaBancaria1.depositarDinheiro();
