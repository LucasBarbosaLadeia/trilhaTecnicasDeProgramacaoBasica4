var Temperatura = /** @class */ (function () {
    function Temperatura(valorEmCelsius) {
        this.valorEmCelsius = valorEmCelsius;
    }
    Temperatura.prototype.converterPraFahrenheit = function () {
        console.log("para fahrenheit: ".concat((this.valorEmCelsius * 1.8) + 32));
    };
    Temperatura.prototype.converterEmKelvin = function () {
        console.log("para Kelvin: ".concat(this.valorEmCelsius + 271.15));
    };
    return Temperatura;
}());
var temperatura1 = new Temperatura(30);
temperatura1.converterPraFahrenheit();
temperatura1.converterEmKelvin();
