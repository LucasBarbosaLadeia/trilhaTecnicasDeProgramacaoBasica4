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
        return Math.PI * Math.pow(this.raio, 2);
    };
    return Circulo;
}(FiguraGeometrica));
var Quadrado = /** @class */ (function (_super) {
    __extends(Quadrado, _super);
    function Quadrado(lado) {
        var _this = _super.call(this) || this;
        _this.lado = lado;
        return _this;
    }
    Quadrado.prototype.calcularArea = function () {
        return Math.pow(this.lado, 2);
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
        return (this.altura * this.base) / 2;
    };
    return Triangulo;
}(FiguraGeometrica));
function imprimirAreas(figuras) {
    figuras.forEach(function (figura) {
        var className = Object.getPrototypeOf(figura).constructor.name;
        console.log("A \u00E1rea da ".concat(className, " \u00E9: ").concat(figura.calcularArea().toFixed(2)));
    });
}
var figuras = [
    new Circulo(5),
    new Quadrado(4),
    new Triangulo(3, 6)
];
imprimirAreas(figuras);
