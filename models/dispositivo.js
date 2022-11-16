const Sistema = require('./sistema');
const Usuario = require('./usuario');
/**
 * representa usuario de sistema en registro logs. Se utiliza id de usuario de sistema
 */
class Dispositivo {

    constructor(){
        this.id = '';
        this.sistema = new Sistema();
        this.usuario = new Usuario();
        this.nombre = '';
        this.ubicacion = '';
        this.icon = '';
        this.categoria = '';
        this.tipos = [];
        this.estado = true;
        this.activo = true;
    }
    
}

module.exports = Dispositivo;