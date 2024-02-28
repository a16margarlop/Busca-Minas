"use strict";
var game = document.getElementById('game');
var boardSize = 5;
var Board = /** @class */ (function () {
    function Board() {
    }
    Board.prototype.createBoard = function () {
        if (game) {
            var board_1 = document.createElement('div');
            board_1.classList.add('board');
            // Crear filas y celdas del tablero
            for (var i = 0; i < boardSize; i++) {
                var row = document.createElement('div');
                for (var j = 0; j < boardSize; j++) {
                    var cell = document.createElement('div');
                    cell.textContent = "".concat(i, ",").concat(j); // Colocar coordenadas en la celda (opcional)
                    row.appendChild(cell);
                }
                board_1.appendChild(row);
            }
            // Agregar la tabla al elemento del juego
            game.appendChild(board_1);
        }
        else {
            console.warn('No se encontró el elemento con el id "game".');
        }
    };
    return Board;
}());
var board = new Board();
board.createBoard();
