"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var celda_js_1 = require("./celda.js");
var game = document.getElementById('game');
var boardSize = 5;
var Board = /** @class */ (function () {
    function Board() {
    }
    Board.prototype.createBoard = function () {
        if (game) {
        }
        else {
            console.warn('No se encontró el elemento con el id "game".');
        }
    };
    Board.prototype.createCells = function () {
        for (var i = 0; i < boardSize; i++) {
            for (var j = 0; j < boardSize; j++) {
                var cell = new celda_js_1.default(i, j);
                cell.createCell();
            }
        }
    };
    return Board;
}());
exports.default = Board;
