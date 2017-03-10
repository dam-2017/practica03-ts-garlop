"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Cadena = (function () {
    function Cadena(cad) {
        this.cadena = cad;
    }
    Object.defineProperty(Cadena.prototype, "isReversible", {
        get: function () {
            var cad = this.cadena.trim().toLowerCase().replace(/ /g, "");
            for (var i = 0; i < cad.length / 2; i++) {
                if (!(cad.charAt(i) == cad.charAt(cad.length - i - 1))) {
                    return false;
                }
            }
            return true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Cadena.prototype, "vowelsNumber", {
        get: function () {
            var vowels = { a: 0, e: 0, i: 0, o: 0, u: 0 };
            for (var i = 0; i < this.cadena.length; i++) {
                if (this.cadena.toLowerCase().charAt(i) == "a")
                    vowels.a++;
                if (this.cadena.toLowerCase().charAt(i) == "e")
                    vowels.e++;
                if (this.cadena.toLowerCase().charAt(i) == "i")
                    vowels.i++;
                if (this.cadena.toLowerCase().charAt(i) == "o")
                    vowels.o++;
                if (this.cadena.toLowerCase().charAt(i) == "u")
                    vowels.u++;
            }
            return vowels;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Cadena.prototype, "lettersNumber", {
        get: function () {
            return this.cadena.trim().replace(/ /g, "").length;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Cadena.prototype, "wordsNumber", {
        get: function () {
            var cad = this.cadena;
            while (cad.trim().search("  ") != -1) {
                cad = cad.trim().replace(/  /g, " ");
            }
            var words = cad.split(" ");
            return words.length;
        },
        enumerable: true,
        configurable: true
    });
    return Cadena;
}());
exports.Cadena = Cadena;
