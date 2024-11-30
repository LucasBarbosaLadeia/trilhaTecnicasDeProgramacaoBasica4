class Temperatura {
    private valorEmCelsius: number;

    constructor(valorEmCelsius: number){
        this.valorEmCelsius = valorEmCelsius
    }

    converterPraFahrenheit(){
        console.log(`para fahrenheit: ${(this.valorEmCelsius * 1.8) + 32}`)
    }
    converterEmKelvin(){
        console.log(`para Kelvin: ${this.valorEmCelsius + 271.15}`)
    }
}
const temperatura1 = new Temperatura(30)
temperatura1.converterPraFahrenheit();
temperatura1.converterEmKelvin();
