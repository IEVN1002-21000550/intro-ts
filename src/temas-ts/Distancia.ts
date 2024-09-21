export class Puntos {
    protected x1: number;
    protected x2: number;
    protected y1: number;
    protected y2: number;
    private primero: boolean;

    constructor(x1: number, x2: number, y1: number, y2: number) {
        this.x1 = x1;
        this.x2 = x2;
        this.y1 = y1;
        this.y2 = y2;
        this.primero = true; // Inicialmente en true
    }

    imprimir() {
        console.log(`Se calculará la distancia entre (${this.x1},${this.y1}) y (${this.x2},${this.y2})`);
    }

    calcular(): number {
        const distancia = Math.sqrt(Math.pow(this.x2 - this.x1, 2) + Math.pow(this.y2 - this.y1, 2));
        // Solo imprimimos la primera vez que se calcula la distancia
        if (this.primero) {
            console.log(`La distancia entre (${this.x1},${this.y1}) y (${this.x2},${this.y2}) es: ${distancia}`);
        }
        
        return distancia;
    }
}
const triangulo1 = new Puntos(7, -4, 1, -1);
triangulo1.calcular();