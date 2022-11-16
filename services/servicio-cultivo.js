const Cultivo = require('../models/mongo/cultivo');

/**
 * servicio obtiene cultivos estado: true
 * @param {*} params 
 * @returns 
 */
const cultivosGet = async(params) => {

    let query = { estado: true, usuario: params.cultivo.usuario.id };

    try {

        return await Cultivo.find(query).sort({fecha: -1});

    } catch (error) {
        console.log('error cultivosGet', error);
        throw new Error(error);
    }

};

/**
 * servicio registra cultivo
 * @param {*} params 
 * @returns 
 */
const cultivoPost = async(params) => {

    const data = { 
        usuario: params.cultivo.usuario.id,
        semilla: params.cultivo.semilla,
        fecha: params.cultivo.fecha,
        activo: params.cultivo.activo,
        estado: params.cultivo.estado
    };

    try {
        
        const cultivo = new Cultivo( data );
        return await cultivo.save();

    } catch (error) {
        console.log('error cultivoPost', error);
        throw new Error(error);
    }

};

/**
 * servicio borra logicamente cultivo
 * @param {*} params 
 * @returns 
 */
const cultivoDelete = async(params) => {
    
    const data = {
        estado: false
    };
    
    const query = {
        _id: params.cultivo.id,
    };

    try {
        
        return await Cultivo.findByIdAndUpdate(query, data, {new: true});
        
    } catch (error) {
        console.log('error cultivoDelete', error);
        throw new Error(error);
    }
};

/**
 * servicio actualiza cultivo
 * @param {*} params 
 * @returns 
 */
const cultivoUpdate = async(params) => {

    const query = {
        _id: params.cultivo.id,
    };

    let data = {};

    if(params.cultivo.semilla){
        data['semilla'] = params.cultivo.semilla;
    };
    if(params.cultivo.fecha){
        data['fecha'] = params.cultivo.fecha;
    };
    if(params.cultivo.activo != null){
        data['activo'] = params.cultivo.activo;
    };
    if(params.cultivo.estado != null){
        data['estado'] = params.cultivo.estado;
    };

    try {
        
        return await Cultivo.findByIdAndUpdate(query, data, {new: true});
        
    } catch (error) {
        console.log('error cultivoUpdate', error);
        throw new Error(error);
    }
};

module.exports = {
    cultivosGet,
    cultivoPost,
    cultivoDelete,
    cultivoUpdate
}