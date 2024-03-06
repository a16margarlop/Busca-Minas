"use strict";
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
