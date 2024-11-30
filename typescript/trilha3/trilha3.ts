class Veiculo {
    mover(){
        console.log("O veiculo está se movendo")
    }
}

class Carro extends Veiculo {
    mover(){
        console.log("o carro esta se movendo")
    }
}

class Bicicleta extends Veiculo {
    mover(){
        console.log("a bicicleta esta se movendo")
    }
}

const bicicleta1 = new Bicicleta
bicicleta1.mover();



