const Registro = require('../registro');
const Dispositivo = require('../dispositivo');

/**
 * parametros para sistemas
 */
class ParamsRegistro {
    constructor(){
        this.registro = new Registro();
        this.dispositivo = new Dispositivo();
    }
}

module.exports = ParamsRegistro;