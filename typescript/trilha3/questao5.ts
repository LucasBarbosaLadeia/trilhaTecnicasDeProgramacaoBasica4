abstract class Funcionario {
private nome: string
private salario: number

constructor(nome: string, salario: number){
    this.nome = nome
    this.salario = salario
}

public getNome(): string {
    return this.nome;
}


public setNome(nome: string): void {
    this.nome = nome;
}


public getSalario(): number {
    return this.salario;
}


public setSalario(salario: number): void {
    this.salario = salario;
}

abstract calcularBonus()
}

class Gerente extends Funcionario{
    constructor(nome: string, salario: number){
        super(nome,salario)
    }
calcularBonus() {
     return this.getSalario() * 0.1
}
}

class Operario extends Funcionario{
    constructor(nome: string, salario: number){
        super(nome,salario)
    }
calcularBonus() {
     return this.getSalario() * 0.05
}
}
function calcularSalarioComBonus (funcionarios: Funcionario[]): void {
    funcionarios.forEach((funcionario) => {
        funcionario.calcularBonus();
        const bonus = funcionario.calcularBonus(); // Calculando o bônus
        const salarioComBonus = funcionario.getSalario() + bonus; // Somando o bônus ao salário
        console.log(`${funcionario.getNome()} recebe ${salarioComBonus}`)
    });
    
}

const funcionarios: Funcionario[] = [
    new Gerente("jason",1000),
    new Operario("jose",1000),
];
calcularSalarioComBonus(funcionarios);
