import Celda from './celda.js';

const game: HTMLElement | null = document.getElementById('game');
const boardSize: number = 5;

class Board {
    
    constructor(){
        
    }
    
    createBoard(){
        if(game) {

            
        } else {
        console.warn('No se encontró el elemento con el id "game".');
        }
    }

    createCells(){
        for (let i = 0; i < boardSize; i++) {
            for (let j = 0; j < boardSize; j++) {
                let cell = new Celda(i, j);
                cell.createCell();
            }
            
        }
    }

}

export default Board;