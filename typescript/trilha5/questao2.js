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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var Inventory = /** @class */ (function () {
    function Inventory() {
        this.inventory = {};
    }
    return Inventory;
}());
var Warehouse = /** @class */ (function (_super) {
    __extends(Warehouse, _super);
    function Warehouse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Warehouse.prototype.addItem = function (item, quantity) {
        if (quantity <= 0) {
            return;
        }
        this.inventory[item] = (this.inventory[item] || 0) + quantity;
    };
    Warehouse.prototype.removeItem = function (item) {
        if (!this.inventory[item]) {
            return;
        }
        delete this.inventory[item];
    };
    Warehouse.prototype.getInventory = function () {
        return __assign({}, this.inventory);
    };
    return Warehouse;
}(Inventory));
var StoreInventory = /** @class */ (function (_super) {
    __extends(StoreInventory, _super);
    function StoreInventory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StoreInventory.prototype.addItem = function (item, quantity) {
        if (quantity <= 0 || quantity > 10) {
            return;
        }
        var currentQuantity = this.inventory[item] || 0;
        var newQuantity = currentQuantity + quantity;
        if (newQuantity > 10) {
            console.error("adicionar ".concat(quantity, " em ").concat(item, " passaria do limite do estoque"));
            return;
        }
        this.inventory[item] = newQuantity;
    };
    StoreInventory.prototype.removeItem = function (item) {
        if (!this.inventory[item]) {
            return;
        }
        delete this.inventory[item];
    };
    StoreInventory.prototype.getInventory = function () {
        return __assign({}, this.inventory);
    };
    return StoreInventory;
}(Inventory));
var store = new StoreInventory();
store.addItem("Cadeira", 5);
store.addItem("Mesa", 7);
store.addItem("Mesa", 5);
store.removeItem("Cadeira");
console.log("Inventário da loja:", store.getInventory());
