import { Cadena } from './cadena';
import { Operaciones } from "./operaciones";

var cadena:Cadena;
var operaciones:Operaciones;

cadena = new Cadena("Anita Lava La Tina");
operaciones = new Operaciones(7,10);

console.log(cadena.isReversible);
console.log(cadena.vowelsNumber);
console.log(cadena.lettersNumber);
console.log(cadena.wordsNumber);

console.log(operaciones.add);
console.log(operaciones.substraction);
console.log(operaciones.factorialA);
console.log(operaciones.isPrimeA);