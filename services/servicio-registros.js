const Registro = require('../models/mongo/registro');

const registrosGet = async(params) => {

    let query = { estado: true, dispositivo: params.dispositivo.id };
    
    try {

        return await Registro.find(query).sort({fechaRegistro: -1});
        
    } catch (error) {
        console.log('error registrosGet', error);
        throw new Error(error);
    }
    
};

const registrosPost = async(params) => {

    const data = { 
        dispositivo: params.registro.dispositivo.id,
        etiqueta: params.registro.etiqueta,
        unidad: params.registro.unidad,
        tipo: params.registro.tipo,
        valor: params.registro.valor,
        minimo: params.registro.minimo,
        maximo: params.registro.maximo,
        fechaRegistro: params.registro.fechaRegistro
    };

    try {
        
        const registro = new Registro( data );
        return await registro.save();

    } catch (error) {
        console.log('error registrosPost', error);
        throw new Error(error);
    }

};

const registrosDelete = async(params) => {
    
    const data = {
        id: params.registro.id,
        estado: false
    };

    try {
        
        return await Registro.findByIdAndUpdate(data);

    } catch (error) {
        console.log('error registrosDelete', error);
        throw new Error(error);
    }
};

module.exports = {
    registrosGet,
    registrosPost,
    registrosDelete
}