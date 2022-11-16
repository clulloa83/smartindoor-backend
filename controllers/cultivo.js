const { response, request } = require('express');
const { StatusCode } = require('status-code-enum');
const servicioCultivo = require('../services/servicio-cultivo');
const ParamsCultivos = require('../models/params/cultivo-params');

/**
 * obtiene los dispositivos registados en bd
 * @param {*} req 
 * @param {*} res 
 */
const cultivosGet = async(req = request, res = response) => {

    const { usuario } = req.query;

    const params = new ParamsCultivos();
    params.cultivo.usuario.id = usuario;

    try {

        const result = await servicioCultivo.cultivosGet(params);
        res.status(StatusCode.SuccessOK).json(result);
        
    } catch (error) {
        console.log('error cultivosGet', error);
        res.status(StatusCode.ServerErrorInternal).json(error);
    };
}

/**
 * registra sistema en bd
 * @param {*} req 
 * @param {*} res 
 */
const cultivoPost = async(req = request, res = response) => {
    
    const { usuario, semilla, fecha } = req.body;

    const params = new ParamsCultivos();
    params.cultivo.usuario.id = usuario;
    params.cultivo.semilla = semilla;
    params.cultivo.fecha = fecha;

    try {
        
        const result = await servicioCultivo.cultivoPost(params);
        res.status(StatusCode.SuccessCreated).json(result);

    } catch (error) {
        console.log('error cultivoPost', error);
        res.status(StatusCode.ServerErrorInternal).json(error);
    }
}

/**
 * eliminación logica de sistema
 * @param {*} req 
 * @param {*} res 
 */
const cultivoDelete = async(req = request, res = response) => {
    
    const { cultivo } = req.query;

    const params = new ParamsCultivos();
    params.cultivo.id = cultivo;

    try {
        
        const result = await servicioCultivo.cultivoDelete(params);
        res.status(StatusCode.SuccessOK).json(result);

    } catch (error) {
        console.log('error cultivoDelete', error);
        res.status(StatusCode.ServerErrorInternal).json(error);
    }
}

const cultivoUpdate = async(req = request, res = response) => {
    
    const { cultivo, semilla, fecha, activo = null, estado = null } = req.body;

    const params = new ParamsCultivos();
    params.cultivo.id = cultivo;
    params.cultivo.semilla = semilla;
    params.cultivo.fecha = fecha;
    params.cultivo.activo = activo;
    params.cultivo.estado = estado;

    try {
        
        const result = await servicioCultivo.cultivoUpdate(params);
        res.status(StatusCode.SuccessOK).json(result);

    } catch (error) {
        console.log('error cultivoUpdate', error);
        res.status(StatusCode.ServerErrorInternal).json(error);
    }
}

module.exports = {
    cultivosGet,
    cultivoPost,
    cultivoDelete,
    cultivoUpdate
}