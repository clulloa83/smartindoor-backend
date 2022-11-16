const { response, request } = require('express');
const { StatusCode } = require('status-code-enum');
const servicioLogin = require('../services/servicio-login');
const ParamsUsuario = require('../models/params/usuario-params');

const login = async(req = request, res = response) => {

    const { correo, contraseña } = req.body;
    
    const params = new ParamsUsuario();
    params.usuario.correo = correo;
    params.usuario.contraseña = contraseña;

    try {
        
        const result = await servicioLogin.login(params);

        // throw new Error('fallo backend!'); 

        if(result.valido){
            const usuario = result.usuario;
            res.status(StatusCode.SuccessOK).json(usuario);
        }
        else{
            const errors = [];
            errors.push(result.mensaje);
            res.status(StatusCode.ClientErrorBadRequest ).json({errors});
        }

    } catch (error) {
        const errors = [];
        errors.push(error.message);
        res.status(StatusCode.ServerErrorInternal).json({errors});
    }

};

module.exports = {
    login
}