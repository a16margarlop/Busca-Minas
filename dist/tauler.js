"use strict";
// b.  Classe Tauler
// Aquesta classe serà la responsable de gestionar l'estructura i l'estat del conjunt de caselles (instàncies de la classe Casella) que formen el joc de buscamines. El Tauler ha de tenir els següents atributs i mètodes:
// Atributs:
// caselles: Una matriu bidimensional d'objectes de tipus Casella.
// filas: El nombre de files del tablero.
// columnes: El nombre de columnes del tablero.
// Mètodes:
// Constructor: Ha de rebre el nombre de files i columnes com a paràmetres i inicialitzar el tablero amb caselles, distribuint les mines de manera aleatòria (podeu generar un número de 1 a 10 i si es <3 --> hi ha mina).
// inicializarCaselles(): Un mètode per inicialitzar les cèl·lules del tablero, incloent la distribució aleatòria de mines.
var Tauler = /** @class */ (function () {
    function Tauler(files, columnes) {
        this.files = files;
        this.columnes = columnes;
        this.caselles = [];
        this.inicialitzarCaselles();
    }
    Tauler.prototype.inicialitzarCaselles = function () {
        for (var i = 0; i < this.files; i++) {
            this.caselles[i] = [];
            for (var j = 0; j < this.columnes; j++) {
                this.caselles[i][j] = new Casella(Math.random() < 0.3);
            }
        }
    };
    return Tauler;
}());
