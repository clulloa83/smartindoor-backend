
const Programa = require('../models/mongo/programa');

const programasGet = async(params) => {

    let query = { estado: true, dispositivo: params.programa.dispositivo.id };

    try {

        return await Programa.find(query);

    } catch (error) {
        console.log('error programasGet', error);
        throw new Error(error);
    }

};

const programaPost = async(params) => {

    const data = { 
        dispositivo: params.programa.dispositivo.id,
        accion: params.programa.accion,
        hora: params.programa.hora,
        dias: params.programa.dias,
        activo: params.programa.activo,
        estado: params.programa.estado
    };

    try {
        
        const programa = new Programa( data );
        return await programa.save();

    } catch (error) {
        console.log('error programaPost', error);
        throw new Error(error);
    }

};

const programaDelete = async(params) => {
    
    const data = {
        estado: false
    };

    const query = {
        _id: params.programa.id,
    };

    try {
    
        return await Programa.findByIdAndUpdate(query, data, {new: true});
        
    } catch (error) {
        console.log('error programaDelete', error);
        throw new Error(error);
    }
};

const programaUpdate = async(params) => {

    const query = {
        _id: params.programa.id,
    };

    let data = {};

    if(params.programa.accion){
        data['accion'] = params.programa.accion;
    };
    if(params.programa.hora){
        data['hora'] = params.programa.hora;
    };
    if(params.programa.dias){
        data['dias'] = params.programa.dias;
    };
    if(params.programa.activo != null){
        data['activo'] = params.programa.activo;
    };
    if(params.programa.estado != null){
        data['estado'] = params.programa.estado;
    };

    try {
        
        return await Programa.findByIdAndUpdate(query, data, {new: true});
        
    } catch (error) {
        console.log('error programaUpdate', error);
        throw new Error(error);
    }
};

module.exports = {
    programasGet,
    programaPost,
    programaDelete,
    programaUpdate
}