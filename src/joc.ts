
class Joc {
    tauler: Tauler;

    constructor(files: number, columnes: number) {
        this.tauler = new Tauler(files, columnes);
        this.dibuixarTauler();
    }

    dibuixarTauler() {
        let tauler = document.getElementById('joc');
        tauler.innerHTML = '';
        for (let i = 0; i < this.tauler.files; i++) {
            let fila = document.createElement('div');
            fila.className = 'fila';
            for (let j = 0; j < this.tauler.columnes; j++) {
                let casella = document.createElement('div');
                casella.className = 'casella';
                casella.dataset.fila = i.toString();
                casella.dataset.columna = j.toString();
                casella.addEventListener('click', () => this.revelarCasella(i, j));
                casella.addEventListener('contextmenu', (event) => {
                    event.preventDefault();
                    this.marcarCasella(i, j);
                });
                fila.appendChild(casella);
            }
            tauler.appendChild(fila);
        }
    }

    revelarCasella(fila: number, columna: number) {
        let casella = this.tauler.caselles[fila][columna];
        if (casella.revelada || casella.marcada) {
            return;
        }
        casella.revelada = true;
        let element = document.querySelector(`.casella[data-fila="${fila}"][data-columna="${columna}"]`);
        if (casella.esMina) {
            element.classList.add('mina');
        } else {
            element.classList.add('revelada');
        }
    }

    marcarCasella(fila: number, columna: number) {
        let casella = this.tauler.caselles[fila][columna];
        if (casella.revelada) {
            return;
        }
        casella.marcada = !casella.marcada;
        let element = document.querySelector(`[data-fila="${fila}"][data-columna="${columna}"]`);

        element.classList.toggle('marcada');
        
    }
}