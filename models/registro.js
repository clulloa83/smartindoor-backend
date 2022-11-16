const Dispositivo = require('./dispositivo');
/**
 * representa usuario de sistema en registro logs. Se utiliza id de usuario de sistema
 */
 class Registro {

    constructor(){
        this.dispositivo = new Dispositivo();
        this.tipo = '';
        this.lectura = '';
        this.fechaRegistro = '';
    }
    
}

module.exports = Registro;