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
var Animal = /** @class */ (function () {
    function Animal(energia) {
        this.energia = energia;
    }
    Animal.prototype.comer = function () { };
    Animal.prototype.statusEnergia = function () {
        console.log("energia atual: ".concat(this.energia));
    };
    return Animal;
}());
var Leao = /** @class */ (function (_super) {
    __extends(Leao, _super);
    function Leao(energia) {
        return _super.call(this, energia) || this;
    }
    Leao.prototype.comer = function () {
        console.log("o le\u00E3o est\u00E1 ca\u00E7ando, energia: ".concat(this.energia - 10));
        this.energia = this.energia - 10;
        console.log("o le\u00E3o est\u00E1 comendo, energia: ".concat(this.energia + 20));
        this.energia = this.energia + 20;
    };
    return Leao;
}(Animal));
var Passaro = /** @class */ (function (_super) {
    __extends(Passaro, _super);
    function Passaro(energia) {
        return _super.call(this, energia) || this;
    }
    Passaro.prototype.comer = function () {
        console.log("o passaro esta comendo: ".concat(this.energia + 10));
        this.energia = this.energia + 10;
    };
    return Passaro;
}(Animal));
var animais = [
    new Leao(20),
    new Passaro(20)
];
animais.forEach(function (animal) {
    animal.comer();
    animal.statusEnergia();
});
