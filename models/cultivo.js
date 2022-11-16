const Semilla = require('./semilla');
const Usuario = require('./usuario');

class Cultivo {

    constructor(){
        this.usuario = new Usuario();
        this.semilla = new Semilla();
        this.fecha = Date.now;
        this.activo = true;
        this.estado = true;
    };

}

module.exports = Cultivo;
