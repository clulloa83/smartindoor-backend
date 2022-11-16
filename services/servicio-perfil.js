const Perfil = require('../models/mongo/perfil');

const perfilGet = async(params) => {

    let query = { estado: true };

    try {

        return await Perfil.find(query)

    } catch (error) {
        console.log('error perfilGet', error);
        throw new Error(error);
    }

};

const perfilPost = async(params) => {
    
    const data = { 
        nombre: params.perfil.nombre,
    };

    const perfil = new Perfil( data );
    
    try {
        
        return await perfil.save();
        
    } catch (error) {
        console.log('error perfilPost', error);
        throw new Error(error); 
    }

};

const perfilDelete = async(params) => {
    
    const data = {
        id: params.perfil.id,
        estado: false
    };
    
    try {
        
        return await Perfil.findByIdAndUpdate(data);
        
    } catch (error) {
        console.log('error perfilDelete', error);
        throw new Error(error);
    }
};


module.exports = {
    perfilGet,
    perfilPost,
    perfilDelete,
}