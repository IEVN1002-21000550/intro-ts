import { Puntos } from "./Distancia";

class Triangulo extends Puntos {
    protected x3: number;
    protected y3: number;
    private x1Original: number;
    private y1Original: number;

    constructor(x1: number, x2: number, y1: number, y2: number, x3: number, y3: number) {
        super(x1, x2, y1, y2);
        this.x3 = x3;
        this.y3 = y3;

        // Guardamos los valores originales de x1 y y1 para utilizarlos más tarde
        this.x1Original = x1;
        this.y1Original = y1;
    }

    calcularTriangulo() {
        // Calcular la distancia entre (x1, y1) y (x2, y2)
        let a = this.calcular();

        // Cambiar las coordenadas a (x1, y1) por (x3, y3)
        this.x1 = this.x3;
        this.y1 = this.y3;
        let b = this.calcular();

        // Restaurar los valores originales de (x1, y1) para el cálculo del tercer lado
        this.x1 = this.x1Original;
        this.y1 = this.y1Original;
        this.x2 = this.x3;
        this.y2 = this.y3;
        let c = this.calcular();
        
        //Se checa si es un triangulo
        if (a + b > c && a + c > b && b + c > a) {
            console.log("Es un triángulo");
        } else {
            console.log("No es un triángulo");
        }
    }
}
//                               x1, x2,y1, y2,x3,y3
const triangulo1 = new Triangulo(7, -4, 1, -1, 4, 5);
triangulo1.calcularTriangulo();

