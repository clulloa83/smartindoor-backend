const Correo = require('../correo');

class ParamsCorreo {

    constructor(){
        this.correo = new Correo();
        this.sistemaId = '';
    }

}

module.exports = ParamsCorreo;