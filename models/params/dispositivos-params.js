const Dispositivo = require('../dispositivo');
const Usuario = require('../usuario');
/**
 * parametros para sistemas
 */
class ParamsDispositivo {
    constructor(){
        this.dispositivo = new Dispositivo();
        this.usuario = new Usuario();
    }
}

module.exports = ParamsDispositivo;