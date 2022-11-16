const Cultivo = require('./cultivo');

class Seguimiento {

    constructor(){
        this.cultivo = new Cultivo();
        this.observacion = '';
        this.fecha = '';
        this.capturas = [];
        this.estado = true;
    };

}

module.exports = Seguimiento;
