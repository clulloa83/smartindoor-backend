const { request, response } = require('express');
const { StatusCode } = require('status-code-enum');
const servicioPush = require('../services/servicio-push-notification');
const ParamsSuscripcion = require('../models/params/suscripcion-params');

/**
 * envia la llave publica
 */
const obtenerKey = async(req = request, res) => {

    try {

        const key = await servicioPush.getKey();
        res.status(StatusCode.SuccessOK).json(key);

    } catch (error) {
        console.log('obtenerKey error', error);
        res.status(StatusCode.ServerErrorInternal).json({ error });
    }

};

/**
 * almacena la subscripcion o endpoint en mongo db
 * @param {*} req 
 * @param {*} res 
 */
const suscripcionAgregar = async(req, res) => {

    const { sistema, usuario, suscripcion } = req.body;

    const params = new ParamsSuscripcion();
    params.sistema.id = sistema;
    params.usuario.id = usuario;
    params.suscripcion = suscripcion;

    try {
        
        res.status(StatusCode.SuccessOK).json(servicioPush.suscripcionAgregar(params));

    } catch (error) {
        console.log('suscripcionAgregar error', error);
        res.status(StatusCode.ServerErrorInternal).json({ error });
    }

};

/**
 * envia la notificacion PUSH a las subscripiones registradas en mongo db
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
const notificacionTodasSuscripciones = async(req, res) => {

    const { title, body, icon, url } = req.body;
    const payLoad = JSON.stringify({
        notification: {
            title: title,
            body: body,
            icon: icon,
            vibrate: [100, 50, 100],
            data: {
                url: url
            }
        }
    });
    // const payLoad = { 
    //     notification: {
    //         title: title,
    //         body: body,
    //         icon: icon,
    //         vibrate: [100, 50, 100],
    //         data: {
    //             url: url
    //         }
    //     }
    // };

    // const payLoad = {
    //     notification: {
    //       data: { url: 'http://www.youtube.com/funofheuristic' },
    //       title: 'Fun Of Heuristic',
    //       vibrate: [100, 50, 100],
    //     },
    //   };


    try {

        await servicioPush.notificacionATodasSuscripciones(payLoad);
        res.status(StatusCode.SuccessOK).json({});
        // res.status(StatusCode.SuccessOK).json(servicioPush.notificacionATodasSuscripciones(payload));
        
    } catch (error) {
        console.log('notificacionTodasSuscripciones error', error);
        res.status(StatusCode.ServerErrorInternal).json({ error });
    }

};

const enviar2 = async(req, res) => {
    await servicioPush.enviar2();
    res.status(StatusCode.SuccessOK).json({});
}

const enviar = async(req, res) => {

    const { title, body, icon, url, sub } = req.body;
    const payload = JSON.stringify({
        notification: {
            title: title,
            body: body,
            icon: icon,
            vibrate: [100, 50, 100],
            data: {
                url: url
            }
        }
    });

    try {
        
        await servicioPush.enviar(sub, payload);
        res.status(StatusCode.SuccessOK).json({});

    } catch (error) {
        console.log('enviar error', error);
        res.status(StatusCode.ServerErrorInternal).json({ error });
    }

}

const validaSuscripcion = async(req, res) => {
    const { sistemaId, usuarioId, suscripcion } = req.body;
    const params = new ParamsSuscripcion();
    params.sistema.id = sistemaId;
    params.usuario.id = usuarioId;
    params.suscripcion = suscripcion;    

    try {
        let valido = await servicioPush.validaSuscripcion(params);
        res.status(StatusCode.SuccessOK).json(valido);
    } catch (error) {
        console.log('validaSuscripcion error', error);
        res.status(StatusCode.ServerErrorInternal).json({ error });
    }

};

module.exports = {
    obtenerKey,
    suscripcionAgregar,
    notificacionTodasSuscripciones,
    enviar,
    validaSuscripcion,
    enviar2
}