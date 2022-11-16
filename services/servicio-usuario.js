const Usuario = require('../models/mongo/usuario');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const usuariosGet = async(params) => {

    let query = { estado: true };

    try {

        return await Usuario.find(query)

    } catch (error) {
        console.log('error usuariosGet', error);
        throw new Error(error);
    }

};

const usuarioPost = async(params) => {

    const salt = bcrypt.genSaltSync();

    const token = jwt.sign({ data: params.usuario.cuenta }, process.env.TOKEN_SECRET
        // , { expiresIn: process.env.TOKEN_EXPIRATION }
        );

    const data = { 
        // cuenta: params.usuario.cuenta,
        contraseña: bcrypt.hashSync(params.usuario.contraseña, salt),
        correo: params.usuario.correo,
        nombres: params.usuario.nombres,
        apellidos: params.usuario.apellidos,
        token: token,
        perfil: params.usuario.perfil.id,
    };

    const usuario = new Usuario( data );
    
    try {
        
        return await usuario.save();
        
    } catch (error) {
        console.log('error usuarioPost', error);
        throw new Error(error); 
    }

};

const usuarioDelete = async(params) => {
    
    const data = {
        id: params.menu.id,
        estado: false
    };
    
    try {
        
        return await Usuario.findByIdAndUpdate(data);
        
    } catch (error) {
        console.log('error usuarioDelete', error);
        throw new Error(error);
    }
};


module.exports = {
    usuariosGet,
    usuarioPost,
    usuarioDelete,
}