"use strict";
// board.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.Board = void 0;
var Board = /** @class */ (function () {
    function Board(rows, cols) {
        this.rows = rows;
        this.cols = cols;
        this.boardElement = document.getElementById("game");
        this.createBoard();
    }
    Board.prototype.createBoard = function () {
        for (var i = 0; i < this.rows; i++) {
            for (var j = 0; j < this.cols; j++) {
                var cell = document.createElement("button");
                cell.className = "cell";
                cell.style.width = "20px";
                cell.style.height = "20px";
                this.boardElement.appendChild(cell);
            }
            var lineBreak = document.createElement("br");
            this.boardElement.appendChild(lineBreak);
        }
    };
    return Board;
}());
exports.Board = Board;
