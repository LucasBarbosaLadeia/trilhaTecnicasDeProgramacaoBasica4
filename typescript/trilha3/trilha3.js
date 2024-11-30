var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Veiculo = /** @class */ (function () {
    function Veiculo() {
    }
    Veiculo.prototype.mover = function () {
        console.log("O veiculo está se movendo");
    };
    return Veiculo;
}());
var Carro = /** @class */ (function (_super) {
    __extends(Carro, _super);
    function Carro() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Carro.prototype.mover = function () {
        console.log("o carro esta se movendo");
    };
    return Carro;
}(Veiculo));
var Bicicleta = /** @class */ (function (_super) {
    __extends(Bicicleta, _super);
    function Bicicleta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Bicicleta.prototype.mover = function () {
        console.log("a bicicleta esta se movendo");
    };
    return Bicicleta;
}(Veiculo));
var bicicleta1 = new Bicicleta;
bicicleta1.mover();
//questão 2//
var FiguraGeometrica = /** @class */ (function () {
    function FiguraGeometrica() {
    }
    return FiguraGeometrica;
}());
var Circulo = /** @class */ (function (_super) {
    __extends(Circulo, _super);
    function Circulo(raio) {
        var _this = _super.call(this) || this;
        _this.raio = raio;
        return _this;
    }
    Circulo.prototype.calcularArea = function () {
        console.log("area: ".concat((this.raio * this.raio) * 3.14));
    };
    return Circulo;
}(FiguraGeometrica));
var Quadrado = /** @class */ (function (_super) {
    __extends(Quadrado, _super);
    function Quadrado(lado) {
        return _super.call(this) || this;
    }
    Quadrado.prototype.calcularArea = function () {
        console.log("".concat(this.lado * 4));
    };
    return Quadrado;
}(FiguraGeometrica));
var Triangulo = /** @class */ (function (_super) {
    __extends(Triangulo, _super);
    function Triangulo(altura, base) {
        var _this = _super.call(this) || this;
        _this.altura = altura;
        _this.base = base;
        return _this;
    }
    Triangulo.prototype.calcularArea = function () {
        console.log("area: ".concat((this.altura * this.base) / 2));
    };
    return Triangulo;
}(FiguraGeometrica));
function imprimirAreas(figuras) {
    figuras.forEach(function (figura) {
        console.log("A \u00E1rea: ".concat(figura.calcularArea()));
    });
}
var figuras = [
    new Circulo(5),
    new Quadrado(4),
    new Triangulo(3, 6)
];
imprimirAreas(figuras);
//questão 3//
