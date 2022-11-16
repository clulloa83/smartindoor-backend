const Perfil = require('./perfil');

class Usuario {

    constructor(){
        this.id = '';
        this.correo = '';
        this.contraseña = '';
        this.nombres = '';
        this.apellidos = '';
        this.perfil = new Perfil();
        this.token = '';
    }
}

module.exports = Usuario;