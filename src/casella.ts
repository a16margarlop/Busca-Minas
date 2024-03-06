class Casella {
    esMina: boolean;
    revelada: boolean;
    marcada: boolean;

    constructor(esMina: boolean) {
        this.esMina = esMina;
        this.revelada = false;
        this.marcada = false;
    }
}