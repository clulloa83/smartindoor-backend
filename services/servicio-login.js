const Usuario = require('../models/mongo/usuario');
const bcrypt = require('bcryptjs');

const login = async(params) => {
    
    let result = {
        usuario: '',
        valido: '',
        mensaje: ''
    };

    try {

        let correo = params.usuario.correo;
        
        const usuario = await Usuario.findOne({ correo });

        if( !usuario ){
            result.valido = false;
            result.mensaje = 'usuario / contraseña no son correctos - correo';
            return result;
        }

        if( !usuario.estado ){
            result.valido = false;
            result.mensaje = 'usuario / contraseña no son correctos - estado false';
            return result;
        }

        const validaPassword = bcrypt.compareSync( params.usuario.contraseña, usuario.contraseña);
        if( !validaPassword ){
            result.valido = false;
            result.mensaje = 'usuario / contraseña no son correctos - contraseña';
            return result;            
        }

        result.valido = true;
        result.usuario = usuario;
        return result;

    } catch (error) {
        console.log('error login', error);
        throw new Error(error); 
    }

};

module.exports = {
    login,
}