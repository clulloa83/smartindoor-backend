
const Dispositivo = require('../models/mongo/dispositivo');

const dispositivosGet = async(params) => {

    let query = { estado: true, usuario: params.usuario.id };

    try {

        return await Dispositivo.find(query);

    } catch (error) {
        console.log('error dispositivosGet', error);
        throw new Error(error);
    }

};

const dispositivosPost = async(params) => {
    
    const data = { 
        sistema: params.dispositivo.sistema.id,
        usuario: params.dispositivo.usuario.id,
        nombre: params.dispositivo.nombre,
        ubicacion: params.dispositivo.ubicacion,
        icon: params.dispositivo.icon,
        categoria: params.dispositivo.categoria,
        tipos: params.dispositivo.tipos,
        estado: params.dispositivo.estado,
        activo: params.dispositivo.activo
    };

    try {
        
        const dispositivo = new Dispositivo( data );
        return await dispositivo.save();

    } catch (error) {
        console.log('error dispositivosPost', error);
        throw new Error(error);
    }

};

const dispositivosDelete = async(params) => {
    
    const data = {
        estado: false
    };
    
    const query = {
        _id: params.dispositivo.id
    };

    try {
        
        return await Dispositivo.findByIdAndUpdate(query, data, {new: true});
        
    } catch (error) {
        console.log('error dispositivosDelete', error);
        throw new Error(error);
    }
};

const dispositivosUpdate = async(params) => {

    const query = {
        _id: params.dispositivo.id
    };

    let data = {};
    
    if(params.dispositivo.nombre){
        data['nombre'] = params.dispositivo.nombre;
    };
    if(params.dispositivo.ubicacion){
        data['ubicacion'] = params.dispositivo.ubicacion;
    };
    if(params.dispositivo.icon){
        data['icon'] = params.dispositivo.icon;
    };
    if(params.dispositivo.categoria){
        data['categoria'] = params.dispositivo.categoria;
    };
    if(params.dispositivo.tipos){
        data['tipos'] = params.dispositivo.tipos;
    };
    if(params.dispositivo.estado != null){
        data['estado'] = params.dispositivo.estado;
    };

    try {
        
        return await Dispositivo.findByIdAndUpdate(query, data, {new: true});
        
    } catch (error) {
        console.log('error dispositivosUpdate', error);
        throw new Error(error);
    }
};

module.exports = {
    dispositivosGet,
    dispositivosPost,
    dispositivosDelete,
    dispositivosUpdate
}