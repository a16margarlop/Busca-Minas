"use strict";
var Joc = /** @class */ (function () {
    function Joc(files, columnes) {
        this.tauler = new Tauler(files, columnes);
        this.dibuixarTauler();
    }
    Joc.prototype.dibuixarTauler = function () {
        var _this = this;
        var tauler = document.getElementById('joc');
        tauler.innerHTML = '';
        var _loop_1 = function (i) {
            var fila = document.createElement('div');
            fila.className = 'fila';
            var _loop_2 = function (j) {
                var casella = document.createElement('div');
                casella.className = 'casella';
                casella.dataset.fila = i.toString();
                casella.dataset.columna = j.toString();
                casella.addEventListener('click', function () { return _this.revelarCasella(i, j); });
                casella.addEventListener('contextmenu', function (event) {
                    event.preventDefault();
                    _this.marcarCasella(i, j);
                });
                fila.appendChild(casella);
            };
            for (var j = 0; j < this_1.tauler.columnes; j++) {
                _loop_2(j);
            }
            tauler.appendChild(fila);
        };
        var this_1 = this;
        for (var i = 0; i < this.tauler.files; i++) {
            _loop_1(i);
        }
    };
    Joc.prototype.revelarCasella = function (fila, columna) {
        var _this = this;
        var casella = this.tauler.caselles[fila][columna];
        if (casella.revelada || casella.marcada) {
            return;
        }
        casella.revelada = true;
        var element = document.querySelector(".casella[data-fila=\"".concat(fila, "\"][data-columna=\"").concat(columna, "\"]"));
        if (casella.esMina) {
            element.classList.add('mina');
            this.revelarTodasCasillas();
            setTimeout(function () {
                _this.mostrarMensajeDerrota();
                _this.tauler.inicialitzarCaselles();
                _this.dibuixarTauler();
            }, 1000);
        }
        else {
            element.classList.add('revelada');
        }
    };
    Joc.prototype.marcarCasella = function (fila, columna) {
        var casella = this.tauler.caselles[fila][columna];
        if (casella.revelada) {
            return;
        }
        casella.marcada = !casella.marcada;
        var element = document.querySelector("[data-fila=\"".concat(fila, "\"][data-columna=\"").concat(columna, "\"]"));
        element.classList.toggle('marcada');
    };
    //Cuando toque una mina quiero que se revelen todas las casillas y muestre un mensaje de derrota
    Joc.prototype.revelarTodasCasillas = function () {
        var casillas = document.querySelectorAll('.casella');
        casillas.forEach(function (casilla) {
            casilla.classList.add('revelada');
        });
    };
    Joc.prototype.mostrarMensajeDerrota = function () {
        alert('¡Has perdido! Intenta de nuevo.');
    };
    return Joc;
}());
