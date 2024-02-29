// board.ts

export class Board {
    private rows: number;
    private cols: number;
    private boardElement: HTMLElement;

    constructor(rows: number, cols: number) {
        this.rows = rows;
        this.cols = cols;
        this.boardElement = document.getElementById("game")!;
        this.createBoard();
    }

    private createBoard(): void {
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                const cell = document.createElement("button");
                cell.className = "cell";
                cell.style.width = "20px";
                cell.style.height = "20px";
                this.boardElement.appendChild(cell);
            }
            const lineBreak = document.createElement("br");
            this.boardElement.appendChild(lineBreak);
        }
    }
}