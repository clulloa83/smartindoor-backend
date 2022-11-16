const { Usuario } = require('../models/mongo');

const esCorreoValido = async(correo = '') => {

    const existeCorreo = await Usuario.findOne({ correo });
    if( existeCorreo ){
        throw new Error(`El correo ${ correo } ya esta registrado en BD`);
    }
}

module.exports = {
    esCorreoValido,
}