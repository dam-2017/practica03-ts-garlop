"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cadena_1 = require("./cadena");
var operaciones_1 = require("./operaciones");
var cadena;
var operaciones;
cadena = new cadena_1.Cadena("Anita Lava La Tina");
operaciones = new operaciones_1.Operaciones(7, 10);
console.log(cadena.isReversible);
console.log(cadena.vowelsNumber);
console.log(cadena.lettersNumber);
console.log(cadena.wordsNumber);
console.log(operaciones.add);
console.log(operaciones.substraction);
console.log(operaciones.factorialA);
console.log(operaciones.isPrimeA);