//baixa coesao
var OrderManager = /** @class */ (function () {
    function OrderManager() {
        this.items = [];
    }
    OrderManager.prototype.addItem = function (item) {
        this.items.push(item);
    };
    OrderManager.prototype.processPayment = function (amount) {
        console.log("Processing payment of $".concat(amount));
    };
    OrderManager.prototype.shipOrder = function (address) {
        console.log("Shipping order to ".concat(address));
    };
    return OrderManager;
}());
//alta coesao
var Cart = /** @class */ (function () {
    function Cart() {
        this.items = [];
    }
    Cart.prototype.addItem = function (item) {
        this.items.push(item);
    };
    Cart.prototype.getItems = function () {
        return this.items;
    };
    return Cart;
}());
var PaymentProcessor = /** @class */ (function () {
    function PaymentProcessor() {
    }
    PaymentProcessor.prototype.processPayment = function (amount) {
        console.log("Processing payment of $".concat(amount));
    };
    return PaymentProcessor;
}());
var ShippingManager = /** @class */ (function () {
    function ShippingManager() {
    }
    ShippingManager.prototype.shipOrder = function (address) {
        console.log("Shipping order to ".concat(address));
    };
    return ShippingManager;
}());
var OrderFacade = /** @class */ (function () {
    function OrderFacade() {
        this.cart = new Cart();
        this.paymentProcessor = new PaymentProcessor();
        this.shippingManager = new ShippingManager();
    }
    OrderFacade.prototype.addItemToOrder = function (item) {
        this.cart.addItem(item);
    };
    OrderFacade.prototype.checkout = function (amount, address) {
        this.paymentProcessor.processPayment(amount);
        this.shippingManager.shipOrder(address);
        console.log("Order completed successfully.");
    };
    return OrderFacade;
}());
var order = new OrderFacade();
order.addItemToOrder("vassoura");
order.addItemToOrder("chinelo");
order.checkout(4, "rua");
