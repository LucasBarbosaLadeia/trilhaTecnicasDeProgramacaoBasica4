
//baixa coesao
class OrderManager {
    private items: string[] = [];
  
    addItem(item: string) {
      this.items.push(item);
    }
  
    processPayment(amount: number) {
      console.log(`Processing payment of $${amount}`);
    }
  
    shipOrder(address: string) {
      console.log(`Shipping order to ${address}`);
    }
  }
//alta coesao
class Cart {
    private items: string[] = [];
  
    addItem(item: string) {
      this.items.push(item);
    }
  
    getItems() {
      return this.items;
    }
  }
  
 
  class PaymentProcessor {
    processPayment(amount: number) {
      console.log(`Processing payment of $${amount}`);
    }
  }
  
 
  class ShippingManager {
    shipOrder(address: string) {
      console.log(`Shipping order to ${address}`);
    }
  }
  

  class OrderFacade {
    private cart: Cart;
    private paymentProcessor: PaymentProcessor;
    private shippingManager: ShippingManager;
  
    constructor() {
      this.cart = new Cart();
      this.paymentProcessor = new PaymentProcessor();
      this.shippingManager = new ShippingManager();
    }
  
    addItemToOrder(item: string) {
      this.cart.addItem(item);
    }
  
    checkout(amount: number, address: string) {
      this.paymentProcessor.processPayment(amount);
      this.shippingManager.shipOrder(address);
      console.log("Order completed successfully.");
    }
  }

  const order = new OrderFacade();
  order.addItemToOrder("vassoura")
  order.addItemToOrder("chinelo")
  order.checkout(4,"rua")
  