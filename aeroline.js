class Aeroline {
    constructor(viajes) {
    this.viajes = viajes;
    }
    get obtenerCantidadViajes() {
        return this.viajes.length;    
    }
}

module.exports = {Aeroline}

