const Sistema = require('../models/mongo/sistema');

const sistemasGet = async(params) => {

    let query;
    // const nombre = params?.nombre;
    // nombre ?
    //     query = { estado: true, nombre: nombre }
        // : query = { estado: true }
    query = { estado: true };

    try {
        
        const [total, sistemas] = await Promise.all([
            Sistema.countDocuments(query),
            Sistema.find(query)
                .skip(Number(params.desde))
                .limit(Number(params.limite))
        ]);
    
        return { total, sistemas};

    } catch (error) {
        console.log('error sistemasGet', error);
        throw new Error(error);
    }

};

const sistemasPost = async(params) => {
    
    const data = { 
        nombre: params.nombre,
        // parrafo: params.sistema.parrafo
    };

    const sistema = new Sistema( data );
    
    try {
        
        return await sistema.save();
        
    } catch (error) {
        console.log('error sistemasPost', error);
        throw new Error(error); 
    }

};

const sistemasDelete = async(params) => {
    
    const data = {
        id: params.sistema.id,
        estado: false
    };
    
    try {
        
        return await Sistema.findByIdAndUpdate(data);
        
    } catch (error) {
        console.log('error sistemasDelete', error);
        throw new Error(error);
    }
};

const sistemasGetById = async(params) => {

    let query = { _id: params.sistema.id,  estado: true };

    try {

        return await Sistema.findById(query);

    } catch (error) {
        console.log('error sistemasGetById', error);
        throw new Error(error);        
    }

};

module.exports = {
    sistemasGet,
    sistemasPost,
    sistemasDelete,
    sistemasGetById
}