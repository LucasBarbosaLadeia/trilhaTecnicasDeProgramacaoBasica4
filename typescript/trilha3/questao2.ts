abstract class FiguraGeometrica {
    
    
    abstract calcularArea()
 
    
 
 }
 
 class Circulo extends FiguraGeometrica {
     private raio: number
     constructor(raio: number){
         super()
         this.raio = raio
     }
     calcularArea() {
        return Math.PI * Math.pow(this.raio, 2);
     }
 }
 
 class Quadrado extends FiguraGeometrica {
 private lado: number
     constructor(lado: number){
     super()
     this.lado = lado
     }
     calcularArea() {
        return Math.pow(this.lado, 2);
     }
 }
 
 class Triangulo extends FiguraGeometrica {
     private altura: number
     private base: number
 
     constructor(altura: number, base: number){
         super()
         this.altura = altura
         this.base = base
     }
 
     calcularArea() {
        return (this.altura * this.base) / 2;
     }
    }
 
    function imprimirAreas(figuras: FiguraGeometrica[]): void {
        figuras.forEach((figura) => {
            const className = Object.getPrototypeOf(figura).constructor.name;
            console.log(`A área da ${className} é: ${figura.calcularArea().toFixed(2)}`);
        });
 }
 const figuras: FiguraGeometrica[] = [
     new Circulo(5),
     new Quadrado(4),
     new Triangulo(3, 6)
 
 
 ];
 imprimirAreas(figuras);