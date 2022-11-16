const { response, request } = require('express');
const { StatusCode } = require('status-code-enum');
const servicioDispositivos = require('../services/servicio-dispositivos');
const ParamsDispositivos = require('../models/params/dispositivos-params');

/**
 * obtiene los dispositivos registados en bd
 * @param {*} req 
 * @param {*} res 
 */
const dispositivosGet = async(req = request, res = response) => {

    const { usuario } = req.query;

    const params = new ParamsDispositivos();
    params.usuario.id = usuario;

    try {

        const result = await servicioDispositivos.dispositivosGet(params);
        res.status(StatusCode.SuccessOK).json(result);
        
    } catch (error) {
        console.log('error dispositivosGet', error);
        res.status(StatusCode.ServerErrorInternal).json(error);
    };
}

/**
 * registra sistema en bd
 * @param {*} req 
 * @param {*} res 
 */
const dispositivosPost = async(req = request, res = response) => {
    
    const { sistema, usuario, nombre, icon, ubicacion, categoria, tipos } = req.body;

    const params = new ParamsDispositivos();
    params.dispositivo.sistema.id = sistema;
    params.dispositivo.usuario.id = usuario;
    params.dispositivo.nombre = nombre;
    params.dispositivo.icon = icon;
    params.dispositivo.ubicacion = ubicacion;
    params.dispositivo.categoria = categoria;
    params.dispositivo.tipos = tipos;

    try {
        
        const result = await servicioDispositivos.dispositivosPost(params);
        res.status(StatusCode.SuccessCreated).json(result);

    } catch (error) {
        console.log('error dispositivosPost', error);
        res.status(StatusCode.ServerErrorInternal).json(error);
    }
}

/**
 * eliminación logica de sistema
 * @param {*} req 
 * @param {*} res 
 */
const dispositivosDelete = async(req = request, res = response) => {
    
    const { dispositivo } = req.query;

    const params = new ParamsDispositivos();
    params.dispositivo.id = dispositivo;

    try {
        
        const result = await servicioDispositivos.dispositivosDelete(params);
        res.status(StatusCode.SuccessOK).json(result);

    } catch (error) {
        console.log('error dispositivosDelete', error);
        res.status(StatusCode.ServerErrorInternal).json(error);
    }
}

const dispositivosUpdate = async(req = request, res = response) => {
    
    const { dispositivo, nombre, icon, ubicacion, categoria, tipos, estado } = req.body;

    const params = new ParamsDispositivos();
    params.dispositivo.id = dispositivo;
    params.dispositivo.nombre = nombre;
    params.dispositivo.ubicacion = ubicacion;
    params.dispositivo.icon = icon;
    params.dispositivo.categoria = categoria;
    params.dispositivo.tipos = tipos;
    params.dispositivo.estado = estado;

    try {
        
        const result = await servicioDispositivos.dispositivosUpdate(params);
        res.status(StatusCode.SuccessOK).json(result);

    } catch (error) {
        console.log('error dispositivosUpdate', error);
        res.status(StatusCode.ServerErrorInternal).json(error);
    }
}

module.exports = {
    dispositivosGet,
    dispositivosPost,
    dispositivosDelete,
    dispositivosUpdate
}