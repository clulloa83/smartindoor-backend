const { response, request } = require('express');
const { StatusCode } = require('status-code-enum');
const servicioPerfil = require('../services/servicio-perfil');
const ParamsPerfil = require('../models/params/perfil-params');

/**
 * obtiene los sistemas registados en bd
 * @param {*} req 
 * @param {*} res 
 */
const perfilGet = async(req = request, res = response) => {

    // const { perfil } = req.query;

    let params = new ParamsPerfil();
    // params.perfil.id = perfil;

    try {

        let result = await servicioPerfil.perfilGet(params);
        res.status(StatusCode.SuccessOK).json({ result })
        
    } catch (error) {
        console.log('error perfilGet', error);
        res.status(StatusCode.ServerErrorInternal).json({ error })
    };
}

/**
 * registra sistema en bd
 * @param {*} req 
 * @param {*} res 
 */
const perfilPost = async(req = request, res = response) => {
    
    const { nombre } = req.body;

    let params = new ParamsPerfil();
    params.perfil.nombre = nombre;

    try {
        
        let result = await servicioPerfil.perfilPost(params);
        res.status(StatusCode.SuccessCreated).json({ result })

    } catch (error) {
        console.log('error perfilPost', error);
        res.status(StatusCode.ServerErrorInternal).json({ error })
    }
}

/**
 * eliminación logica de sistema
 * @param {*} req 
 * @param {*} res 
 */
const perfilDelete = async(req = request, res = response) => {
    const { perfil } = req.params;

    let params = new ParamsPerfil();
    params.perfil.id = perfil;

    try {
        
        let result = await servicioPerfil.perfilDelete(params);
        res.status(StatusCode.SuccessOK).json({ result })

    } catch (error) {
        console.log('error perfilDelete', error);
        res.status(StatusCode.ServerErrorInternal).json({ error })
    }
}

module.exports = {
    perfilGet,
    perfilPost,
    perfilDelete
}