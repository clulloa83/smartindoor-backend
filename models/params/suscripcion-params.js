const Sistema = require('../sistema');
const Usuario = require('../usuario');
class ParamsSuscripcion {

    constructor(){
        this.sistema = new Sistema();
        this.usuario = new Usuario();
        this.suscripcion = {};
    }

}

module.exports = ParamsSuscripcion;