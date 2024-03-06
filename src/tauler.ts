

class Tauler {
    caselles: Casella[][];
    files: number;
    columnes: number;

    constructor(files: number, columnes: number) {
        this.files = files;
        this.columnes = columnes;
        this.caselles = [];
        this.inicialitzarCaselles();
    }

    inicialitzarCaselles() {
        for (let i = 0; i < this.files; i++) {
            this.caselles[i] = [];
            for (let j = 0; j < this.columnes; j++) {
                this.caselles[i][j] = new Casella(Math.random() < 0.3);
            }
        }
    }

    // getMines() {
    //     let mines = 0;
    //     for (let i = 0; i < this.files; i++) {
    //         for (let j = 0; j < this.columnes; j++) {
    //             if (this.caselles[i][j].esMina) {
    //                 mines++;
    //             }
    //         }
    //     }
    //     return mines;
    // }

    // getMinesArround(fila: number, columna: number) {
    //     let mines = 0;
    //     for (let i = fila - 1; i <= fila + 1; i++) {
    //         for (let j = columna - 1; j <= columna + 1; j++) {
    //             if (i >= 0 && i < this.files && j >= 0 && j < this.columnes) {
    //                 if (this.caselles[i][j].esMina) {
    //                     mines++;
    //                 }
    //             }
    //         }
    //     }
    //     return mines;
    // }
}