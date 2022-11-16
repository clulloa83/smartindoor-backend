const { response, request } = require('express');
const { StatusCode } = require('status-code-enum');
const servicioSeguimiento = require('../services/servicio-seguimiento');
const ParamsSeguimientos = require('../models/params/seguimiento-params');
const { subirArchivo } = require('../helpers');


const cloudinary = require('cloudinary').v2
cloudinary.config( process.env.CLOUDINARY_URL );


/**
 * obtiene los seguimientos de cultivo registados en bd
 * @param {*} req 
 * @param {*} res 
 */
const seguimientosGet = async(req = request, res = response) => {

    const { cultivo } = req.query;

    const params = new ParamsSeguimientos();
    params.seguimiento.cultivo.id = cultivo;

    try {

        const result = await servicioSeguimiento.seguimientosGet(params);
        res.status(StatusCode.SuccessOK).json(result);
        
    } catch (error) {
        console.log('error seguimientosGet', error);
        res.status(StatusCode.ServerErrorInternal).json(error);
    };
}

/**
 * registra seguimiento de cultivo en bd
 * @param {*} req 
 * @param {*} res 
 */
const seguimientoPost = async(req = request, res = response) => {
    
    const { cultivo, observacion, fecha } = req.body;
    
    const params = new ParamsSeguimientos();
    params.seguimiento.cultivo.id = cultivo;
    params.seguimiento.observacion = observacion;
    params.seguimiento.fecha = fecha;
    params.seguimiento.capturas = req.files ? req.files : null;

    try {
        
        const result = await servicioSeguimiento.seguimientoPost(params);
        res.status(StatusCode.SuccessCreated).json(result);

    } catch (error) {
        console.log('error seguimientoPost', error);
        res.status(StatusCode.ServerErrorInternal).json(error);
    }
}

/**
 * eliminación logica de seguimiento
 * @param {*} req 
 * @param {*} res 
 */
const seguimientoDelete = async(req = request, res = response) => {
    
    const { seguimiento } = req.query;

    const params = new ParamsSeguimientos();
    params.seguimiento.id = seguimiento;

    try {
        
        const result = await servicioSeguimiento.seguimientoDelete(params);
        res.status(StatusCode.SuccessOK).json(result);

    } catch (error) {
        console.log('error seguimientoDelete', error);
        res.status(StatusCode.ServerErrorInternal).json(error);
    }
}

/**
 * actualización parametrizable de seguimiento 
 * @param {*} req 
 * @param {*} res 
 */
const seguimientoUpdate = async(req = request, res = response) => {
    
    const { seguimiento, observacion, fecha, capturas, estado = null } = req.body;

    const params = new ParamsSeguimientos();
    params.seguimiento.id = seguimiento;
    params.seguimiento.observacion = observacion;
    params.seguimiento.fecha = fecha;
    params.seguimiento.capturas = capturas;
    params.seguimiento.estado = estado;

    try {
        
        const result = await servicioSeguimiento.seguimientoUpdate(params);
        res.status(StatusCode.SuccessOK).json(result);

    } catch (error) {
        console.log('error seguimientoUpdate', error);
        res.status(StatusCode.ServerErrorInternal).json(error);
    }
}


const cargarArchivo = async(req, res = response) => {

    const { cultivo, observacion, fecha } = req.body;
    
    const params = new ParamsSeguimientos();
    params.seguimiento.cultivo.id = cultivo;
    params.seguimiento.observacion = observacion;
    params.seguimiento.fecha = fecha;
    
    // console.log('req.files', req.files);
    if(req.files){
        // console.log('req.files.capture0', req.files.capture0);
        params.seguimiento.capturas = req.files;
    }

    res.json({
        params
    });

    // try {
        
    //     // txt, md
    //     // const nombre = await subirArchivo( req.files, ['txt','md'], 'textos' );
        
    //     // const nombre = await subirArchivo( req.files, undefined, 'imgs' );
    //     // res.json({ nombre });

    //     const { tempFilePath } = req.files.archivo
    //     const { secure_url } = await cloudinary.uploader.upload( tempFilePath );
    //     res.json({ secure_url });


    // } catch (msg) {
    //     res.status(400).json({ msg });
    // }

}

module.exports = {
    seguimientosGet,
    seguimientoPost,
    seguimientoDelete,
    seguimientoUpdate,
    cargarArchivo
}