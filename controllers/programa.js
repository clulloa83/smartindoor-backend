const { response, request } = require('express');
const { StatusCode } = require('status-code-enum');
const servicioProgramas = require('../services/servicio-programa');
const ParamsProgramas = require('../models/params/programa-params');

/**
 * obtiene los programas en estado="true" registados en bd
 * @param {*} req 
 * @param {*} res 
 */
const programasGet = async(req = request, res = response) => {

    const { dispositivo } = req.query;

    const params = new ParamsProgramas();
    params.programa.dispositivo.id = dispositivo;    

    try {

        const result = await servicioProgramas.programasGet(params);
        res.status(StatusCode.SuccessOK).json(result);
        
    } catch (error) {
        console.log('error programasGet', error);
        res.status(StatusCode.ServerErrorInternal).json(error);
    };
}

/**
 * registra programa en bd
 * @param {*} req 
 * @param {*} res 
 */
const programaPost = async(req = request, res = response) => {
    
    const { dispositivo, accion, hora, dias } = req.body;

    const params = new ParamsProgramas();
    params.programa.dispositivo.id = dispositivo;
    params.programa.accion = accion;
    params.programa.hora = hora;
    params.programa.dias = dias;

    try {
        
        const result = await servicioProgramas.programaPost(params);
        res.status(StatusCode.SuccessCreated).json(result);

    } catch (error) {
        console.log('error programaPost', error);
        res.status(StatusCode.ServerErrorInternal).json(error);
    }
}

/**
 * eliminación logica de programa estado="false"
 * @param {*} req 
 * @param {*} res 
 */
const programaDelete = async(req = request, res = response) => {
    
    const { programa } = req.query;

    const params = new ParamsProgramas();
    params.programa.id = programa;

    try {
        
        const result = await servicioProgramas.programaDelete(params);
        res.status(StatusCode.SuccessOK).json(result);

    } catch (error) {
        console.log('error programaDelete', error);
        res.status(StatusCode.ServerErrorInternal).json(error);
    }
}

/**
 * actualización parametrizable de programa
 * @param {*} req 
 * @param {*} res 
 */
const programaUpdate = async(req = request, res = response) => {
    
    const { programa, accion, hora, dias, activo = null, estado = null } = req.body;

    const params = new ParamsProgramas();
    params.programa.id = programa;
    params.programa.accion = accion;
    params.programa.hora = hora;
    params.programa.dias = dias;
    params.programa.activo = activo;
    params.programa.estado = estado;

    try {
        
        const result = await servicioProgramas.programaUpdate(params);
        res.status(StatusCode.SuccessOK).json(result);

    } catch (error) {
        console.log('error programaUpdate', error);
        res.status(StatusCode.ServerErrorInternal).json(error);
    }
}

module.exports = {
    programasGet,
    programaPost,
    programaDelete,
    programaUpdate
}