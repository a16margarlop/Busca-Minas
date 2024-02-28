const game: HTMLElement | null = document.getElementById('game');
const boardSize: number = 5;

class Board {
    
    
    createBoard(){
        if(game) {

            const board = document.createElement('div');
            board.classList.add('board');
    
            // Crear filas y celdas del tablero
            for (let i = 0; i < boardSize; i++) {
                const row = document.createElement('div');
                for (let j = 0; j < boardSize; j++) {
                    const cell = document.createElement('div');
                    cell.textContent = `${i},${j}`; // Colocar coordenadas en la celda (opcional)
                    row.appendChild(cell);
                }
                board.appendChild(row);
            }
    
            // Agregar la tabla al elemento del juego
            game.appendChild(board);
    
        } else {
        console.warn('No se encontró el elemento con el id "game".');
        }
    }

}

let board = new Board();
board.createBoard();