"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Operaciones = (function () {
    function Operaciones(a, b) {
        this.a = a;
        this.b = b;
    }
    Object.defineProperty(Operaciones.prototype, "add", {
        get: function () {
            return this.a + this.b;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Operaciones.prototype, "substraction", {
        get: function () {
            return this.a - this.b;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Operaciones.prototype, "factorialA", {
        get: function () {
            if (this.a < 0) {
                return "No se puede calcular el factorial de un número negativo";
            }
            var factorial = this.a;
            for (var i = this.a - 1; i > 1; i--) {
                factorial *= i;
            }
            return factorial;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Operaciones.prototype, "isPrimeA", {
        get: function () {
            for (var i = 2; i < this.a; i++) {
                if (this.a % i == 0) {
                    return false;
                }
            }
            if (this.a < 2)
                return false;
            return true;
        },
        enumerable: true,
        configurable: true
    });
    return Operaciones;
}());
exports.Operaciones = Operaciones;
