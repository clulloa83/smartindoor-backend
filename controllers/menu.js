const { response, request } = require('express');
const { StatusCode } = require('status-code-enum');
const servicioMenu = require('../services/servicio-menu');
const ParamsMenu = require('../models/params/menu-params');

/**
 * obtiene los sistemas registados en bd
 * @param {*} req 
 * @param {*} res 
 */
const menuGet = async(req = request, res = response) => {

    const { perfil } = req.query;

    const params = new ParamsMenu();
    params.perfil.id = perfil;

    try {

        const result = await servicioMenu.menuGet(params);
        res.status(StatusCode.SuccessOK).json(result);
        
    } catch (error) {
        console.log('error menuGet', error);
        res.status(StatusCode.ServerErrorInternal).json({ error })
    };
}

/**
 * registra sistema en bd
 * @param {*} req 
 * @param {*} res 
 */
const menuPost = async(req = request, res = response) => {
    
    const { title, url, icon, perfil } = req.body;

    const params = new ParamsMenu();
    params.menu.title = title;
    params.menu.url = url;
    params.menu.icon = icon;
    params.perfil.id = perfil;

    try {
        
        const result = await servicioMenu.menuPost(params);
        res.status(StatusCode.SuccessCreated).json(result);

    } catch (error) {
        console.log('error menuPost', error);
        res.status(StatusCode.ServerErrorInternal).json({ error })
    }
}

/**
 * eliminación logica de sistema
 * @param {*} req 
 * @param {*} res 
 */
const menuDelete = async(req = request, res = response) => {
    const { menu } = req.params;

    const params = new ParamsMenu();
    params.menu.id = menu;

    try {
        
        const result = await servicioMenu.menuDelete(params);
        res.status(StatusCode.SuccessOK).json(result);

    } catch (error) {
        console.log('error menuDelete', error);
        res.status(StatusCode.ServerErrorInternal).json({ error })
    }
}

module.exports = {
    menuGet,
    menuPost,
    menuDelete
}