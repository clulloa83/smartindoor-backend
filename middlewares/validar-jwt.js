const { request } = require('express');
const { StatusCode } = require('status-code-enum')
const jwt = require('jsonwebtoken');

/**
 * SP valida en bd sql el token de usuario
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 * @returns 
 */
const validarJWT = async(req = request, res = response, next) => {

    const token = req.headers.authorization;

    if( !token ){
        return res.status(StatusCode.ClientErrorForbidden).send( { mensaje: 'se requiere token en solicitud de petición' } );
    }
    else{

        try {
            jwt.verify(token, process.env.TOKEN_SECRET, function(err, decoded) {
                if (err){
                    return res.status(StatusCode.ClientErrorForbidden).send( { mensaje: 'token no válido en solicitud de petición' } );
                }
                req.user = decoded;
                next();
            });
        } catch (error) {
            return res.status(StatusCode.ServerErrorInternal).send( { mensaje: `error al validar JWT. error: ${ error }` });
        }

    }
};

module.exports = {
    validarJWT
}