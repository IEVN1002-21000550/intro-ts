
interface Reproductor{
    volumne:number;
    segundo:number;
    cancion:string;
    detalles:Detalles;
}
interface Detalles{
    autor:string;
    year:number;
}
const reproductor:Reproductor={
    volumne:50,
    segundo:10,
    cancion:"valiente",
    detalles:{
        autor:"paty cantu",
        year:2018
    }

}

// console.log(`El volumne actual es : ${reproductor.volumne}`);
// console.log(`Los segundos son : ${reproductor.segundo}`);
// console.log(`La cancion: ${reproductor.cancion}`);
// console.log(`El cantante es : ${reproductor.detalles.autor}`);
// console.log(`El año es : ${reproductor.detalles.year}`);

const{volumne,segundo,cancion,detalles}=reproductor;
const{autor,year}=detalles;

console.log(`El volumne actual es : ${volumne}`);
console.log(`Los segundos son : ${segundo}`);
console.log(`La cancion: ${cancion}`);
console.log(`El cantante es : ${autor}`);
console.log(`El año es : ${year}`);


const dbz:string[]=['Goku','Majinbu','Babidy','Freezer'];
console.log(`Personaje 1 ${dbz[0]}`);
console.log(`Personaje 2 ${dbz[1]}`);
console.log(`Personaje 3 ${dbz[2]}`);
console.log(`Personaje 4 ${dbz[3]}`);

const[a,,b]=dbz;
console.log(`Personaje 1 ${a}`);
console.log(`Personaje 2 ${b}`);