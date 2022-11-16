const { response, request } = require('express');
const { StatusCode } = require('status-code-enum');
const servicioUsuario = require('../services/servicio-usuario');
const ParamsUsuario = require('../models/params/usuario-params');

/**
 * obtiene los sistemas registados en bd
 * @param {*} req 
 * @param {*} res 
 */
const usuariosGet = async(req = request, res = response) => {

    // const { perfil } = req.query;

    let params = new ParamsUsuario();
    // params.perfil.id = perfil;

    try {

        let result = await servicioUsuario.usuariosGet(params);
        res.status(StatusCode.SuccessOK).json({ result })
        
    } catch (error) {
        console.log('error usuariosGet', error);
        res.status(StatusCode.ServerErrorInternal).json({ error })
    };
}

/**
 * registra sistema en bd
 * @param {*} req 
 * @param {*} res 
 */
const usuarioPost = async(req = request, res = response) => {
    
    const { contraseña, correo, nombres, apellidos, perfil } = req.body;

    let params = new ParamsUsuario();
    // params.usuario.cuenta = cuenta;
    params.usuario.contraseña = contraseña;
    params.usuario.correo = correo;
    params.usuario.nombres = nombres;
    params.usuario.apellidos = apellidos;
    params.usuario.perfil.id = perfil;

    try {
        
        let result = await servicioUsuario.usuarioPost(params);
        res.status(StatusCode.SuccessCreated).json({ result })

    } catch (error) {
        console.log('error usuarioPost', error);
        res.status(StatusCode.ServerErrorInternal).json({ error })
    }
}

/**
 * eliminación logica de sistema
 * @param {*} req 
 * @param {*} res 
 */
const usuarioDelete = async(req = request, res = response) => {
    const { usuario } = req.params;

    let params = new ParamsUsuario();
    params.usuario.id = usuario;

    try {
        
        let result = await servicioUsuario.usuarioDelete(params);
        res.status(StatusCode.SuccessOK).json({ result })

    } catch (error) {
        console.log('error usuarioDelete', error);
        res.status(StatusCode.ServerErrorInternal).json({ error })
    }
}

module.exports = {
    usuariosGet,
    usuarioPost,
    usuarioDelete
}