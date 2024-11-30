abstract class Inventory {
    protected inventory: Record<string, number>;
    constructor(){
        this.inventory = {};
    }
    abstract addItem(item: string, quantity: number): void
    abstract removeItem(item: string): void
    abstract getInventory(): Record<string, number>
}

class Warehouse extends Inventory {
    addItem(item: string, quantity: number): void {
        if(quantity <= 0){
        return;
         } this.inventory[item] = (this.inventory[item] || 0 ) + quantity;
    }
    removeItem(item: string): void {
        if (!this.inventory[item] ){
            return;
        }   
        delete this.inventory[item];
     }
     getInventory(): Record<string, number> {
         return {...this.inventory};
     }
}

class StoreInventory extends Inventory {
    addItem(item: string, quantity: number): void {
        if(quantity <= 0  || quantity > 10){
        return;
         }  const currentQuantity = this.inventory[item] || 0;
         const newQuantity = currentQuantity + quantity;
 
         if (newQuantity > 10) {
             console.error(`adicionar ${quantity} em ${item} passaria do limite do estoque`);
             return;
         }
 
         this.inventory[item] = newQuantity;
        
    }
    removeItem(item: string): void {
        if (!this.inventory[item]){
            return;
        }   
        delete this.inventory[item];
     }
     getInventory(): Record<string, number> {
         return {...this.inventory};
     }
}

const store = new StoreInventory();
store.addItem("Cadeira", 5);
store.addItem("Mesa", 7); 
store.addItem("Mesa", 5);
store.removeItem("Cadeira");
console.log("Inventário da loja:", store.getInventory());