const Seguimiento = require('../models/mongo/seguimiento');
const cloudinary = require('cloudinary').v2
cloudinary.config( process.env.CLOUDINARY_URL );

/**
 * servicio obtiene seguimientos estado: true
 * @param {*} params 
 * @returns 
 */
const seguimientosGet = async(params) => {

    let query = { estado: true, cultivo: params.seguimiento.cultivo.id };

    try {

        return await Seguimiento.find(query).sort({fecha: -1});

    } catch (error) {
        console.log('error seguimientosGet', error);
        throw new Error(error);
    }

};

/**
 * servicio registra seguimiento
 * @param {*} params 
 * @returns 
 */
const seguimientoPost = async(params) => {

    try {

        let arrayCaptures = [];
        const promesas = [];
        
        if(params.seguimiento.capturas != null){

            if(params.seguimiento.capturas.capture0){
                const { tempFilePath } = params.seguimiento.capturas.capture0;
                promesas.push(cloudinary.uploader.upload( tempFilePath ));
            };
            if(params.seguimiento.capturas.capture1){
                const { tempFilePath } = params.seguimiento.capturas.capture1;
                promesas.push(cloudinary.uploader.upload( tempFilePath ));
            };
            if(params.seguimiento.capturas.capture2){
                const { tempFilePath } = params.seguimiento.capturas.capture2;
                promesas.push(cloudinary.uploader.upload( tempFilePath ));
            };

            arrayCaptures = await Promise.all(promesas);
            // .then(result => {
            //     console.log('result', result);
            //     console.log('result.secure_url', result.secure_url);
            //     return result.secure_url;
            // });
            arrayCaptures = arrayCaptures.map(c => c.secure_url);
            // console.log('arrayCaptures', arrayCaptures);

            // if(params.seguimiento.capturas.capture0){
            //     const { tempFilePath } = params.seguimiento.capturas.capture0;
            //     const { secure_url } = await cloudinary.uploader.upload( tempFilePath );
            //     arrayCaptures.push(secure_url);
            // };
            // if(params.seguimiento.capturas.capture1){
            //     const { tempFilePath } = params.seguimiento.capturas.capture1;
            //     const { secure_url } = await cloudinary.uploader.upload( tempFilePath );
            //     arrayCaptures.push(secure_url);
            // };
            // if(params.seguimiento.capturas.capture2){
            //     const { tempFilePath } = params.seguimiento.capturas.capture2;
            //     const { secure_url } = await cloudinary.uploader.upload( tempFilePath );
            //     arrayCaptures.push(secure_url);
            // };

        };
        const data = { 
            cultivo: params.seguimiento.cultivo.id,
            observacion: params.seguimiento.observacion,
            fecha: params.seguimiento.fecha,
            capturas: arrayCaptures,
            estado: params.seguimiento.estado
        };

        const seguimiento = new Seguimiento( data );
        return await seguimiento.save();

    } catch (error) {
        console.log('error seguimientoPost', error);
        throw new Error(error);
    }

};

/**
 * servicio borra logicamente seguimiento
 * @param {*} params 
 * @returns 
 */
const seguimientoDelete = async(params) => {
    
    const data = {
        estado: false
    };
    
    const query = {
        _id: params.seguimiento.id,
    };

    try {
        
        return await Seguimiento.findByIdAndUpdate(query, data, {new: true});
        
    } catch (error) {
        console.log('error seguimientoDelete', error);
        throw new Error(error);
    }
};

/**
 * servicio actualiza seguimiento
 * @param {*} params 
 * @returns 
 */
const seguimientoUpdate = async(params) => {

    const query = {
        _id: params.seguimiento.id,
    };

    let data = {};

    if(params.seguimiento.observacion){
        data['observacion'] = params.seguimiento.observacion;
    };
    if(params.seguimiento.fecha){
        data['fecha'] = params.seguimiento.fecha;
    };
    // if(params.seguimiento.capturas){
    //     data['capturas'] = params.seguimiento.capturas;
    // };
    if(params.seguimiento.estado != null){
        data['estado'] = params.seguimiento.estado;
    };

    try {
        
        return await Seguimiento.findByIdAndUpdate(query, data, {new: true});
        
    } catch (error) {
        console.log('error seguimientoUpdate', error);
        throw new Error(error);
    }
};

module.exports = {
    seguimientosGet,
    seguimientoPost,
    seguimientoDelete,
    seguimientoUpdate
}