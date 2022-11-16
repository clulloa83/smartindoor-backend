const Dispositivo = require('./dispositivo');

class Programa {

    constructor(){
        this.id = '';
        this.dispositivo = new Dispositivo();
        this.accion = '';
        this.hora = '';
        this.dias = [];
        this.activo = true;
        this.estado = true;
    };

}

module.exports = Programa;
