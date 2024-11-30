class Animal {
    protected energia: number
constructor(energia: number){
    this.energia = energia
}
comer(){}
statusEnergia(){
    console.log(`energia atual: ${this.energia}`)
}
}

class Leao extends Animal{
    constructor(energia: number){
        super(energia)
    }
    comer() {
        console.log(`o leão está caçando, energia: ${ this.energia - 10}`)
        this.energia = this.energia - 10
        console.log(`o leão está comendo, energia: ${ this.energia + 20}`)
       this.energia = this.energia + 20
        
    }
   
}
class Passaro extends Animal{
    constructor(energia: number){
        super(energia)
    }
    comer() {
        console.log(`o passaro esta comendo: ${this.energia + 10}`)
        this.energia = this.energia +10
    }
    
}
const animais: Animal[] = [
    new Leao(20),
    new Passaro(20)
];

animais.forEach(animal => {
    animal.comer(); 
    animal.statusEnergia();  })